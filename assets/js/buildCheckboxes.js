function buildCheckboxes (allSites, colour, strokeColour) {
	var format = d3.format("0,000");

	/* Create checkboxes for each site */
	d3.select(".outer-wrapper .choose-network")
		.append("ul")
		.attr("id","networkSelect")
		.selectAll('li')
	  .data(allSites)
	  	.enter()
		.append("li")
		.html(function (d, i) {
			var checked = (i === 0) ? 'checked':'';
			var siteName = d.site;
			var safeSiteName = siteName.toLowerCase().split('.').join("-");

			var innerHTML = "<input type='radio' id='" + safeSiteName + "' name='selectedSite' " + checked + "><label for='" + safeSiteName + "'>" + d.site + " (" + format(d.total )+ " regular visitors)</label>";

			return innerHTML;
		});
}