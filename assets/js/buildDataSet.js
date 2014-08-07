function buildDataSet (data) {
	// Store each row of the table in a var
	var tableRows = jQuery(data).find("tbody tr");
	var headerRows = jQuery(data).find("thead tr").find('th');
	var rowLength = tableRows.eq(0).find('td').length - 1;

	var networkDataSet = {
		dataSet : [],
		options : [],
		allSites : []
	}
	for (var i = 0; i < tableRows.length; i++) {
		
		networkDataSet.dataSet.push(new Array);

		for (var p = 1; p < (rowLength); p++) {
			networkDataSet.dataSet[i].push(tableRows.eq(i).find('td').eq(p).text());
		};

		var thisSite = new Object;

		thisSite.site = tableRows.eq(i).find('td').eq(0).text();
		thisSite.total = tableRows.eq(i).find('td').eq(rowLength).text();

		networkDataSet.allSites.push(thisSite);

	}

	for (var i = 1; i < headerRows.length -1; i++) {
		networkDataSet.options.push(headerRows.eq(i).text());
	}
	
	return networkDataSet;
}