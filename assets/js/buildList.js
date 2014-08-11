function buildList (options) {
	/* Create numbered list for options */
	d3.select(".outer-wrapper .options")
		.append("ol")
		.selectAll('li')
	  .data(options)
	  	.enter()
		.append("li")
		.html(function (d, i) {
			return d;
		});
}