// var keysPressed =

var chartProperties = {
  width: 800,
  height: 800
};

var data = [];

var chart = d3.select('body')
              .append('svg')
              .attr('height', 800)
              .attr('width', 800);


d3.select('body').on('keydown', function(d) {
  // bind data and append
  var character = String.fromCharCode(d3.event.keyCode);
  var exists = false;
  data.forEach(function(item) {
    if (item.letter === character) {
      item.r += 5;
      update(data);
      exists = true;
    }
  });

  if (!exists) {
    data.push({
      letter: character,
      r: 20,
      x: (d3.event.keyCode * 18) - 1000,
      y: (d3.event.keyCode * 18) - 1000
    });
    var circleData = chart.selectAll('circle').data(data).enter();
    circleData.append('circle')
      .attr('r', function(d) { return d.r; })
      .attr('cx', function(d) { return d.x; })
      .attr('cy', function(d) { return d.y; })
      .attr('fill', 'blue')
      .attr('stroke', 'black');

    circleData.append('text')
      .attr('dx', function(d) {return d.x;})
      .attr('dy', function(d) {return d.y;})
      .text(character);
  }

  //update(data);

});


var update = function(data) {
    var circleData = chart.selectAll('circle').data(data);
    var textData = chart.selectAll('text').data(data);

    circleData.transition(1000)
    .attr('r', function(d) { return d.r; })
    .attr('cx', function(d) { return d.x; })
    .attr('cy', function(d) { return d.y; })
    .attr('fill', 'blue');

    // chart.selectAll('text')
    //textData.text(function(d) {console.log(d.r); return d.r;});
};

