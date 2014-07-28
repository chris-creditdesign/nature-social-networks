function buildGraphic(dataSet, margin, width, height, radiusScale, lowOpacityLevel, colour, baseRad, baseAngle) {
	
	var networkSelect = jQuery('#networkSelect');

	var myGroup = d3.select(".chart").select("svg").append("g")
		.attr("transform", "translate(" + (width + margin.left + margin.right) / 2 + "," + (height + margin.top + margin.bottom) / 2 + "), rotate(" + (baseAngle * -1) +")");
		
	var myArc = d3.svg.arc();
		myArc.innerRadius(0);
		myArc.outerRadius(function (d) { return radiusScale(d) } );
		myArc.startAngle(function (d,i) { return baseRad * i } );
		myArc.endAngle(function (d,i) { return baseRad * (i + 1) });


	function buildArcs (i) {
		var thisClass = 'arc' + i;
	
		myGroup.selectAll('.' + thisClass)
		  .data(dataSet[i])
			.enter()
		  .append("path")
			.attr('d', myArc)
			.attr('class', thisClass)
			.attr('fill', colour[i])
			.attr('stroke', 'none')
			.attr('stroke-width', '1')
			.attr('opacity',lowOpacityLevel);
	}

	for (var i = 0; i < dataSet.length; i++) {
		buildArcs(i);
	};
}





















