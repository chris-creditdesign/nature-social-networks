function buildObjects () {

	var data;

	d3.csv("data/raw-unredacted-data-cleaned.csv", function(data) {


		var sites = {

			selectedSites_1 : {	notProfessionally: 0,
								curiosity: 0,
								contact: 0,
								postContent: 0,
								discussingResearch: 0,
								discussingIssues: 0,
								commenting: 0,
								job: 0,
								funding: 0,
								discoveringPeers: 0,
								contactingPeers: 0,
								discoveringIndividuals: 0,
								contactingIndividuals: 0,
								researchPapers: 0,
								links: 0,
								otherDiscussions: 0,
								metrics: 0
							},
			selectedSites_2: {	notProfessionally: 0,
								curiosity: 0,
								contact: 0,
								postContent: 0,
								discussingResearch: 0,
								discussingIssues: 0,
								commenting: 0,
								job: 0,
								funding: 0,
								discoveringPeers: 0,
								contactingPeers: 0,
								discoveringIndividuals: 0,
								contactingIndividuals: 0,
								researchPapers: 0,
								links: 0,
								otherDiscussions: 0,
								metrics: 0
							},
			selectedSites_3: {	notProfessionally: 0,
								curiosity: 0,
								contact: 0,
								postContent: 0,
								discussingResearch: 0,
								discussingIssues: 0,
								commenting: 0,
								job: 0,
								funding: 0,
								discoveringPeers: 0,
								contactingPeers: 0,
								discoveringIndividuals: 0,
								contactingIndividuals: 0,
								researchPapers: 0,
								links: 0,
								otherDiscussions: 0,
								metrics: 0
							},
			selectedSites_4: {	notProfessionally: 0,
								curiosity: 0,
								contact: 0,
								postContent: 0,
								discussingResearch: 0,
								discussingIssues: 0,
								commenting: 0,
								job: 0,
								funding: 0,
								discoveringPeers: 0,
								contactingPeers: 0,
								discoveringIndividuals: 0,
								contactingIndividuals: 0,
								researchPapers: 0,
								links: 0,
								otherDiscussions: 0,
								metrics: 0
							},
			selectedSites_5: {	notProfessionally: 0,
								curiosity: 0,
								contact: 0,
								postContent: 0,
								discussingResearch: 0,
								discussingIssues: 0,
								commenting: 0,
								job: 0,
								funding: 0,
								discoveringPeers: 0,
								contactingPeers: 0,
								discoveringIndividuals: 0,
								contactingIndividuals: 0,
								researchPapers: 0,
								links: 0,
								otherDiscussions: 0,
								metrics: 0
							},
			selectedSites_6: {	notProfessionally: 0,
								curiosity: 0,
								contact: 0,
								postContent: 0,
								discussingResearch: 0,
								discussingIssues: 0,
								commenting: 0,
								job: 0,
								funding: 0,
								discoveringPeers: 0,
								contactingPeers: 0,
								discoveringIndividuals: 0,
								contactingIndividuals: 0,
								researchPapers: 0,
								links: 0,
								otherDiscussions: 0,
								metrics: 0
							},
			selectedSites_7: {	notProfessionally: 0,
								curiosity: 0,
								contact: 0,
								postContent: 0,
								discussingResearch: 0,
								discussingIssues: 0,
								commenting: 0,
								job: 0,
								funding: 0,
								discoveringPeers: 0,
								contactingPeers: 0,
								discoveringIndividuals: 0,
								contactingIndividuals: 0,
								researchPapers: 0,
								links: 0,
								otherDiscussions: 0,
								metrics: 0
							},
			selectedSites_8: {	notProfessionally: 0,
								curiosity: 0,
								contact: 0,
								postContent: 0,
								discussingResearch: 0,
								discussingIssues: 0,
								commenting: 0,
								job: 0,
								funding: 0,
								discoveringPeers: 0,
								contactingPeers: 0,
								discoveringIndividuals: 0,
								contactingIndividuals: 0,
								researchPapers: 0,
								links: 0,
								otherDiscussions: 0,
								metrics: 0
							},
			selectedSites_9: {	notProfessionally: 0,
								curiosity: 0,
								contact: 0,
								postContent: 0,
								discussingResearch: 0,
								discussingIssues: 0,
								commenting: 0,
								job: 0,
								funding: 0,
								discoveringPeers: 0,
								contactingPeers: 0,
								discoveringIndividuals: 0,
								contactingIndividuals: 0,
								researchPapers: 0,
								links: 0,
								otherDiscussions: 0,
								metrics: 0
							},
			selectedSites_10: {	notProfessionally: 0,
								curiosity: 0,
								contact: 0,
								postContent: 0,
								discussingResearch: 0,
								discussingIssues: 0,
								commenting: 0,
								job: 0,
								funding: 0,
								discoveringPeers: 0,
								contactingPeers: 0,
								discoveringIndividuals: 0,
								contactingIndividuals: 0,
								researchPapers: 0,
								links: 0,
								otherDiscussions: 0,
								metrics: 0
							},
			selectedSites_11: {	notProfessionally: 0,
								curiosity: 0,
								contact: 0,
								postContent: 0,
								discussingResearch: 0,
								discussingIssues: 0,
								commenting: 0,
								job: 0,
								funding: 0,
								discoveringPeers: 0,
								contactingPeers: 0,
								discoveringIndividuals: 0,
								contactingIndividuals: 0,
								researchPapers: 0,
								links: 0,
								otherDiscussions: 0,
								metrics: 0
							},
			selectedSites_12: {	notProfessionally: 0,
								curiosity: 0,
								contact: 0,
								postContent: 0,
								discussingResearch: 0,
								discussingIssues: 0,
								commenting: 0,
								job: 0,
								funding: 0,
								discoveringPeers: 0,
								contactingPeers: 0,
								discoveringIndividuals: 0,
								contactingIndividuals: 0,
								researchPapers: 0,
								links: 0,
								otherDiscussions: 0,
								metrics: 0
							},
			selectedSites_13: {	notProfessionally: 0,
								curiosity: 0,
								contact: 0,
								postContent: 0,
								discussingResearch: 0,
								discussingIssues: 0,
								commenting: 0,
								job: 0,
								funding: 0,
								discoveringPeers: 0,
								contactingPeers: 0,
								discoveringIndividuals: 0,
								contactingIndividuals: 0,
								researchPapers: 0,
								links: 0,
								otherDiscussions: 0,
								metrics: 0
							},
			selectedSites_14: {	notProfessionally: 0,
								curiosity: 0,
								contact: 0,
								postContent: 0,
								discussingResearch: 0,
								discussingIssues: 0,
								commenting: 0,
								job: 0,
								funding: 0,
								discoveringPeers: 0,
								contactingPeers: 0,
								discoveringIndividuals: 0,
								contactingIndividuals: 0,
								researchPapers: 0,
								links: 0,
								otherDiscussions: 0,
								metrics: 0
							},
			selectedSites_15 : {	notProfessionally: 0,
								curiosity: 0,
								contact: 0,
								postContent: 0,
								discussingResearch: 0,
								discussingIssues: 0,
								commenting: 0,
								job: 0,
								funding: 0,
								discoveringPeers: 0,
								contactingPeers: 0,
								discoveringIndividuals: 0,
								contactingIndividuals: 0,
								researchPapers: 0,
								links: 0,
								otherDiscussions: 0,
								metrics: 0
							},
			selectedSites_16 : {	notProfessionally: 0,
								curiosity: 0,
								contact: 0,
								postContent: 0,
								discussingResearch: 0,
								discussingIssues: 0,
								commenting: 0,
								job: 0,
								funding: 0,
								discoveringPeers: 0,
								contactingPeers: 0,
								discoveringIndividuals: 0,
								contactingIndividuals: 0,
								researchPapers: 0,
								links: 0,
								otherDiscussions: 0,
								metrics: 0
							},
			selectedSites_17 : {	notProfessionally: 0,
								curiosity: 0,
								contact: 0,
								postContent: 0,
								discussingResearch: 0,
								discussingIssues: 0,
								commenting: 0,
								job: 0,
								funding: 0,
								discoveringPeers: 0,
								contactingPeers: 0,
								discoveringIndividuals: 0,
								contactingIndividuals: 0,
								researchPapers: 0,
								links: 0,
								otherDiscussions: 0,
								metrics: 0
							}

			}

		for (var i = 0; i < data.length; i++) {

			if (data[i].selectedSites_1 === "1") {
				if (data[i].q10_1_1 === "1") 	sites.selectedSites_1.notProfessionally++;
				if (data[i].q10_2_1 === "1") 	sites.selectedSites_1.curiosity++;
				if (data[i].q10_3_1 === "1") 	sites.selectedSites_1.contact++;
				if (data[i].q10_4_1 === "1") 	sites.selectedSites_1.postContent++;
				if (data[i].q10_16_1 === "1") 	sites.selectedSites_1.discussingResearch++;
				if (data[i].q10_5_1 === "1") 	sites.selectedSites_1.discussingIssues++;
				if (data[i].q10_6_1 === "1") 	sites.selectedSites_1.commenting++;
				if (data[i].q10_7_1 === "1") 	sites.selectedSites_1.job++;
				if (data[i].q10_8_1 === "1") 	sites.selectedSites_1.funding++;
				if (data[i].q10_9_1 === "1") 	sites.selectedSites_1.discoveringPeers++;
				if (data[i].q10_10_1 === "1") 	sites.selectedSites_1.contactingPeers++;
				if (data[i].q10_11_1 === "1") 	sites.selectedSites_1.discoveringIndividuals++;
				if (data[i].q10_12_1 === "1") 	sites.selectedSites_1.contactingIndividuals++;
				if (data[i].q10_13_1 === "1") 	sites.selectedSites_1.researchPapers++;
				if (data[i].q10_14_1 === "1") 	sites.selectedSites_1.links++;
				if (data[i].q10_15_1 === "1") 	sites.selectedSites_1.otherDiscussions++;
				if (data[i].q10_17_1 === "1") 	sites.selectedSites_1.metrics++;
			}

			if (data[i].selectedSites_2 === "1") {
				if (data[i].q10_1_2 === "1") 	sites.selectedSites_2.notProfessionally++;
				if (data[i].q10_2_2 === "1") 	sites.selectedSites_2.curiosity++;
				if (data[i].q10_3_2 === "1") 	sites.selectedSites_2.contact++;
				if (data[i].q10_4_2 === "1") 	sites.selectedSites_2.postContent++;
				if (data[i].q10_16_2 === "1") 	sites.selectedSites_2.discussingResearch++;
				if (data[i].q10_5_2 === "1") 	sites.selectedSites_2.discussingIssues++;
				if (data[i].q10_6_2 === "1") 	sites.selectedSites_2.commenting++;
				if (data[i].q10_7_2 === "1") 	sites.selectedSites_2.job++;
				if (data[i].q10_8_2 === "1") 	sites.selectedSites_2.funding++;
				if (data[i].q10_9_2 === "1") 	sites.selectedSites_2.discoveringPeers++;
				if (data[i].q10_10_2 === "1") 	sites.selectedSites_2.contactingPeers++;
				if (data[i].q10_11_2 === "1") 	sites.selectedSites_2.discoveringIndividuals++;
				if (data[i].q10_12_2 === "1") 	sites.selectedSites_2.contactingIndividuals++;
				if (data[i].q10_13_2 === "1") 	sites.selectedSites_2.researchPapers++;
				if (data[i].q10_14_2 === "1") 	sites.selectedSites_2.links++;
				if (data[i].q10_15_2 === "1") 	sites.selectedSites_2.otherDiscussions++;
				if (data[i].q10_17_2 === "1") 	sites.selectedSites_2.metrics++;
			}

			if (data[i].selectedSites_3 === "1") {
				if (data[i].q10_1_3 === "1") 	sites.selectedSites_3.notProfessionally++;
				if (data[i].q10_2_3 === "1") 	sites.selectedSites_3.curiosity++;
				if (data[i].q10_3_3 === "1") 	sites.selectedSites_3.contact++;
				if (data[i].q10_4_3 === "1") 	sites.selectedSites_3.postContent++;
				if (data[i].q10_16_3 === "1") 	sites.selectedSites_3.discussingResearch++;
				if (data[i].q10_5_3 === "1") 	sites.selectedSites_3.discussingIssues++;
				if (data[i].q10_6_3 === "1") 	sites.selectedSites_3.commenting++;
				if (data[i].q10_7_3 === "1") 	sites.selectedSites_3.job++;
				if (data[i].q10_8_3 === "1") 	sites.selectedSites_3.funding++;
				if (data[i].q10_9_3 === "1") 	sites.selectedSites_3.discoveringPeers++;
				if (data[i].q10_10_3 === "1") 	sites.selectedSites_3.contactingPeers++;
				if (data[i].q10_11_3 === "1") 	sites.selectedSites_3.discoveringIndividuals++;
				if (data[i].q10_12_3 === "1") 	sites.selectedSites_3.contactingIndividuals++;
				if (data[i].q10_13_3 === "1") 	sites.selectedSites_3.researchPapers++;
				if (data[i].q10_14_3 === "1") 	sites.selectedSites_3.links++;
				if (data[i].q10_15_3 === "1") 	sites.selectedSites_3.otherDiscussions++;
				if (data[i].q10_17_3 === "1") 	sites.selectedSites_3.metrics++;
			}

			if (data[i].selectedSites_4 === "1") {
				if (data[i].q10_1_4 === "1") 	sites.selectedSites_4.notProfessionally++;
				if (data[i].q10_2_4 === "1") 	sites.selectedSites_4.curiosity++;
				if (data[i].q10_3_4 === "1") 	sites.selectedSites_4.contact++;
				if (data[i].q10_4_4 === "1") 	sites.selectedSites_4.postContent++;
				if (data[i].q10_16_4 === "1") 	sites.selectedSites_4.discussingResearch++;
				if (data[i].q10_5_4 === "1") 	sites.selectedSites_4.discussingIssues++;
				if (data[i].q10_6_4 === "1") 	sites.selectedSites_4.commenting++;
				if (data[i].q10_7_4 === "1") 	sites.selectedSites_4.job++;
				if (data[i].q10_8_4 === "1") 	sites.selectedSites_4.funding++;
				if (data[i].q10_9_4 === "1") 	sites.selectedSites_4.discoveringPeers++;
				if (data[i].q10_10_4 === "1") 	sites.selectedSites_4.contactingPeers++;
				if (data[i].q10_11_4 === "1") 	sites.selectedSites_4.discoveringIndividuals++;
				if (data[i].q10_12_4 === "1") 	sites.selectedSites_4.contactingIndividuals++;
				if (data[i].q10_13_4 === "1") 	sites.selectedSites_4.researchPapers++;
				if (data[i].q10_14_4 === "1") 	sites.selectedSites_4.links++;
				if (data[i].q10_15_4 === "1") 	sites.selectedSites_4.otherDiscussions++;
				if (data[i].q10_17_4 === "1") 	sites.selectedSites_4.metrics++;
			}

			if (data[i].selectedSites_5 === "1") {
				if (data[i].q10_1_5 === "1") 	sites.selectedSites_5.notProfessionally++;
				if (data[i].q10_2_5 === "1") 	sites.selectedSites_5.curiosity++;
				if (data[i].q10_3_5 === "1") 	sites.selectedSites_5.contact++;
				if (data[i].q10_4_5 === "1") 	sites.selectedSites_5.postContent++;
				if (data[i].q10_16_5 === "1") 	sites.selectedSites_5.discussingResearch++;
				if (data[i].q10_5_5 === "1") 	sites.selectedSites_5.discussingIssues++;
				if (data[i].q10_6_5 === "1") 	sites.selectedSites_5.commenting++;
				if (data[i].q10_7_5 === "1") 	sites.selectedSites_5.job++;
				if (data[i].q10_8_5 === "1") 	sites.selectedSites_5.funding++;
				if (data[i].q10_9_5 === "1") 	sites.selectedSites_5.discoveringPeers++;
				if (data[i].q10_10_5 === "1") 	sites.selectedSites_5.contactingPeers++;
				if (data[i].q10_11_5 === "1") 	sites.selectedSites_5.discoveringIndividuals++;
				if (data[i].q10_12_5 === "1") 	sites.selectedSites_5.contactingIndividuals++;
				if (data[i].q10_13_5 === "1") 	sites.selectedSites_5.researchPapers++;
				if (data[i].q10_14_5 === "1") 	sites.selectedSites_5.links++;
				if (data[i].q10_15_5 === "1") 	sites.selectedSites_5.otherDiscussions++;
				if (data[i].q10_17_5 === "1") 	sites.selectedSites_5.metrics++;
			}

			if (data[i].selectedSites_6 === "1") {
				if (data[i].q10_1_6 === "1") 	sites.selectedSites_6.notProfessionally++;
				if (data[i].q10_2_6 === "1") 	sites.selectedSites_6.curiosity++;
				if (data[i].q10_3_6 === "1") 	sites.selectedSites_6.contact++;
				if (data[i].q10_4_6 === "1") 	sites.selectedSites_6.postContent++;
				if (data[i].q10_16_6 === "1") 	sites.selectedSites_6.discussingResearch++;
				if (data[i].q10_5_6 === "1") 	sites.selectedSites_6.discussingIssues++;
				if (data[i].q10_6_6 === "1") 	sites.selectedSites_6.commenting++;
				if (data[i].q10_7_6 === "1") 	sites.selectedSites_6.job++;
				if (data[i].q10_8_6 === "1") 	sites.selectedSites_6.funding++;
				if (data[i].q10_9_6 === "1") 	sites.selectedSites_6.discoveringPeers++;
				if (data[i].q10_10_6 === "1") 	sites.selectedSites_6.contactingPeers++;
				if (data[i].q10_11_6 === "1") 	sites.selectedSites_6.discoveringIndividuals++;
				if (data[i].q10_12_6 === "1") 	sites.selectedSites_6.contactingIndividuals++;
				if (data[i].q10_13_6 === "1") 	sites.selectedSites_6.researchPapers++;
				if (data[i].q10_14_6 === "1") 	sites.selectedSites_6.links++;
				if (data[i].q10_15_6 === "1") 	sites.selectedSites_6.otherDiscussions++;
				if (data[i].q10_17_6 === "1") 	sites.selectedSites_6.metrics++;
			}

			if (data[i].selectedSites_7 === "1") {
				if (data[i].q10_1_7 === "1") 	sites.selectedSites_7.notProfessionally++;
				if (data[i].q10_2_7 === "1") 	sites.selectedSites_7.curiosity++;
				if (data[i].q10_3_7 === "1") 	sites.selectedSites_7.contact++;
				if (data[i].q10_4_7 === "1") 	sites.selectedSites_7.postContent++;
				if (data[i].q10_16_7 === "1") 	sites.selectedSites_7.discussingResearch++;
				if (data[i].q10_5_7 === "1") 	sites.selectedSites_7.discussingIssues++;
				if (data[i].q10_6_7 === "1") 	sites.selectedSites_7.commenting++;
				if (data[i].q10_7_7 === "1") 	sites.selectedSites_7.job++;
				if (data[i].q10_8_7 === "1") 	sites.selectedSites_7.funding++;
				if (data[i].q10_9_7 === "1") 	sites.selectedSites_7.discoveringPeers++;
				if (data[i].q10_10_7 === "1") 	sites.selectedSites_7.contactingPeers++;
				if (data[i].q10_11_7 === "1") 	sites.selectedSites_7.discoveringIndividuals++;
				if (data[i].q10_12_7 === "1") 	sites.selectedSites_7.contactingIndividuals++;
				if (data[i].q10_13_7 === "1") 	sites.selectedSites_7.researchPapers++;
				if (data[i].q10_14_7 === "1") 	sites.selectedSites_7.links++;
				if (data[i].q10_15_7 === "1") 	sites.selectedSites_7.otherDiscussions++;
				if (data[i].q10_17_7 === "1") 	sites.selectedSites_7.metrics++;
			}

			if (data[i].selectedSites_8 === "1") {
				if (data[i].q10_1_8 === "1") 	sites.selectedSites_8.notProfessionally++;
				if (data[i].q10_2_8 === "1") 	sites.selectedSites_8.curiosity++;
				if (data[i].q10_3_8 === "1") 	sites.selectedSites_8.contact++;
				if (data[i].q10_4_8 === "1") 	sites.selectedSites_8.postContent++;
				if (data[i].q10_16_8 === "1") 	sites.selectedSites_8.discussingResearch++;
				if (data[i].q10_5_8 === "1") 	sites.selectedSites_8.discussingIssues++;
				if (data[i].q10_6_8 === "1") 	sites.selectedSites_8.commenting++;
				if (data[i].q10_7_8 === "1") 	sites.selectedSites_8.job++;
				if (data[i].q10_8_8 === "1") 	sites.selectedSites_8.funding++;
				if (data[i].q10_9_8 === "1") 	sites.selectedSites_8.discoveringPeers++;
				if (data[i].q10_10_8 === "1") 	sites.selectedSites_8.contactingPeers++;
				if (data[i].q10_11_8 === "1") 	sites.selectedSites_8.discoveringIndividuals++;
				if (data[i].q10_12_8 === "1") 	sites.selectedSites_8.contactingIndividuals++;
				if (data[i].q10_13_8 === "1") 	sites.selectedSites_8.researchPapers++;
				if (data[i].q10_14_8 === "1") 	sites.selectedSites_8.links++;
				if (data[i].q10_15_8 === "1") 	sites.selectedSites_8.otherDiscussions++;
				if (data[i].q10_17_8 === "1") 	sites.selectedSites_8.metrics++;
			}

			if (data[i].selectedSites_9 === "1") {
				if (data[i].q10_1_9 === "1") 	sites.selectedSites_9.notProfessionally++;
				if (data[i].q10_2_9 === "1") 	sites.selectedSites_9.curiosity++;
				if (data[i].q10_3_9 === "1") 	sites.selectedSites_9.contact++;
				if (data[i].q10_4_9 === "1") 	sites.selectedSites_9.postContent++;
				if (data[i].q10_16_9 === "1") 	sites.selectedSites_9.discussingResearch++;
				if (data[i].q10_5_9 === "1") 	sites.selectedSites_9.discussingIssues++;
				if (data[i].q10_6_9 === "1") 	sites.selectedSites_9.commenting++;
				if (data[i].q10_7_9 === "1") 	sites.selectedSites_9.job++;
				if (data[i].q10_8_9 === "1") 	sites.selectedSites_9.funding++;
				if (data[i].q10_9_9 === "1") 	sites.selectedSites_9.discoveringPeers++;
				if (data[i].q10_10_9 === "1") 	sites.selectedSites_9.contactingPeers++;
				if (data[i].q10_11_9 === "1") 	sites.selectedSites_9.discoveringIndividuals++;
				if (data[i].q10_12_9 === "1") 	sites.selectedSites_9.contactingIndividuals++;
				if (data[i].q10_13_9 === "1") 	sites.selectedSites_9.researchPapers++;
				if (data[i].q10_14_9 === "1") 	sites.selectedSites_9.links++;
				if (data[i].q10_15_9 === "1") 	sites.selectedSites_9.otherDiscussions++;
				if (data[i].q10_17_9 === "1") 	sites.selectedSites_9.metrics++;
			}

			if (data[i].selectedSites_10 === "1") {
				if (data[i].q10_1_10 === "1") 	sites.selectedSites_10.notProfessionally++;
				if (data[i].q10_2_10 === "1") 	sites.selectedSites_10.curiosity++;
				if (data[i].q10_3_10 === "1") 	sites.selectedSites_10.contact++;
				if (data[i].q10_4_10 === "1") 	sites.selectedSites_10.postContent++;
				if (data[i].q10_16_10 === "1") 	sites.selectedSites_10.discussingResearch++;
				if (data[i].q10_5_10 === "1") 	sites.selectedSites_10.discussingIssues++;
				if (data[i].q10_6_10 === "1") 	sites.selectedSites_10.commenting++;
				if (data[i].q10_7_10 === "1") 	sites.selectedSites_10.job++;
				if (data[i].q10_8_10 === "1") 	sites.selectedSites_10.funding++;
				if (data[i].q10_9_10 === "1") 	sites.selectedSites_10.discoveringPeers++;
				if (data[i].q10_10_10 === "1") 	sites.selectedSites_10.contactingPeers++;
				if (data[i].q10_11_10 === "1") 	sites.selectedSites_10.discoveringIndividuals++;
				if (data[i].q10_12_10 === "1") 	sites.selectedSites_10.contactingIndividuals++;
				if (data[i].q10_13_10 === "1") 	sites.selectedSites_10.researchPapers++;
				if (data[i].q10_14_10 === "1") 	sites.selectedSites_10.links++;
				if (data[i].q10_15_10 === "1") 	sites.selectedSites_10.otherDiscussions++;
				if (data[i].q10_17_10 === "1") 	sites.selectedSites_10.metrics++;
			}

			if (data[i].selectedSites_11 === "1") {
				if (data[i].q10_1_11 === "1") 	sites.selectedSites_11.notProfessionally++;
				if (data[i].q10_2_11 === "1") 	sites.selectedSites_11.curiosity++;
				if (data[i].q10_3_11 === "1") 	sites.selectedSites_11.contact++;
				if (data[i].q10_4_11 === "1") 	sites.selectedSites_11.postContent++;
				if (data[i].q10_16_11 === "1") 	sites.selectedSites_11.discussingResearch++;
				if (data[i].q10_5_11 === "1") 	sites.selectedSites_11.discussingIssues++;
				if (data[i].q10_6_11 === "1") 	sites.selectedSites_11.commenting++;
				if (data[i].q10_7_11 === "1") 	sites.selectedSites_11.job++;
				if (data[i].q10_8_11 === "1") 	sites.selectedSites_11.funding++;
				if (data[i].q10_9_11 === "1") 	sites.selectedSites_11.discoveringPeers++;
				if (data[i].q10_10_11 === "1") 	sites.selectedSites_11.contactingPeers++;
				if (data[i].q10_11_11 === "1") 	sites.selectedSites_11.discoveringIndividuals++;
				if (data[i].q10_12_11 === "1") 	sites.selectedSites_11.contactingIndividuals++;
				if (data[i].q10_13_11 === "1") 	sites.selectedSites_11.researchPapers++;
				if (data[i].q10_14_11 === "1") 	sites.selectedSites_11.links++;
				if (data[i].q10_15_11 === "1") 	sites.selectedSites_11.otherDiscussions++;
				if (data[i].q10_17_11 === "1") 	sites.selectedSites_11.metrics++;
			}

			if (data[i].selectedSites_12 === "1") {
				if (data[i].q10_1_12 === "1") 	sites.selectedSites_12.notProfessionally++;
				if (data[i].q10_2_12 === "1") 	sites.selectedSites_12.curiosity++;
				if (data[i].q10_3_12 === "1") 	sites.selectedSites_12.contact++;
				if (data[i].q10_4_12 === "1") 	sites.selectedSites_12.postContent++;
				if (data[i].q10_16_12 === "1") 	sites.selectedSites_12.discussingResearch++;
				if (data[i].q10_5_12 === "1") 	sites.selectedSites_12.discussingIssues++;
				if (data[i].q10_6_12 === "1") 	sites.selectedSites_12.commenting++;
				if (data[i].q10_7_12 === "1") 	sites.selectedSites_12.job++;
				if (data[i].q10_8_12 === "1") 	sites.selectedSites_12.funding++;
				if (data[i].q10_9_12 === "1") 	sites.selectedSites_12.discoveringPeers++;
				if (data[i].q10_10_12 === "1") 	sites.selectedSites_12.contactingPeers++;
				if (data[i].q10_11_12 === "1") 	sites.selectedSites_12.discoveringIndividuals++;
				if (data[i].q10_12_12 === "1") 	sites.selectedSites_12.contactingIndividuals++;
				if (data[i].q10_13_12 === "1") 	sites.selectedSites_12.researchPapers++;
				if (data[i].q10_14_12 === "1") 	sites.selectedSites_12.links++;
				if (data[i].q10_15_12 === "1") 	sites.selectedSites_12.otherDiscussions++;
				if (data[i].q10_17_12 === "1") 	sites.selectedSites_12.metrics++;
			}

			if (data[i].selectedSites_13 === "1") {
				if (data[i].q10_1_13 === "1") 	sites.selectedSites_13.notProfessionally++;
				if (data[i].q10_2_13 === "1") 	sites.selectedSites_13.curiosity++;
				if (data[i].q10_3_13 === "1") 	sites.selectedSites_13.contact++;
				if (data[i].q10_4_13 === "1") 	sites.selectedSites_13.postContent++;
				if (data[i].q10_16_13 === "1") 	sites.selectedSites_13.discussingResearch++;
				if (data[i].q10_5_13 === "1") 	sites.selectedSites_13.discussingIssues++;
				if (data[i].q10_6_13 === "1") 	sites.selectedSites_13.commenting++;
				if (data[i].q10_7_13 === "1") 	sites.selectedSites_13.job++;
				if (data[i].q10_8_13 === "1") 	sites.selectedSites_13.funding++;
				if (data[i].q10_9_13 === "1") 	sites.selectedSites_13.discoveringPeers++;
				if (data[i].q10_10_13 === "1") 	sites.selectedSites_13.contactingPeers++;
				if (data[i].q10_11_13 === "1") 	sites.selectedSites_13.discoveringIndividuals++;
				if (data[i].q10_12_13 === "1") 	sites.selectedSites_13.contactingIndividuals++;
				if (data[i].q10_13_13 === "1") 	sites.selectedSites_13.researchPapers++;
				if (data[i].q10_14_13 === "1") 	sites.selectedSites_13.links++;
				if (data[i].q10_15_13 === "1") 	sites.selectedSites_13.otherDiscussions++;
				if (data[i].q10_17_13 === "1") 	sites.selectedSites_13.metrics++;
			}

			if (data[i].selectedSites_14 === "1") {
				if (data[i].q10_1_14 === "1") 	sites.selectedSites_14.notProfessionally++;
				if (data[i].q10_2_14 === "1") 	sites.selectedSites_14.curiosity++;
				if (data[i].q10_3_14 === "1") 	sites.selectedSites_14.contact++;
				if (data[i].q10_4_14 === "1") 	sites.selectedSites_14.postContent++;
				if (data[i].q10_16_14 === "1") 	sites.selectedSites_14.discussingResearch++;
				if (data[i].q10_5_14 === "1") 	sites.selectedSites_14.discussingIssues++;
				if (data[i].q10_6_14 === "1") 	sites.selectedSites_14.commenting++;
				if (data[i].q10_7_14 === "1") 	sites.selectedSites_14.job++;
				if (data[i].q10_8_14 === "1") 	sites.selectedSites_14.funding++;
				if (data[i].q10_9_14 === "1") 	sites.selectedSites_14.discoveringPeers++;
				if (data[i].q10_10_14 === "1") 	sites.selectedSites_14.contactingPeers++;
				if (data[i].q10_11_14 === "1") 	sites.selectedSites_14.discoveringIndividuals++;
				if (data[i].q10_12_14 === "1") 	sites.selectedSites_14.contactingIndividuals++;
				if (data[i].q10_13_14 === "1") 	sites.selectedSites_14.researchPapers++;
				if (data[i].q10_14_14 === "1") 	sites.selectedSites_14.links++;
				if (data[i].q10_15_14 === "1") 	sites.selectedSites_14.otherDiscussions++;
				if (data[i].q10_17_14 === "1") 	sites.selectedSites_14.metrics++;
			}

			if (data[i].selectedSites_15 === "1") {
				if (data[i].q10_1_15 === "1") 	sites.selectedSites_15.notProfessionally++;
				if (data[i].q10_2_15 === "1") 	sites.selectedSites_15.curiosity++;
				if (data[i].q10_3_15 === "1") 	sites.selectedSites_15.contact++;
				if (data[i].q10_4_15 === "1") 	sites.selectedSites_15.postContent++;
				if (data[i].q10_16_15 === "1") 	sites.selectedSites_15.discussingResearch++;
				if (data[i].q10_5_15 === "1") 	sites.selectedSites_15.discussingIssues++;
				if (data[i].q10_6_15 === "1") 	sites.selectedSites_15.commenting++;
				if (data[i].q10_7_15 === "1") 	sites.selectedSites_15.job++;
				if (data[i].q10_8_15 === "1") 	sites.selectedSites_15.funding++;
				if (data[i].q10_9_15 === "1") 	sites.selectedSites_15.discoveringPeers++;
				if (data[i].q10_10_15 === "1") 	sites.selectedSites_15.contactingPeers++;
				if (data[i].q10_11_15 === "1") 	sites.selectedSites_15.discoveringIndividuals++;
				if (data[i].q10_12_15 === "1") 	sites.selectedSites_15.contactingIndividuals++;
				if (data[i].q10_13_15 === "1") 	sites.selectedSites_15.researchPapers++;
				if (data[i].q10_14_15 === "1") 	sites.selectedSites_15.links++;
				if (data[i].q10_15_15 === "1") 	sites.selectedSites_15.otherDiscussions++;
				if (data[i].q10_17_15 === "1") 	sites.selectedSites_15.metrics++;
			}

			if (data[i].selectedSites_16 === "1") {
				if (data[i].q10_1_16 === "1") 	sites.selectedSites_16.notProfessionally++;
				if (data[i].q10_2_16 === "1") 	sites.selectedSites_16.curiosity++;
				if (data[i].q10_3_16 === "1") 	sites.selectedSites_16.contact++;
				if (data[i].q10_4_16 === "1") 	sites.selectedSites_16.postContent++;
				if (data[i].q10_16_16 === "1") 	sites.selectedSites_16.discussingResearch++;
				if (data[i].q10_5_16 === "1") 	sites.selectedSites_16.discussingIssues++;
				if (data[i].q10_6_16 === "1") 	sites.selectedSites_16.commenting++;
				if (data[i].q10_7_16 === "1") 	sites.selectedSites_16.job++;
				if (data[i].q10_8_16 === "1") 	sites.selectedSites_16.funding++;
				if (data[i].q10_9_16 === "1") 	sites.selectedSites_16.discoveringPeers++;
				if (data[i].q10_10_16 === "1") 	sites.selectedSites_16.contactingPeers++;
				if (data[i].q10_11_16 === "1") 	sites.selectedSites_16.discoveringIndividuals++;
				if (data[i].q10_12_16 === "1") 	sites.selectedSites_16.contactingIndividuals++;
				if (data[i].q10_13_16 === "1") 	sites.selectedSites_16.researchPapers++;
				if (data[i].q10_14_16 === "1") 	sites.selectedSites_16.links++;
				if (data[i].q10_15_16 === "1") 	sites.selectedSites_16.otherDiscussions++;
				if (data[i].q10_17_16 === "1") 	sites.selectedSites_16.metrics++;
			}

			if (data[i].selectedSites_17 === "1") {
				if (data[i].q10_1_17 === "1") 	sites.selectedSites_17.notProfessionally++;
				if (data[i].q10_2_17 === "1") 	sites.selectedSites_17.curiosity++;
				if (data[i].q10_3_17 === "1") 	sites.selectedSites_17.contact++;
				if (data[i].q10_4_17 === "1") 	sites.selectedSites_17.postContent++;
				if (data[i].q10_16_17 === "1") 	sites.selectedSites_17.discussingResearch++;
				if (data[i].q10_5_17 === "1") 	sites.selectedSites_17.discussingIssues++;
				if (data[i].q10_6_17 === "1") 	sites.selectedSites_17.commenting++;
				if (data[i].q10_7_17 === "1") 	sites.selectedSites_17.job++;
				if (data[i].q10_8_17 === "1") 	sites.selectedSites_17.funding++;
				if (data[i].q10_9_17 === "1") 	sites.selectedSites_17.discoveringPeers++;
				if (data[i].q10_10_17 === "1") 	sites.selectedSites_17.contactingPeers++;
				if (data[i].q10_11_17 === "1") 	sites.selectedSites_17.discoveringIndividuals++;
				if (data[i].q10_12_17 === "1") 	sites.selectedSites_17.contactingIndividuals++;
				if (data[i].q10_13_17 === "1") 	sites.selectedSites_17.researchPapers++;
				if (data[i].q10_14_17 === "1") 	sites.selectedSites_17.links++;
				if (data[i].q10_15_17 === "1") 	sites.selectedSites_17.otherDiscussions++;
				if (data[i].q10_17_17 === "1") 	sites.selectedSites_17.metrics++;
			}



		};
		console.log(sites);


		console.log(
			'<table>\n' +

			'<thead>' +
			'<tr><th>site</th>' +
			'<th>Sot professionally</th>' +
			'<th>Curiosity</th>' +
			'<th>Contact</th>' +
			'<th>Post content</th>' +
			'<th>Discussing research</th>' +
			'<th>Discussing issues</th>' +
			'<th>Commenting</th>' +
			'<th>Job</th>' +
			'<th>Funding</th>' +
			'<th>Discovering peers</th>' +
			'<th>Contacting peers</th>' +
			'<th>Discovering individuals</th>' +
			'<th>Contacting individuals</th>' +
			'<th>Research papers</th>' +
			'<th>Links</th>' +
			'<th>Other discussions</th>' +
			'<th>Metrics</th></tr>' +
			'</thead>\n' +
			'<tbody>\n' +
			'<tr><td>Twitter</td>' +
			'<td>' + sites.selectedSites_1.notProfessionally + '</td>' + 
			'<td>' + sites.selectedSites_1.curiosity + '</td>' + 
			'<td>' + sites.selectedSites_1.contact + '</td>' + 
			'<td>' + sites.selectedSites_1.postContent + '</td>' + 
			'<td>' + sites.selectedSites_1.discussingResearch + '</td>' + 
			'<td>' + sites.selectedSites_1.discussingIssues + '</td>' + 
			'<td>' + sites.selectedSites_1.commenting + '</td>' + 
			'<td>' + sites.selectedSites_1.job + '</td>' + 
			'<td>' + sites.selectedSites_1.funding + '</td>' + 
			'<td>' + sites.selectedSites_1.discoveringPeers + '</td>' + 
			'<td>' + sites.selectedSites_1.contactingPeers + '</td>' + 
			'<td>' + sites.selectedSites_1.discoveringIndividuals + '</td>' + 
			'<td>' + sites.selectedSites_1.contactingIndividuals + '</td>' + 
			'<td>' + sites.selectedSites_1.researchPapers + '</td>' + 
			'<td>' + sites.selectedSites_1.links + '</td>' + 
			'<td>' + sites.selectedSites_1.otherDiscussions + '</td>' + 
			'<td>' + sites.selectedSites_1.metrics + '</td></tr>\n' +
			'<tr><td>Facebook</td>' +
			'<td>' + sites.selectedSites_2.notProfessionally + '</td>' + 
			'<td>' + sites.selectedSites_2.curiosity + '</td>' + 
			'<td>' + sites.selectedSites_2.contact + '</td>' + 
			'<td>' + sites.selectedSites_2.postContent + '</td>' + 
			'<td>' + sites.selectedSites_2.discussingResearch + '</td>' + 
			'<td>' + sites.selectedSites_2.discussingIssues + '</td>' + 
			'<td>' + sites.selectedSites_2.commenting + '</td>' + 
			'<td>' + sites.selectedSites_2.job + '</td>' + 
			'<td>' + sites.selectedSites_2.funding + '</td>' + 
			'<td>' + sites.selectedSites_2.discoveringPeers + '</td>' + 
			'<td>' + sites.selectedSites_2.contactingPeers + '</td>' + 
			'<td>' + sites.selectedSites_2.discoveringIndividuals + '</td>' + 
			'<td>' + sites.selectedSites_2.contactingIndividuals + '</td>' + 
			'<td>' + sites.selectedSites_2.researchPapers + '</td>' + 
			'<td>' + sites.selectedSites_2.links + '</td>' + 
			'<td>' + sites.selectedSites_2.otherDiscussions + '</td>' + 
			'<td>' + sites.selectedSites_2.metrics + '</td></tr>\n' +
			'<tr><td>Frontiers</td>' +
			'<td>' + sites.selectedSites_3.notProfessionally + '</td>' + 
			'<td>' + sites.selectedSites_3.curiosity + '</td>' + 
			'<td>' + sites.selectedSites_3.contact + '</td>' + 
			'<td>' + sites.selectedSites_3.postContent + '</td>' + 
			'<td>' + sites.selectedSites_3.discussingResearch + '</td>' + 
			'<td>' + sites.selectedSites_3.discussingIssues + '</td>' + 
			'<td>' + sites.selectedSites_3.commenting + '</td>' + 
			'<td>' + sites.selectedSites_3.job + '</td>' + 
			'<td>' + sites.selectedSites_3.funding + '</td>' + 
			'<td>' + sites.selectedSites_3.discoveringPeers + '</td>' + 
			'<td>' + sites.selectedSites_3.contactingPeers + '</td>' + 
			'<td>' + sites.selectedSites_3.discoveringIndividuals + '</td>' + 
			'<td>' + sites.selectedSites_3.contactingIndividuals + '</td>' + 
			'<td>' + sites.selectedSites_3.researchPapers + '</td>' + 
			'<td>' + sites.selectedSites_3.links + '</td>' + 
			'<td>' + sites.selectedSites_3.otherDiscussions + '</td>' + 
			'<td>' + sites.selectedSites_3.metrics + '</td></tr>\n' +
			'<tr><td>Academiaedu</td>' +
			'<td>' + sites.selectedSites_4.notProfessionally + '</td>' + 
			'<td>' + sites.selectedSites_4.curiosity + '</td>' + 
			'<td>' + sites.selectedSites_4.contact + '</td>' + 
			'<td>' + sites.selectedSites_4.postContent + '</td>' + 
			'<td>' + sites.selectedSites_4.discussingResearch + '</td>' + 
			'<td>' + sites.selectedSites_4.discussingIssues + '</td>' + 
			'<td>' + sites.selectedSites_4.commenting + '</td>' + 
			'<td>' + sites.selectedSites_4.job + '</td>' + 
			'<td>' + sites.selectedSites_4.funding + '</td>' + 
			'<td>' + sites.selectedSites_4.discoveringPeers + '</td>' + 
			'<td>' + sites.selectedSites_4.contactingPeers + '</td>' + 
			'<td>' + sites.selectedSites_4.discoveringIndividuals + '</td>' + 
			'<td>' + sites.selectedSites_4.contactingIndividuals + '</td>' + 
			'<td>' + sites.selectedSites_4.researchPapers + '</td>' + 
			'<td>' + sites.selectedSites_4.links + '</td>' + 
			'<td>' + sites.selectedSites_4.otherDiscussions + '</td>' + 
			'<td>' + sites.selectedSites_4.metrics + '</td></tr>\n' +
			'<tr><td>ResearchGate</td>' +
			'<td>' + sites.selectedSites_5.notProfessionally + '</td>' + 
			'<td>' + sites.selectedSites_5.curiosity + '</td>' + 
			'<td>' + sites.selectedSites_5.contact + '</td>' + 
			'<td>' + sites.selectedSites_5.postContent + '</td>' + 
			'<td>' + sites.selectedSites_5.discussingResearch + '</td>' + 
			'<td>' + sites.selectedSites_5.discussingIssues + '</td>' + 
			'<td>' + sites.selectedSites_5.commenting + '</td>' + 
			'<td>' + sites.selectedSites_5.job + '</td>' + 
			'<td>' + sites.selectedSites_5.funding + '</td>' + 
			'<td>' + sites.selectedSites_5.discoveringPeers + '</td>' + 
			'<td>' + sites.selectedSites_5.contactingPeers + '</td>' + 
			'<td>' + sites.selectedSites_5.discoveringIndividuals + '</td>' + 
			'<td>' + sites.selectedSites_5.contactingIndividuals + '</td>' + 
			'<td>' + sites.selectedSites_5.researchPapers + '</td>' + 
			'<td>' + sites.selectedSites_5.links + '</td>' + 
			'<td>' + sites.selectedSites_5.otherDiscussions + '</td>' + 
			'<td>' + sites.selectedSites_5.metrics + '</td></tr>\n' +
			'<tr><td>LinkedIn</td>' +
			'<td>' + sites.selectedSites_6.notProfessionally + '</td>' + 
			'<td>' + sites.selectedSites_6.curiosity + '</td>' + 
			'<td>' + sites.selectedSites_6.contact + '</td>' + 
			'<td>' + sites.selectedSites_6.postContent + '</td>' + 
			'<td>' + sites.selectedSites_6.discussingResearch + '</td>' + 
			'<td>' + sites.selectedSites_6.discussingIssues + '</td>' + 
			'<td>' + sites.selectedSites_6.commenting + '</td>' + 
			'<td>' + sites.selectedSites_6.job + '</td>' + 
			'<td>' + sites.selectedSites_6.funding + '</td>' + 
			'<td>' + sites.selectedSites_6.discoveringPeers + '</td>' + 
			'<td>' + sites.selectedSites_6.contactingPeers + '</td>' + 
			'<td>' + sites.selectedSites_6.discoveringIndividuals + '</td>' + 
			'<td>' + sites.selectedSites_6.contactingIndividuals + '</td>' + 
			'<td>' + sites.selectedSites_6.researchPapers + '</td>' + 
			'<td>' + sites.selectedSites_6.links + '</td>' + 
			'<td>' + sites.selectedSites_6.otherDiscussions + '</td>' + 
			'<td>' + sites.selectedSites_6.metrics + '</td></tr>\n' +
			'<tr><td>BiomedExperts</td>' +
			'<td>' + sites.selectedSites_7.notProfessionally + '</td>' + 
			'<td>' + sites.selectedSites_7.curiosity + '</td>' + 
			'<td>' + sites.selectedSites_7.contact + '</td>' + 
			'<td>' + sites.selectedSites_7.postContent + '</td>' + 
			'<td>' + sites.selectedSites_7.discussingResearch + '</td>' + 
			'<td>' + sites.selectedSites_7.discussingIssues + '</td>' + 
			'<td>' + sites.selectedSites_7.commenting + '</td>' + 
			'<td>' + sites.selectedSites_7.job + '</td>' + 
			'<td>' + sites.selectedSites_7.funding + '</td>' + 
			'<td>' + sites.selectedSites_7.discoveringPeers + '</td>' + 
			'<td>' + sites.selectedSites_7.contactingPeers + '</td>' + 
			'<td>' + sites.selectedSites_7.discoveringIndividuals + '</td>' + 
			'<td>' + sites.selectedSites_7.contactingIndividuals + '</td>' + 
			'<td>' + sites.selectedSites_7.researchPapers + '</td>' + 
			'<td>' + sites.selectedSites_7.links + '</td>' + 
			'<td>' + sites.selectedSites_7.otherDiscussions + '</td>' + 
			'<td>' + sites.selectedSites_7.metrics + '</td></tr>\n' +
			'<tr><td>Google+</td>' +
			'<td>' + sites.selectedSites_8.notProfessionally + '</td>' + 
			'<td>' + sites.selectedSites_8.curiosity + '</td>' + 
			'<td>' + sites.selectedSites_8.contact + '</td>' + 
			'<td>' + sites.selectedSites_8.postContent + '</td>' + 
			'<td>' + sites.selectedSites_8.discussingResearch + '</td>' + 
			'<td>' + sites.selectedSites_8.discussingIssues + '</td>' + 
			'<td>' + sites.selectedSites_8.commenting + '</td>' + 
			'<td>' + sites.selectedSites_8.job + '</td>' + 
			'<td>' + sites.selectedSites_8.funding + '</td>' + 
			'<td>' + sites.selectedSites_8.discoveringPeers + '</td>' + 
			'<td>' + sites.selectedSites_8.contactingPeers + '</td>' + 
			'<td>' + sites.selectedSites_8.discoveringIndividuals + '</td>' + 
			'<td>' + sites.selectedSites_8.contactingIndividuals + '</td>' + 
			'<td>' + sites.selectedSites_8.researchPapers + '</td>' + 
			'<td>' + sites.selectedSites_8.links + '</td>' + 
			'<td>' + sites.selectedSites_8.otherDiscussions + '</td>' + 
			'<td>' + sites.selectedSites_8.metrics + '</td></tr>\n' +
			'<tr><td>Mendeley</td>' +
			'<td>' + sites.selectedSites_9.notProfessionally + '</td>' + 
			'<td>' + sites.selectedSites_9.curiosity + '</td>' + 
			'<td>' + sites.selectedSites_9.contact + '</td>' + 
			'<td>' + sites.selectedSites_9.postContent + '</td>' + 
			'<td>' + sites.selectedSites_9.discussingResearch + '</td>' + 
			'<td>' + sites.selectedSites_9.discussingIssues + '</td>' + 
			'<td>' + sites.selectedSites_9.commenting + '</td>' + 
			'<td>' + sites.selectedSites_9.job + '</td>' + 
			'<td>' + sites.selectedSites_9.funding + '</td>' + 
			'<td>' + sites.selectedSites_9.discoveringPeers + '</td>' + 
			'<td>' + sites.selectedSites_9.contactingPeers + '</td>' + 
			'<td>' + sites.selectedSites_9.discoveringIndividuals + '</td>' + 
			'<td>' + sites.selectedSites_9.contactingIndividuals + '</td>' + 
			'<td>' + sites.selectedSites_9.researchPapers + '</td>' + 
			'<td>' + sites.selectedSites_9.links + '</td>' + 
			'<td>' + sites.selectedSites_9.otherDiscussions + '</td>' + 
			'<td>' + sites.selectedSites_9.metrics + '</td></tr>\n' +
			'<tr><td>Pubchase</td>' +
			'<td>' + sites.selectedSites_10.notProfessionally + '</td>' + 
			'<td>' + sites.selectedSites_10.curiosity + '</td>' + 
			'<td>' + sites.selectedSites_10.contact + '</td>' + 
			'<td>' + sites.selectedSites_10.postContent + '</td>' + 
			'<td>' + sites.selectedSites_10.discussingResearch + '</td>' + 
			'<td>' + sites.selectedSites_10.discussingIssues + '</td>' + 
			'<td>' + sites.selectedSites_10.commenting + '</td>' + 
			'<td>' + sites.selectedSites_10.job + '</td>' + 
			'<td>' + sites.selectedSites_10.funding + '</td>' + 
			'<td>' + sites.selectedSites_10.discoveringPeers + '</td>' + 
			'<td>' + sites.selectedSites_10.contactingPeers + '</td>' + 
			'<td>' + sites.selectedSites_10.discoveringIndividuals + '</td>' + 
			'<td>' + sites.selectedSites_10.contactingIndividuals + '</td>' + 
			'<td>' + sites.selectedSites_10.researchPapers + '</td>' + 
			'<td>' + sites.selectedSites_10.links + '</td>' + 
			'<td>' + sites.selectedSites_10.otherDiscussions + '</td>' + 
			'<td>' + sites.selectedSites_10.metrics + '</td></tr>\n' +
			'<tr><td>My Science Work</td>' +
			'<td>' + sites.selectedSites_11.notProfessionally + '</td>' + 
			'<td>' + sites.selectedSites_11.curiosity + '</td>' + 
			'<td>' + sites.selectedSites_11.contact + '</td>' + 
			'<td>' + sites.selectedSites_11.postContent + '</td>' + 
			'<td>' + sites.selectedSites_11.discussingResearch + '</td>' + 
			'<td>' + sites.selectedSites_11.discussingIssues + '</td>' + 
			'<td>' + sites.selectedSites_11.commenting + '</td>' + 
			'<td>' + sites.selectedSites_11.job + '</td>' + 
			'<td>' + sites.selectedSites_11.funding + '</td>' + 
			'<td>' + sites.selectedSites_11.discoveringPeers + '</td>' + 
			'<td>' + sites.selectedSites_11.contactingPeers + '</td>' + 
			'<td>' + sites.selectedSites_11.discoveringIndividuals + '</td>' + 
			'<td>' + sites.selectedSites_11.contactingIndividuals + '</td>' + 
			'<td>' + sites.selectedSites_11.researchPapers + '</td>' + 
			'<td>' + sites.selectedSites_11.links + '</td>' + 
			'<td>' + sites.selectedSites_11.otherDiscussions + '</td>' + 
			'<td>' + sites.selectedSites_11.metrics + '</td></tr>\n' +
			'<tr><td>Google Scholar</td>' +
			'<td>' + sites.selectedSites_12.notProfessionally + '</td>' + 
			'<td>' + sites.selectedSites_12.curiosity + '</td>' + 
			'<td>' + sites.selectedSites_12.contact + '</td>' + 
			'<td>' + sites.selectedSites_12.postContent + '</td>' + 
			'<td>' + sites.selectedSites_12.discussingResearch + '</td>' + 
			'<td>' + sites.selectedSites_12.discussingIssues + '</td>' + 
			'<td>' + sites.selectedSites_12.commenting + '</td>' + 
			'<td>' + sites.selectedSites_12.job + '</td>' + 
			'<td>' + sites.selectedSites_12.funding + '</td>' + 
			'<td>' + sites.selectedSites_12.discoveringPeers + '</td>' + 
			'<td>' + sites.selectedSites_12.contactingPeers + '</td>' + 
			'<td>' + sites.selectedSites_12.discoveringIndividuals + '</td>' + 
			'<td>' + sites.selectedSites_12.contactingIndividuals + '</td>' + 
			'<td>' + sites.selectedSites_12.researchPapers + '</td>' + 
			'<td>' + sites.selectedSites_12.links + '</td>' + 
			'<td>' + sites.selectedSites_12.otherDiscussions + '</td>' + 
			'<td>' + sites.selectedSites_12.metrics + '</td></tr>\n' +
			'<tr><td>Microsoft Academic Search</td>' +
			'<td>' + sites.selectedSites_13.notProfessionally + '</td>' + 
			'<td>' + sites.selectedSites_13.curiosity + '</td>' + 
			'<td>' + sites.selectedSites_13.contact + '</td>' + 
			'<td>' + sites.selectedSites_13.postContent + '</td>' + 
			'<td>' + sites.selectedSites_13.discussingResearch + '</td>' + 
			'<td>' + sites.selectedSites_13.discussingIssues + '</td>' + 
			'<td>' + sites.selectedSites_13.commenting + '</td>' + 
			'<td>' + sites.selectedSites_13.job + '</td>' + 
			'<td>' + sites.selectedSites_13.funding + '</td>' + 
			'<td>' + sites.selectedSites_13.discoveringPeers + '</td>' + 
			'<td>' + sites.selectedSites_13.contactingPeers + '</td>' + 
			'<td>' + sites.selectedSites_13.discoveringIndividuals + '</td>' + 
			'<td>' + sites.selectedSites_13.contactingIndividuals + '</td>' + 
			'<td>' + sites.selectedSites_13.researchPapers + '</td>' + 
			'<td>' + sites.selectedSites_13.links + '</td>' + 
			'<td>' + sites.selectedSites_13.otherDiscussions + '</td>' + 
			'<td>' + sites.selectedSites_13.metrics + '</td></tr>\n' +
			'<tr><td>ORCID</td>' +
			'<td>' + sites.selectedSites_14.notProfessionally + '</td>' + 
			'<td>' + sites.selectedSites_14.curiosity + '</td>' + 
			'<td>' + sites.selectedSites_14.contact + '</td>' + 
			'<td>' + sites.selectedSites_14.postContent + '</td>' + 
			'<td>' + sites.selectedSites_14.discussingResearch + '</td>' + 
			'<td>' + sites.selectedSites_14.discussingIssues + '</td>' + 
			'<td>' + sites.selectedSites_14.commenting + '</td>' + 
			'<td>' + sites.selectedSites_14.job + '</td>' + 
			'<td>' + sites.selectedSites_14.funding + '</td>' + 
			'<td>' + sites.selectedSites_14.discoveringPeers + '</td>' + 
			'<td>' + sites.selectedSites_14.contactingPeers + '</td>' + 
			'<td>' + sites.selectedSites_14.discoveringIndividuals + '</td>' + 
			'<td>' + sites.selectedSites_14.contactingIndividuals + '</td>' + 
			'<td>' + sites.selectedSites_14.researchPapers + '</td>' + 
			'<td>' + sites.selectedSites_14.links + '</td>' + 
			'<td>' + sites.selectedSites_14.otherDiscussions + '</td>' + 
			'<td>' + sites.selectedSites_14.metrics + '</td></tr>\n' +
			'<tr><td>ResearcherID</td>' +
			'<td>' + sites.selectedSites_15.notProfessionally + '</td>' + 
			'<td>' + sites.selectedSites_15.curiosity + '</td>' + 
			'<td>' + sites.selectedSites_15.contact + '</td>' + 
			'<td>' + sites.selectedSites_15.postContent + '</td>' + 
			'<td>' + sites.selectedSites_15.discussingResearch + '</td>' + 
			'<td>' + sites.selectedSites_15.discussingIssues + '</td>' + 
			'<td>' + sites.selectedSites_15.commenting + '</td>' + 
			'<td>' + sites.selectedSites_15.job + '</td>' + 
			'<td>' + sites.selectedSites_15.funding + '</td>' + 
			'<td>' + sites.selectedSites_15.discoveringPeers + '</td>' + 
			'<td>' + sites.selectedSites_15.contactingPeers + '</td>' + 
			'<td>' + sites.selectedSites_15.discoveringIndividuals + '</td>' + 
			'<td>' + sites.selectedSites_15.contactingIndividuals + '</td>' + 
			'<td>' + sites.selectedSites_15.researchPapers + '</td>' + 
			'<td>' + sites.selectedSites_15.links + '</td>' + 
			'<td>' + sites.selectedSites_15.otherDiscussions + '</td>' + 
			'<td>' + sites.selectedSites_15.metrics + '</td></tr>\n' +
			'<tr><td>Figshare</td>' +
			'<td>' + sites.selectedSites_16.notProfessionally + '</td>' + 
			'<td>' + sites.selectedSites_16.curiosity + '</td>' + 
			'<td>' + sites.selectedSites_16.contact + '</td>' + 
			'<td>' + sites.selectedSites_16.postContent + '</td>' + 
			'<td>' + sites.selectedSites_16.discussingResearch + '</td>' + 
			'<td>' + sites.selectedSites_16.discussingIssues + '</td>' + 
			'<td>' + sites.selectedSites_16.commenting + '</td>' + 
			'<td>' + sites.selectedSites_16.job + '</td>' + 
			'<td>' + sites.selectedSites_16.funding + '</td>' + 
			'<td>' + sites.selectedSites_16.discoveringPeers + '</td>' + 
			'<td>' + sites.selectedSites_16.contactingPeers + '</td>' + 
			'<td>' + sites.selectedSites_16.discoveringIndividuals + '</td>' + 
			'<td>' + sites.selectedSites_16.contactingIndividuals + '</td>' + 
			'<td>' + sites.selectedSites_16.researchPapers + '</td>' + 
			'<td>' + sites.selectedSites_16.links + '</td>' + 
			'<td>' + sites.selectedSites_16.otherDiscussions + '</td>' + 
			'<td>' + sites.selectedSites_16.metrics + '</td></tr>\n' +
			'<tr><td>MLA Commons</td>' +
			'<td>' + sites.selectedSites_17.notProfessionally + '</td>' + 
			'<td>' + sites.selectedSites_17.curiosity + '</td>' + 
			'<td>' + sites.selectedSites_17.contact + '</td>' + 
			'<td>' + sites.selectedSites_17.postContent + '</td>' + 
			'<td>' + sites.selectedSites_17.discussingResearch + '</td>' + 
			'<td>' + sites.selectedSites_17.discussingIssues + '</td>' + 
			'<td>' + sites.selectedSites_17.commenting + '</td>' + 
			'<td>' + sites.selectedSites_17.job + '</td>' + 
			'<td>' + sites.selectedSites_17.funding + '</td>' + 
			'<td>' + sites.selectedSites_17.discoveringPeers + '</td>' + 
			'<td>' + sites.selectedSites_17.contactingPeers + '</td>' + 
			'<td>' + sites.selectedSites_17.discoveringIndividuals + '</td>' + 
			'<td>' + sites.selectedSites_17.contactingIndividuals + '</td>' + 
			'<td>' + sites.selectedSites_17.researchPapers + '</td>' + 
			'<td>' + sites.selectedSites_17.links + '</td>' + 
			'<td>' + sites.selectedSites_17.otherDiscussions + '</td>' + 
			'<td>' + sites.selectedSites_17.metrics + '</td></tr>\n' +
			'</tbody>\n' +
			'</table>'
		);
		
	});

}


























