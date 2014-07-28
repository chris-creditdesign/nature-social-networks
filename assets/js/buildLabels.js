function buildLabels (margin, width, height, radiusScale, scaleLines, questions, baseRad) {
	var myLabels = d3.select(".chart").select("svg").append("g")
		.attr("transform", "translate(" + (width + margin.left + margin.right) / 2 + "," + (height + margin.top + margin.bottom) / 2 + ")");

	myLabels.selectAll('text')
		.data(questions)
		.enter()
		.append('svg:text')
		.attr('class','questions')
		.attr('x', function (d,i) {
			var xPos = radiusScale(d3.max(scaleLines)*1.1) * Math.cos((baseRad*i) - (baseRad*4.25));
			return xPos;
		})
		.attr('y', function (d,i) {
			var yPos = radiusScale(d3.max(scaleLines)*1.1) * Math.sin((baseRad*i) - (baseRad*4.25));
			return yPos;
		})
		.attr('text-anchor','middle')
		.attr("dy", ".35em")
		.text(function (d) {
			return d;
		});
}