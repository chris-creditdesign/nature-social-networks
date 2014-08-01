function fadeOutArcs (lowOpacityLevel) {
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
			var myValue = jQuery(this).find("input[type='radio']:checked").attr('id');

			console.log(myValue);

			if (jQuery('#Twitter').is(':checked')) {
				// fadeOut('path.Twitter');

			} else {
				// fadeIn('path.Twitter')
			}
			// if (jQuery('#Facebook').is(':checked')) {
			// 	fadeOut('path.Facebook');
			// } else {
			// 	fadeIn('path.Facebook')
			// }
			// if (jQuery('#AcademiaEdu').is(':checked')) {
			// 	fadeOut('path.AcademiaEdu');
			// } else {
			// 	fadeIn('path.AcademiaEdu')
			// }
			// if (jQuery('#ResearchGate').is(':checked')) {
			// 	fadeOut('path.ResearchGate');
			// } else {
			// 	fadeIn('path.ResearchGate')
			// }
			// if (jQuery('#LinkedIn').is(':checked')) {
			// 	fadeOut('path.LinkedIn');
			// } else {
			// 	fadeIn('path.LinkedIn')
			// }
			// if (jQuery('#Mendeley').is(':checked')) {
			// 	fadeOut('path.Mendeley');
			// } else {
			// 	fadeIn('path.Mendeley')
			// }


		}
	);
}
