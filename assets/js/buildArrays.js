function buildArrays () {

	d3.csv("data/full-survey-spreadsheet.csv", function(data) {

		function round (x) {
			return 5*(Math.round(x/5));
		}


		var sites = [
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			];

		var sitesTotals = [];

		var totalResponses = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		
		for (var i = 0; i < data.length; i++) {

			if (data[i].selectedSites_1 === "1") {
				if (data[i].q10_1_1 === "1" || data[i].q10_1_1 === "0") totalResponses[0]++;

				if (data[i].q10_1_1 === "1") 	sites[0][0]++;
				if (data[i].q10_2_1 === "1") 	sites[0][1]++;
				if (data[i].q10_3_1 === "1") 	sites[0][2]++;
				if (data[i].q10_4_1 === "1") 	sites[0][3]++;
				if (data[i].q10_16_1 === "1") 	sites[0][4]++;
				if (data[i].q10_5_1 === "1") 	sites[0][5]++;
				if (data[i].q10_6_1 === "1") 	sites[0][6]++;
				if (data[i].q10_7_1 === "1") 	sites[0][7]++;
				if (data[i].q10_8_1 === "1") 	sites[0][8]++;
				if (data[i].q10_9_1 === "1") 	sites[0][9]++;
				if (data[i].q10_10_1 === "1") 	sites[0][10]++;
				if (data[i].q10_11_1 === "1") 	sites[0][11]++;
				if (data[i].q10_12_1 === "1") 	sites[0][12]++;
				if (data[i].q10_13_1 === "1") 	sites[0][13]++;
				if (data[i].q10_14_1 === "1") 	sites[0][14]++;
				if (data[i].q10_15_1 === "1") 	sites[0][15]++;
				if (data[i].q10_17_1 === "1") 	sites[0][16]++;
			}

			if (data[i].selectedSites_2 === "1") {
				if (data[i].q10_1_2 === "1" || data[i].q10_1_2 === "0") totalResponses[1]++;

				if (data[i].q10_1_2 === "1") 	sites[1][0]++;
				if (data[i].q10_2_2 === "1") 	sites[1][1]++;
				if (data[i].q10_3_2 === "1") 	sites[1][2]++;
				if (data[i].q10_4_2 === "1") 	sites[1][3]++;
				if (data[i].q10_16_2 === "1") 	sites[1][4]++;
				if (data[i].q10_5_2 === "1") 	sites[1][5]++;
				if (data[i].q10_6_2 === "1") 	sites[1][6]++;
				if (data[i].q10_7_2 === "1") 	sites[1][7]++;
				if (data[i].q10_8_2 === "1") 	sites[1][8]++;
				if (data[i].q10_9_2 === "1") 	sites[1][9]++;
				if (data[i].q10_10_2 === "1") 	sites[1][10]++;
				if (data[i].q10_11_2 === "1") 	sites[1][11]++;
				if (data[i].q10_12_2 === "1") 	sites[1][12]++;
				if (data[i].q10_13_2 === "1") 	sites[1][13]++;
				if (data[i].q10_14_2 === "1") 	sites[1][14]++;
				if (data[i].q10_15_2 === "1") 	sites[1][15]++;
				if (data[i].q10_17_2 === "1") 	sites[1][16]++;
			}

			if (data[i].selectedSites_3 === "1") {
				if (data[i].q10_1_3 === "1" || data[i].q10_1_3 === "0") totalResponses[2]++;

				if (data[i].q10_1_3 === "1") 	sites[2][0]++;
				if (data[i].q10_2_3 === "1") 	sites[2][1]++;
				if (data[i].q10_3_3 === "1") 	sites[2][2]++;
				if (data[i].q10_4_3 === "1") 	sites[2][3]++;
				if (data[i].q10_16_3 === "1") 	sites[2][4]++;
				if (data[i].q10_5_3 === "1") 	sites[2][5]++;
				if (data[i].q10_6_3 === "1") 	sites[2][6]++;
				if (data[i].q10_7_3 === "1") 	sites[2][7]++;
				if (data[i].q10_8_3 === "1") 	sites[2][8]++;
				if (data[i].q10_9_3 === "1") 	sites[2][9]++;
				if (data[i].q10_10_3 === "1") 	sites[2][10]++;
				if (data[i].q10_11_3 === "1") 	sites[2][11]++;
				if (data[i].q10_12_3 === "1") 	sites[2][12]++;
				if (data[i].q10_13_3 === "1") 	sites[2][13]++;
				if (data[i].q10_14_3 === "1") 	sites[2][14]++;
				if (data[i].q10_15_3 === "1") 	sites[2][15]++;
				if (data[i].q10_17_3 === "1") 	sites[2][16]++;
			}

			if (data[i].selectedSites_4 === "1") {
				if (data[i].q10_1_4 === "1" || data[i].q10_1_4 === "0") totalResponses[3]++;

				if (data[i].q10_1_4 === "1") 	sites[3][0]++;
				if (data[i].q10_2_4 === "1") 	sites[3][1]++;
				if (data[i].q10_3_4 === "1") 	sites[3][2]++;
				if (data[i].q10_4_4 === "1") 	sites[3][3]++;
				if (data[i].q10_16_4 === "1") 	sites[3][4]++;
				if (data[i].q10_5_4 === "1") 	sites[3][5]++;
				if (data[i].q10_6_4 === "1") 	sites[3][6]++;
				if (data[i].q10_7_4 === "1") 	sites[3][7]++;
				if (data[i].q10_8_4 === "1") 	sites[3][8]++;
				if (data[i].q10_9_4 === "1") 	sites[3][9]++;
				if (data[i].q10_10_4 === "1") 	sites[3][10]++;
				if (data[i].q10_11_4 === "1") 	sites[3][11]++;
				if (data[i].q10_12_4 === "1") 	sites[3][12]++;
				if (data[i].q10_13_4 === "1") 	sites[3][13]++;
				if (data[i].q10_14_4 === "1") 	sites[3][14]++;
				if (data[i].q10_15_4 === "1") 	sites[3][15]++;
				if (data[i].q10_17_4 === "1") 	sites[3][16]++;
			}

			if (data[i].selectedSites_5 === "1") {
				if (data[i].q10_1_5 === "1" || data[i].q10_1_5 === "0") totalResponses[4]++;

				if (data[i].q10_1_5 === "1") 	sites[4][0]++;
				if (data[i].q10_2_5 === "1") 	sites[4][1]++;
				if (data[i].q10_3_5 === "1") 	sites[4][2]++;
				if (data[i].q10_4_5 === "1") 	sites[4][3]++;
				if (data[i].q10_16_5 === "1") 	sites[4][4]++;
				if (data[i].q10_5_5 === "1") 	sites[4][5]++;
				if (data[i].q10_6_5 === "1") 	sites[4][6]++;
				if (data[i].q10_7_5 === "1") 	sites[4][7]++;
				if (data[i].q10_8_5 === "1") 	sites[4][8]++;
				if (data[i].q10_9_5 === "1") 	sites[4][9]++;
				if (data[i].q10_10_5 === "1") 	sites[4][10]++;
				if (data[i].q10_11_5 === "1") 	sites[4][11]++;
				if (data[i].q10_12_5 === "1") 	sites[4][12]++;
				if (data[i].q10_13_5 === "1") 	sites[4][13]++;
				if (data[i].q10_14_5 === "1") 	sites[4][14]++;
				if (data[i].q10_15_5 === "1") 	sites[4][15]++;
				if (data[i].q10_17_5 === "1") 	sites[4][16]++;
			}

			if (data[i].selectedSites_6 === "1") {
				if (data[i].q10_1_6 === "1" || data[i].q10_1_6 === "0") totalResponses[5]++;

				if (data[i].q10_1_6 === "1") 	sites[5][0]++;
				if (data[i].q10_2_6 === "1") 	sites[5][1]++;
				if (data[i].q10_3_6 === "1") 	sites[5][2]++;
				if (data[i].q10_4_6 === "1") 	sites[5][3]++;
				if (data[i].q10_16_6 === "1") 	sites[5][4]++;
				if (data[i].q10_5_6 === "1") 	sites[5][5]++;
				if (data[i].q10_6_6 === "1") 	sites[5][6]++;
				if (data[i].q10_7_6 === "1") 	sites[5][7]++;
				if (data[i].q10_8_6 === "1") 	sites[5][8]++;
				if (data[i].q10_9_6 === "1") 	sites[5][9]++;
				if (data[i].q10_10_6 === "1") 	sites[5][10]++;
				if (data[i].q10_11_6 === "1") 	sites[5][11]++;
				if (data[i].q10_12_6 === "1") 	sites[5][12]++;
				if (data[i].q10_13_6 === "1") 	sites[5][13]++;
				if (data[i].q10_14_6 === "1") 	sites[5][14]++;
				if (data[i].q10_15_6 === "1") 	sites[5][15]++;
				if (data[i].q10_17_6 === "1") 	sites[5][16]++;
			}

			if (data[i].selectedSites_7 === "1") {
				if (data[i].q10_1_7 === "1" || data[i].q10_1_7 === "0") totalResponses[6]++;

				if (data[i].q10_1_7 === "1") 	sites[6][0]++;
				if (data[i].q10_2_7 === "1") 	sites[6][1]++;
				if (data[i].q10_3_7 === "1") 	sites[6][2]++;
				if (data[i].q10_4_7 === "1") 	sites[6][3]++;
				if (data[i].q10_16_7 === "1") 	sites[6][4]++;
				if (data[i].q10_5_7 === "1") 	sites[6][5]++;
				if (data[i].q10_6_7 === "1") 	sites[6][6]++;
				if (data[i].q10_7_7 === "1") 	sites[6][7]++;
				if (data[i].q10_8_7 === "1") 	sites[6][8]++;
				if (data[i].q10_9_7 === "1") 	sites[6][9]++;
				if (data[i].q10_10_7 === "1") 	sites[6][10]++;
				if (data[i].q10_11_7 === "1") 	sites[6][11]++;
				if (data[i].q10_12_7 === "1") 	sites[6][12]++;
				if (data[i].q10_13_7 === "1") 	sites[6][13]++;
				if (data[i].q10_14_7 === "1") 	sites[6][14]++;
				if (data[i].q10_15_7 === "1") 	sites[6][15]++;
				if (data[i].q10_17_7 === "1") 	sites[6][16]++;
			}

			if (data[i].selectedSites_8 === "1") {
				if (data[i].q10_1_8 === "1" || data[i].q10_1_8 === "0") totalResponses[7]++;

				if (data[i].q10_1_8 === "1") 	sites[7][0]++;
				if (data[i].q10_2_8 === "1") 	sites[7][1]++;
				if (data[i].q10_3_8 === "1") 	sites[7][2]++;
				if (data[i].q10_4_8 === "1") 	sites[7][3]++;
				if (data[i].q10_16_8 === "1") 	sites[7][4]++;
				if (data[i].q10_5_8 === "1") 	sites[7][5]++;
				if (data[i].q10_6_8 === "1") 	sites[7][6]++;
				if (data[i].q10_7_8 === "1") 	sites[7][7]++;
				if (data[i].q10_8_8 === "1") 	sites[7][8]++;
				if (data[i].q10_9_8 === "1") 	sites[7][9]++;
				if (data[i].q10_10_8 === "1") 	sites[7][10]++;
				if (data[i].q10_11_8 === "1") 	sites[7][11]++;
				if (data[i].q10_12_8 === "1") 	sites[7][12]++;
				if (data[i].q10_13_8 === "1") 	sites[7][13]++;
				if (data[i].q10_14_8 === "1") 	sites[7][14]++;
				if (data[i].q10_15_8 === "1") 	sites[7][15]++;
				if (data[i].q10_17_8 === "1") 	sites[7][16]++;
			}

			if (data[i].selectedSites_9 === "1") {
				if (data[i].q10_1_9 === "1" || data[i].q10_1_9 === "0") totalResponses[8]++;

				if (data[i].q10_1_9 === "1") 	sites[8][0]++;
				if (data[i].q10_2_9 === "1") 	sites[8][1]++;
				if (data[i].q10_3_9 === "1") 	sites[8][2]++;
				if (data[i].q10_4_9 === "1") 	sites[8][3]++;
				if (data[i].q10_16_9 === "1") 	sites[8][4]++;
				if (data[i].q10_5_9 === "1") 	sites[8][5]++;
				if (data[i].q10_6_9 === "1") 	sites[8][6]++;
				if (data[i].q10_7_9 === "1") 	sites[8][7]++;
				if (data[i].q10_8_9 === "1") 	sites[8][8]++;
				if (data[i].q10_9_9 === "1") 	sites[8][9]++;
				if (data[i].q10_10_9 === "1") 	sites[8][10]++;
				if (data[i].q10_11_9 === "1") 	sites[8][11]++;
				if (data[i].q10_12_9 === "1") 	sites[8][12]++;
				if (data[i].q10_13_9 === "1") 	sites[8][13]++;
				if (data[i].q10_14_9 === "1") 	sites[8][14]++;
				if (data[i].q10_15_9 === "1") 	sites[8][15]++;
				if (data[i].q10_17_9 === "1") 	sites[8][16]++;
			}

			if (data[i].selectedSites_10 === "1") {
				if (data[i].q10_1_10 === "1" || data[i].q10_1_10 === "0") totalResponses[9]++;

				if (data[i].q10_1_10 === "1") 	sites[9][0]++;
				if (data[i].q10_2_10 === "1") 	sites[9][1]++;
				if (data[i].q10_3_10 === "1") 	sites[9][2]++;
				if (data[i].q10_4_10 === "1") 	sites[9][3]++;
				if (data[i].q10_16_10 === "1") 	sites[9][4]++;
				if (data[i].q10_5_10 === "1") 	sites[9][5]++;
				if (data[i].q10_6_10 === "1") 	sites[9][6]++;
				if (data[i].q10_7_10 === "1") 	sites[9][7]++;
				if (data[i].q10_8_10 === "1") 	sites[9][8]++;
				if (data[i].q10_9_10 === "1") 	sites[9][9]++;
				if (data[i].q10_10_10 === "1") 	sites[9][10]++;
				if (data[i].q10_11_10 === "1") 	sites[9][11]++;
				if (data[i].q10_12_10 === "1") 	sites[9][12]++;
				if (data[i].q10_13_10 === "1") 	sites[9][13]++;
				if (data[i].q10_14_10 === "1") 	sites[9][14]++;
				if (data[i].q10_15_10 === "1") 	sites[9][15]++;
				if (data[i].q10_17_10 === "1") 	sites[9][16]++;
			}

			if (data[i].selectedSites_11 === "1") {
				if (data[i].q10_1_11 === "1" || data[i].q10_1_11 === "0") totalResponses[10]++;

				if (data[i].q10_1_11 === "1") 	sites[10][0]++;
				if (data[i].q10_2_11 === "1") 	sites[10][1]++;
				if (data[i].q10_3_11 === "1") 	sites[10][2]++;
				if (data[i].q10_4_11 === "1") 	sites[10][3]++;
				if (data[i].q10_16_11 === "1") 	sites[10][4]++;
				if (data[i].q10_5_11 === "1") 	sites[10][5]++;
				if (data[i].q10_6_11 === "1") 	sites[10][6]++;
				if (data[i].q10_7_11 === "1") 	sites[10][7]++;
				if (data[i].q10_8_11 === "1") 	sites[10][8]++;
				if (data[i].q10_9_11 === "1") 	sites[10][9]++;
				if (data[i].q10_10_11 === "1") 	sites[10][10]++;
				if (data[i].q10_11_11 === "1") 	sites[10][11]++;
				if (data[i].q10_12_11 === "1") 	sites[10][12]++;
				if (data[i].q10_13_11 === "1") 	sites[10][13]++;
				if (data[i].q10_14_11 === "1") 	sites[10][14]++;
				if (data[i].q10_15_11 === "1") 	sites[10][15]++;
				if (data[i].q10_17_11 === "1") 	sites[10][16]++;
			}

			if (data[i].selectedSites_12 === "1") {
				if (data[i].q10_1_12 === "1" || data[i].q10_1_12 === "0") totalResponses[11]++;

				if (data[i].q10_1_12 === "1") 	sites[11][0]++;
				if (data[i].q10_2_12 === "1") 	sites[11][1]++;
				if (data[i].q10_3_12 === "1") 	sites[11][2]++;
				if (data[i].q10_4_12 === "1") 	sites[11][3]++;
				if (data[i].q10_16_12 === "1") 	sites[11][4]++;
				if (data[i].q10_5_12 === "1") 	sites[11][5]++;
				if (data[i].q10_6_12 === "1") 	sites[11][6]++;
				if (data[i].q10_7_12 === "1") 	sites[11][7]++;
				if (data[i].q10_8_12 === "1") 	sites[11][8]++;
				if (data[i].q10_9_12 === "1") 	sites[11][9]++;
				if (data[i].q10_10_12 === "1") 	sites[11][10]++;
				if (data[i].q10_11_12 === "1") 	sites[11][11]++;
				if (data[i].q10_12_12 === "1") 	sites[11][12]++;
				if (data[i].q10_13_12 === "1") 	sites[11][13]++;
				if (data[i].q10_14_12 === "1") 	sites[11][14]++;
				if (data[i].q10_15_12 === "1") 	sites[11][15]++;
				if (data[i].q10_17_12 === "1") 	sites[11][16]++;
			}

			if (data[i].selectedSites_13 === "1") {
				if (data[i].q10_1_13 === "1" || data[i].q10_1_13 === "0") totalResponses[12]++;

				if (data[i].q10_1_13 === "1") 	sites[12][0]++;
				if (data[i].q10_2_13 === "1") 	sites[12][1]++;
				if (data[i].q10_3_13 === "1") 	sites[12][2]++;
				if (data[i].q10_4_13 === "1") 	sites[12][3]++;
				if (data[i].q10_16_13 === "1") 	sites[12][4]++;
				if (data[i].q10_5_13 === "1") 	sites[12][5]++;
				if (data[i].q10_6_13 === "1") 	sites[12][6]++;
				if (data[i].q10_7_13 === "1") 	sites[12][7]++;
				if (data[i].q10_8_13 === "1") 	sites[12][8]++;
				if (data[i].q10_9_13 === "1") 	sites[12][9]++;
				if (data[i].q10_10_13 === "1") 	sites[12][10]++;
				if (data[i].q10_11_13 === "1") 	sites[12][11]++;
				if (data[i].q10_12_13 === "1") 	sites[12][12]++;
				if (data[i].q10_13_13 === "1") 	sites[12][13]++;
				if (data[i].q10_14_13 === "1") 	sites[12][14]++;
				if (data[i].q10_15_13 === "1") 	sites[12][15]++;
				if (data[i].q10_17_13 === "1") 	sites[12][16]++;
			}

			if (data[i].selectedSites_14 === "1") {
				if (data[i].q10_1_14 === "1" || data[i].q10_1_14 === "0") totalResponses[13]++;

				if (data[i].q10_1_14 === "1") 	sites[13][0]++;
				if (data[i].q10_2_14 === "1") 	sites[13][1]++;
				if (data[i].q10_3_14 === "1") 	sites[13][2]++;
				if (data[i].q10_4_14 === "1") 	sites[13][3]++;
				if (data[i].q10_16_14 === "1") 	sites[13][4]++;
				if (data[i].q10_5_14 === "1") 	sites[13][5]++;
				if (data[i].q10_6_14 === "1") 	sites[13][6]++;
				if (data[i].q10_7_14 === "1") 	sites[13][7]++;
				if (data[i].q10_8_14 === "1") 	sites[13][8]++;
				if (data[i].q10_9_14 === "1") 	sites[13][9]++;
				if (data[i].q10_10_14 === "1") 	sites[13][10]++;
				if (data[i].q10_11_14 === "1") 	sites[13][11]++;
				if (data[i].q10_12_14 === "1") 	sites[13][12]++;
				if (data[i].q10_13_14 === "1") 	sites[13][13]++;
				if (data[i].q10_14_14 === "1") 	sites[13][14]++;
				if (data[i].q10_15_14 === "1") 	sites[13][15]++;
				if (data[i].q10_17_14 === "1") 	sites[13][16]++;
			}

			if (data[i].selectedSites_15 === "1") {
				if (data[i].q10_1_15 === "1" || data[i].q10_1_15 === "0") totalResponses[14]++;

				if (data[i].q10_1_15 === "1") 	sites[14][0]++;
				if (data[i].q10_2_15 === "1") 	sites[14][1]++;
				if (data[i].q10_3_15 === "1") 	sites[14][2]++;
				if (data[i].q10_4_15 === "1") 	sites[14][3]++;
				if (data[i].q10_16_15 === "1") 	sites[14][4]++;
				if (data[i].q10_5_15 === "1") 	sites[14][5]++;
				if (data[i].q10_6_15 === "1") 	sites[14][6]++;
				if (data[i].q10_7_15 === "1") 	sites[14][7]++;
				if (data[i].q10_8_15 === "1") 	sites[14][8]++;
				if (data[i].q10_9_15 === "1") 	sites[14][9]++;
				if (data[i].q10_10_15 === "1") 	sites[14][10]++;
				if (data[i].q10_11_15 === "1") 	sites[14][11]++;
				if (data[i].q10_12_15 === "1") 	sites[14][12]++;
				if (data[i].q10_13_15 === "1") 	sites[14][13]++;
				if (data[i].q10_14_15 === "1") 	sites[14][14]++;
				if (data[i].q10_15_15 === "1") 	sites[14][15]++;
				if (data[i].q10_17_15 === "1") 	sites[14][16]++;
			}

			if (data[i].selectedSites_16 === "1") {
				if (data[i].q10_1_16 === "1" || data[i].q10_1_16 === "0") totalResponses[15]++;

				if (data[i].q10_1_16 === "1") 	sites[15][0]++;
				if (data[i].q10_2_16 === "1") 	sites[15][1]++;
				if (data[i].q10_3_16 === "1") 	sites[15][2]++;
				if (data[i].q10_4_16 === "1") 	sites[15][3]++;
				if (data[i].q10_16_16 === "1") 	sites[15][4]++;
				if (data[i].q10_5_16 === "1") 	sites[15][5]++;
				if (data[i].q10_6_16 === "1") 	sites[15][6]++;
				if (data[i].q10_7_16 === "1") 	sites[15][7]++;
				if (data[i].q10_8_16 === "1") 	sites[15][8]++;
				if (data[i].q10_9_16 === "1") 	sites[15][9]++;
				if (data[i].q10_10_16 === "1") 	sites[15][10]++;
				if (data[i].q10_11_16 === "1") 	sites[15][11]++;
				if (data[i].q10_12_16 === "1") 	sites[15][12]++;
				if (data[i].q10_13_16 === "1") 	sites[15][13]++;
				if (data[i].q10_14_16 === "1") 	sites[15][14]++;
				if (data[i].q10_15_16 === "1") 	sites[15][15]++;
				if (data[i].q10_17_16 === "1") 	sites[15][16]++;
			}

			if (data[i].selectedSites_17 === "1") {
				if (data[i].q10_1_17 === "1" || data[i].q10_1_17 === "0") totalResponses[16]++;

				if (data[i].q10_1_17 === "1") 	sites[16][0]++;
				if (data[i].q10_2_17 === "1") 	sites[16][1]++;
				if (data[i].q10_3_17 === "1") 	sites[16][2]++;
				if (data[i].q10_4_17 === "1") 	sites[16][3]++;
				if (data[i].q10_16_17 === "1") 	sites[16][4]++;
				if (data[i].q10_5_17 === "1") 	sites[16][5]++;
				if (data[i].q10_6_17 === "1") 	sites[16][6]++;
				if (data[i].q10_7_17 === "1") 	sites[16][7]++;
				if (data[i].q10_8_17 === "1") 	sites[16][8]++;
				if (data[i].q10_9_17 === "1") 	sites[16][9]++;
				if (data[i].q10_10_17 === "1") 	sites[16][10]++;
				if (data[i].q10_11_17 === "1") 	sites[16][11]++;
				if (data[i].q10_12_17 === "1") 	sites[16][12]++;
				if (data[i].q10_13_17 === "1") 	sites[16][13]++;
				if (data[i].q10_14_17 === "1") 	sites[16][14]++;
				if (data[i].q10_15_17 === "1") 	sites[16][15]++;
				if (data[i].q10_17_17 === "1") 	sites[16][16]++;
			}

		};
		
		for (var i = 0; i < sites.length; i++) {
			
			sitesTotals.push(new Array);

			for (var l = 0; l < sites[i].length; l++) {
				var perCent = (sites[i][l] / totalResponses[i]) * 100;
				sitesTotals[i].push(perCent);
			};

			sitesTotals[i].push(totalResponses[i]);
		};
		
		console.log(
			'<table>\n' +
			'<thead>' +
			'<tr><th>Site</th>' +
			'<th>I do not use this site professionally</th>' +
			'<th>I have a profile because I signed up out of curiosity, but am not purposefully maintaining it</th>' +
			'<th>I maintain a profile in case someone wishes to contact me about my research</th>' +
			'<th>Discovering job opportunities</th>' +
			'<th>Discovering funding opportunities</th>' +
			'<th>Discovering peers in my field of research</th>' +
			'<th>Discovering individuals outside of my field of research</th>' +
			'<th>Discovering recommended research papers</th>' +
			'<th>To track metrics relating to interest in my work</th>' +
			'<th>I post content related to my work</th>' +
			'<th>Actively discussing my research</th>' +
			'<th>Actively discussing issues related to my role (eg tenure, policy, training)</th>' +
			'<th>Commenting on research that is relevant to my field</th>' +
			'<th>Contacting peers in my field of research</th>' +
			'<th>Contacting individuals outside of my field of research</th>' +
			'<th>Sharing links to authored content (e.g. research papers, datasets)</th>' +
			'<th>Following other discussions on research-related issues</th>' +
			'<th>Number of respondents</th></tr>' +
			'</thead>\n' +
			'<tbody>\n' +
			'<tr><td>Twitter</td>' +
			'<td>' + round(sitesTotals[0][0]) + '</td>' + 
			'<td>' + round(sitesTotals[0][1]) + '</td>' + 
			'<td>' + round(sitesTotals[0][2]) + '</td>' + 
			'<td>' + round(sitesTotals[0][7]) + '</td>' + 
			'<td>' + round(sitesTotals[0][8]) + '</td>' + 
			'<td>' + round(sitesTotals[0][9]) + '</td>' + 
			'<td>' + round(sitesTotals[0][11]) + '</td>' + 
			'<td>' + round(sitesTotals[0][13]) + '</td>' + 
			'<td>' + round(sitesTotals[0][16]) + '</td>' + 
			'<td>' + round(sitesTotals[0][3]) + '</td>' + 
			'<td>' + round(sitesTotals[0][4]) + '</td>' + 
			'<td>' + round(sitesTotals[0][5]) + '</td>' + 
			'<td>' + round(sitesTotals[0][6]) + '</td>' + 
			'<td>' + round(sitesTotals[0][10]) + '</td>' + 
			'<td>' + round(sitesTotals[0][12]) + '</td>' + 
			'<td>' + round(sitesTotals[0][14]) + '</td>' + 
			'<td>' + round(sitesTotals[0][15]) + '</td>' + 
			'<td>' + round(sitesTotals[0][17]) + '</td></tr>\n' +
			'<tr><td>Facebook</td>' +
			'<td>' + round(sitesTotals[1][0]) + '</td>' + 
			'<td>' + round(sitesTotals[1][1]) + '</td>' + 
			'<td>' + round(sitesTotals[1][2]) + '</td>' + 
			'<td>' + round(sitesTotals[1][7]) + '</td>' + 
			'<td>' + round(sitesTotals[1][8]) + '</td>' + 
			'<td>' + round(sitesTotals[1][9]) + '</td>' + 
			'<td>' + round(sitesTotals[1][11]) + '</td>' + 
			'<td>' + round(sitesTotals[1][13]) + '</td>' + 
			'<td>' + round(sitesTotals[1][16]) + '</td>' + 
			'<td>' + round(sitesTotals[1][3]) + '</td>' + 
			'<td>' + round(sitesTotals[1][4]) + '</td>' + 
			'<td>' + round(sitesTotals[1][5]) + '</td>' + 
			'<td>' + round(sitesTotals[1][6]) + '</td>' + 
			'<td>' + round(sitesTotals[1][10]) + '</td>' + 
			'<td>' + round(sitesTotals[1][12]) + '</td>' + 
			'<td>' + round(sitesTotals[1][14]) + '</td>' + 
			'<td>' + round(sitesTotals[1][15]) + '</td>' + 
			'<td>' + round(sitesTotals[1][17]) + '</td></tr>\n' +
			'<tr><td>Academiaedu</td>' +
			'<td>' + round(sitesTotals[3][0]) + '</td>' + 
			'<td>' + round(sitesTotals[3][1]) + '</td>' + 
			'<td>' + round(sitesTotals[3][2]) + '</td>' + 
			'<td>' + round(sitesTotals[3][7]) + '</td>' + 
			'<td>' + round(sitesTotals[3][8]) + '</td>' + 
			'<td>' + round(sitesTotals[3][9]) + '</td>' + 
			'<td>' + round(sitesTotals[3][11]) + '</td>' + 
			'<td>' + round(sitesTotals[3][13]) + '</td>' + 
			'<td>' + round(sitesTotals[3][16]) + '</td>' + 
			'<td>' + round(sitesTotals[3][3]) + '</td>' + 
			'<td>' + round(sitesTotals[3][4]) + '</td>' + 
			'<td>' + round(sitesTotals[3][5]) + '</td>' + 
			'<td>' + round(sitesTotals[3][6]) + '</td>' + 
			'<td>' + round(sitesTotals[3][10]) + '</td>' + 
			'<td>' + round(sitesTotals[3][12]) + '</td>' + 
			'<td>' + round(sitesTotals[3][14]) + '</td>' + 
			'<td>' + round(sitesTotals[3][15]) + '</td>' + 
			'<td>' + round(sitesTotals[3][17]) + '</td></tr>\n' +
			'<tr><td>ResearchGate</td>' +
			'<td>' + round(sitesTotals[4][0]) + '</td>' + 
			'<td>' + round(sitesTotals[4][1]) + '</td>' + 
			'<td>' + round(sitesTotals[4][2]) + '</td>' + 
			'<td>' + round(sitesTotals[4][7]) + '</td>' + 
			'<td>' + round(sitesTotals[4][8]) + '</td>' + 
			'<td>' + round(sitesTotals[4][9]) + '</td>' + 
			'<td>' + round(sitesTotals[4][11]) + '</td>' + 
			'<td>' + round(sitesTotals[4][13]) + '</td>' + 
			'<td>' + round(sitesTotals[4][16]) + '</td>' + 
			'<td>' + round(sitesTotals[4][3]) + '</td>' + 
			'<td>' + round(sitesTotals[4][4]) + '</td>' + 
			'<td>' + round(sitesTotals[4][5]) + '</td>' + 
			'<td>' + round(sitesTotals[4][6]) + '</td>' + 
			'<td>' + round(sitesTotals[4][10]) + '</td>' + 
			'<td>' + round(sitesTotals[4][12]) + '</td>' + 
			'<td>' + round(sitesTotals[4][14]) + '</td>' + 
			'<td>' + round(sitesTotals[4][15]) + '</td>' + 
			'<td>' + round(sitesTotals[4][17]) + '</td></tr>\n' +
			'<tr><td>LinkedIn</td>' +
			'<td>' + round(sitesTotals[5][0]) + '</td>' + 
			'<td>' + round(sitesTotals[5][1]) + '</td>' + 
			'<td>' + round(sitesTotals[5][2]) + '</td>' + 
			'<td>' + round(sitesTotals[5][7]) + '</td>' + 
			'<td>' + round(sitesTotals[5][8]) + '</td>' + 
			'<td>' + round(sitesTotals[5][9]) + '</td>' + 
			'<td>' + round(sitesTotals[5][11]) + '</td>' + 
			'<td>' + round(sitesTotals[5][13]) + '</td>' + 
			'<td>' + round(sitesTotals[5][16]) + '</td>' + 
			'<td>' + round(sitesTotals[5][3]) + '</td>' + 
			'<td>' + round(sitesTotals[5][4]) + '</td>' + 
			'<td>' + round(sitesTotals[5][5]) + '</td>' + 
			'<td>' + round(sitesTotals[5][6]) + '</td>' + 
			'<td>' + round(sitesTotals[5][10]) + '</td>' + 
			'<td>' + round(sitesTotals[5][12]) + '</td>' + 
			'<td>' + round(sitesTotals[5][14]) + '</td>' + 
			'<td>' + round(sitesTotals[5][15]) + '</td>' + 
			'<td>' + round(sitesTotals[5][17]) + '</td></tr>\n' +
			'<tr><td>Mendeley</td>' +
			'<td>' + round(sitesTotals[8][0]) + '</td>' + 
			'<td>' + round(sitesTotals[8][1]) + '</td>' + 
			'<td>' + round(sitesTotals[8][2]) + '</td>' + 
			'<td>' + round(sitesTotals[8][7]) + '</td>' + 
			'<td>' + round(sitesTotals[8][8]) + '</td>' + 
			'<td>' + round(sitesTotals[8][9]) + '</td>' + 
			'<td>' + round(sitesTotals[8][11]) + '</td>' + 
			'<td>' + round(sitesTotals[8][13]) + '</td>' + 
			'<td>' + round(sitesTotals[8][16]) + '</td>' + 
			'<td>' + round(sitesTotals[8][3]) + '</td>' + 
			'<td>' + round(sitesTotals[8][4]) + '</td>' + 
			'<td>' + round(sitesTotals[8][5]) + '</td>' + 
			'<td>' + round(sitesTotals[8][6]) + '</td>' + 
			'<td>' + round(sitesTotals[8][10]) + '</td>' + 
			'<td>' + round(sitesTotals[8][12]) + '</td>' + 
			'<td>' + round(sitesTotals[8][14]) + '</td>' + 
			'<td>' + round(sitesTotals[8][15]) + '</td>' + 
			'<td>' + round(sitesTotals[8][17]) + '</td></tr>\n' +
			'</tbody>\n' +
			'</table>'
		);


		/*console.log(
			'<table>\n' +

			'<thead>' +
			'<tr><th>Site</th>' +
			'<th>Not professionally</th>' +
			'<th>Curiosity</th>' +
			'<th>Contact</th>' +
			'<th>Post content</th>' +
			'<th>Discussing research</th>' +
			'<th>Discussing issues</th>' +
			'<th>Commenting</th>' +
			'<th>Job</th>' +
			'<th>funding</th>' +
			'<th>Discovering peers</th>' +
			'<th>Contacting peers</th>' +
			'<th>Discovering individuals</th>' +
			'<th>Contacting individuals</th>' +
			'<th>Research papers</th>' +
			'<th>Links</th>' +
			'<th>Other discussions</th>' +
			'<th>Metrics</th>' +
			'<th>Number of respondents</th></tr>' +
			'</thead>\n' +
			'<tbody>\n' +
			'<tr><td>Twitter</td>' +
			'<td>' + sites[0][0] + '</td>' + 
			'<td>' + sites[0][1] + '</td>' + 
			'<td>' + sites[0][2] + '</td>' + 
			'<td>' + sites[0][3] + '</td>' + 
			'<td>' + sites[0][4] + '</td>' + 
			'<td>' + sites[0][5] + '</td>' + 
			'<td>' + sites[0][6] + '</td>' + 
			'<td>' + sites[0][7] + '</td>' + 
			'<td>' + sites[0][8] + '</td>' + 
			'<td>' + sites[0][9] + '</td>' + 
			'<td>' + sites[0][10] + '</td>' + 
			'<td>' + sites[0][11] + '</td>' + 
			'<td>' + sites[0][12] + '</td>' + 
			'<td>' + sites[0][13] + '</td>' + 
			'<td>' + sites[0][14] + '</td>' + 
			'<td>' + sites[0][15] + '</td>' + 
			'<td>' + sites[0][16] + '</td>' + 
			'<td>' + sitesTotals[0][17] + '</td></tr>\n' +
			'<tr><td>Facebook</td>' +
			'<td>' + sites[1][0] + '</td>' + 
			'<td>' + sites[1][1] + '</td>' + 
			'<td>' + sites[1][2] + '</td>' + 
			'<td>' + sites[1][3] + '</td>' + 
			'<td>' + sites[1][4] + '</td>' + 
			'<td>' + sites[1][5] + '</td>' + 
			'<td>' + sites[1][6] + '</td>' + 
			'<td>' + sites[1][7] + '</td>' + 
			'<td>' + sites[1][8] + '</td>' + 
			'<td>' + sites[1][9] + '</td>' + 
			'<td>' + sites[1][10] + '</td>' + 
			'<td>' + sites[1][11] + '</td>' + 
			'<td>' + sites[1][12] + '</td>' + 
			'<td>' + sites[1][13] + '</td>' + 
			'<td>' + sites[1][14] + '</td>' + 
			'<td>' + sites[1][15] + '</td>' + 
			'<td>' + sites[1][16] + '</td>' + 
			'<td>' + sitesTotals[1][17] + '</td></tr>\n' +
			'<tr><td>Academiaedu</td>' +
			'<td>' + sites[3][0] + '</td>' + 
			'<td>' + sites[3][1] + '</td>' + 
			'<td>' + sites[3][2] + '</td>' + 
			'<td>' + sites[3][3] + '</td>' + 
			'<td>' + sites[3][4] + '</td>' + 
			'<td>' + sites[3][5] + '</td>' + 
			'<td>' + sites[3][6] + '</td>' + 
			'<td>' + sites[3][7] + '</td>' + 
			'<td>' + sites[3][8] + '</td>' + 
			'<td>' + sites[3][9] + '</td>' + 
			'<td>' + sites[3][10] + '</td>' + 
			'<td>' + sites[3][11] + '</td>' + 
			'<td>' + sites[3][12] + '</td>' + 
			'<td>' + sites[3][13] + '</td>' + 
			'<td>' + sites[3][14] + '</td>' + 
			'<td>' + sites[3][15] + '</td>' + 
			'<td>' + sites[3][16] + '</td>' + 
			'<td>' + sitesTotals[3][17] + '</td></tr>\n' +
			'<tr><td>ResearchGate</td>' +
			'<td>' + sites[4][0] + '</td>' + 
			'<td>' + sites[4][1] + '</td>' + 
			'<td>' + sites[4][2] + '</td>' + 
			'<td>' + sites[4][3] + '</td>' + 
			'<td>' + sites[4][4] + '</td>' + 
			'<td>' + sites[4][5] + '</td>' + 
			'<td>' + sites[4][6] + '</td>' + 
			'<td>' + sites[4][7] + '</td>' + 
			'<td>' + sites[4][8] + '</td>' + 
			'<td>' + sites[4][9] + '</td>' + 
			'<td>' + sites[4][10] + '</td>' + 
			'<td>' + sites[4][11] + '</td>' + 
			'<td>' + sites[4][12] + '</td>' + 
			'<td>' + sites[4][13] + '</td>' + 
			'<td>' + sites[4][14] + '</td>' + 
			'<td>' + sites[4][15] + '</td>' + 
			'<td>' + sites[4][16] + '</td>' + 
			'<td>' + sitesTotals[4][17] + '</td></tr>\n' +
			'<tr><td>LinkedIn</td>' +
			'<td>' + sites[5][0] + '</td>' + 
			'<td>' + sites[5][1] + '</td>' + 
			'<td>' + sites[5][2] + '</td>' + 
			'<td>' + sites[5][3] + '</td>' + 
			'<td>' + sites[5][4] + '</td>' + 
			'<td>' + sites[5][5] + '</td>' + 
			'<td>' + sites[5][6] + '</td>' + 
			'<td>' + sites[5][7] + '</td>' + 
			'<td>' + sites[5][8] + '</td>' + 
			'<td>' + sites[5][9] + '</td>' + 
			'<td>' + sites[5][10] + '</td>' + 
			'<td>' + sites[5][11] + '</td>' + 
			'<td>' + sites[5][12] + '</td>' + 
			'<td>' + sites[5][13] + '</td>' + 
			'<td>' + sites[5][14] + '</td>' + 
			'<td>' + sites[5][15] + '</td>' + 
			'<td>' + sites[5][16] + '</td>' + 
			'<td>' + sitesTotals[5][17] + '</td></tr>\n' +
			'<tr><td>Mendeley</td>' +
			'<td>' + sites[8][0] + '</td>' + 
			'<td>' + sites[8][1] + '</td>' + 
			'<td>' + sites[8][2] + '</td>' + 
			'<td>' + sites[8][3] + '</td>' + 
			'<td>' + sites[8][4] + '</td>' + 
			'<td>' + sites[8][5] + '</td>' + 
			'<td>' + sites[8][6] + '</td>' + 
			'<td>' + sites[8][7] + '</td>' + 
			'<td>' + sites[8][8] + '</td>' + 
			'<td>' + sites[8][9] + '</td>' + 
			'<td>' + sites[8][10] + '</td>' + 
			'<td>' + sites[8][11] + '</td>' + 
			'<td>' + sites[8][12] + '</td>' + 
			'<td>' + sites[8][13] + '</td>' + 
			'<td>' + sites[8][14] + '</td>' + 
			'<td>' + sites[8][15] + '</td>' + 
			'<td>' + sites[8][16] + '</td>' + 
			'<td>' + sitesTotals[8][17] + '</td></tr>\n' +
			'</tbody>\n' +
			'</table>'
		);*/

	});
	// return sites;
}


























