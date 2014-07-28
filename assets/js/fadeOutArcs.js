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
			if ($('#Twitter').attr('checked')) {
				fadeOut('path.arc0');
			} else {
				fadeIn('path.arc0')
			}
			if ($('#Facebook').attr('checked')) {
				fadeOut('path.arc1');
			} else {
				fadeIn('path.arc1')
			}
			if ($('#Academiaedu').attr('checked')) {
				fadeOut('path.arc2');
			} else {
				fadeIn('path.arc2')
			}
			if ($('#ResearchGate').attr('checked')) {
				fadeOut('path.arc3');
			} else {
				fadeIn('path.arc3')
			}
			if ($('#LinkedIn').attr('checked')) {
				fadeOut('path.arc4');
			} else {
				fadeIn('path.arc4')
			}
			if ($('#Mendeley').attr('checked')) {
				fadeOut('path.arc5');
			} else {
				fadeIn('path.arc5')
			}
		}
	);
}
