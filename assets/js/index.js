(function() {
		var init = function($)
		{
		/*	==================================================================================== */
		/*	GLOBAL VARIABLES FOR D3 components */

		/*	Margin, Width and height */

		var outerWrapperWidth = $('.section').width();

		var margin = {top: 0, right: 100, bottom: 0, left: 100};
		var width = outerWrapperWidth - margin.left - margin.right;
		var height = (outerWrapperWidth*0.9) - margin.top - margin.bottom;
		/*	Global variable to control the length of D3 transitons */
		var duration = 300;

		/*  Colours for the bars */
		var colour = [
						"#3CBAC8",
						"#B9B2D8",
						"#F68628",
						"#B9D98B",
						"#F69890",
						"#F2653F"
					];
		var strokeColour = "#666";

		var scaleLines = [10,20,30,40,50,60,70];	

		var dataSet = [];
		var options = [];
		var allSites = [];

		var tableRows;
		var headerRows;
		var baseRad;
		var baseAngle;

		/*	==================================================================================== */
		/*	jQuery ready */

			/*	==================================================================================== */
			/*	Load D3 */
			/*	All of the D3/svg code is contained within the call back function */
			/*	because loading D3 into ie6-8 seems to cause a runtime error */
			$.getScript("http://www.nature.com/polopoly_static/js/d3.v3.min.js", function() {
			// $.getScript("https://poly-admin1.nature.com/polopoly_static/js/d3.v3.min.js", function() {
		
				/* Scale for pie radius */
				var radiusScale = d3.scale.linear()
									.domain([0,70])
									.range([0,(width/2)]);


				$.ajax({
					url: "data/table.html",
					// url: "https://poly-admin1.nature.com/preview/www/2.788/1.15117/7.18701",
					dataType: 'text',
					success: function (data) {

						// Store each row of the table in a var
						tableRows = $(data).find("tbody tr");
						
						for (var i = 0; i < tableRows.length; i++) {
							
							dataSet.push(new Array);

							for (var p = 1; p < (tableRows.eq(i).find('td').length -1); p++) {
								dataSet[i].push(tableRows.eq(i).find('td').eq(p).text());
							};

							allSites.push(tableRows.eq(i).find('td').eq(0).text())
						};

						headerRows = $(data).find("thead tr").find('th');

						for (var i = 1; i < headerRows.length -1; i++) {
							options.push(headerRows.eq(i).text());
						};

						baseRad = (Math.PI * 2) / dataSet[0].length;
						baseAngle = 180 / dataSet[0].length;

						buildSVG(margin, width, height);
						buildCheckboxes(allSites, colour, strokeColour);
						buildGraphic(dataSet, allSites, margin, width, height, radiusScale, colour, baseRad, baseAngle, duration);
						buildScales(margin, width, height, radiusScale, scaleLines, strokeColour);
						buildLines(margin, width, height, radiusScale, scaleLines, dataSet[0].length, strokeColour, baseAngle);
						// buildList(options);
						buildLabels(margin, width, height, radiusScale, scaleLines, options, baseRad);
						buildTicks(margin, width, height, radiusScale, scaleLines);
						// fadeOutArcs(lowOpacityLevel);
					}


				});

			}); // End of d3js getscript call 

		/* End of active code */
		};


	setTimeout(function()
	{
	if (typeof jQuery !== 'undefined')
	{
		init(jQuery);
	} else
	{
		setTimeout(arguments.callee, 60);
	}
	}, 60);

})();