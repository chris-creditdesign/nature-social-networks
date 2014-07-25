(function() {
		var init = function($)
		{
		/*	==================================================================================== */
		/*	GLOBAL VARIABLES FOR D3 */



		/*	Margin, Width and height */
		var margin = {top: 15, right: 20, bottom: 20, left: 90};
		var width = $('.outerwrapper').width()  - margin.left - margin.right;
		var height = 350 - margin.top - margin.bottom;
		/*	Global variable to control the length of D3 transitons */
		var duration = 450;

		/*	==================================================================================== */
		/*	jQuery ready */

			/*	==================================================================================== */
			/*	Load D3 */
			/*	All of the D3/svg code is contained within the call back function */
			/*	Loading D3 into ie6-8 seems to cause a runtime error */
			$.getScript("http://www.nature.com/polopoly_static/js/d3.v3.min.js", function() {
				// buildObjects(); 
				
				// buildArrays();


				$.ajax({
					url: "data/table.html",
					// url: "https://poly-admin1.nature.com/preview/www/2.788/1.15117/7.18701",
					dataType: 'text',
					success: function (data) {

						var dataSet = [];

						// Store each row of the table in a var
						var tableRows = $(data).find("tbody tr");
						
						for (var i = 0; i < tableRows.length; i++) {
							
							dataSet.push(new Array);

							for (var p = 1; p < (tableRows.eq(i).find('td').length -1); p++) {
								dataSet[i].push(tableRows.eq(i).find('td').eq(p).text());
							};
						};
						buildGraphic(dataSet);
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