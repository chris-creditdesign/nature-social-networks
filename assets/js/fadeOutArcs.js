function fadeOutArcs (lowOpacityLevel) {
	// body...
	function fadeOut (x) {
		d3.select(".chart").select("svg").selectAll(x)
			.transition()
			.duration(200)
			.attr('opacity', lowOpacityLevel);
	}

	function fadeIn (x) {
		d3.select(".chart").select("svg").selectAll(x)
			.transition()
			.duration(200)
			.attr('opacity', '0');
	}

	jQuery('#networkSelect').change(
		function () {
			if (jQuery('#Twitter').is(':checked')) {
				fadeOut('path.arc0');
			} else {
				fadeIn('path.arc0')
			}
			if (jQuery('#Facebook').is(':checked')) {
				fadeOut('path.arc1');
			} else {
				fadeIn('path.arc1')
			}
			if (jQuery('#Academiaedu').is(':checked')) {
				fadeOut('path.arc2');
			} else {
				fadeIn('path.arc2')
			}
			if (jQuery('#ResearchGate').is(':checked')) {
				fadeOut('path.arc3');
			} else {
				fadeIn('path.arc3')
			}
			if (jQuery('#LinkedIn').is(':checked')) {
				fadeOut('path.arc4');
			} else {
				fadeIn('path.arc4')
			}
			if (jQuery('#Mendeley').is(':checked')) {
				fadeOut('path.arc5');
			} else {
				fadeIn('path.arc5')
			}
		}
	);
}
