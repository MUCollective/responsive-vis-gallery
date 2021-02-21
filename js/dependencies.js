let dependency = {
  data: [{ //sub problems for problem set 1
    "Problem_Set": "Graph Density",
    "Group_Id": "1",
    "Sub_Problems": [{ // A
      "Problem": "Too many data marks",
      "Group_Id": "A",
      "Strategy": [{ // A1
        "Name": "Aggregate",
        "Constraints": "The target data field should be able to be aggregated with regard to a data dimension, which has a natural hierarchy.",
        "Desc": "Aggregate data points to a hierarchically higher level by means of an aggregate function, such as average, count, or sum. For example, daily temperature data can be aggregated into monthly average temperatures. Alternatively, when there is already an aggregate encoding, then you may leave the aggregate encoding only by removing atomic level marks for individual data points.",
        "Group_Id": "A1",
        "Examples": [
          "E45-BillOReilly-1 (Bar)",
          "E147-Polling-1 (Line+Dot)"
        ],
        "Loss": [{ // A1a
          "Name": "Loss of information (distribution)",
          "Relaxation": [
            "Encode uncertainty (e.g., adding a trend line).",
            "Use accordion structure (aggregated data point functions as a toggle for detail values)."
          ]
        }]
      }, { // A2
        "Name": "Increase bin size",
        "Constraints": "The target data field must be continuous. When there is already a bin, this is more preferred than when there is not.",
        "Desc": "Increase the bin size of a continuous variable. Or, when the variable is not binned, then you may apply bin (e.g., Lin et al. (2020), Figure on Page 8).",
        "Group_Id": "A2",
        "Examples": [
          "E9-Voter-1 (Histogram)",
          "E251-MTSnow-1"
        ],
        "Loss": [{ // A2a
          "Name": "Changes in graphical perception (distribution)",
          "Relaxation": [
            "Overlay a trend line."
          ]
        }]
      }, { // A3
        "Name": "Remove records",
        "Constraints": "This requires pre-defined data subsets and their priorities.",
        "Desc": "Remove some part of data.",
        "Group_Id": "A3",
        "Examples": [
          "E129-Counties-2 (State map+Line+Heatmap)",
          "E137-RedBlue-1 (Bar+cartogram)",
          "E152-HowBond-2 (Line+Area)",
          "E230-SenateWin-6"
        ],
        "Loss": [{ // A3a
          "Name": "Loss of information (data points)",
          "Relaxation": [
            "Toggle for data fields (<a href=\"/sample/E201-Responsive-3 (Parallel coordinates)\">Example</a>).",
            "Split states into panels."
          ]
        }]
      }, { // A4
        "Name": "Remove fields",
        "Constraints": "This is preferred for less effective encoding channels (e.g., shape, pattern).",
        "Desc": "Remove some of the data fields. This requires further changes in encoding or table layout. If a categorical field has multiple levels, then you can merge them into less number of levels.",
        "Group_Id": "A4",
        "Examples": [
          "E15-Florida-2 (Table)",
          "E43-Cabinet-1 (White men)",
          "E136-Candidates-1 (Bar+Dot)"
        ],
        "Loss": [{ // A4a
          "Name": "Loss of information (data fields)",
          "Relaxation": [
            "Add a tooltip that shows values for the removed data fields."
          ]
        }]
      }]
    }, { // B
      "Problem": "Too many annotations/emphases",
      "Group_Id": "B",
      "Strategy": [{ // B1
        "Name": "Remove anno./emph",
        "Constraints": null,
        "Desc": "Remove all/some of annotations and emphases.",
        "Group_Id": "B1",
        "Examples": [
          "E11-TrumpInsult-3 (Area + Small multiples)",
          "E152-HowBond-2 (Line+Area)",
          "E222-LeagueWC-1 (Cartogram)"
        ],
        "Loss": [{
          "Name": "Loss of information (takeaways)",
          "Relaxation": [
            "Toggle annotations  (<a href=\"/sample/E204-CatDog-3 (Network)\">Example</a>)."
          ]
        }]
      }, { // B2
        "Name": "Externalize annotations",
        "Constraints": null,
        "Desc": "Move all/some of text annotations for some part of the visualization from its inside to out of it.",
        "Group_Id": "B2",
        "Examples": [
          "E29-College-4 (Line)",
          "E37-Britain-1 (Bar+Map)",
          "E152-HowBond-3 (Three grey, green, and blue lines)"
        ],
        "Loss": [{
          "Name": "Reduced concurrency (hard to locate related data points, especially if it requires some background knowledge, such as geographic locations)",
          "Relaxation": [
            "Number annotations (<a href=\"/sample/E34-France-3 (Map)\">Example</a>).",
            "Add a link on annotation to corresponding data points."
          ]
        }]
      }]
    }, { // C
      "Problem": "Labels take too much sapce",
      "Group_Id": "C",
      "Strategy": [{ // C1
        "Name": "Abbreviate",
        "Constraints": "There should be a convention for abbreviation, or it should be defined beforehand.",
        "Desc": "Abbreviate labels (e.g., January to Jan. or J)",
        "Group_Id": "C1",
        "Examples": [
          "E16-Epidemic-5 (Two maps)",
          "E155-RollIn-2 (Heatmap)",
          "E53-TaxPlan-1",
          "E119-OctobersNot-1 (Vertical bar)"
        ],
        "Loss": [{
          "Name": "Reduced discoverability (hard to recognize the abbreviations)",
          "Relaxation": [
            "Toggle labels (<a href=\"/sample/E133-Splinter-1 (Heatmap)\">Example</a>).",
            "Add a hover interaction.",
            "Add a table for abbreviations (if it is not conventional)."
          ]
        }]
      }, { // C2
        "Name": "Remove labels",
        "Constraints": null,
        "Desc": "Remove some/all of labels for marks or other elements.",
        "Group_Id": "C2",
        "Examples": [
          "E15-Florida-4 (Bars)",
          "E29-College-1 (Treemap)",
          "E150-StartupStock-1 (Line)"
        ],
        "Loss": [{
          "Name": "Loss of information (detail)",
          "Relaxation": [
            "Toggle labels (<a href=\"/sample/E133-Splinter-1 (Heatmap)\">Example</a>)."
          ]
        }]
      }, { // C3
        "Name": "Incorporate labels",
        "Constraints": "Preferred when labels fit into marks",
        "Desc": "Move labels into the visualization or the corresponding marks",
        "Group_Id": "C3",
        "Examples": [
          "E6-Europe-1 (Bar+Small multiples)",
          "E207-BetterLife-2 (Flower+Bar)",
        ],
        "Loss": [{
          "Name": "Labels may not fit",
          "Relaxation": [
            "Selectively incorporate (i.e., remove some)."
          ]
        }]
      }, { // C4
        "Name": "Toggle labels",
        "Constraints": null,
        "Desc": "Enable users to choose whether to show labels, while the labels are constantly visible on the large screen.",
        "Group_Id": "C4",
        "Examples": [
          "E133-Splinter-1 (Heatmap)"
        ],
        "Loss": [{
          "Name": "Reduced discoverability",
          "Relaxation": [
            "Add a guidance for toggle."
          ]
        }]
      }, { // C5
        "Name": "Serialize labels and marks",
        "Constraints": "The marks (not value) must be discrete (e.g., (O) bars, points; (X) lines).",
        "Desc": "Place labels and marks vertically, while they are horizontally next to each other on the large screen.",
        "Group_Id": "C5",
        "Examples": [
          "E43-Cabinet-1 (White men)",
          "E149-TopCeos-1 (Bubble+Bar)"
        ],
        "Loss": [{
          "Name": "Changes in graphical perception (distribution) due to increased margins between marks.",
          "Relaxation": [
            "Incorporate labels."
          ]
        }]
      }]
    }]
  }, { //sub problems for problem set 2
    "Problem_Set": "Layout",
    "Group_Id": "2",
    "Sub_Problems": [{ // D
      "Problem": "Fixed objects occupy too much screen space",
      "Group_Id": "D",
      "Strategy": [{ // D1
        "Name": "Remove or Unfreeze",
        "Constraints": null,
        "Desc": "Remove the fixed object or make it not fixed.",
        "Group_Id": "D1",
        "Examples": [
          "E150-StartupStock-1 (Line)",
          "E140-ElecMap-1 (Map)"
        ],
        "Loss": [{
          "Name": "Loss of information (for a fixed overview); For more informatoin, please refer to Burigat (2013).",
          "Relaxation": [
            "Aggregate.",
            "Use bin.",
            "Toggle scenes/Interactive slideshow (<a href=\"/sample/E117-TechRally-1 (Scatterplot)\">Example</a>: not for unfreezing, but for toggling)."
          ]
        }, {
          "Name": "Loss of interaction (for a fixed interaction widget)",
          "Relaxation": [
            "Toggle interaction (<a href=\"/sample/E122-GopTaxCal-1 (Line)\">Example</a>: not for unfreezing, but for toggling)."
          ]
        }]
      }]
    }, { // E
      "Problem": "Visualization does not fit to a single scroll height",
      "Group_Id": "E",
      "Strategy": [{ //E1
        "Name": "Reduce height",
        "Constraints": "Not preferred when geoloacation is encoded as position.",
        "Desc": "Change the aspect ratio a visualization to be wider.",
        "Group_Id": "E1",
        "Examples": [
          "E42-TaxBillCalc-1 (Scatterplot)",
          "E116-Xijinping-2 (Bar+Area+Bar)"
        ],
        "Loss": [{
          "Name": "Changes in graphical perception (impression)",
          "Relaxation": []
        }]
      }]
    }, { // F
      "Problem": "Tooltip hides a graph",
      "Group_Id": "F",
      "Strategy": [{ // F1
        "Name": "Fix tooltip position",
        "Constraints": null,
        "Desc": "Fix the position of a tooltip with regard to the screen space. Tooltips are often fixed at the bottom of the screen.",
        "Group_Id": "F1",
        "Examples": [
          "E43-Cabinet-4 (Women)",
          "E129-Counties-2 (State map+Line+Heatmap)"
        ],
        "Loss": [{
          "Name": "Efficient space use (if tooltip is too large)",
          "Relaxation": [
            "Remove some information in tooltip."
          ]
        }]
      }, { //F2
        "Name": "Disable tooltip interaction",
        "Constraints": null,
        "Desc": "Remove tooltips.",
        "Group_Id": "F2",
        "Examples": [
          "E43-Cabinet-3 (Women and minorities)",
          "E126-HealthCare-1 (Scatterplot)"
        ],
        "Loss": [{
          "Name": "Loss of information (detail)",
          "Relaxation": [
            "Selectively add emphases/annotations.",
            "Add a search-based detail-on-demand."
          ]
        }]
      }]
    }, { // G
      "Problem": "Hard to arrange horizontally",
      "Group_Id": "G",
      "Strategy": [{ // G1
        "Name": "Serialize them",
        "Constraints": null,
        "Desc": "Place element (not marks) vertically, while they are horizontally next to each other on the large screen.",
        "Group_Id": "G1",
        "Examples": [
          "E140-ElecMap-1 (Map)",
          "E203-DutchHousing-1"
        ],
        "Loss": [{
          "Name": "Reduced concurrency for comparison",
          "Relaxation": [
            "Reduce height."
          ]
        }]
      }, { // G2
        "Name": "Interactive slideshow",
        "Constraints": null,
        "Desc": "Allow multiple views to be toggled one by one.",
        "Group_Id": "G2",
        "Examples": [
          "E117-TechRally-1 (Scatterplot)"
        ],
        "Loss": [{
          "Name": "Reduced discoverabilty. For more information, please refer to Boy et al. (2015).",
          "Relaxation": []
        }]
      }]
    }, { // H
      "Problem": "Proportionate size reduction may decrease the perceptibility of different values or the impact of visualization in terms of size",
      "Group_Id": "H",
      "Strategy": [{ // H1
        "Name": "Reduce width",
        "Constraints": "Not preferred when geoloacation is encoded as position.",
        "Desc": "Change the aspect ratio a visualization to be narrower.",
        "Group_Id": "H1",
        "Examples": [
          "E119-OctobersNot-2 (Horizontal bar)",
          "E48-Subway-2 (Three lines)"
        ],
        "Loss": [{
          "Name": "Changes in graphical perception (impression)",
          "Relaxation": [
            "Toggle explorable view and static view.",
            "Adjust height."
          ]
        }]
      }, { // H2
        "Name": "Reduce explorable area",
        "Constraints": null,
        "Desc": "Reduce the explorable area (the visible subset of a visualization at a given time).",
        "Group_Id": "H2",
        "Examples": [
          "E113-Immigration-1 (Area, value)",
          "E205-UNESCOLACI-1"
        ],
        "Loss": [{
          "Name": "Reduced concurrency for (comparison)",
          "Relaxation": [
            "Toggle explorable view and static view.",
            "Adjust height."
          ]
        }, {
          "Name": "Loss of information (overview)",
          "Relaxation": [
            "Add a context view (<a href=\"/sample/E207-BetterLife-4 (Flower+Bar)\">Example</a>)."
          ]
        }]
      }, { // H3
        "Name": "Remove records",
        "Constraints": "This requires pre-defined data subsets and their priorities.",
        "Desc": "Remove some part of data.",
        "Group_Id": "H3",
        "Examples": [
          "E129-Counties-2 (State map+Line+Heatmap)",
          "E137-RedBlue-1 (Bar+cartogram)",
          "E152-HowBond-2 (Line+Area)",
          "E230-SenateWin-6"
        ],
        "Loss": [{ // H3a
          "Name": "Loss of information (data points)",
          "Relaxation": [
            "Toggle for data fields (<a href=\"/sample/E201-Responsive-3 (Parallel coordinates)\">Example</a>).",
            "Split states into panels."
          ]
        }]
      }, { // H4
        "Name": "Transpose axes",
        "Constraints": "X and y encodings are used.",
        "Desc": "Swap x and y axes. This is a special case of changing encoding.",
        "Group_Id": "H4",
        "Examples": [
          "E31-HealthCare-1 (State-level map)",
          "E43-Cabinet-2 (Entire)",
          "E138-PayGap-1 (Interval dot)",
          "E232-TempWorker-1"
        ],
        "Loss": [{
          "Name": "Reduced concurrency (for comparison)",
          "Relaxation": [
            "Reduce height."
          ]
        }, {
          "Name": "Changes in graphical perception (impression)",
          "Relaxation": []
        }]
      }]
    }]
  }, { //sub problems for problem set 2
    "Problem_Set": "Interaction Complexity",
    "Group_Id": "3",
    "Sub_Problems": [{ // I
      "Problem": "Too complex for an immediate rendering",
      "Group_Id": "I",
      "Strategy": [{
        "Name": "Remove the feature",
        "Constraints": null,
        "Desc": "Remove an interaction feature X (e.g., search, hypothesis).",
        "Group_Id": "I1",
        "Examples": [
          "E13-ColdMath-1 (Line)",
          "E149-TopCeos-1 (Bubble+Bar)"
        ],
        "Loss": [{
          "Name": "Loss of interaction",
          "Relaxation": [
            "Add a link to the page with full interaction (<a href=\"/sample/E14-Manhattan-1 (Map)\">Example</a>: There is a static version of this visualization.).",
            "Leave interaction only in a conclusive visualization (if there are multiple similar visualizations; <a href=\"/sample/E149-TopCeos-1 (Bubble+Bar)\">Example</a>: See the last visualization in the example.)."
          ]
        }]
      }]
    }, { // J
      "Problem": "Too complicated scene transition",
      "Group_Id": "J",
      "Strategy": [{ // J1
        "Name": "Split interactive states into static panels",
        "Constraints": "Preferred when there are pre-defined states",
        "Desc": "When a visualization is explorable (e.g. interactive slideshow, a time slider, zooming, panning) in the large screen version, replace it with several prominent static panels.",
        "Group_Id": "J1",
        "Examples": [
          "E132-MegaBank-1",
          "E148-Boardrooms-1 (Icon array)",
          "E139-TrumpHappen-1 (Bubble)"
        ],
        "Loss": [{
          "Name": "Loss of interaction (browsing); But, when used for pre-defined states, most of the information is remained.",
          "Relaxation": [
            "Add a link to the page with full interaction (<a href=\"/sample/E14-Manhattan-1 (Map)\">Example</a>: There is a static version of this visualization.).",
          ]
        }]
      }]
    }, { // K
      "Problem": "Too complex direct manipulation",
      "Group_Id": "K",
      "Strategy": [{ // K1
        "Name": "Remove interaction",
        "Constraints": null,
        "Desc": "Remove the interaction for direct manipulation.",
        "Group_Id": "K1",
        "Examples": [
          "E138-PayGap-1 (Interval dot)",
          "E150-StartupStock-1 (Line)"
        ],
        "Loss": [{
          "Name": "Loss of information (overview/detail)",
          "Relaxation": [
            "Add a video/animation; For more information please refer to Brehmer et al. (2019).",
            "Convert into a static image.",
            "Aggregate data.",
            "Use bin."
          ]
        }]
      }, { // K2
        "Name": "Immobilize",
        "Constraints": "Not preferred when a live update is demanded.",
        "Desc": "Convert the dynaimc visualization to a static image",
        "Group_Id": "K2",
        "Examples": [
          "E132-MegaBank-1",
          "E148-Boardrooms-1 (Icon array)"
        ],
        "Loss": [{
          "Name": "Loss of information/interaction (hard to update when live update is need)",
          "Relaxation": [
            "Add a manual update feature."
          ]
        }]
      }, { // K3
        "Name": "Aggregate",
        "Constraints": "The target data field should be able to be aggregated with regard to a data dimension, which has natural hierarchy.",
        "Desc": "Aggregate data points to a hierarchically higher level by means of aggregate function, such as average, count, or sum. For example, daily temperature data can be aggregated into monthly average temperature. Alternatively, when there is already an aggregate encoding, then you may leave the aggregate encoding only by removing atomic level marks for individual data points.",
        "Group_Id": "K3",
        "Examples": [
          "E45-BillOReilly-1 (Bar)",
          "E147-Polling-1 (Line+Dot)"
        ],
        "Loss": [{ // A3a
          "Name": "Loss of information (distribution)",
          "Relaxation": [
            "Encode uncertainty (e.g., adding a trend line).",
            "Use accordion structure (aggregated data point functions as a toggle for detail values)."
          ]
        }]
      }, { // K4
        "Name": "Increase Bin Size",
        "Constraints": "The target data field must be continuous. When there is already a bin, this is more preferred than when there is not.",
        "Desc": "Increase the bin size of a continuous variable. Or, when the variable is not binned, then you may apply bin (e.g., Lin et al. (2020), Figure on Page 8).",
        "Group_Id": "K4",
        "Examples": [
          "E9-Voter-1 (Histogram)",
          "2E251-MTSnow-1"
        ],
        "Loss": [{ // A2a
          "Name": "Changes in graphical perception (distribution)",
          "Relaxation": [
            "Overlay a trend line."
          ]
        }]
      }, { // K5
        "Name": "Animate",
        "Constraints": "Better when data is temporally arranged.",
        "Desc": "Animate a sequence of browsing. For more information please refer to Brehmer et al. (2019).",
        "Group_Id": "K5",
        "Examples": [],
        "Loss": [{
          "Name": "Reduced discoverability (transient)",
          "Relaxation": [
            "Add a slider."
          ]
        }]
      }, { // K6
        "Name": "Small Multiples",
        "Constraints": "Preferred when there is a dimension(s) for splitting.",
        "Desc": "For more information please refer to Brehmer et al. (2019)",
        "Group_Id": "K6",
        "Examples": [],
        "Loss": [{
          "Name": "Reduced concurrency (lengthiness)",
          "Relaxation": [
            "Add a search interaction.",
            "Add pagination (e.g., sliding)."
          ]
        }]
      }, { // K7
        "Name": "Split interactive states into static panels",
        "Constraints": "Preferred when there are pre-defined states with direct manipulation",
        "Desc": "When a visualization is explorable (e.g. interactive slideshow, a time slider, zooming, panning) in the large screen version, replace it with several prominent static panels.",
        "Group_Id": "K7",
        "Examples": [
          "E132-MegaBank-1",
          "E148-Boardrooms-1 (Icon array)",
          "E139-TrumpHappen-1 (Bubble)"
        ],
        "Loss": [{
          "Name": "Loss of interaction (browsing); But, when used for pre-defined states, most of the information is remained.",
          "Relaxation": [
            "Add a link to the page with full interaction (<a href=\"/sample/E14-Manhattan-1 (Map)\">Example</a>: There is a static version of this visualization.).",
          ]
        }]
      }]
    }, { // L
      "Problem": "Hard to hover",
      "Group_Id": "L",
      "Strategy": [{ //L1
        "Name": "Disable tooltip interaction",
        "Constraints": null,
        "Desc": "Remove tooltips.",
        "Group_Id": "L1",
        "Examples": [
          "E43-Cabinet-3 (Women and minorities)",
          "E126-HealthCare-1 (Scatterplot)"
        ],
        "Loss": [{
          "Name": "Loss of information (detail)",
          "Relaxation": [
            "Selectively add emphases/annotations.",
            "Add a search-based detail-on-demand."
          ]
        }]
      }]
    }]
  }]
}


dependency.filter_by_group = function (level, group) {
  if (level == 'Sub_Problems') {
    let d = dependency.data;
    for (let i = 0; i < d.length; i++) {
      let subs = d[i].Sub_Problems;
      for (let j = 0; j < subs.length; j++) {
        if (subs[j].Group_Id == group) return subs[j];
      }
    }
    return {}
  } else if (level == "Strategy") {
    let d = dependency.data;
    for (let i = 0; i < d.length; i++) {
      let subs = d[i].Sub_Problems;
      for (let j = 0; j < subs.length; j++) {
        let stg = subs[j].Strategy;
        for (let k = 0; k < stg.length; k++) {
          if (group == stg[k].Group_Id) return stg[k];
        }
      }
    }
    return {}
  }
}