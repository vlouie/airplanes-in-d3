function drawMap(geo_data){
    svg = d3.select("body")
        .append("svg")
        .attr("width", width + margin)
        .attr("height", height + margin)
        .append('g')
        .attr('class', 'map');

    projection = d3.geo.mercator()
                       .scale(140)
                       .translate([width / 2, height / 1.2]);

    var path = d3.geo.path().projection(projection);

    var map = svg.selectAll('path')
                 .data(geo_data.features)
                 .enter()
                 .append('path')
                 .attr('d', path)
                 .style('fill', 'lightGreen')
                 .style('stroke', 'darkGreen')
                 .style('stroke-width', 0.5);
}
