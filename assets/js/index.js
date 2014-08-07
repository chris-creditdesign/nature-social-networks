(function() {
		var init = function($)
		{
		/*	==================================================================================== */
		/*	GLOBAL VARIABLES FOR D3 components */

		/*	Margin, Width and height */
		var outerWrapperWidth = $('.section').width();
		var smallLayout = false;

		if (outerWrapperWidth < 500) {
			smallLayout = true;
		};

		var margin = {top: 0, right: 100, bottom: 0, left: 100};

		if (smallLayout) {
			margin.right = 50;
			margin.left = 50;
		};

		var width = outerWrapperWidth - margin.left - margin.right;
		var height;

		if (smallLayout) {
			height = outerWrapperWidth - margin.top - margin.bottom;
		} else {
			height = (outerWrapperWidth*0.9) - margin.top - margin.bottom;
		}

		/*	Global variable to control the length of D3 transitons */
		var duration = 300;
		/*  Colours for the bars */
		var colour = ["#3CBAC8", "#B9B2D8", "#F68628", "#B9D98B", "#F69890", "#F2653F"];
		var strokeColour = "#666";
		var scaleLines = [10,20,30,40,50,60,70];
		var radiusScale;	
		var networkComments;
		var networkData;
		var baseRad;
		var baseAngle;

		/*	==================================================================================== */
		/*	jQuery ready */

			/*	==================================================================================== */
			/*	Load D3 */
			$.getScript("http://www.nature.com/polopoly_static/js/d3.v3.min.js", function() {
			// $.getScript("https://poly-admin1.nature.com/polopoly_static/js/d3.v3.min.js", function() {

				$.when($.ajax("data/table.html"), $.ajax("data/comments.html")).done(function (a1, a2) {
				// $.when($.ajax("https://poly-admin1.nature.com/preview/www/2.788/1.15117/7.18701"), $.ajax("https://poly-admin1.nature.com/preview/www/2.788/1.15117/7.18992")).done(function (a1, a2) {

					networkData = buildDataSet(a1[0]);
					networkComments = buildComments(a2[0]);				
	
					/* Scale for pie radius */
					radiusScale = d3.scale.linear()
										.domain([0,70])
										.range([0,(width/2)]);

					baseRad = (Math.PI * 2) / networkData.dataSet[0].length;
					baseAngle = 180 / networkData.dataSet[0].length;

					buildSVG(margin, width, height);
					buildCheckboxes(networkData.allSites, colour, strokeColour);

					var myGraphic = buildGraphic(networkData.dataSet, margin, width, height, radiusScale, colour, baseRad, baseAngle, duration);
					buildScales(margin, width, height, radiusScale, scaleLines, strokeColour);
					buildLines(margin, width, height, radiusScale, scaleLines, networkData.dataSet[0].length, strokeColour, baseAngle);

					if (smallLayout) {
						buildList(options);
					}

					buildLabels(margin, width, height, smallLayout, radiusScale, scaleLines, networkData.options, baseRad);
					buildTicks(margin, width, height, radiusScale, scaleLines);

					$('#networkSelect').change(
						function () {
							var item = $(".outerwrapper .chooseNetwork #networkSelect input[type='radio']:checked");
							var myIndex = $('.outerwrapper .chooseNetwork #networkSelect input').index(item);

							myGraphic.updateGraphic(myIndex);
						}
					);

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