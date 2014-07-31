function buildGraphic(dataSet, allSites, margin, width, height, radiusScale, lowOpacityLevel, colour, baseRad, baseAngle) {
	
	var question1 = [];

	var myGroup = d3.select(".chart").select("svg").append("g")
		.attr("transform", "translate(" + (width + margin.left + margin.right) / 2 + "," + (height + margin.top + margin.bottom) / 2 + "), rotate(" + (baseAngle * -1) +")");
		
	var myArc = d3.svg.arc();
		myArc.innerRadius(0);
		myArc.outerRadius(function (d) { return radiusScale(d) } );
		myArc.startAngle(function (d,i) { return baseRad * i } );
		myArc.endAngle(function (d,i) { return baseRad * (i + 1) });

	/*var myArcTest = d3.svg.arc();
		myArc.innerRadius(0);
		myArc.outerRadius(function (d) { return radiusScale(d) } );
		myArc.startAngle(function (d,i) { return 0} );
		myArc.endAngle(function (d,i) { return baseRad });*/


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
		var myArray = new Array;
		myArray.site = allSites[i]; 
		myArray.value = dataSet[i][0];

		question1.push(myArray);
	};

	// console.log(question1);

	/*employees.sort(function(a, b){
		return a.age-b.age
	})*/

	// console.log(Object.keys(question1)[0]);

	/*for (var key in question1) {
	   var obj = question1[key];
	   
	   for (var prop in obj) {
	      // important check that this is objects own property 
	      // not from prototype prop inherited
	      if(obj.hasOwnProperty(prop)){
	        alert(prop + " = " + obj[prop]);
	      }
	   }
	}*/

	for (var i = 0; i < dataSet.length; i++) {
		buildArcs(i);
	};
}