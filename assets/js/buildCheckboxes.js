function buildCheckboxes (allSites, colour, lowOpacityLevel, strokeColour) {
	/* Create checkboxes for each site */
	d3.select(".chooseNetwork")
		.append("ul")
		.attr("id","networkSelect")
		.selectAll('li')
	  .data(allSites)
	  	.enter()
		.append("li")
		.html(function (d, i) {
			var innerHTML = "<input type='checkbox' id='" + d + "' name='" + d + "' checked><label for='" + d + "'><span><svg height='20' width='20'><circle cx='10' cy='10' r='10' fill='" + colour[i] + "' class='dot" + i + "' opacity='" + lowOpacityLevel + "'></circle><polygon fill='#fff' points='8.163,11.837 6.062,9.737 3.963,11.837 6.062,13.938 8.163,16.037 16.037,8.162 13.938,6.062'/></polygon></svg></span> " + d + "</label>";

			return innerHTML;
		});
}