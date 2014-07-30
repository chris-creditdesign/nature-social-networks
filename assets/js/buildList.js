function buildList (options) {
	/* Create numbered list for options */
	d3.select(".options")
		.append("ol")
		.attr("id","optionDescriptions")
		.selectAll('li')
	  .data(options)
	  	.enter()
		.append("li")
		.html(function (d, i) {
			return d;
		});
}