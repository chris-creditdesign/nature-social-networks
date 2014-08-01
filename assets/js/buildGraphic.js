function buildGraphic(dataSet, margin, width, height, radiusScale, colour, baseRad, baseAngle, duration) {
			
	var myArc = d3.svg.arc();
		myArc.innerRadius(0);
		myArc.outerRadius(function (d) { return radiusScale(d) } );
		myArc.startAngle(function (d,i) { return baseRad * i } );
		myArc.endAngle(function (d,i) { return baseRad * (i + 1) });

	var myGroup = d3.select(".chart").select("svg").append("g")
		.attr("transform", "translate(" + (width + margin.left + margin.right) / 2 + "," + (height + margin.top + margin.bottom) / 2 + "), rotate(" + (baseAngle * -1) +")");

	function buildArcs (x) {
	
		myGroup.selectAll("path")
		  .data(dataSet[x])
			.enter()
		  .append("path")
			.attr('d', myArc)
			.attr('fill', function () {
				return colour[x];
			})
			.attr('stroke', 'none');
	}

	function updateArcs (x) {
		
		myGroup.selectAll("path")
		  .data(dataSet[x])
			.transition()
			.duration(duration)
			.attr('d', myArc)
			.attr('fill', function () {
				return colour[x];
			});

	}

	jQuery('#networkSelect').change(
		function () {
			var item = jQuery(".outerwrapper .chooseNetwork #networkSelect input[type='radio']:checked");
			var myIndex = jQuery('.outerwrapper .chooseNetwork #networkSelect input').index(item);

			updateArcs(myIndex);
		}
	);
	
	buildArcs(0);
}