function drawAirports(airport_data){
    function agg_year(leaves) {
        //var total = d3.sum(leaves, function(d) {
            //return d['attendance'];
        //});

        var coords = leaves.map(function(d) {
            return projection([+d.long, +d.lat]);
        });

        var center_x = d3.mean(coords, function(d) {
            return d[0];
        });

        var center_y = d3.mean(coords, function(d) {
            return d[1];
        });

        //var teams = d3.set();

        //leaves.forEach(function(d) {
            //teams.add(d['team1']);
            //teams.add(d['team2']);
        //});

        return {
          //'attendance' : total,
          'x' : center_x,
          'y' : center_y,
          //'teams' : teams.values()
        };
    }
    var year_nested = d3.nest()
                     .key(function(d) {
                          return d.year;
                     })
                     //.rollup(agg_year)
                     .entries(airport_data);
    svg.append('g')
       .attr("class", "bubble")
       .selectAll("circle")
       .data(year_nested[0].values)
       .enter()
       .append("circle")
       .attr('cx', function(d) { return projection([+d.long, +d.lat])[0]; })
       .attr('cy', function(d) { return projection([+d.long, +d.lat])[1]; })
       .attr('r', function(d) { return 1; });

    console.log(year_nested[0]);
    //debugger;
//    year_nested[0];
}
