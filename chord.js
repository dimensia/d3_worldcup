
//
// Util
//

window.flickerfree =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function( cb ) { return cb(); };


//
// Data Model
//

var teamsById = {};

(function() {
  var tlen = teams.length,
      rot = 85.5,
      rotDec = 360 / tlen;

  for ( var ti=0; ti<tlen; ti++ ) {
    var team = teams[ ti ];
    team.rotate = rot;
    rot -= rotDec;
    teamsById[ team.id ] = team;
  }
})();

function findGame( team1, team2 ) {

  for ( var gi=0, glen = games.length; gi<glen; gi++ ) {
    var game = games[ gi ];

    if (   ( game.who[ 0 ] === team1.id && game.who[ 1 ] === team2.id )
        || ( game.who[ 1 ] === team1.id && game.who[ 0 ] === team2.id ) )
      return game;
  }

  return null;
}

function formatTime( date ) {
  return moment( date ).format( 'dddd, MMMM Do YYYY, h:mm a' );
}

var groupColors = {
  A: '034099',
  B: '1C7319',
  C: '2EA629',
  D: 'F2C029',
  E: 'e69373',
  F: 'F23E16',
  G: '344100',
  H: '11ccdd'
};

for ( var gi=0, glen=games.length; gi<glen; gi++ ) {
  var game = games[ gi ];
  teamsById[ game.who[ 0 ] ].group = game.group;
  teamsById[ game.who[ 1 ] ].group = game.group;
}

var chordMatrix = [];
for ( var ri=0, tlen = teams.length; ri<tlen; ri++ ) {
  var row = [];

  for ( var ci=0; ci<tlen; ci++ ) {
    row.push( findGame( teams[ ri ], teams[ ci ] ) ? 1 : 0 );
  }

  chordMatrix.push( row );
}


//
// Chord Chart
//

var outerWidth = 700,
    outerHeight = 700,

    selectedTeam = teams[ 0 ],

    margin = { top: 50, right: 50, bottom: 50, left: 50 },

    width = outerWidth - margin.left - margin.right,
    height = outerHeight - margin.top - margin.bottom,

    outerRadius = Math.min(width, height) / 2 - 10,
    innerRadius = outerRadius - 24;

 
var arc = d3.svg.arc()
  .innerRadius( innerRadius )
  .outerRadius( outerRadius );
 
var layout = d3.layout.chord()
  .padding( .04 )
  .sortSubgroups( d3.descending )
  .sortChords( d3.ascending );
 
var path = d3.svg.chord()
  .radius( innerRadius );
 
var wheelc = d3.select( '.wheel' )
  .attr( 'width', outerWidth + 10 )
  .attr( 'height', outerHeight );

wheelc.append( 'rect' )
  .attr( 'class', 'flagBox' )
  .attr( 'x', 620 )
  .attr( 'y', 328 )
  .attr( 'width', 100 )
  .attr( 'height', 50 );

var wheel = wheelc.append( 'g' )
  .attr( 'transform', 'translate(' + margin.left + ',' + margin.top + ')' )
  .append( 'g' )
    .attr( 'id', 'circle' )
    .attr( 'transform', 'translate(' + width / 2 + ',' + height / 2 + ') rotate(' + selectedTeam.rotate + ')' );
 
wheel.append( 'circle' )
  .attr( 'r', outerRadius + 1 )
  .attr( 'stroke', '#000' )
  .attr( 'stroke-width', '2' )
  .style( 'fill', '#eee' );
 
layout.matrix( chordMatrix );
 
var group = wheel.selectAll( '.group' )
  .data( layout.groups )
  .enter().append( 'g' )
    .attr( 'class', 'group' )
    .on( 'mouseover', mouseover );
 
var groupPath = group.append( 'path' )
  .attr( 'id', function(d, i) { return 'group' + i; } )
  .attr( 'd', arc)
  .style( 'fill', function(d, i) { return groupColors[ teams[i].group ]; } );
 
var groupLabel = group.append( 'image' )
  .attr( 'x', 6 )
  .attr( 'width', '50px' )
  .attr( 'height', '40px' )
  .attr( 'xlink:href', function( d, i ) { return teams[ i ].flag } )
  .attr( 'transform', function(d) {
    return 'rotate(' + ( ( d.startAngle + 0.02 ) * 180 / Math.PI - 90) + ') translate(' + ( outerRadius + 3 ) + ',0) rotate( 3 )';
  })
  .on( 'click', function( e ) {
    console.log( 'clicked flag',e );
    var team = teams[ e.index ],

        transform = 'translate(' + width / 2 + ',' + height / 2 + ') rotate(',

        from = transform + selectedTeam.rotate + ')',
        to   = transform + team.rotate + ')';

    selectedTeam = team;
    Details.update( selectedTeam );

    wheel
      //.attr( 'transform', 'translate(' + width / 2 + ',' + height / 2 + ') rotate(' + team.rotate + ')' );
      .transition()
      .duration(2000)
      .attrTween( 'transform', tween );

    function tween(d, i, a) {
      return d3.interpolateString( from, to );
    }
  });

  //.append('textPath')
  //.attr('xlink:href', function(d, i) { return '#group' + i; })
  //.text(function(d, i) { return teams[i].name.substring( 0, 8 ); });
 
var chord = wheel.selectAll( '.chord' )
  .data( layout.chords )
  .enter().append( 'path' )
    .attr( 'class', 'chord' )
    .style( 'fill', function(d) { return groupColors[ teams[ d.source.index ].group ]; } )
    .attr( 'd', path );
 
chord.append( 'title' ).text(function(d) {
  var sourceTeam = teams[ d.source.index ];
  var targetTeam = teams[ d.target.index ];
  var game = findGame( sourceTeam, targetTeam );

  return sourceTeam.name + ' vs. ' + targetTeam.name + '\n' + formatTime( game.when ) + '\nGroup ' + game.group + '\n' + game.where;
});

Details.update( selectedTeam );
 
function mouseover( d, i ) {
  var group = teams[ i ].group;
  chord.classed( 'hide', function( p ) {
    return teams[ p.source.index ].group != group && teams[ p.target.index ].group != group;
  });
}


