function buildDataSet (data) {
	var tableRows = jQuery(data).find("tbody tr");
	var headerRows = jQuery(data).find("thead tr").find('th');
	var rowLength = tableRows.eq(0).find('td').length - 1;

	var networkDataSet = {
		dataSet : [],
		options : [],
		allSites : []
	};
	for (var i = 0; i < tableRows.length; i++) {
		
		var myNewArray = [];

		networkDataSet.dataSet.push(myNewArray);

		for (var p = 1; p < (rowLength); p++) {
			networkDataSet.dataSet[i].push(tableRows.eq(i).find('td').eq(p).text());
		}

		var thisSite = {};

		thisSite.site = tableRows.eq(i).find('td').eq(0).text();
		thisSite.total = tableRows.eq(i).find('td').eq(rowLength).text();

		networkDataSet.allSites.push(thisSite);

	}

	for (var n = 1; n < headerRows.length -1; n++) {
		networkDataSet.options.push(headerRows.eq(n).text());
	}
	
	return networkDataSet;
}