
var Details = ( function() {

  return {
    update: function( team ) {

      var html = '';

      for ( var gi=0, glen=games.length; gi<glen; gi++ ) {
        var game = games[ gi ];

        if ( game.who[ 0 ] === team.id || game.who[ 1 ] === team.id ) {
          var opponent = teamsById[ game.who[ game.who[ 0 ] === team.id ? 1 : 0 ] ];

          html +=
            '<div class="game">' +
             '<img src="' + opponent.flag + '">' +
             '<div>' +
              '<div class="name">' + opponent.name + '</div>' +
              '<div>' + formatTime( game.when ) + '</div>' +
              '<div>' + game.where + '</div>' +
             '</div>' +
            '</div>';
        }
      }

      flickerfree( function() {
        $( '.details' ).html(
          '<div class="title">' +
           '<img src="' + team.flag + '">' +
           '<span>' + team.name + '</span>' +
          '</div>' +
          html
        );
      });
    }
  }
} )();

