function buildTicks (margin, width, height, radiusScale, scaleLines) {
	var myTicks = d3.select(".outer-wrapper .chart").select("svg").append("g")
		.attr("transform", "translate(" + (width + margin.left + margin.right) / 2 + "," + (height + margin.top + margin.bottom) / 2 + ")");

	myTicks.selectAll('text')
	  .data(scaleLines)
		.enter()
		.append('svg:text')
		.attr('y', function(d) { return -1 * radiusScale(d); })
		.attr("text-anchor", "middle")
		.attr("dy", ".35em")
		.text(function (d) {
			return d + "%";
		});
}