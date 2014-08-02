function buildLabels (margin, width, height, radiusScale, scaleLines, options, baseRad) {

	/* http://bl.ocks.org/mbostock/7555321 */
	function wrap(text, width) {
		text.each(function() {
			console.log("Hello mum!");
			var text = d3.select(this),
				words = text.text().split(/\s+/).reverse(),
				word,
				line = [],
				lineNumber = 0,
				lineHeight = 1.1, // ems
				x = text.attr("x"),
				y = text.attr("y"),
				dy = parseFloat(text.attr("dy")),
				tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");
			while (word = words.pop()) {
				line.push(word);
				tspan.text(line.join(" "));
				if (tspan.node().getComputedTextLength() > width) {
					line.pop();
					tspan.text(line.join(" "));
					line = [word];
					tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
				}
			}
		});
	}

	var myLabels = d3.select(".chart").select("svg").append("g")
		.attr('class','options')
		.attr("transform", "translate(" + (width + margin.left + margin.right) / 2 + "," + (height + margin.top + margin.bottom) / 2 + ")");

	myLabels.selectAll('text')
		.data(options)
		.enter()
		.append('svg:text')
		.attr('x', function (d,i) {
			var xPos = radiusScale(d3.max(scaleLines)*1.225) * Math.cos((baseRad*i) - (baseRad*3.25));
			return xPos;
		})
		.attr('y', function (d,i) {
			var yPos = radiusScale(d3.max(scaleLines)*1.15) * Math.sin((baseRad*i) - (baseRad*3.25));
			return yPos;
		})
		.attr('text-anchor','middle')
		.attr("dy", "0em")
		.text(function (d) {
			return d;
		});
	
	d3.selectAll('.options text')
	  	.call(wrap, 100);
	  



}