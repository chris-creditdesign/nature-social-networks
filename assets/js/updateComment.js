function updateComment (comment) {
	var myLength = comment.length;
	var myPick = Math.floor(Math.random() * myLength);
	
	var myComment = comment[myPick][0];
	var myBio = "Age " + comment[myPick][1] + ", " + comment[myPick][3] + ", " + comment[myPick][2];

	jQuery(".outerwrapper .networkComments").fadeOut("fast", function () {
		jQuery(".outerwrapper .networkComments > blockquote.comment").html("&#8220;" + myComment + "&#8221;");
		jQuery(".outerwrapper .networkComments > cite.bio").html(myBio);	
	});
	jQuery(".outerwrapper .networkComments").fadeIn();
}