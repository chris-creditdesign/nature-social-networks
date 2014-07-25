function buildGraphic(dataSet) {
	/*  Colours for the bars */
	var colour = [
					"#00642D",
					"#95177E",
					"#F8B436",
					"#EB6B4B",
					"#3BAADC",
					"#96BE17"
				];

	var margin = {top: 20, right: 50, bottom: 20, left: 80};
	var width = 630 - margin.left - margin.right;
	var height = 630 - margin.top - margin.bottom;
	var baseRad = (Math.PI * 2) / dataSet[0].length;
	var baseAngle = 180 / dataSet[0].length;

	var chooseNetwork = jQuery('#social-network');

	var scaleLines = [0, 5,10,15,20,25,30,35];

	var radiusScale = d3.scale.linear()
						.domain([0,35])
						.range([0,width/2]);

	var mySvg = d3.select(".chart").append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom);

	var myScale = mySvg.append("g")
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
		.attr('stroke', '#666');

	var myTicks = mySvg.append("g")
		.attr("transform", "translate(" + (width + margin.left + margin.right) / 2 + "," + (height + margin.top + margin.bottom) / 2 + ")");

	myTicks.selectAll('text')
	  .data(scaleLines)
		.enter()
		.append('svg:text')
		.attr('y', function(d) { return -1 * radiusScale(d) })
		.attr("text-anchor", "middle")
		.attr("dy", ".35em")
		.text(function (d) {
			return d + "%";
		});

	var myGroup = mySvg.append("g")
		.attr("transform", "translate(" + (width + margin.left + margin.right) / 2 + "," + (height + margin.top + margin.bottom) / 2 + "), rotate(" + (baseAngle * -1) +")");
		
	  

	var myArc = d3.svg.arc();
		myArc.innerRadius(0);
		myArc.outerRadius(function (d) { return radiusScale(d) } );
		myArc.startAngle(function (d,i) { return baseRad * i } );
		myArc.endAngle(function (d,i) { return baseRad * (i + 1) });


	var arcs1 = myGroup.selectAll('.arcs')  
	  .data(dataSet[0])
		.enter();

	arcs1.append("path")
		.attr('d', myArc)
		.attr('fill', colour[0])
		.attr('stroke', '#fff')
		.attr('stroke-width', '1')
		.attr('opacity','0.5');

	var arcs2 = myGroup.selectAll('.arcs')  
	  .data(dataSet[1])
		.enter();

	arcs2.append("path")
		.attr('d', myArc)
		.attr('fill', colour[1])
		.attr('stroke', '#fff')
		.attr('stroke-width', '1')
		.attr('opacity','0.5');

	var arcs3 = myGroup.selectAll('.arcs')  
	  .data(dataSet[2])
		.enter();

	arcs3.append("path")
		.attr('d', myArc)
		.attr('fill', colour[2])
		.attr('stroke', '#fff')
		.attr('stroke-width', '1')
		.attr('opacity','0.5');

	var arcs4 = myGroup.selectAll('.arcs')  
	  .data(dataSet[3])
		.enter();

	arcs4.append("path")
		.attr('d', myArc)
		.attr('fill', colour[3])
		.attr('stroke', '#fff')
		.attr('stroke-width', '1')
		.attr('opacity','0.5');

	var arcs5 = myGroup.selectAll('.arcs')  
	  .data(dataSet[4])
		.enter();

	arcs5.append("path")
		.attr('d', myArc)
		.attr('fill', colour[4])
		.attr('stroke', '#fff')
		.attr('stroke-width', '1')
		.attr('opacity','0.5');

	var arcs6 = myGroup.selectAll('.arcs')  
	  .data(dataSet[5])
		.enter();

	arcs6.append("path")
		.attr('d', myArc)
		.attr('fill', colour[5])
		.attr('stroke', '#fff')
		.attr('stroke-width', '1')
		.attr('opacity','0.5');


	chooseNetwork.change(function() {
		var selection = jQuery(this)[0].selectedIndex;  

		mySvg.selectAll('path')
			.data(dataSet[selection])
			.transition()
			.duration(200)
			.attr('d', myArc);
	});

	// arcs.append("svg:text")
	// 	.attr("transform", function(d,i) { 

	// 		var opposite = Math.tan(baseRad * 0) * d;

			
	// 		return "translate(" + opposite + "," + -d + ")"; })
	// 	.attr("dy", ".35em")
	// 	.attr("text-anchor", "start")
	// 	.text("hello Mum!");
}