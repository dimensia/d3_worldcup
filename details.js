
var Details = ( function() {

  $( '.details' ).on( 'click', '.game img', function( e ) {
    selectTeam( teamsById[ $(e.currentTarget).attr( 'team' ) ] );
  });

  var width = 480,
      height = 404;

  var projection = d3.geo.orthographic()
        .scale(200)
        .translate([ width / 2, height / 2 ])
        .clipAngle(90);

  var canvas = d3.select( '.map' )
        .attr( 'width', width )
        .attr( 'height', height );

  var c = canvas.node().getContext('2d');

  var path = d3.geo.path()
        .projection(projection)
        .context(c);

  var world = WorldData,
      globe = {type: 'Sphere'},
      land = topojson.feature(world, world.objects.land),
      countries = topojson.feature(world, world.objects.countries).features,
      borders = topojson.mesh(world, world.objects.countries, function(a, b) { return a !== b; }),
      n = countries.length;

  countries.filter(function(d) {
    for ( var ti=0, tlen=teams.length; ti<tlen; ti++ ) {
      var team = teams[ ti ];

      if ( team.topo === d.id ) {
        team.country = d;
        return;
      }
    }
  });

  function transition( team ) {
    var country = team.country;

    d3.transition()
      .duration(1250)
      .tween('rotate', function() {
        var p = d3.geo.centroid( country ),
            r = d3.interpolate( projection.rotate(), [-p[0], -p[1]] );
        return function(t) {
          projection.rotate(r(t));
          c.clearRect(0, 0, width, height);
          c.fillStyle = '#bbb', c.beginPath(), path(land), c.fill();
          c.fillStyle = '#f00', c.beginPath(), path(country), c.fill();
          c.strokeStyle = '#fff', c.lineWidth = .5, c.beginPath(), path(borders), c.stroke();
          c.strokeStyle = '#000', c.lineWidth = 2, c.beginPath(), path(globe), c.stroke();
        };
      })
      .transition();
  }

  return {
    update: function( team ) {

      var html = '',
          game;

      for ( var gi=0, glen=games.length; gi<glen; gi++ ) {
        game = games[ gi ];

        if ( game.who[ 0 ] === team.id || game.who[ 1 ] === team.id ) {
          var opponent = teamsById[ game.who[ game.who[ 0 ] === team.id ? 1 : 0 ] ];

          html +=
            '<div class="game">' +
             '<img src="' + opponent.flag + '" team="' + opponent.id + '">' +
             '<div>' +
              '<div class="name">' + opponent.name + '</div>' +
              '<div>' + formatTime( game.when ) + '</div>' +
              '<div>' + game.where + '</div>' +
             '</div>' +
            '</div>';
        }
      }

      batchdom( function() {
        $( '.details .title' ).html( '<img src="' + team.flag + '"><span>' + team.name + '</span>' );
        $( '.details .group' ).html( '<div class="group">Group ' + game.group + '</div>' );
        $( '.details .games' ).html( html );
      });

      transition( team );
    }
  }
} )();

