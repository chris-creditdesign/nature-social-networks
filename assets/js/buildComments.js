function buildComments (data) {
	var commentRows = jQuery(data).find("tbody tr");
	var commentLowLength = commentRows.eq(0).find('td').length - 1;

	var comments = [[], [], [], [], [], [] ];

	function addComment (x) {
		var myArray = [];

		for (var p = 0; p <= (commentLowLength); p++) {
			myArray.push(commentRows.eq(x).find('td').eq(p).text());
		}

		return myArray;
	}

	for (var i = 0; i < commentRows.length; i++) {

		var thisSite = commentRows.eq(i).find('td').eq(0).text();

		switch (thisSite) {
			case 'Twitter':
				comments[0].push(addComment(i));
				break;
			case 'Facebook':
				comments[1].push(addComment(i));
				break;
			case 'LinkedIn':
				comments[2].push(addComment(i));
				break;
			case 'ReseachGate':
				comments[3].push(addComment(i));
				break;
			case 'Academia.edu':
				comments[4].push(addComment(i));
				break;
			case 'Mendeley':
				comments[5].push(addComment(i));
				break;
			default:
				break;
		}
	}
	return comments;
}