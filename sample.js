


var data = [
  { name: 'A', value: 20 },
  { name: 'B', value: 33 },
  { name: 'C', value: 31 },
  { name: 'D', value:  5 },
  { name: 'E', value: 12 },
  { name: 'F', value: 42 }
];


var outerWidth = 1200,
    outerHeight = 400,
    margin = { top: 20, right: 30, bottom: 30, left: 40 },
    width = outerWidth - margin.left - margin.right,
    height = outerHeight - margin.top - margin.bottom;

var x = d3.scale.ordinal()
  .domain(['A','B','C','D','E','F'])
  .rangeRoundBands([0, width], .1 );

var xAxis = d3.svg.axis()
    .scale(x)
    .orient( 'bottom' );

var y = d3.scale.linear()
  .domain([0, d3.max( data, function( d ) { return d.value; } ) ])
  .range([0, height]);

var yAxis = d3.svg.axis()
    .scale(y)
    .orient( 'left' )
    .ticks(10, "%");
    

var chart = d3.select('.chart')
  .attr( 'height', outerHeight )
  .attr( 'width', outerWidth )
  .append( 'g' )
    .attr( 'transform', 'translate(' + margin.left + ',' + margin.top + ')' );

var bar = chart.selectAll( 'g' )
  .data( data )
  .enter().append( 'g' )
    .attr( 'transform', function( d, i ) { return 'translate(' + x( d.name ) + ',0)'; } );

bar.append( 'rect' )
  .attr( 'y', function( d ) { return height - y( d.value ); } )
  .attr( 'height', function( d ) { return y( d.value ); } )
  .attr( 'width', x.rangeBand() );

bar.append( 'text' )
  .attr( 'x', x.rangeBand() / 2 + 4 )
  .attr( 'y', function( d ) { return height - y(d.value) + 4; } )
  .attr( 'dy', '0.75em' )
  .text( function( d ) { return d.value; } );

chart.append( 'g' )
    .attr( 'class', 'x axis' )
    .attr( 'transform', 'translate(0,' + height + ')' )
    .call( xAxis );

chart.append( 'g' )
    .attr( 'class', 'y axis' )
    .call( yAxis );

chart.append("g")
    .attr("class", "y axis")
    .call(yAxis);

chart.append("text")
    .attr( "transform", "rotate(-90)" )
    .attr( "y", 6 )
    .attr( "dy", ".71em" )
    .style( "text-anchor", "end" )
    .text( "Frequency" );

