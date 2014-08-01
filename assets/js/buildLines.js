function buildLines (margin, width, height, radiusScale, scaleLines, dataSetLength, strokeColour, baseAngle) {
	var mylines = d3.select(".chart").select("svg").append("g")
			.attr("transform", "translate(" + (width + margin.left + margin.right) / 2 + "," + (height + margin.top + margin.bottom) / 2 + ")");

	for (var i = 0; i < dataSetLength; i++) {
		mylines.append('line')
			.attr('x1', '0')
			.attr('y1', '0')
			.attr('x2', '0')
			.attr('y2', -radiusScale(scaleLines[scaleLines.length-1]))
			.attr('stroke', strokeColour)
			.attr('stroke-width','0.5px')
			.attr('fill','none')
			.attr('transform','rotate(' +  (baseAngle + ((baseAngle*2) * i)) + ')');
	};
}