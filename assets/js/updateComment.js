function updateComment (comment) {
	var myLength = comment.length;
	var myPick = Math.floor(Math.random() * myLength);
	
	var myComment = comment[myPick][1];
	var myBio = comment[myPick][0] + " user, Age " + comment[myPick][2] + ", " + comment[myPick][3] + ", " + comment[myPick][4];

	jQuery(".outer-wrapper .network-comments").fadeOut("fast", function () {
		jQuery(".outer-wrapper .network-comments > blockquote.comment").html("&#8220;" + myComment + "&#8221;");
		jQuery(".outer-wrapper .network-comments > cite.bio").html(myBio);	
	});
	jQuery(".outer-wrapper .network-comments").fadeIn();
}