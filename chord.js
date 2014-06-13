
//
// Util
//

window.batchdom =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function( cb ) { return cb(); };


//
// Data Model
//

var teamsById = {},

    selectedTeam = teams[ 0 ];

(function() {
  var tlen = teams.length,
      rot = 85.4,
      rotDec = 360 / tlen;

  for ( var ti=0; ti<tlen; ti++ ) {
    var team = teams[ ti ];
    team.rotate = rot;
    rot -= rotDec;
    teamsById[ team.id ] = team;
  }

  for ( var gi=0, glen=games.length; gi<glen; gi++ ) {
    var game = games[ gi ];
    teamsById[ game.who[ 0 ] ].group = game.group;
    teamsById[ game.who[ 1 ] ].group = game.group;
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

var format = d3.time.format( '%A, %B %e %Y %I:%M %p' );

function formatTime( date ) {
  console.log( date );
  return format( date );
}

var groupColors = {
  A: '034099',
  B: '1C7319',
  C: '2EA629',
  D: 'F2C029',
  E: 'e69373',
  F: 'F23E16',
  G: 'FF7F00',
  H: '11ccdd'
};


//
// Chord Wheel
//

var wheel,
    wheelWidth,
    wheelHeight;

var chordMatrix = [];
for ( var ri=0, tlen = teams.length; ri<tlen; ri++ ) {
  var row = [];

  for ( var ci=0; ci<tlen; ci++ ) {
    row.push( findGame( teams[ ri ], teams[ ci ] ) ? 1 : 0 );
  }

  chordMatrix.push( row );
}

function selectTeam( team ) {

  var transform = 'translate(' + wheelWidth / 2 + ',' + wheelHeight / 2 + ') rotate(',

      from = transform + selectedTeam.rotate + ')',
      to   = transform + team.rotate + ')';

  selectedTeam = team;
  Details.update( selectedTeam );

  wheel
    .transition()
    .duration(2000)
    .attrTween( 'transform', function(d, i, a) {
      return d3.interpolateString( from, to );
    });
}

function draw() {

  function calcOuterWidth() {
    return Math.min( $(window).width() - 490 /* width of details */, 710 );
  }

  var ow = calcOuterWidth();
  d3.select( '.wheel' ).attr( 'width', ow ).attr( 'height', ow );

  var windowWidth = $(window).width(),

      outerWidth = calcOuterWidth(), // calc again, scrollbar might be there
      outerHeight = outerWidth,

      margin = { top: 70, right: 60, bottom: 70, left: 60 },

      width = outerWidth - margin.left - margin.right,
      height = outerHeight - margin.top - margin.bottom,

      outerRadius = Math.min(width, height) / 2 - 10,
      innerRadius = outerRadius - 24;

  wheelWidth = width;
  wheelHeight = height;

  // hack to account for the fact that flags don't get smaller as the circle gets smaller, which they probably should ...
  var flagBoxOffset = 26;
  if ( windowWidth < 1180 )
    flagBoxOffset -= ( 1180 - windowWidth ) / 30;
   
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
    .attr( 'width', outerWidth )
    .attr( 'height', outerHeight );

  wheelc.append( 'rect' )
    .attr( 'class', 'flagBox' )
    .attr( 'x', outerWidth - 80 )
    .attr( 'y', outerHeight / 2 - flagBoxOffset )
    .attr( 'width', 100 )
    .attr( 'height', 50 );

  wheel = wheelc.append( 'g' )
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
    .style( 'fill', function(d, i) { return '#' + groupColors[ teams[i].group ]; } );
   
  var groupLabel = group.append( 'image' )
    .attr( 'x', 6 )
    .attr( 'width', '50px' )
    .attr( 'height', '40px' )
    .attr( 'xlink:href', function( d, i ) { return teams[ i ].flag } )
    .attr( 'transform', function(d) {
      return 'rotate(' + ( ( d.startAngle + 0.005 ) * 180 / Math.PI - 90) + ') translate(' + ( outerRadius + 3 ) + ',0) rotate(4.2)';
    })
    .on( 'click', function( e ) {
      selectTeam( teams[ e.index ] );
    });

    //.append('textPath')
    //.attr('xlink:href', function(d, i) { return '#group' + i; })
    //.text(function(d, i) { return teams[i].name.substring( 0, 8 ); });

  var chord = wheel.selectAll( '.chord' )
    .data( layout.chords )
    .enter().append( 'path' )
      .attr( 'class', 'chord' )
      .style( 'fill', function(d) { return '#' + groupColors[ teams[ d.source.index ].group ]; } )
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
}

$(document).ready( function() {
  draw();
});

$(window).on( 'resize', function() {
  $('.wheel').empty();
  draw();
});


