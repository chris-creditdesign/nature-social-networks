(function() {
		var init = function($)
		{
		/*	==================================================================================== */
		/*	GLOBAL VARIABLES FOR D3 */



		/*	Margin, Width and height */

		var outerWrapperWidth = $('.section').width();

		var margin = {top: 0, right: 100, bottom: 0, left: 100};
		var width = outerWrapperWidth - margin.left - margin.right;
		var height = (outerWrapperWidth*0.9) - margin.top - margin.bottom;
		/*	Global variable to control the length of D3 transitons */
		var duration = 450;

		/*  Colours for the bars */
		var colour = [
						"#00642D",
						"#95177E",
						"#F8B436",
						"#EB6B4B",
						"#3BAADC",
						"#96BE17"
					];
		var strokeColour = "#666";

		var scaleLines = [5,10,15,20,25,30,35];	

		var lowOpacityLevel = 0.7;

		var dataSet = [];
		var questions = [];
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
			/*	Loading D3 into ie6-8 seems to cause a runtime error */
			$.getScript("http://www.nature.com/polopoly_static/js/d3.v3.min.js", function() {
			// $.getScript("https://poly-admin1.nature.com/polopoly_static/js/d3.v3.min.js", function() {
				// buildObjects(); 
				
				// buildArrays();
		
				/* Scale for pie radius */
				var radiusScale = d3.scale.linear()
									.domain([0,35])
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
							questions.push(headerRows.eq(i).text());
						};

						baseRad = (Math.PI * 2) / dataSet[0].length;
						baseAngle = 180 / dataSet[0].length;

						buildSVG(margin, width, height);
						buildGraphic(dataSet, margin, width, height, radiusScale, lowOpacityLevel, colour, baseRad, baseAngle);
						buildScales(margin, width, height, radiusScale, scaleLines, strokeColour);
						buildLines(margin, width, height, radiusScale, scaleLines, dataSet[0].length, strokeColour, baseAngle);
						buildLabels(margin, width, height, radiusScale, scaleLines, questions, baseRad);
						buildTicks(margin, width, height, radiusScale, scaleLines);
						buildCheckboxes(allSites, colour, lowOpacityLevel, strokeColour);
						fadeOutArcs(lowOpacityLevel);
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