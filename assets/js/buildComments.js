function buildComments (data) {
	var commentRows = jQuery(data).find("tbody tr");
	var commentLowLength = commentRows.eq(0).find('td').length - 1;

	var comments = {
		twitterComments : [],
		facebookComments : [],
		academiaeduComments : [],
		researchgateComments : [],
		linkedinComments : [],
		mendeleyComments : []
	}


	function addComment (x) {
		var myArray = [];

		for (var p = 1; p < (commentLowLength); p++) {
			myArray.push(commentRows.eq(x).find('td').eq(p).text());
		};

		return myArray;
	}

	for (var i = 0; i < commentRows.length; i++) {

		var thisSite = commentRows.eq(i).find('td').eq(0).text();

		switch (thisSite) {
			case 'Twitter':
				comments.twitterComments.push(addComment(i));
				break;
			case 'Facebook':
				comments.facebookComments.push(addComment(i));
				break;
			case 'Academia.edu':
				comments.academiaeduComments.push(addComment(i));
				break;
			case 'ReseachGate':
				comments.researchgateComments.push(addComment(i));
				break;
			case 'LinkedIn':
				comments.linkedinComments.push(addComment(i));
				break;
			case 'Mendeley':
				comments.mendeleyComments.push(addComment(i));
				break;
			default:
				break;
		}
	};

	return comments;
}
