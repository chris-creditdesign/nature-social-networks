function buildGraphic(dataSet, allSites, margin, width, height, radiusScale, colour, baseRad, baseAngle, duration) {
	
	// var question1 = [];

		
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
			var item = jQuery("input[type='radio']:checked");

			var myIndex = jQuery('input').index(item);

			console.log(myIndex);
			updateArcs(myIndex);
		}
	);
	
	buildArcs(0);

	// for (var i = 0; i < question1.length; i++) {
	// 	buildArcs(i);
	// };

	// for (var i = 0; i < dataSet[0].length; i++) {
	// 	question1.push(new Array);
	// };

	// for (var q = 0; q < dataSet.length; q++) {

	// 	for (var i = 0; i < dataSet[0].length; i++) {
	// 		var myObject = new Object;
	// 		myObject.site = allSites[q]; 
	// 		myObject.value = dataSet[q][i];

	// 		question1[i].push(myObject);
	// 	};
	// };


	// for (var p = 0; p < question1.length; p++) {
	// 	question1[p].sort(function(a, b){
	// 		return b.value-a.value;
	// 	})
	// };
	



}