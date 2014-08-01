function buildScales (margin, width, height, radiusScale, scaleLines, strokeColour) {
	
	var myScale = d3.select(".chart").select("svg").append("g")		
		.attr("transform", "translate(" + (width + margin.left + margin.right) / 2 + "," + (height + margin.top + margin.bottom) / 2 + ")");

	myScale.selectAll('circle')
	  .data(scaleLines)
	  	.enter()
	  	.append('circle')
		.attr('cx', 0)
		.attr('cy', 0)
		.attr('r', function (d) {
			return radiusScale(d);
		})
		.attr('fill', 'none')
		.attr('stroke', strokeColour)
		.attr('stroke-dasharray', '1, 3');
}