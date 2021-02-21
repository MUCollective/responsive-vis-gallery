let sample = {
  data: [
    {
      "Item": "E1-President-2 (Bar)",
      "Order": 102,
      "Parent": "001-nyt-16-president",
      "journal": "NYT",
      "Title": "Presidential Election Results: Donald J. Trump Wins",
      "URL": "https://www.nytimes.com/elections/results/president",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Hue",
        "X"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤50",
      "Simplify Labels": "The names of the candidates",
      "Move Labels": "Names of candidates"
    },
    {
      "Item": "E1-President-1 (Map)",
      "Order": 101,
      "Parent": "001-nyt-16-president",
      "journal": "NYT",
      "Title": "Presidential Election Results: Donald J. Trump Wins",
      "URL": "https://www.nytimes.com/elections/results/president",
      "Chart_Type": [
        "Choropleth"
      ],
      "Encodings": [
        "Geo",
        "Hue",
        "Pattern"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Dynamic query",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "p25K",
      "Serialize Layout": "Tabs, legends, and maps",
      "Toggle Interaction Widget": "Map zoom/return buttons",
      "Fix Tooltip Position": "Tooltips on map",
      "Remove Transition Animation": "An animated state transition for zoom-in after selecting a state in the map",
      "Parallelize Legends": "Legend layout",
      "Remove Fields": "A column of a table in the tooltip",
      "Disable Hover Interactions": "A small summary table appearing on the top right corner of the map when a state is selected"
    },
    {
      "Item": "E1-President-3 (Table)",
      "Order": 103,
      "Parent": "001-nyt-16-president",
      "journal": "NYT",
      "Title": "Presidential Election Results: Donald J. Trump Wins",
      "URL": "https://www.nytimes.com/elections/results/president",
      "Chart_Type": [
        "Table"
      ],
      "Encodings": [
        "Hue"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤200",
      "Regroup Data": "Five tables (LS) are regrouped into two tables (SS).",
      "Remove Panels/States": "As a reusult of 'Regroup Data'",
      "Remove Fields": "Information about flipped outcomes",
      "Remove Encoding": "A pattern encoding for flipped outcomes",
      "Add Encoding": "Adding a check mark for a finally elected candidate (redundancy)",
      "Remove Legends": "Legends may be redudant because the same legends are used throughout the article."
    },
    {
      "Item": "E2-Republican-1 (Map)",
      "Order": 201,
      "Parent": "002-nyt-16-republican",
      "journal": "NYT",
      "Title": "How Every New York City Neighborhood Voted in the Republican Primary",
      "URL": "https://www.nytimes.com/interactive/2016/04/19/us/elections/new-york-city-republican-primary-results.html#11/40.7100/-73.9800",
      "Chart_Type": [
        "Choropleth"
      ],
      "Encodings": [
        "Geo",
        "Hue"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Dynamic query",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤1-5K",
      "Serialize Layout": "Table and map",
      "Add GPS": "'Use my location' feature",
      "Disable X": "Filter tabs are removed",
      "Release Interaction Widget": "As a result of the removal of interaction features, a separate widget/panel for interactions is removed.",
      "Fix Tooltip Position": "Tooltip on the map"
    },
    {
      "Item": "E3-Candidates-1 (Map)",
      "Order": 301,
      "Parent": "003-nyt-16-candidates",
      "journal": "NYT",
      "Title": "Detailed Maps of Where Trump, Cruz, Clinton and Sanders Have Wo",
      "URL": "https://www.nytimes.com/elections/2016/national-results-map",
      "Chart_Type": [
        "Choropleth"
      ],
      "Encodings": [
        "Geo",
        "Hue",
        "Value"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Dynamic query",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤25K",
      "Serialize Layout": "Tabs, legends, and maps",
      "Fix Tooltip Position": "Tooltip on the map",
      "Remove Transition Animation": "An animated state transition for zoom-in after selecting a state in the map"
    },
    {
      "Item": "E4-SunnyDay-1 (Map)",
      "Order": 401,
      "Parent": "004-nyt-16-sunnyday",
      "journal": "NYT",
      "Title": "A Sharp Increase In 'Sunny Day' Flooding",
      "URL": "https://www.nytimes.com/interactive/2016/09/04/science/global-warming-increases-nuisance-flooding.html",
      "Chart_Type": [
        "Map"
      ],
      "Encodings": [
        "Geo"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤25K",
      "Serialize Layout": "Serialized with regard to the detail graphs (E4-SunnyDay-2)"
    },
    {
      "Item": "E4-SunnyDay-2 (Area+Bar)",
      "Order": 402,
      "Parent": "004-nyt-16-sunnyday",
      "journal": "NYT",
      "Title": "A Sharp Increase In 'Sunny Day' Flooding",
      "URL": "https://www.nytimes.com/interactive/2016/09/04/science/global-warming-increases-nuisance-flooding.html",
      "Chart_Type": [
        "Area",
        "Bar",
        "Line"
      ],
      "Encodings": [
        "X",
        "Y"
      ],
      "Chart_Size": "Small",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤25K",
      "Reduce Width": 1,
      "Serialize Layout": "Legends (for the first graph only) and text description"
    },
    {
      "Item": "E5-StephenCurry-1 (Line)",
      "Order": 501,
      "Parent": "005-nyt-16-stephencurry",
      "journal": "NYT",
      "Title": "Stephen Curry's 3-Point Record in Context: Off the Charts",
      "URL": "https://www.nytimes.com/interactive/2016/04/16/upshot/stephen-curry-golden-state-warriors-3-pointers.html",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "Diverging",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤25K",
      "Remove Labels": "On the right side of bars",
      "Disable X": "Search for a player",
      "Adjust Tick Labels": "X Axis",
      "Serialize Layout": "(Visualization first) The horizontal arragnement of the text and visualization to the vertical arrangement of the visualization and text."
    },
    {
      "Item": "E6-Europe-1 (Bar+Small multiples)",
      "Order": 601,
      "Parent": "006-nyt-16-europe",
      "journal": "NYT",
      "Title": "How Far Is Europe Swinging to the Right?",
      "URL": "https://www.nytimes.com/interactive/2016/05/22/world/europe/europe-right-wing-austria-hungary.html",
      "Chart_Type": [
        "Bar",
        "Stacked"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Small multiples",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤1-5K",
      "Incorporate Labels": "On the top of each small multiple",
      "Disable Hover Interactions": "A tooltip for value of each stacked bar",
      "Adjust Tick Labels": "X Axis on each small multiple",
      "Fluid Small Multiples": "5 x 4 layout to 3~4 columns"
    },
    {
      "Item": "E6-Europe-2 (Bar)",
      "Order": 602,
      "Parent": "006-nyt-16-europe",
      "journal": "NYT",
      "Title": "How Far Is Europe Swinging to the Right?",
      "URL": "https://www.nytimes.com/interactive/2016/05/22/world/europe/europe-right-wing-austria-hungary.html",
      "Chart_Type": [
        "Bar",
        "Stacked"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Reduce Width": 1,
      "Disable Hover Interactions": "A tooltip for value of each stacked bar"
    },
    {
      "Item": "E7-School-1 (Scatterplot)",
      "Order": 701,
      "Parent": "007-nyt-16-school",
      "journal": "NYT",
      "Title": "Money, Race and Success: How Your School District Compares",
      "URL": "https://www.nytimes.com/interactive/2016/04/29/upshot/money-race-and-success-how-your-school-district-compares.html",
      "Chart_Type": [
        "Bubble",
        "Scatterplot"
      ],
      "Encodings": [
        "Size",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "p25K",
      "Reduce Width": 1,
      "Move Labels": "Tick labes for Y axis"
    },
    {
      "Item": "E7-School-2 (Scatterplot)",
      "Order": 702,
      "Parent": "007-nyt-16-school",
      "journal": "NYT",
      "Title": "Money, Race and Success: How Your School District Compares",
      "URL": "https://www.nytimes.com/interactive/2016/04/29/upshot/money-race-and-success-how-your-school-district-compares.html",
      "Chart_Type": [
        "Bubble",
        "Line",
        "Scatterplot"
      ],
      "Encodings": [
        "Hue",
        "Orientation",
        "Size",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤25K",
      "Reduce Width": 1,
      "Move Labels": "Tick labes for Y axis"
    },
    {
      "Item": "E7-School-3 (Scatterplot)",
      "Order": 703,
      "Parent": "007-nyt-16-school",
      "journal": "NYT",
      "Title": "Money, Race and Success: How Your School District Compares",
      "URL": "https://www.nytimes.com/interactive/2016/04/29/upshot/money-race-and-success-how-your-school-district-compares.html",
      "Chart_Type": [
        "Bubble",
        "Line",
        "Scatterplot"
      ],
      "Encodings": [
        "Hue",
        "Orientation",
        "Size",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤1-5K",
      "Reduce Width": 1,
      "Move Labels": "Tick labes for Y axis"
    },
    {
      "Item": "E8-Warmer-1 (Bar, Line)",
      "Order": 801,
      "Parent": "008-nyt-16-warmer",
      "journal": "NYT",
      "Title": "How Much Warmer Was Your City in 2015?",
      "URL": "https://www.nytimes.com/interactive/2016/02/19/us/2015-year-in-weather-temperature-precipitation.html",
      "Chart_Type": [
        "Area",
        "Bar",
        "Line"
      ],
      "Encodings": [
        "Length",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Dynamic query",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "p25K",
      "Reduce Width": 1,
      "Remove Legends": "Globe-like legend for location (top)",
      "Externalize Legends": "Legends for the temparature graph (top)",
      "Remove Annotations": "Bar graph for temparature (top)",
      "Simplify Labels": "Month names for temparature graph (top)",
      "Remove Labels": "Values in line graphs for precipitation (bottom)"
    },
    {
      "Item": "E9-Voter-1 (Histogram)",
      "Order": 901,
      "Parent": "009-nyt-16-voter",
      "journal": "NYT",
      "Title": "What's Driving Trump and Clinton Voters to the Polls",
      "URL": "https://www.nytimes.com/interactive/2016/04/05/us/elections/state-voter-histograms.html",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Interactive slideshow",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤200",
      "Increase Bin Size": "Histogram",
      "Adjust Ticks": "As a result of 'Increase Bin Size'",
      "Disable Hover Interactions": "A tooltip for each block mark representing a state"
    },
    {
      "Item": "E10-Party-1 (Bubble)",
      "Order": 1001,
      "Parent": "010-nyt-16-party",
      "journal": "NYT",
      "Title": "Which Issues Each Party Debates, or Ignores",
      "URL": "https://www.nytimes.com/interactive/2016/03/11/us/elections/what-parties-debate-or-ignore.html",
      "Chart_Type": [
        "Bubble",
        "Dot"
      ],
      "Encodings": [
        "Size",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Text"
      ],
      "Data_Size": "≤200",
      "Reduce Width": 1
    },
    {
      "Item": "E11-TrumpInsult-1 (Stacked area, proportion)",
      "Order": 1101,
      "Parent": "011-nyt-16-trumpinsult",
      "journal": "NYT",
      "Title": "How to Know What Donald Trump Really Cares About: Look at What He's Insulting",
      "URL": "https://www.nytimes.com/interactive/2016/12/06/upshot/how-to-know-what-donald-trump-really-cares-about-look-at-who-hes-insulting.html",
      "Chart_Type": [
        "Area",
        "Stacked"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "X"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal",
        "Text"
      ],
      "Data_Size": "≤25K",
      "Remove Emphases": "Drop outs",
      "Remove Annotations": "Drop outs",
      "Reduce Width": 1,
      "Adjust Ticks": "X and Y Axes",
      "Incorporate Labels": "Y axis on the left side",
      "Remove Labels": "Y axis on the right side"
    },
    {
      "Item": "E11-TrumpInsult-2 (Stacked area, value)",
      "Order": 1102,
      "Parent": "011-nyt-16-trumpinsult",
      "journal": "NYT",
      "Title": "How to Know What Donald Trump Really Cares About: Look at What He's Insulting",
      "URL": "https://www.nytimes.com/interactive/2016/12/06/upshot/how-to-know-what-donald-trump-really-cares-about-look-at-who-hes-insulting.html",
      "Chart_Type": [
        "Area",
        "Stacked"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "X"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal",
        "Text"
      ],
      "Data_Size": "≤25K",
      "Remove Emphases": "Drop outs",
      "Remove Annotations": "Drop outs",
      "Reduce Width": 1,
      "Adjust Ticks": "X Axis"
    },
    {
      "Item": "E11-TrumpInsult-3 (Area + Small multiples)",
      "Order": 1103,
      "Parent": "011-nyt-16-trumpinsult",
      "journal": "NYT",
      "Title": "How to Know What Donald Trump Really Cares About: Look at What He's Insulting",
      "URL": "https://www.nytimes.com/interactive/2016/12/06/upshot/how-to-know-what-donald-trump-really-cares-about-look-at-who-hes-insulting.html",
      "Chart_Type": [
        "Area"
      ],
      "Encodings": [
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal",
        "Text"
      ],
      "Data_Size": "≤25K",
      "Remove Annotations": "Critical events",
      "Reduce Width": 1,
      "Adjust Ticks": "X Axis"
    },
    {
      "Item": "E12-CultureDivide-1 (Animated pink map)",
      "Order": 1201,
      "Parent": "012-nyt-16-culturedivide",
      "journal": "NYT",
      "Title": "'Duck Dynasty' vs. 'Modern Family': 50 Maps of the U.S. Cultural Divide",
      "URL": "https://www.nytimes.com/interactive/2016/12/26/upshot/duck-dynasty-vs-modern-family-television-maps.html",
      "Chart_Type": [
        "Choropleth"
      ],
      "Encodings": [
        "Geo",
        "Value"
      ],
      "Chart_Size": "Big",
      "Format": "Animation",
      "Format_2": "",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "p25K"
    },
    {
      "Item": "E12-CultureDivide-2 (Blue map)",
      "Order": 1202,
      "Parent": "012-nyt-16-culturedivide",
      "journal": "NYT",
      "Title": "'Duck Dynasty' vs. 'Modern Family': 50 Maps of the U.S. Cultural Divide",
      "URL": "https://www.nytimes.com/interactive/2016/12/26/upshot/duck-dynasty-vs-modern-family-television-maps.html",
      "Chart_Type": [
        "Choropleth"
      ],
      "Encodings": [
        "Geo",
        "Value"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "p25K",
      "Serialize Layout": "The horizontal arragnement of the visualization and text to the vertical arrangement of the visualization and text."
    },
    {
      "Item": "E12-CultureDivide-3 (Pink map)",
      "Order": 1203,
      "Parent": "012-nyt-16-culturedivide",
      "journal": "NYT",
      "Title": "'Duck Dynasty' vs. 'Modern Family': 50 Maps of the U.S. Cultural Divide",
      "URL": "https://www.nytimes.com/interactive/2016/12/26/upshot/duck-dynasty-vs-modern-family-television-maps.html",
      "Chart_Type": [
        "Choropleth"
      ],
      "Encodings": [
        "Geo",
        "Value"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "p25K",
      "Remove Annotations": "Regional characteristics"
    },
    {
      "Item": "E13-ColdMath-1 (Line)",
      "Order": 1301,
      "Parent": "013-nyt-16-coldmath",
      "journal": "NYT",
      "Title": "The Cold Hard Math of How Trump Can Win, and How Rubio Can Stop Him",
      "URL": "https://www.nytimes.com/interactive/2016/02/27/upshot/republican-delegate-calculator-how-trump-can-win.html",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤1-5K",
      "Disable X": "Sliders for hypothetical outcomes",
      "Reduce Width": 1,
      "Adjust Tick Labels": "X Axis",
      "Serialize Layout": "Within the interaction widget"
    },
    {
      "Item": "E13-ColdMath-2 (Line with tabs)",
      "Order": 1302,
      "Parent": "013-nyt-16-coldmath",
      "journal": "NYT",
      "Title": "The Cold Hard Math of How Trump Can Win, and How Rubio Can Stop Him",
      "URL": "https://www.nytimes.com/interactive/2016/02/27/upshot/republican-delegate-calculator-how-trump-can-win.html",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤1-5K",
      "Reduce Width": 1,
      "Adjust Ticks": "X Axis",
      "Serialize Layout": "Within the interaction widget"
    },
    {
      "Item": "E14-Manhattan-1 (Map)",
      "Order": 1401,
      "Parent": "014-nyt-16-manhattan",
      "journal": "NYT",
      "Title": "Which Buildings in Manhattan Couldn't Be Built Today?",
      "URL": "https://www.nytimes.com/interactive/2016/05/18/upshot/which-buildings-in-manhattan-couldnt-be-built-again-today.html",
      "Chart_Type": [
        "Choropleth"
      ],
      "Encodings": [
        "Geo",
        "Hue"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Map with pan/zoom",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "p25K",
      "Reudce Explorable Area": "The map's default view covers less area in the SS version.",
      "Change Trigger": "A list to an option box",
      "Remove Annotations": "Characteristic regions",
      "Remove Trigger": "Remove zoom/pan buttons"
    },
    {
      "Item": "E15-Florida-1 (Map)",
      "Order": 1501,
      "Parent": "015-nyt-16-florida",
      "journal": "NYT",
      "Title": "Latest Upshot Poll Shows Trump With a Lead in Florida",
      "URL": "https://www.nytimes.com/interactive/2016/10/30/upshot/florida-poll.html",
      "Chart_Type": [
        "Dot-Map"
      ],
      "Encodings": [
        "Geo",
        "Hue"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤25K",
      "Remove Legends": "Map legends",
      "Remove Labels": "Some area names on the map",
      "Serialize Layout": "Text pragraph goes below the map"
    },
    {
      "Item": "E15-Florida-2 (Table)",
      "Order": 1502,
      "Parent": "015-nyt-16-florida",
      "journal": "NYT",
      "Title": "Latest Upshot Poll Shows Trump With a Lead in Florida",
      "URL": "https://www.nytimes.com/interactive/2016/10/30/upshot/florida-poll.html",
      "Chart_Type": [
        "Table"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Remove Fields": "Two columns in the table",
      "Remove Encoding": "Color-shade in the removed fields (redundancy encoding)"
    },
    {
      "Item": "E15-Florida-3 (Maps)",
      "Order": 1503,
      "Parent": "015-nyt-16-florida",
      "journal": "NYT",
      "Title": "Latest Upshot Poll Shows Trump With a Lead in Florida",
      "URL": "https://www.nytimes.com/interactive/2016/10/30/upshot/florida-poll.html",
      "Chart_Type": [
        "Dot-Map"
      ],
      "Encodings": [
        "Geo",
        "Hue"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Small multiples",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤25K",
      "Serialize Layout": "Maps"
    },
    {
      "Item": "E15-Florida-4 (Bars)",
      "Order": 1504,
      "Parent": "015-nyt-16-florida",
      "journal": "NYT",
      "Title": "Latest Upshot Poll Shows Trump With a Lead in Florida",
      "URL": "https://www.nytimes.com/interactive/2016/10/30/upshot/florida-poll.html",
      "Chart_Type": [
        "Bar",
        "Stacked"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤50",
      "Reduce Width": 1,
      "Remove Labels": "Labels for grey bars due to the reduced size incapable of holding labels in them"
    },
    {
      "Item": "E16-Epidemic-1 (Map+Small multiples)",
      "Order": 1601,
      "Parent": "016-nyt-16-epidemic",
      "journal": "NYT",
      "Title": "How the Epidemic of Drug Overdose Deaths Rippled Across America",
      "URL": "https://www.nytimes.com/interactive/2016/01/07/us/drug-overdose-deaths-in-the-us.html",
      "Chart_Type": [
        "Choropleth"
      ],
      "Encodings": [
        "Diverging",
        "Geo"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Small multiples",
      "Data_Type": [
        "Geospatial",
        "Temporal"
      ],
      "Data_Size": "p25K",
      "Fluid Small Multiples": 1
    },
    {
      "Item": "E16-Epidemic-2 (Map)",
      "Order": 1602,
      "Parent": "016-nyt-16-epidemic",
      "journal": "NYT",
      "Title": "How the Epidemic of Drug Overdose Deaths Rippled Across America",
      "URL": "https://www.nytimes.com/interactive/2016/01/07/us/drug-overdose-deaths-in-the-us.html",
      "Chart_Type": [
        "Choropleth"
      ],
      "Encodings": [
        "Diverging",
        "Geo"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial",
        "Temporal"
      ],
      "Data_Size": "p25K"
    },
    {
      "Item": "E16-Epidemic-3 (Line)",
      "Order": 1603,
      "Parent": "016-nyt-16-epidemic",
      "journal": "NYT",
      "Title": "How the Epidemic of Drug Overdose Deaths Rippled Across America",
      "URL": "https://www.nytimes.com/interactive/2016/01/07/us/drug-overdose-deaths-in-the-us.html",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "Value",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200"
    },
    {
      "Item": "E16-Epidemic-4 (Map+Small multiples)",
      "Order": 1604,
      "Parent": "016-nyt-16-epidemic",
      "journal": "NYT",
      "Title": "How the Epidemic of Drug Overdose Deaths Rippled Across America",
      "URL": "https://www.nytimes.com/interactive/2016/01/07/us/drug-overdose-deaths-in-the-us.html",
      "Chart_Type": [
        "Choropleth"
      ],
      "Encodings": [
        "Diverging",
        "Geo"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Small multiples",
      "Data_Type": [
        "Geospatial",
        "Temporal"
      ],
      "Data_Size": "≤1-5K",
      "Fluid Small Multiples": 1
    },
    {
      "Item": "E16-Epidemic-5 (Two maps)",
      "Parent": "016-nyt-16-epidemic",
      "journal": "NYT",
      "Title": "How the Epidemic of Drug Overdose Deaths Rippled Across America",
      "URL": "https://www.nytimes.com/interactive/2016/01/07/us/drug-overdose-deaths-in-the-us.html",
      "Chart_Type": [
        "Choropleth"
      ],
      "Encodings": [
        "Diverging",
        "Geo"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Geospatial",
        "Temporal"
      ],
      "Data_Size": "≤1-5K",
      "Simplify Labels": "State names (from shortened to abbreviated)"
    },
    {
      "Item": "E17-Chicago-1 (Line, yearly)",
      "Parent": "017-nyt-16-chicago",
      "journal": "NYT",
      "Title": "Chicago's Murder Problem",
      "URL": "https://www.nytimes.com/interactive/2016/05/18/us/chicago-murder-problem.html",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Reduce Width": 1,
      "Remove Annotations": "Characteristic events"
    },
    {
      "Item": "E17-Chicago-6 (Line, monthly)",
      "Parent": "017-nyt-16-chicago",
      "journal": "NYT",
      "Title": "Chicago's Murder Problem",
      "URL": "https://www.nytimes.com/interactive/2016/05/18/us/chicago-murder-problem.html",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤25K",
      "Reduce Width": 1,
      "Adjust Tick Labels": "Non-systematic reduction"
    },
    {
      "Item": "E17-Chicago-2 (Bar)",
      "Parent": "017-nyt-16-chicago",
      "journal": "NYT",
      "Title": "Chicago's Murder Problem",
      "URL": "https://www.nytimes.com/interactive/2016/05/18/us/chicago-murder-problem.html",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤50",
      "Serialize Label-Marks": 1
    },
    {
      "Item": "E17-Chicago-3 (Two lines)",
      "Parent": "017-nyt-16-chicago",
      "journal": "NYT",
      "Title": "Chicago's Murder Problem",
      "URL": "https://www.nytimes.com/interactive/2016/05/18/us/chicago-murder-problem.html",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Reduce Width": 1,
      "Adjust Tick Labels": "Years on the X axis",
      "Simplify Labels": "Years on the X aixs"
    },
    {
      "Item": "E17-Chicago-4 (Bar)",
      "Parent": "017-nyt-16-chicago",
      "journal": "NYT",
      "Title": "Chicago's Murder Problem",
      "URL": "https://www.nytimes.com/interactive/2016/05/18/us/chicago-murder-problem.html",
      "Chart_Type": [
        "Bar",
        "Stacked"
      ],
      "Encodings": [
        "Diverging",
        "Length",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤50",
      "Reduce Width": 1
    },
    {
      "Item": "E17-Chicago-5 (Two maps)",
      "Parent": "017-nyt-16-chicago",
      "journal": "NYT",
      "Title": "Chicago's Murder Problem",
      "URL": "https://www.nytimes.com/interactive/2016/05/18/us/chicago-murder-problem.html",
      "Chart_Type": [
        "Choropleth"
      ],
      "Encodings": [
        "Geo",
        "Value"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "p25K",
      "Serialize Layout": "Text and map",
      "Remove Labels": "Area names"
    },
    {
      "Item": "E18-Murder-1 (Map)",
      "Parent": "018-nyt-16-murder",
      "journal": "NYT",
      "Title": "Murder Rates Rose in a Quarter of the Nation's 100 Largest Cities",
      "URL": "https://www.nytimes.com/interactive/2016/09/08/us/us-murder-rates.html",
      "Chart_Type": [
        "Shape",
        "Map"
      ],
      "Encodings": [
        "Geo",
        "Length"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤50",
      "Change Encoding": "Length and geolocation to number (text mark) and geolocation",
      "Change Measurements": "Actual value to ranks",
      "Externalize Labels": 1
    },
    {
      "Item": "E18-Murder-2 (Vertical bar)",
      "Parent": "018-nyt-16-murder",
      "journal": "NYT",
      "Title": "Murder Rates Rose in a Quarter of the Nation's 100 Largest Cities",
      "URL": "https://www.nytimes.com/interactive/2016/09/08/us/us-murder-rates.html",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50",
      "Reduce Width": 1
    },
    {
      "Item": "E18-Murder-3 (Line)",
      "Parent": "018-nyt-16-murder",
      "journal": "NYT",
      "Title": "Murder Rates Rose in a Quarter of the Nation's 100 Largest Cities",
      "URL": "https://www.nytimes.com/interactive/2016/09/08/us/us-murder-rates.html",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Reduce Width": 1
    },
    {
      "Item": "E18-Murder-4 (Horizontal bar)",
      "Parent": "018-nyt-16-murder",
      "journal": "NYT",
      "Title": "Murder Rates Rose in a Quarter of the Nation's 100 Largest Cities",
      "URL": "https://www.nytimes.com/interactive/2016/09/08/us/us-murder-rates.html",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤50"
    },
    {
      "Item": "E18-Murder-5 (Map)",
      "Parent": "018-nyt-16-murder",
      "journal": "NYT",
      "Title": "Murder Rates Rose in a Quarter of the Nation's 100 Largest Cities",
      "URL": "https://www.nytimes.com/interactive/2016/09/08/us/us-murder-rates.html",
      "Chart_Type": [
        "Dot-Map"
      ],
      "Encodings": [
        "Geo",
        "Hue"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤200"
    },
    {
      "Item": "E18-Murder-6 (Chicago map)",
      "Parent": "018-nyt-16-murder",
      "journal": "NYT",
      "Title": "Murder Rates Rose in a Quarter of the Nation's 100 Largest Cities",
      "URL": "https://www.nytimes.com/interactive/2016/09/08/us/us-murder-rates.html",
      "Chart_Type": [
        "Dot-Map"
      ],
      "Encodings": [
        "Geo"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "p25K"
    },
    {
      "Item": "E18-Murder-7 (Line)",
      "Parent": "018-nyt-16-murder",
      "journal": "NYT",
      "Title": "Murder Rates Rose in a Quarter of the Nation's 100 Largest Cities",
      "URL": "https://www.nytimes.com/interactive/2016/09/08/us/us-murder-rates.html",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Reduce Width": 1
    },
    {
      "Item": "E18-Murder-8 (Line)",
      "Parent": "018-nyt-16-murder",
      "journal": "NYT",
      "Title": "Murder Rates Rose in a Quarter of the Nation's 100 Largest Cities",
      "URL": "https://www.nytimes.com/interactive/2016/09/08/us/us-murder-rates.html",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50",
      "Reduce Width": 1
    },
    {
      "Item": "E18-Murder-9 (Vertical bar)",
      "Parent": "018-nyt-16-murder",
      "journal": "NYT",
      "Title": "Murder Rates Rose in a Quarter of the Nation's 100 Largest Cities",
      "URL": "https://www.nytimes.com/interactive/2016/09/08/us/us-murder-rates.html",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Reduce Width": 1,
      "Adjust Tick Labels": "Non-systematic reduction"
    },
    {
      "Item": "E19-GlassCeiling-3 (Heatmap)",
      "Parent": "019-nyt-16-glassceiling",
      "journal": "NYT",
      "Title": "Hillary Clinton Broke One Glass Ceiling. When Were Others Broken?",
      "URL": "https://www.nytimes.com/interactive/2016/07/25/us/politics/political-firsts.html",
      "Chart_Type": [
        "Heatmap"
      ],
      "Encodings": [
        "Hue"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Fluid Layout": 1,
      "Fix Tooltip Position": 1
    },
    {
      "Item": "E19-GlassCeiling-1 (Bar)",
      "Parent": "019-nyt-16-glassceiling",
      "journal": "NYT",
      "Title": "Hillary Clinton Broke One Glass Ceiling. When Were Others Broken?",
      "URL": "https://www.nytimes.com/interactive/2016/07/25/us/politics/political-firsts.html",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50",
      "Serialize Label-Marks": 1,
      "Elaborate Labels": "As a result of 'Serialize Label-Marks'",
      "Disable Hover Interactions": "Labels"
    },
    {
      "Item": "E19-GlassCeiling-2 (Bar)",
      "Parent": "019-nyt-16-glassceiling",
      "journal": "NYT",
      "Title": "Hillary Clinton Broke One Glass Ceiling. When Were Others Broken?",
      "URL": "https://www.nytimes.com/interactive/2016/07/25/us/politics/political-firsts.html",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Fluid Layout": "6 bars to separate 2 groups of 3 bars"
    },
    {
      "Item": "E20-Muslim-1 (Cartogram)",
      "Parent": "020-nyt-16-muslim",
      "journal": "NYT",
      "Title": "Millions Could Be Blocked From Entering the U.S. Depending on How Trump Would Enforce a Ban on Muslim Immigration",
      "URL": "https://www.nytimes.com/interactive/2016/07/22/us/politics/trump-immigration-ban-how-could-it-work.html",
      "Chart_Type": [
        "Cartogram"
      ],
      "Encodings": [
        "Geo",
        "Hue"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤1-5K",
      "Remove Labels": "Based on the size",
      "Relocate Annotations": "To a vacant area"
    },
    {
      "Item": "E21-Indiana-1 (Line)",
      "Parent": "021-nyt-16-indiana",
      "journal": "NYT",
      "Title": "This small Indiana county sends more people to prison than San Francisco and Durham, N.C., combined. Why?",
      "URL": "https://www.nytimes.com/2016/09/02/upshot/new-geography-of-prisons.html",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Small",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50"
    },
    {
      "Item": "E21-Indiana-2 (Map)",
      "Parent": "021-nyt-16-indiana",
      "journal": "NYT",
      "Title": "This small Indiana county sends more people to prison than San Francisco and Durham, N.C., combined. Why?",
      "URL": "https://www.nytimes.com/2016/09/02/upshot/new-geography-of-prisons.html",
      "Chart_Type": [
        "Choropleth"
      ],
      "Encodings": [
        "Geo",
        "Value"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤25K",
      "Fix Tooltip Position": 1,
      "Remove Emphases": "The indication of the interested region in the article",
      "Serialize Layout": "Legends and visualization",
      "Add Text": 1
    },
    {
      "Item": "E22-Harvey-1 (Animated map)",
      "Parent": "022-nyt-17-harvey",
      "journal": "NYT",
      "Title": "Maps: Tracking Harvey's Destructive Path Through Texas and Louisiana",
      "URL": "https://www.nytimes.com/interactive/2017/08/24/us/hurricane-harvey-texas.html",
      "Chart_Type": [
        "Choropleth",
        "Line"
      ],
      "Encodings": [
        "Geo",
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Animation",
      "Format_2": "",
      "Data_Type": [
        "Geospatial",
        "Temporal"
      ],
      "Data_Size": "≤25K",
      "Serialize Layout": "Map an legends",
      "Fix Tooltip Position": 1
    },
    {
      "Item": "E22-Harvey-2 (Dot map)",
      "Parent": "022-nyt-17-harvey",
      "journal": "NYT",
      "Title": "Maps: Tracking Harvey's Destructive Path Through Texas and Louisiana",
      "URL": "https://www.nytimes.com/interactive/2017/08/24/us/hurricane-harvey-texas.html",
      "Chart_Type": [
        "Dot-Map"
      ],
      "Encodings": [
        "Geo",
        "Hue"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤1-5K",
      "Reudce Explorable Area": "The map covers less area in the SS version",
      "Remove Annotations": "According to the reduced explorable area, an annotation for the non-visible area",
      "Relocate Annotations": "The remaining annotation is moved to a vacant area."
    },
    {
      "Item": "E22-Harvey-3 (Bubble map)",
      "Parent": "022-nyt-17-harvey",
      "journal": "NYT",
      "Title": "Maps: Tracking Harvey's Destructive Path Through Texas and Louisiana",
      "URL": "https://www.nytimes.com/interactive/2017/08/24/us/hurricane-harvey-texas.html",
      "Chart_Type": [
        "Bubble",
        "Map"
      ],
      "Encodings": [
        "Geo",
        "Size"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤200",
      "Remove Labels": "For some regions"
    },
    {
      "Item": "E22-Harvey-4 (Buuble map)",
      "Parent": "022-nyt-17-harvey",
      "journal": "NYT",
      "Title": "Maps: Tracking Harvey's Destructive Path Through Texas and Louisiana",
      "URL": "https://www.nytimes.com/interactive/2017/08/24/us/hurricane-harvey-texas.html",
      "Chart_Type": [
        "Bubble",
        "Map"
      ],
      "Encodings": [
        "Geo",
        "Size"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤200",
      "Reudce Explorable Area": "The map covers less area in the SS version.",
      "Remove Annotations": 1,
      "Relocate Annotations": "The remaining annotations are moved to vacant areas in the map."
    },
    {
      "Item": "E22-Harvey-5 (Dot map)",
      "Parent": "022-nyt-17-harvey",
      "journal": "NYT",
      "Title": "Maps: Tracking Harvey's Destructive Path Through Texas and Louisiana",
      "URL": "https://www.nytimes.com/interactive/2017/08/24/us/hurricane-harvey-texas.html",
      "Chart_Type": [
        "Dot-Map"
      ],
      "Encodings": [
        "Geo"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤25K"
    },
    {
      "Item": "E22-Harvey-6 (Map+Area)",
      "Parent": "022-nyt-17-harvey",
      "journal": "NYT",
      "Title": "Maps: Tracking Harvey's Destructive Path Through Texas and Louisiana",
      "URL": "https://www.nytimes.com/interactive/2017/08/24/us/hurricane-harvey-texas.html",
      "Chart_Type": [
        "Area"
      ],
      "Encodings": [
        "Hue",
        "Size",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Small multiples",
      "Data_Type": [
        "Geospatial",
        "Temporal"
      ],
      "Data_Size": "≤1-5K",
      "Expand Explorable Area": "The map (top) covers more area in the SS version by scaling down (i.e., zooming out).",
      "Fluid Small Multiples": "Area graphs (bottom)"
    },
    {
      "Item": "E22-Harvey-7 (Lined map)",
      "Parent": "022-nyt-17-harvey",
      "journal": "NYT",
      "Title": "Maps: Tracking Harvey's Destructive Path Through Texas and Louisiana",
      "URL": "https://www.nytimes.com/interactive/2017/08/24/us/hurricane-harvey-texas.html",
      "Chart_Type": [
        "Flowmap"
      ],
      "Encodings": [
        "Geo",
        "Hue"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial",
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Simplify Labels": "The years and names of hurricanes to the years only"
    },
    {
      "Item": "E22-Harvey-8 (Choropleth)",
      "Parent": "022-nyt-17-harvey",
      "journal": "NYT",
      "Title": "Maps: Tracking Harvey's Destructive Path Through Texas and Louisiana",
      "URL": "https://www.nytimes.com/interactive/2017/08/24/us/hurricane-harvey-texas.html",
      "Chart_Type": [
        "Choropleth",
        "Dot-Map"
      ],
      "Encodings": [
        "Geo",
        "Hue"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤50"
    },
    {
      "Item": "E22-Harvey-9 (Hurricane map)",
      "Parent": "022-nyt-17-harvey",
      "journal": "NYT",
      "Title": "Maps: Tracking Harvey's Destructive Path Through Texas and Louisiana",
      "URL": "https://www.nytimes.com/interactive/2017/08/24/us/hurricane-harvey-texas.html",
      "Chart_Type": [
        "Flowmap"
      ],
      "Encodings": [
        "Geo",
        "Hue",
        "Size"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial",
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Reudce Explorable Area": "The map covers less area in the SS version"
    },
    {
      "Item": "E23-Gunman-1 (Scatterplot for three)",
      "Parent": "023-nyt-17-gunman",
      "journal": "NYT",
      "Title": "Nine Rounds a Second: How the Las Vegas Gunman Outfitted a Rifle to Fire Faster",
      "URL": "https://www.nytimes.com/interactive/2017/10/02/us/vegas-guns.html",
      "Chart_Type": [
        "Scatterplot"
      ],
      "Encodings": [
        "Length",
        "Orientation",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Animation",
      "Format_2": "",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤1-5K",
      "Reduce Width": 1,
      "Adjust Ticks": "The X axis"
    },
    {
      "Item": "E23-Gunman-2 (Scatterplot for one)",
      "Parent": "023-nyt-17-gunman",
      "journal": "NYT",
      "Title": "Nine Rounds a Second: How the Las Vegas Gunman Outfitted a Rifle to Fire Faster",
      "URL": "https://www.nytimes.com/interactive/2017/10/02/us/vegas-guns.html",
      "Chart_Type": [
        "Scatterplot"
      ],
      "Encodings": [
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Animation",
      "Format_2": "",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Reduce Width": 1,
      "Adjust Ticks": "The X axis"
    },
    {
      "Item": "E24-GunDeath-1 (Isotype)",
      "Parent": "024-nyt-17-gundeath",
      "journal": "NYT",
      "Title": "Comparing the Las Vegas Attack With Daily Gun Deaths in U.S. Cities",
      "URL": "https://www.nytimes.com/interactive/2017/10/06/us/las-vegas-gun-deaths.html",
      "Chart_Type": [
        "Isotype"
      ],
      "Encodings": [
        "Shape",
        "Size"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial",
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Fluid Layout": 1
    },
    {
      "Item": "E25-Heat-1 (Map)",
      "Parent": "025-nyt-17-heat",
      "journal": "NYT",
      "Title": "95-Degree Days: How Extreme Heat Could Spread Across the World",
      "URL": "https://www.nytimes.com/interactive/2017/06/22/climate/95-degree-day-maps.html",
      "Chart_Type": [
        "Choropleth"
      ],
      "Encodings": [
        "Geo",
        "Value"
      ],
      "Chart_Size": "Big",
      "Format": "Animation",
      "Format_2": "",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤25K",
      "Serialize Layout": 1
    },
    {
      "Item": "E25-Heat-2 (Line)",
      "Parent": "025-nyt-17-heat",
      "journal": "NYT",
      "Title": "95-Degree Days: How Extreme Heat Could Spread Across the World",
      "URL": "https://www.nytimes.com/interactive/2017/06/22/climate/95-degree-day-maps.html",
      "Chart_Type": [
        "Area",
        "Line"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Serialize Layout": "Visualizations"
    },
    {
      "Item": "E26-FanMap-1 (Small multiples)",
      "Parent": "026-nyt-17-fanmap",
      "journal": "NYT",
      "Title": "What Music Do Americans Love the Most? 50 Detailed Fan Maps",
      "URL": "https://www.nytimes.com/interactive/2017/08/07/upshot/music-fandom-maps.html",
      "Chart_Type": [
        "Choropleth"
      ],
      "Encodings": [
        "Geo",
        "Value"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Small multiples",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "p25K",
      "Reudce Explorable Area": "Less number of small multiples are visible in the SS version."
    },
    {
      "Item": "E26-FanMap-2 (Map)",
      "Parent": "026-nyt-17-fanmap",
      "journal": "NYT",
      "Title": "What Music Do Americans Love the Most? 50 Detailed Fan Maps",
      "URL": "https://www.nytimes.com/interactive/2017/08/07/upshot/music-fandom-maps.html",
      "Chart_Type": [
        "Choropleth"
      ],
      "Encodings": [
        "Geo",
        "Value"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤25K"
    },
    {
      "Item": "E27-Rogue-1 (Map)",
      "Parent": "027-nyt-17-rogue",
      "journal": "NYT",
      "Title": "The Islamic State: From Insurgency to Rogue State and Back",
      "URL": "https://www.nytimes.com/interactive/2017/10/22/world/middleeast/isis-the-islamic-state-from-insurgency-to-rogue-state-and-back.html",
      "Chart_Type": [
        "Bubble",
        "Map"
      ],
      "Encodings": [
        "Geo",
        "Size"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Parallax",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤200",
      "Serialize Layout": "Map and text",
      "Fix Tooltip Position": 1
    },
    {
      "Item": "E27-Rogue-2 (Square)",
      "Parent": "027-nyt-17-rogue",
      "journal": "NYT",
      "Title": "The Islamic State: From Insurgency to Rogue State and Back",
      "URL": "https://www.nytimes.com/interactive/2017/10/22/world/middleeast/isis-the-islamic-state-from-insurgency-to-rogue-state-and-back.html",
      "Chart_Type": [
        "Bubble"
      ],
      "Encodings": [
        "Hue",
        "Size"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤50",
      "Incorporate Labels": 1
    },
    {
      "Item": "E27-Rogue-3 (Bar)",
      "Parent": "027-nyt-17-rogue",
      "journal": "NYT",
      "Title": "The Islamic State: From Insurgency to Rogue State and Back",
      "URL": "https://www.nytimes.com/interactive/2017/10/22/world/middleeast/isis-the-islamic-state-from-insurgency-to-rogue-state-and-back.html",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Reduce Width": 1
    },
    {
      "Item": "E28-DrawIt-1",
      "Parent": "028-nyt-17-drawit",
      "journal": "NYT",
      "Title": "You Draw It: What Got Better or Worse During Obama's Presidency",
      "URL": "https://www.nytimes.com/interactive/2017/01/15/us/politics/you-draw-obama-legacy.html",
      "Chart_Type": [
        "Area",
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Interactive slideshow",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50",
      "Reduce Width": 1,
      "Remove Feedback": "Removing the label given as interaction feedback",
      "Remove Labels": "Removing the label given as interaction feedback"
    },
    {
      "Item": "E29-College-1 (Treemap)",
      "Parent": "029-nyt-17-college",
      "journal": "NYT",
      "Title": "Some Colleges Have More Students From the Top 1 Percent Than the Bottom 60. Find Yours.",
      "URL": "https://www.nytimes.com/interactive/2017/01/18/upshot/some-colleges-have-more-students-from-the-top-1-percent-than-the-bottom-60.html",
      "Chart_Type": [
        "Treemap"
      ],
      "Encodings": [
        "Hue",
        "Size"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤1-5K",
      "Serialize Layout": "Visualizations",
      "Remove Labels": "Based on size"
    },
    {
      "Item": "E29-College-2 (Bar)",
      "Parent": "029-nyt-17-college",
      "journal": "NYT",
      "Title": "Some Colleges Have More Students From the Top 1 Percent Than the Bottom 60. Find Yours.",
      "URL": "https://www.nytimes.com/interactive/2017/01/18/upshot/some-colleges-have-more-students-from-the-top-1-percent-than-the-bottom-60.html",
      "Chart_Type": [
        "Bar",
        "Stacked"
      ],
      "Encodings": [
        "Diverging",
        "Length",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤200",
      "Reduce Width": 1,
      "Simplify Labels": "'Two-year' to '2-yr.' and 'Incomplete' to 'N.A.'",
      "Remove Labels": "Based on size"
    },
    {
      "Item": "E29-College-3 (Line)",
      "Parent": "029-nyt-17-college",
      "journal": "NYT",
      "Title": "Some Colleges Have More Students From the Top 1 Percent Than the Bottom 60. Find Yours.",
      "URL": "https://www.nytimes.com/interactive/2017/01/18/upshot/some-colleges-have-more-students-from-the-top-1-percent-than-the-bottom-60.html",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "Value",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Reduce Width": 1
    },
    {
      "Item": "E29-College-4 (Line)",
      "Parent": "029-nyt-17-college",
      "journal": "NYT",
      "Title": "Some Colleges Have More Students From the Top 1 Percent Than the Bottom 60. Find Yours.",
      "URL": "https://www.nytimes.com/interactive/2017/01/18/upshot/some-colleges-have-more-students-from-the-top-1-percent-than-the-bottom-60.html",
      "Chart_Type": [
        "Dot",
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤200",
      "Reduce Width": 1,
      "Externalize Annotations": 1
    },
    {
      "Item": "E30-Abnormal-1",
      "Parent": "030-nyt-17-abnormal",
      "journal": "NYT",
      "Title": "Just How Abnormal Is the Trump Presidency? Rating 20 Events",
      "URL": "https://www.nytimes.com/interactive/2017/02/27/upshot/whats-normal-whats-important-a-ranking-of-20-events-in-the-trump-administration.html",
      "Chart_Type": [
        "Scatterplot"
      ],
      "Encodings": [
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤50"
    },
    {
      "Item": "E30-Abnormal-1",
      "Parent": "030-nyt-17-abnormal",
      "journal": "NYT",
      "Title": "Just How Abnormal Is the Trump Presidency? Rating 20 Events",
      "URL": "https://www.nytimes.com/interactive/2017/02/27/upshot/whats-normal-whats-important-a-ranking-of-20-events-in-the-trump-administration.html",
      "Chart_Type": [
        "Scatterplot"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Small",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤50"
    },
    {
      "Item": "E31-HealthCare-1 (State-level map)",
      "Parent": "031-nyt-17-healthcare",
      "journal": "NYT",
      "Title": "Who Wins and Who Loses Under Republicans' Health Care Plan",
      "URL": "https://www.nytimes.com/interactive/2017/03/08/upshot/who-wins-and-who-loses-under-republicans-health-care-plan.html",
      "Chart_Type": [
        "Choropleth"
      ],
      "Encodings": [
        "Diverging",
        "Geo"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Small multiples",
      "Data_Type": [
        "Geospatial",
        "Temporal"
      ],
      "Data_Size": "p25K",
      "Transpose Axes": "Axes of small multiples"
    },
    {
      "Item": "E31-HealthCare-2 (Country-level map)",
      "Parent": "031-nyt-17-healthcare",
      "journal": "NYT",
      "Title": "Who Wins and Who Loses Under Republicans' Health Care Plan",
      "URL": "https://www.nytimes.com/interactive/2017/03/08/upshot/who-wins-and-who-loses-under-republicans-health-care-plan.html",
      "Chart_Type": [
        "Choropleth"
      ],
      "Encodings": [
        "Geo",
        "Value"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Small multiples",
      "Data_Type": [
        "Geospatial",
        "Temporal"
      ],
      "Data_Size": "≤50",
      "Transpose Axes": "Axes of small multiples"
    },
    {
      "Item": "E32-Premium-1 (Bar)",
      "Parent": "032-nyt-17-premium",
      "journal": "NYT",
      "Title": "How Many People Are Affected by Obamacare Premium Increases? (Hint, It's Fewer Than You Think)",
      "URL": "https://www.nytimes.com/interactive/2017/03/09/us/politics/who-is-really-affected-by-rising-obamacare-premiums.html",
      "Chart_Type": [
        "Bar",
        "Stacked"
      ],
      "Encodings": [
        "Length",
        "Value"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Parallax",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤50",
      "Reduce Width": 1
    },
    {
      "Item": "E33-TrumpWorth-1 (Bubble)",
      "Parent": "033-nyt-17-trumpworth",
      "journal": "NYT",
      "Title": "How Much People in the Trump Administration Are Worth",
      "URL": "https://www.nytimes.com/interactive/2017/04/01/us/politics/how-much-people-in-the-trump-administration-are-worth-financial-disclosure.html",
      "Chart_Type": [
        "Bubble"
      ],
      "Encodings": [
        "Hue",
        "Size"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤200",
      "Fluid Layout": 1,
      "Fix Tooltip Position": 1
    },
    {
      "Item": "E34-France-1 (Images)",
      "Parent": "034-nyt-17-france",
      "journal": "NYT",
      "Title": "How the Election Split France",
      "URL": "https://www.nytimes.com/interactive/2017/04/23/world/europe/french-election-results-maps.html",
      "Chart_Type": [
        "None"
      ],
      "Encodings": [
        "Hue"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Categorical"
      ],
      "Data_Size": "≤50",
      "Add Encoding": "Adding bar marks for numeric values (vote rate)."
    },
    {
      "Item": "E34-France-2 (Two maps)",
      "Parent": "034-nyt-17-france",
      "journal": "NYT",
      "Title": "How the Election Split France",
      "URL": "https://www.nytimes.com/interactive/2017/04/23/world/europe/french-election-results-maps.html",
      "Chart_Type": [
        "Choropleth"
      ],
      "Encodings": [
        "Geo",
        "Hue",
        "Value"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤200",
      "Serialize Layout": "Maps"
    },
    {
      "Item": "E34-France-3 (Map)",
      "Parent": "034-nyt-17-france",
      "journal": "NYT",
      "Title": "How the Election Split France",
      "URL": "https://www.nytimes.com/interactive/2017/04/23/world/europe/french-election-results-maps.html",
      "Chart_Type": [
        "Choropleth"
      ],
      "Encodings": [
        "Geo",
        "Hue"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤25K",
      "Number Annotations": 1,
      "Move Marks": "The zoomed view of Paris",
      "Remove Labels": "Some region names"
    },
    {
      "Item": "E34-France-4 (Bar)",
      "Parent": "034-nyt-17-france",
      "journal": "NYT",
      "Title": "How the Election Split France",
      "URL": "https://www.nytimes.com/interactive/2017/04/23/world/europe/french-election-results-maps.html",
      "Chart_Type": [
        "Bar",
        "Stacked"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50",
      "Reduce Width": 1
    },
    {
      "Item": "E35-Ransomware-1 (Map)",
      "Parent": "035-nyt-17-ransomware",
      "journal": "NYT",
      "Title": "Animated Map of How Tens of Thousands of Computers Were Infected With Ransomware",
      "URL": "https://www.nytimes.com/interactive/2017/05/12/world/europe/wannacry-ransomware-map.html",
      "Chart_Type": [
        "Dot-Map"
      ],
      "Encodings": [
        "Geo",
        "Opacity"
      ],
      "Chart_Size": "Big",
      "Format": "Animation",
      "Format_2": "",
      "Data_Type": [
        "Geospatial",
        "Temporal"
      ],
      "Data_Size": "p25K"
    },
    {
      "Item": "E36-Lebron-1 (Line)",
      "Parent": "036-nyt-17-lebron",
      "journal": "NYT",
      "Title": "LeBron James Scores 5,995th Playoff Point, Taking the Record From Michael Jordan",
      "URL": "https://www.nytimes.com/interactive/2017/05/25/sports/basketball/lebron-career-playoff-points-record.html",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Parallax",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Overlay Text": 1,
      "Disable Hover Interactions": "A tooltip for the name and record of a player"
    },
    {
      "Item": "E36-Lebron-2 (Bar)",
      "Parent": "036-nyt-17-lebron",
      "journal": "NYT",
      "Title": "LeBron James Scores 5,995th Playoff Point, Taking the Record From Michael Jordan",
      "URL": "https://www.nytimes.com/interactive/2017/05/25/sports/basketball/lebron-career-playoff-points-record.html",
      "Chart_Type": [
        "Bar",
        "Stacked"
      ],
      "Encodings": [
        "Length",
        "Value",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Small multiples",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤25K",
      "Serialize Layout": "Small multiples",
      "Fix Tooltip Position": 1
    },
    {
      "Item": "E37-Britain-1 (Bar+Map)",
      "Parent": "037-nyt-17-britain",
      "journal": "NYT",
      "Title": "How Britain Voted",
      "URL": "https://www.nytimes.com/interactive/2017/06/08/world/europe/british-general-election-results-analysis.html",
      "Chart_Type": [
        "Bar",
        "Map"
      ],
      "Encodings": [
        "Geo",
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤25K",
      "Externalize Annotations": 1,
      "Serialize Layout": "Bar graph and map"
    },
    {
      "Item": "E37-Britain-2 (Cartograms)",
      "Parent": "037-nyt-17-britain",
      "journal": "NYT",
      "Title": "How Britain Voted",
      "URL": "https://www.nytimes.com/interactive/2017/06/08/world/europe/british-general-election-results-analysis.html",
      "Chart_Type": [
        "Cartogram"
      ],
      "Encodings": [
        "Geo",
        "Hue",
        "Orientation"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Geospatial",
        "Temporal"
      ],
      "Data_Size": "≤25K",
      "Serialize Layout": "Of three cartograms, two cartograms for two years are horizontally represented, and the other cartogram for the difference between the two years is moved below the two cartograms."
    },
    {
      "Item": "E37-Britain-3 (Scatterplot)",
      "Parent": "037-nyt-17-britain",
      "journal": "NYT",
      "Title": "How Britain Voted",
      "URL": "https://www.nytimes.com/interactive/2017/06/08/world/europe/british-general-election-results-analysis.html",
      "Chart_Type": [
        "Scatterplot"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤1-5K",
      "Reduce Width": 1,
      "Adjust Ticks": "X axis"
    },
    {
      "Item": "E37-Britain-4 (Bar)",
      "Parent": "037-nyt-17-britain",
      "journal": "NYT",
      "Title": "How Britain Voted",
      "URL": "https://www.nytimes.com/interactive/2017/06/08/world/europe/british-general-election-results-analysis.html",
      "Chart_Type": [
        "Bar",
        "Stacked"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Interactive slideshow",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Reduce Width": 1,
      "Adjust Tick Labels": "X axis"
    },
    {
      "Item": "E37b-Thrones-1 (Scatterplot)",
      "Parent": "037b-nyt-17-thrones",
      "journal": "NYT",
      "Title": "Good, Evil, Ugly, Beautiful: Help Us Make a 'Game of Thrones' Chart",
      "URL": "https://www.nytimes.com/interactive/2017/08/09/upshot/game-of-thrones-chart.html",
      "Chart_Type": [
        "Scatterplot"
      ],
      "Encodings": [
        "Shape",
        "Value",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Interactive slideshow",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤25K",
      "Serialize Layout": "Visualization and interaction widget"
    },
    {
      "Item": "E37b-Thrones-2 (Heatmap)",
      "Parent": "037b-nyt-17-thrones",
      "journal": "NYT",
      "Title": "Good, Evil, Ugly, Beautiful: Help Us Make a 'Game of Thrones' Chart",
      "URL": "https://www.nytimes.com/interactive/2017/08/09/upshot/game-of-thrones-chart.html",
      "Chart_Type": [
        "Heatmap",
        "Scatterplot"
      ],
      "Encodings": [
        "Size",
        "Value",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Small multiples",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤1-5K",
      "Serialize Layout": "Text and visualization"
    },
    {
      "Item": "E38-Irma-1",
      "Parent": "038-nyt-17-irma",
      "journal": "NYT",
      "Title": "Hurricane Irma Is One of the Strongest Storms In History",
      "URL": "https://www.nytimes.com/interactive/2017/09/09/us/hurricane-irma-records.html",
      "Chart_Type": [
        "Flowmap",
        "Line"
      ],
      "Encodings": [
        "Geo",
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Parallax",
      "Data_Type": [
        "Geospatial",
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Overlay Text": 1,
      "Fix Tooltip Position": 1
    },
    {
      "Item": "E39-TaxChange-1",
      "Parent": "039-nyt-17-taxchange",
      "journal": "NYT",
      "Title": "Every Tax Cut and Tax Increase in the House G.O.P. Bill and What It Would Cost",
      "URL": "https://www.nytimes.com/interactive/2017/11/15/us/politics/every-tax-cut-in-the-house-tax-bill.html",
      "Chart_Type": [
        "Bar",
        "Bubble"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "Size",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Parallax",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤200",
      "Fluid Small Multiples": "To three columns",
      "Overlay Text": 1,
      "Disable Hover Interactions": 1
    },
    {
      "Item": "E40-TaxBill-1 (Scatterplot)",
      "Parent": "040-nyt-17-taxbill",
      "journal": "NYT",
      "Title": "Among the Tax Bill's Biggest Losers: High-Income, Blue State Taxpayers",
      "URL": "https://www.nytimes.com/interactive/2017/12/05/us/politics/tax-bill-salt.html",
      "Chart_Type": [
        "Bubble",
        "Line",
        "Scatterplot"
      ],
      "Encodings": [
        "Hue",
        "Size",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤25K",
      "Reduce Width": 1,
      "Remove Annotations": "Several annotations for the interested dots",
      "Fix Tooltip Position": 1,
      "Relocate Annotations": "Center to the top-left corner"
    },
    {
      "Item": "E40-TaxBill-2 (Bar)",
      "Parent": "040-nyt-17-taxbill",
      "journal": "NYT",
      "Title": "Among the Tax Bill's Biggest Losers: High-Income, Blue State Taxpayers",
      "URL": "https://www.nytimes.com/interactive/2017/12/05/us/politics/tax-bill-salt.html",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤50",
      "Reduce Width": 1
    },
    {
      "Item": "E41-Alabama-1 (Bar+Map+Table)",
      "Parent": "041-nyt-17-alabama",
      "journal": "NYT",
      "Title": "Alabama Election Results: Doug Jones Defeats Roy Moore in U.S. Senate Race",
      "URL": "https://www.nytimes.com/elections/results/alabama-senate-special-election-roy-moore-doug-jones",
      "Chart_Type": [
        "Bar",
        "Choropleth"
      ],
      "Encodings": [
        "Diverging",
        "Geo",
        "X"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤200",
      "Remove Encoding": "A position encoding (bar) in the table (redundancy)",
      "Simplify Labels": "Party names in the top table",
      "Fix Tooltip Position": 1,
      "Remove Fields": "'Write-Ins' column in the second table",
      "Serialize Layout": "The top table and the map"
    },
    {
      "Item": "E41-Alabama-2 (Gauge-like)",
      "Parent": "041-nyt-17-alabama",
      "journal": "NYT",
      "Title": "Alabama Election Results: Doug Jones Defeats Roy Moore in U.S. Senate Race",
      "URL": "https://www.nytimes.com/elections/results/alabama-senate-special-election-roy-moore-doug-jones",
      "Chart_Type": [
        "Pie"
      ],
      "Encodings": [
        "Angle",
        "Diverging"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤50",
      "Serialize Layout": "The visualizations",
      "Parallelize Labels": "Each pair of a label and visualization"
    },
    {
      "Item": "E41-Alabama-3 (Bar)",
      "Parent": "041-nyt-17-alabama",
      "journal": "NYT",
      "Title": "Alabama Election Results: Doug Jones Defeats Roy Moore in U.S. Senate Race",
      "URL": "https://www.nytimes.com/elections/results/alabama-senate-special-election-roy-moore-doug-jones",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤50",
      "Reduce Width": 1
    },
    {
      "Item": "E41-Alabama-4 (Bubble map)",
      "Parent": "041-nyt-17-alabama",
      "journal": "NYT",
      "Title": "Alabama Election Results: Doug Jones Defeats Roy Moore in U.S. Senate Race",
      "URL": "https://www.nytimes.com/elections/results/alabama-senate-special-election-roy-moore-doug-jones",
      "Chart_Type": [
        "Bubble",
        "Map"
      ],
      "Encodings": [
        "Geo",
        "Hue",
        "Size"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤200",
      "Serialize Layout": "Two maps"
    },
    {
      "Item": "E41-Alabama-5 (Line)",
      "Parent": "041-nyt-17-alabama",
      "journal": "NYT",
      "Title": "Alabama Election Results: Doug Jones Defeats Roy Moore in U.S. Senate Race",
      "URL": "https://www.nytimes.com/elections/results/alabama-senate-special-election-roy-moore-doug-jones",
      "Chart_Type": [
        "Area",
        "Line"
      ],
      "Encodings": [
        "Hue",
        "Shape",
        "Value",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤1-5K",
      "Reduce Width": 1,
      "Adjust Ticks": "The X axis",
      "Remove Legends": 1
    },
    {
      "Item": "E41-Alabama-6 (Grey line)",
      "Parent": "041-nyt-17-alabama",
      "journal": "NYT",
      "Title": "Alabama Election Results: Doug Jones Defeats Roy Moore in U.S. Senate Race",
      "URL": "https://www.nytimes.com/elections/results/alabama-senate-special-election-roy-moore-doug-jones",
      "Chart_Type": [
        "Area",
        "Line"
      ],
      "Encodings": [
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤1-5K",
      "Reduce Width": 1,
      "Adjust Ticks": "The X axis"
    },
    {
      "Item": "E42-TaxBillCalc-1 (Scatterplot)",
      "Parent": "042-nyt-17-taxbillcalc",
      "journal": "NYT",
      "Title": "Tax Bill Calculator: Will Your Taxes Go Up or Down?",
      "URL": "https://www.nytimes.com/interactive/2017/12/17/upshot/tax-calculator.html",
      "Chart_Type": [
        "Scatterplot"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Dynamic query",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "p25K",
      "Adjust Ticks": "The X axis",
      "Remove Panels/States": "IQR/Median Bar",
      "Incorporate Labels": "Labels in the Y axis are moved inward to the graph",
      "Simplify Labels": "Labels in the axes",
      "Reduce Text": 1,
      "Remove Annotations": "Annotations in the scatterplot",
      "Disable Hover Interactions": "Tooltips for dots in the scatterplot",
      "Serialize Layout": "The visualization and the interaction widget",
      "Reduce Height": 1
    },
    {
      "Item": "E43-Cabinet-1 (White men)",
      "Parent": "043-nyt-17-cabinet",
      "journal": "NYT",
      "Title": "Trump's Cabinet So Far Is More White and Male Than Any First Cabinet Since Reagan's",
      "URL": "https://www.nytimes.com/interactive/2017/01/13/us/politics/trump-cabinet-women-minorities.html",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Shape",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Remove Fields": "Detail information of each cabinet member",
      "Remove Encoding": "'Image' encoding for removed cabinet members",
      "Disable Hover Interactions": 1,
      "Serialize Label-Marks": 1
    },
    {
      "Item": "E43-Cabinet-2 (Entire)",
      "Parent": "043-nyt-17-cabinet",
      "journal": "NYT",
      "Title": "Trump's Cabinet So Far Is More White and Male Than Any First Cabinet Since Reagan's",
      "URL": "https://www.nytimes.com/interactive/2017/01/13/us/politics/trump-cabinet-women-minorities.html",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Hue",
        "Opacity",
        "Shape",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤1-5K",
      "Transpose Axes": 1,
      "Relocate Annotations": "As a result of 'Transpose Axes'",
      "Fix Tooltip Position": 1
    },
    {
      "Item": "E43-Cabinet-3 (Women and minorities)",
      "Parent": "043-nyt-17-cabinet",
      "journal": "NYT",
      "Title": "Trump's Cabinet So Far Is More White and Male Than Any First Cabinet Since Reagan's",
      "URL": "https://www.nytimes.com/interactive/2017/01/13/us/politics/trump-cabinet-women-minorities.html",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Hue",
        "Opacity",
        "Shape",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Remove Encoding": "'Image' encoding for removed cabinet members",
      "Disable Hover Interactions": 1,
      "Serialize Label-Marks": 1
    },
    {
      "Item": "E43-Cabinet-4 (Women)",
      "Parent": "043-nyt-17-cabinet",
      "journal": "NYT",
      "Title": "Trump's Cabinet So Far Is More White and Male Than Any First Cabinet Since Reagan's",
      "URL": "https://www.nytimes.com/interactive/2017/01/13/us/politics/trump-cabinet-women-minorities.html",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Opacity",
        "Shape",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50",
      "Serialize Label-Marks": 1,
      "Fix Tooltip Position": 1
    },
    {
      "Item": "E44-Hottest-1 (Scatterplot)",
      "Parent": "044-nyt-17-hottest",
      "journal": "NYT",
      "Title": "How 2016 Became Earth's Hottest Year on Record",
      "URL": "https://www.nytimes.com/interactive/2017/01/18/science/earth/2016-hottest-year-on-record.html",
      "Chart_Type": [
        "Scatterplot"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤25K",
      "Remove Annotations": 1,
      "Serialize Layout": 1
    },
    {
      "Item": "E44-Hottest-2 (Animated polyline)",
      "Parent": "044-nyt-17-hottest",
      "journal": "NYT",
      "Title": "How 2016 Became Earth's Hottest Year on Record",
      "URL": "https://www.nytimes.com/interactive/2017/01/18/science/earth/2016-hottest-year-on-record.html",
      "Chart_Type": [
        "Polyline"
      ],
      "Encodings": [
        "Angle",
        "Hue",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Animation",
      "Format_2": "",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤25K",
      "Adjust Tick Labels": "The two side labels"
    },
    {
      "Item": "E44-Hottest-3 (Three polylines)",
      "Parent": "044-nyt-17-hottest",
      "journal": "NYT",
      "Title": "How 2016 Became Earth's Hottest Year on Record",
      "URL": "https://www.nytimes.com/interactive/2017/01/18/science/earth/2016-hottest-year-on-record.html",
      "Chart_Type": [
        "Polyline"
      ],
      "Encodings": [
        "Angle",
        "Opacity",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Small multiples",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Serialize Layout": "Visualizations"
    },
    {
      "Item": "E44-Hottest-4 (Map)",
      "Parent": "044-nyt-17-hottest",
      "journal": "NYT",
      "Title": "How 2016 Became Earth's Hottest Year on Record",
      "URL": "https://www.nytimes.com/interactive/2017/01/18/science/earth/2016-hottest-year-on-record.html",
      "Chart_Type": [
        "Heatmap"
      ],
      "Encodings": [
        "Diverging",
        "Geo"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤25K",
      "Remove Labels": 1
    },
    {
      "Item": "E45-BillOReilly-1 (Bar)",
      "Parent": "045-nyt-17-billoreilly",
      "journal": "NYT",
      "Title": "Bill O'Reilly's Show Lost More Than Half Its Advertisers in a Week",
      "URL": "https://www.nytimes.com/interactive/2017/04/11/business/oreilly-advertisers.html",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Length",
        "X"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Aggregate": "Separted bars to integrated bars",
      "Adjust Ticks": "Timeline",
      "Remove Emphases": "An emphasis mark for 'O'Reilly Factor' is removed"
    },
    {
      "Item": "E45-BillOReilly-2 (Bar)",
      "Parent": "045-nyt-17-billoreilly",
      "journal": "NYT",
      "Title": "Bill O'Reilly's Show Lost More Than Half Its Advertisers in a Week",
      "URL": "https://www.nytimes.com/interactive/2017/04/11/business/oreilly-advertisers.html",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Length",
        "X"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Dissociate Labels-Marks": "Labels attached to the corresponding makrs are just listed in the SS version."
    },
    {
      "Item": "E46-DrugDeath-1 (Line)",
      "Parent": "046-nyt-17-drugdeath",
      "journal": "NYT",
      "Title": "Drug Deaths in America Are Rising Faster Than Ever",
      "URL": "https://www.nytimes.com/interactive/2017/06/05/upshot/opioid-epidemic-drug-overdose-deaths-are-rising-faster-than-ever.html",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50",
      "Serialize Layout": "Text and visualization",
      "Relocate Annotations": "Right to the mark → left to the mark",
      "Change Annotations": "Annotation text is non-systematically changed",
      "Simplify Labels": "Year name for 1980",
      "Reduce Width": 1
    },
    {
      "Item": "E46-DrugDeath-2 (Bar+Small multiples)",
      "Parent": "046-nyt-17-drugdeath",
      "journal": "NYT",
      "Title": "Drug Deaths in America Are Rising Faster Than Ever",
      "URL": "https://www.nytimes.com/interactive/2017/06/05/upshot/opioid-epidemic-drug-overdose-deaths-are-rising-faster-than-ever.html",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Small multiples",
      "Data_Type": [
        "Geospatial",
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Fluid Small Multiples": 1
    },
    {
      "Item": "E46-DrugDeath-3 (Bar)",
      "Parent": "046-nyt-17-drugdeath",
      "journal": "NYT",
      "Title": "Drug Deaths in America Are Rising Faster Than Ever",
      "URL": "https://www.nytimes.com/interactive/2017/06/05/upshot/opioid-epidemic-drug-overdose-deaths-are-rising-faster-than-ever.html",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50",
      "Reduce Width": 1,
      "Serialize Layout": "Text and visualization"
    },
    {
      "Item": "E46-DrugDeath-4 (Line)",
      "Parent": "046-nyt-17-drugdeath",
      "journal": "NYT",
      "Title": "Drug Deaths in America Are Rising Faster Than Ever",
      "URL": "https://www.nytimes.com/interactive/2017/06/05/upshot/opioid-epidemic-drug-overdose-deaths-are-rising-faster-than-ever.html",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Reduce Width": 1,
      "Incorporate Labels": "Labels for the lines are moved inward to the visualization."
    },
    {
      "Item": "E47-Rescue-1 (Map)",
      "Parent": "047-nyt-17-rescue",
      "journal": "NYT",
      "Title": "Efforts to Rescue Migrants Caused Deadly, Unexpected Consequences",
      "URL": "https://www.nytimes.com/interactive/2017/06/14/world/europe/migrant-rescue-efforts-deadly.html",
      "Chart_Type": [
        "Dot-Map"
      ],
      "Encodings": [
        "Geo",
        "Hue"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Parallax",
      "Data_Type": [
        "Geospatial",
        "Temporal"
      ],
      "Data_Size": "≤1-5K",
      "Reudce Explorable Area": "Less area is covered in the SS view"
    },
    {
      "Item": "E47-Rescue-2 (Line)",
      "Parent": "047-nyt-17-rescue",
      "journal": "NYT",
      "Title": "Efforts to Rescue Migrants Caused Deadly, Unexpected Consequences",
      "URL": "https://www.nytimes.com/interactive/2017/06/14/world/europe/migrant-rescue-efforts-deadly.html",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤1-5K",
      "Serialize Layout": "Visualizations",
      "Add Labels": "After serializing, two scenes cannot be seen together at the same time, so omitted labels were added"
    },
    {
      "Item": "E48-Subway-1 (Line)",
      "Parent": "048-nyt-17-subway",
      "journal": "NYT",
      "Title": "Every New York City Subway Line Is Getting Worse. Here's Why.",
      "URL": "https://www.nytimes.com/interactive/2017/06/28/nyregion/subway-delays-overcrowding.html",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤25K",
      "Remove Labels": 1
    },
    {
      "Item": "E48-Subway-2 (Three lines)",
      "Parent": "048-nyt-17-subway",
      "journal": "NYT",
      "Title": "Every New York City Subway Line Is Getting Worse. Here's Why.",
      "URL": "https://www.nytimes.com/interactive/2017/06/28/nyregion/subway-delays-overcrowding.html",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50",
      "Reduce Width": 1
    },
    {
      "Item": "E48-Subway-3 (Line+Small multiples)",
      "Parent": "048-nyt-17-subway",
      "journal": "NYT",
      "Title": "Every New York City Subway Line Is Getting Worse. Here's Why.",
      "URL": "https://www.nytimes.com/interactive/2017/06/28/nyregion/subway-delays-overcrowding.html",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Small multiples",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Fluid Small Multiples": 1
    },
    {
      "Item": "E49-NorthKorea-1 (Map)",
      "Parent": "049-nyt-17-northkorea",
      "journal": "NYT",
      "Title": "If Americans Can Find North Korea on a Map, They're More Likely to Prefer Diplomacy - A",
      "URL": "https://www.nytimes.com/interactive/2017/05/14/upshot/if-americans-can-find-north-korea-on-a-map-theyre-more-likely-to-prefer-diplomacy.html",
      "Chart_Type": [
        "Dot-Map"
      ],
      "Encodings": [
        "Geo",
        "Hue"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤1-5K",
      "Remove Labels": 1
    },
    {
      "Item": "E49-NorthKorea-2 (Bar)",
      "Parent": "049-nyt-17-northkorea",
      "journal": "NYT",
      "Title": "If Americans Can Find North Korea on a Map, They're More Likely to Prefer Diplomacy - A",
      "URL": "https://www.nytimes.com/interactive/2017/05/14/upshot/if-americans-can-find-north-korea-on-a-map-theyre-more-likely-to-prefer-diplomacy.html",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤50",
      "Reduce Width": 1
    },
    {
      "Item": "E50-Summer-1 (Area)",
      "Parent": "050-nyt-17-summer",
      "journal": "NYT",
      "Title": "It's Not Your Imagination. Summers Are Getting Hotter.",
      "URL": "https://www.nytimes.com/interactive/2017/07/28/climate/more-frequent-extreme-summer-heat.html",
      "Chart_Type": [
        "Area"
      ],
      "Encodings": [
        "Hue",
        "Opacity",
        "Size",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Animation",
      "Format_2": "",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤25K",
      "Reduce Width": 1,
      "Adjust Tick Labels": "X axis",
      "Serialize Layout": "The title of a state and the visualization"
    },
    {
      "Item": "E50-Summer-2 (Two areas)",
      "Parent": "050-nyt-17-summer",
      "journal": "NYT",
      "Title": "It's Not Your Imagination. Summers Are Getting Hotter.",
      "URL": "https://www.nytimes.com/interactive/2017/07/28/climate/more-frequent-extreme-summer-heat.html",
      "Chart_Type": [
        "Area"
      ],
      "Encodings": [
        "Hue",
        "Opacity",
        "Size",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Small multiples",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤25K",
      "Reduce Width": 1,
      "Adjust Tick Labels": "X axis",
      "Serialize Layout": "Visualizations"
    },
    {
      "Item": "E51-SubwayRun-1 (Bar)",
      "Parent": "051-nyt-17-subwayrun",
      "journal": "NYT",
      "Title": "New York's Subways Are Not Just Delayed. Some Trains Don't Run at All.",
      "URL": "https://www.nytimes.com/interactive/2017/08/07/nyregion/new-yorks-subways-are-not-just-delayed-some-trains-dont-run-at-all.html",
      "Chart_Type": [
        "Bar",
        "Line"
      ],
      "Encodings": [
        "Length",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50",
      "Reduce Width": 1,
      "Adjust Tick Labels": "X axis",
      "Add Callout Line": "For labels"
    },
    {
      "Item": "E51-SubwayRun-2",
      "Parent": "051-nyt-17-subwayrun",
      "journal": "NYT",
      "Title": "New York's Subways Are Not Just Delayed. Some Trains Don't Run at All.",
      "URL": "https://www.nytimes.com/interactive/2017/08/07/nyregion/new-yorks-subways-are-not-just-delayed-some-trains-dont-run-at-all.html",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Reduce Width": 1,
      "Remove Labels": 1
    },
    {
      "Item": "E51-SubwayRun-3 (Horizontal bar)",
      "Parent": "051-nyt-17-subwayrun",
      "journal": "NYT",
      "Title": "New York's Subways Are Not Just Delayed. Some Trains Don't Run at All.",
      "URL": "https://www.nytimes.com/interactive/2017/08/07/nyregion/new-yorks-subways-are-not-just-delayed-some-trains-dont-run-at-all.html",
      "Chart_Type": [
        "Bar",
        "Line"
      ],
      "Encodings": [
        "Length",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Relocate Annotations": 1
    },
    {
      "Item": "E51-SubwayRun-4 (Line)",
      "Parent": "051-nyt-17-subwayrun",
      "journal": "NYT",
      "Title": "New York's Subways Are Not Just Delayed. Some Trains Don't Run at All.",
      "URL": "https://www.nytimes.com/interactive/2017/08/07/nyregion/new-yorks-subways-are-not-just-delayed-some-trains-dont-run-at-all.html",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤1-5K",
      "Reduce Width": 1,
      "Incorporate Labels": "Labels for the lines are moved inward to the visualization"
    },
    {
      "Item": "E52-Underrepresent-1 (Line)",
      "Parent": "052-nyt-17-underrepresent",
      "journal": "NYT",
      "Title": "Even With Affirmative Action, Blacks and Hispanics Are More Underrepresented at Top Colleges Than 35 Years Ago",
      "URL": "https://www.nytimes.com/interactive/2017/08/24/us/affirmative-action.html",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Small multiples",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50",
      "Reduce Width": 1
    },
    {
      "Item": "E52-Underrepresent-2 (Area)",
      "Parent": "052-nyt-17-underrepresent",
      "journal": "NYT",
      "Title": "Even With Affirmative Action, Blacks and Hispanics Are More Underrepresented at Top Colleges Than 35 Years Ago",
      "URL": "https://www.nytimes.com/interactive/2017/08/24/us/affirmative-action.html",
      "Chart_Type": [
        "Area",
        "Line"
      ],
      "Encodings": [
        "Length",
        "Shape",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50"
    },
    {
      "Item": "E52-Underrepresent-3 (Two areas)",
      "Parent": "052-nyt-17-underrepresent",
      "journal": "NYT",
      "Title": "Even With Affirmative Action, Blacks and Hispanics Are More Underrepresented at Top Colleges Than 35 Years Ago",
      "URL": "https://www.nytimes.com/interactive/2017/08/24/us/affirmative-action.html",
      "Chart_Type": [
        "Area",
        "Line"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "Shape",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200"
    },
    {
      "Item": "E52-Underrepresent-4 (Line+Small multiples)",
      "Parent": "052-nyt-17-underrepresent",
      "journal": "NYT",
      "Title": "Even With Affirmative Action, Blacks and Hispanics Are More Underrepresented at Top Colleges Than 35 Years Ago",
      "URL": "https://www.nytimes.com/interactive/2017/08/24/us/affirmative-action.html",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Small multiples",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤25K",
      "Fluid Small Multiples": "4 columns to 2 columns",
      "Adjust Ticks": 1,
      "Reduce Width": 1
    },
    {
      "Item": "E53-TaxPlan-1",
      "Parent": "053-nyt-17-taxplan",
      "journal": "NYT",
      "Title": "Six Charts That Help Explain the Republican Tax Plan",
      "URL": "https://www.nytimes.com/interactive/2017/09/27/us/politics/six-charts-to-explain-the-republican-tax-plan.html",
      "Chart_Type": [
        "Dot",
        "Line"
      ],
      "Encodings": [
        "Hue",
        "Orientation",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤50",
      "Reduce Width": 1,
      "Simplify Labels": "1,000 to 'K'"
    },
    {
      "Item": "E53-TaxPlan-2",
      "Parent": "053-nyt-17-taxplan",
      "journal": "NYT",
      "Title": "Six Charts That Help Explain the Republican Tax Plan",
      "URL": "https://www.nytimes.com/interactive/2017/09/27/us/politics/six-charts-to-explain-the-republican-tax-plan.html",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Value",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤50",
      "Reduce Width": 1,
      "Simplify Labels": "Remove the dollor sign"
    },
    {
      "Item": "E53-TaxPlan-3 (Histogram)",
      "Parent": "053-nyt-17-taxplan",
      "journal": "NYT",
      "Title": "Six Charts That Help Explain the Republican Tax Plan",
      "URL": "https://www.nytimes.com/interactive/2017/09/27/us/politics/six-charts-to-explain-the-republican-tax-plan.html",
      "Chart_Type": [
        "Bar",
        "Stacked"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Categorical"
      ],
      "Data_Size": "≤200",
      "Reduce Width": 1
    },
    {
      "Item": "E53-TaxPlan-4 (Area)",
      "Parent": "053-nyt-17-taxplan",
      "journal": "NYT",
      "Title": "Six Charts That Help Explain the Republican Tax Plan",
      "URL": "https://www.nytimes.com/interactive/2017/09/27/us/politics/six-charts-to-explain-the-republican-tax-plan.html",
      "Chart_Type": [
        "Area",
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤50",
      "Serialize Layout": "Visualizations"
    },
    {
      "Item": "E53-TaxPlan-5",
      "Parent": "053-nyt-17-taxplan",
      "journal": "NYT",
      "Title": "Six Charts That Help Explain the Republican Tax Plan",
      "URL": "https://www.nytimes.com/interactive/2017/09/27/us/politics/six-charts-to-explain-the-republican-tax-plan.html",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Value",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤50",
      "Reduce Width": 1
    },
    {
      "Item": "E54-MassShooting-1 (Scatterplot)",
      "Parent": "054-nyt-17-massshooting",
      "journal": "NYT",
      "Title": "What Explains U.S. Mass Shootings? International Comparisons Suggest an Answer",
      "URL": "https://www.nytimes.com/2017/11/07/world/americas/mass-shootings-us-international.html",
      "Chart_Type": [
        "Scatterplot"
      ],
      "Encodings": [
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤200",
      "Reduce Width": 1,
      "Externalize Annotations": 1,
      "Simplify Labels": "Million to Mill."
    },
    {
      "Item": "E54-MassShooting-2 (Scatterplot, zoomed view)",
      "Parent": "054-nyt-17-massshooting",
      "journal": "NYT",
      "Title": "What Explains U.S. Mass Shootings? International Comparisons Suggest an Answer",
      "URL": "https://www.nytimes.com/2017/11/07/world/americas/mass-shootings-us-international.html",
      "Chart_Type": [
        "Scatterplot"
      ],
      "Encodings": [
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤200",
      "Adjust Tick Labels": "X axis",
      "Reduce Width": 1
    },
    {
      "Item": "E112-Bombing-1 (Bubble)",
      "Parent": "112-wsj-17-bombing",
      "journal": "WSJ",
      "Title": "A Year of Suicide Bombings",
      "URL": "https://www.wsj.com/graphics/a-year-of-suicide-bombings/",
      "Chart_Type": [
        "Bubble"
      ],
      "Encodings": [
        "Hue",
        "Proximity"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Parallax",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤25K",
      "Serialize Layout": "Legends and visualization"
    },
    {
      "Item": "E113-Immigration-1 (Area, value)",
      "Parent": "113-wsj-17-immigration",
      "journal": "WSJ",
      "Title": "Coming to America",
      "URL": "http://www.wsj.com/graphics/coming-to-america/",
      "Chart_Type": [
        "Area",
        "Line",
        "Stacked"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Parallax",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "p25K",
      "Reudce Explorable Area": "Less range of data is visible at a time in the SS version."
    },
    {
      "Item": "E113-Immigration-2 (Area, proportion)",
      "Parent": "113-wsj-17-immigration",
      "journal": "WSJ",
      "Title": "Coming to America",
      "URL": "http://www.wsj.com/graphics/coming-to-america/",
      "Chart_Type": [
        "Area",
        "Line",
        "Stacked"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "p25K"
    },
    {
      "Item": "E114-MindGap-1 (Bar)",
      "Parent": "114-wsj-17-mindgap",
      "journal": "WSJ",
      "Title": "Mind the Gap: The U.K.-EU Trade Challenge",
      "URL": "https://www.wsj.com/graphics/uk-eu-trade/",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "Pattern",
        "Size",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤200",
      "Reduce Width": 1,
      "Disable X": "Value-based sorting interaction",
      "Simplify Labels": "Proportion (Value) → Proportion due to the value-based sorting is removed"
    },
    {
      "Item": "E114-MindGap-2 (Bar+Treemap)",
      "Parent": "114-wsj-17-mindgap",
      "journal": "WSJ",
      "Title": "Mind the Gap: The U.K.-EU Trade Challenge",
      "URL": "https://www.wsj.com/graphics/uk-eu-trade/",
      "Chart_Type": [
        "Bar",
        "Treemap"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "Size",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤200",
      "Reduce Width": 1,
      "Disable X": "Value-based sorting interaction",
      "Simplify Labels": "Proportion (Value) → Proportion due to the value-based sorting is removed",
      "Serialize Layout": "(Text and treemap) and bar"
    },
    {
      "Item": "E114-MindGap-3 (Bar+Line+Treemap)",
      "Parent": "114-wsj-17-mindgap",
      "journal": "WSJ",
      "Title": "Mind the Gap: The U.K.-EU Trade Challenge",
      "URL": "https://www.wsj.com/graphics/uk-eu-trade/",
      "Chart_Type": [
        "Bar",
        "Line",
        "Treemap"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "Size",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤200",
      "Reduce Width": 1,
      "Disable X": "Value-based sorting interaction",
      "Simplify Labels": "Proportion (Value) → Proportion due to the value-based sorting is removed",
      "Serialize Layout": "(Text and treemap) and (bar and line)"
    },
    {
      "Item": "E115-FranceClass-1 (Bar for age younger than 50)",
      "Parent": "115-wsj-17-franceclass",
      "journal": "WSJ",
      "Title": "France's New Political Class",
      "URL": "https://www.wsj.com/graphics/french-assembly-2017/",
      "Chart_Type": [
        "Bar",
        "Stacked"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50",
      "Adjust Ticks": "X Axis",
      "Reduce Width": 1
    },
    {
      "Item": "E115-FranceClass-2 (Bar for age younger than 30)",
      "Parent": "115-wsj-17-franceclass",
      "journal": "WSJ",
      "Title": "France's New Political Class",
      "URL": "https://www.wsj.com/graphics/french-assembly-2017/",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50",
      "Adjust Ticks": "X Axis",
      "Reduce Width": 1
    },
    {
      "Item": "E115-FranceClass-3 (Bar for first-timers)",
      "Parent": "115-wsj-17-franceclass",
      "journal": "WSJ",
      "Title": "France's New Political Class",
      "URL": "https://www.wsj.com/graphics/french-assembly-2017/",
      "Chart_Type": [
        "Bar",
        "Stacked"
      ],
      "Encodings": [
        "Hue",
        "Length"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤50",
      "Adjust Ticks": "X Axis",
      "Reduce Width": 1
    },
    {
      "Item": "E115-FranceClass-4 (Bar for gender)",
      "Parent": "115-wsj-17-franceclass",
      "journal": "WSJ",
      "Title": "France's New Political Class",
      "URL": "https://www.wsj.com/graphics/french-assembly-2017/",
      "Chart_Type": [
        "Bar",
        "Stacked"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50",
      "Adjust Ticks": "X Axis",
      "Reduce Width": 1
    },
    {
      "Item": "E115-FranceClass-5 (Bar for gender compared to US)",
      "Parent": "115-wsj-17-franceclass",
      "journal": "WSJ",
      "Title": "France's New Political Class",
      "URL": "https://www.wsj.com/graphics/french-assembly-2017/",
      "Chart_Type": [
        "Bar",
        "Stacked"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤50",
      "Adjust Ticks": "X Axis",
      "Reduce Width": 1
    },
    {
      "Item": "E115-FranceClass-6 (Bar for age gap)",
      "Parent": "115-wsj-17-franceclass",
      "journal": "WSJ",
      "Title": "France's New Political Class",
      "URL": "https://www.wsj.com/graphics/french-assembly-2017/",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤50",
      "Adjust Ticks": "X Axis",
      "Reduce Width": 1
    },
    {
      "Item": "E115-FranceClass-7 (Map)",
      "Parent": "115-wsj-17-franceclass",
      "journal": "WSJ",
      "Title": "France's New Political Class",
      "URL": "https://www.wsj.com/graphics/french-assembly-2017/",
      "Chart_Type": [
        "Choropleth"
      ],
      "Encodings": [
        "Geo",
        "Value"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤1-5K"
    },
    {
      "Item": "E115-FranceClass-8 (Icon array for parties)",
      "Parent": "115-wsj-17-franceclass",
      "journal": "WSJ",
      "Title": "France's New Political Class",
      "URL": "https://www.wsj.com/graphics/french-assembly-2017/",
      "Chart_Type": [
        "Icon array"
      ],
      "Encodings": [
        "Hue",
        "Size"
      ],
      "Chart_Size": "Small",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Categorical"
      ],
      "Data_Size": "≤1-5K"
    },
    {
      "Item": "E115-FranceClass-9 (Icon array for women and youth)",
      "Parent": "115-wsj-17-franceclass",
      "journal": "WSJ",
      "Title": "France's New Political Class",
      "URL": "https://www.wsj.com/graphics/french-assembly-2017/",
      "Chart_Type": [
        "Icon array"
      ],
      "Encodings": [
        "Hue",
        "Shape",
        "Size"
      ],
      "Chart_Size": "Small",
      "Format": "Interactive",
      "Format_2": "Interactive slideshow",
      "Data_Type": [
        "Categorical"
      ],
      "Data_Size": "≤25K"
    },
    {
      "Item": "E116-Xijinping-1 (Area+Bar)",
      "Parent": "116-wsj-17-xijinping",
      "journal": "WSJ",
      "Title": "One Nation Under Xi Jinping",
      "URL": "https://www.wsj.com/articles/one-nation-under-xi-jinping-1508224864?tesla=y",
      "Chart_Type": [
        "Area",
        "Bar",
        "Line"
      ],
      "Encodings": [
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50",
      "Serialize Layout": "Two graphs"
    },
    {
      "Item": "E116-Xijinping-2 (Bar+Area+Bar)",
      "Parent": "116-wsj-17-xijinping",
      "journal": "WSJ",
      "Title": "One Nation Under Xi Jinping",
      "URL": "https://www.wsj.com/articles/one-nation-under-xi-jinping-1508224864?tesla=y",
      "Chart_Type": [
        "Area",
        "Bar",
        "Line"
      ],
      "Encodings": [
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50",
      "Reduce Height": 1,
      "Serialize Layout": "Visualizations"
    },
    {
      "Item": "E116-Xijinping-3 (Bar+Line)",
      "Parent": "116-wsj-17-xijinping",
      "journal": "WSJ",
      "Title": "One Nation Under Xi Jinping",
      "URL": "https://www.wsj.com/articles/one-nation-under-xi-jinping-1508224864?tesla=y",
      "Chart_Type": [
        "Bar",
        "Line"
      ],
      "Encodings": [
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50",
      "Serialize Layout": "Visualizations"
    },
    {
      "Item": "E116-Xijinping-4 (Stacked bar)",
      "Parent": "116-wsj-17-xijinping",
      "journal": "WSJ",
      "Title": "One Nation Under Xi Jinping",
      "URL": "https://www.wsj.com/articles/one-nation-under-xi-jinping-1508224864?tesla=y",
      "Chart_Type": [
        "Bar",
        "Line",
        "Stacked"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50",
      "Serialize Layout": "Visualizations"
    },
    {
      "Item": "E116-Xijinping-5 (Area)",
      "Parent": "116-wsj-17-xijinping",
      "journal": "WSJ",
      "Title": "One Nation Under Xi Jinping",
      "URL": "https://www.wsj.com/articles/one-nation-under-xi-jinping-1508224864?tesla=y",
      "Chart_Type": [
        "Area",
        "Stacked"
      ],
      "Encodings": [
        "Hue",
        "Size",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50",
      "Reduce Width": 1,
      "Adjust Tick Labels": 1
    },
    {
      "Item": "E116-Xijinping-6 (Area+Line)",
      "Parent": "116-wsj-17-xijinping",
      "journal": "WSJ",
      "Title": "One Nation Under Xi Jinping",
      "URL": "https://www.wsj.com/articles/one-nation-under-xi-jinping-1508224864?tesla=y",
      "Chart_Type": [
        "Area",
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50",
      "Externalize Legends": 1,
      "Serialize Layout": "Visualizations"
    },
    {
      "Item": "E116-Xijinping-7",
      "Parent": "116-wsj-17-xijinping",
      "journal": "WSJ",
      "Title": "One Nation Under Xi Jinping",
      "URL": "https://www.wsj.com/articles/one-nation-under-xi-jinping-1508224864?tesla=y",
      "Chart_Type": [
        "Area",
        "Bar",
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50",
      "Serialize Layout": 1
    },
    {
      "Item": "E116-Xijinping-8 (Bar)",
      "Parent": "116-wsj-17-xijinping",
      "journal": "WSJ",
      "Title": "One Nation Under Xi Jinping",
      "URL": "https://www.wsj.com/articles/one-nation-under-xi-jinping-1508224864?tesla=y",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50",
      "Reduce Width": 1
    },
    {
      "Item": "E116-Xijinping-9 (Two bars)",
      "Parent": "116-wsj-17-xijinping",
      "journal": "WSJ",
      "Title": "One Nation Under Xi Jinping",
      "URL": "https://www.wsj.com/articles/one-nation-under-xi-jinping-1508224864?tesla=y",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Value",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50",
      "Relocate Annotations": "Due to the lack of enough space",
      "Internalize Legends": "For the second bar graph",
      "Serialize Layout": "Visualizations"
    },
    {
      "Item": "E117-TechRally-1 (Scatterplot)",
      "Parent": "117-wsj-17-techrally",
      "journal": "WSJ",
      "Title": "How This Tech Rally Is Different From 1999",
      "URL": "https://www.wsj.com/graphics/how-this-tech-rally-is-different-from-1999/",
      "Chart_Type": [
        "Scatterplot"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Parallax",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Reduce Width": 1,
      "Sequentialize Visualization-Text": "From parallax to text-scenes sequence by next/prev buttons"
    },
    {
      "Item": "E118-TrumpTweet-1 (Line)",
      "Parent": "118-wsj-17-trumptweet",
      "journal": "WSJ",
      "Title": "Think a Negative Tweet From Trump Crushes a Stock? Think Again",
      "URL": "http://www.wsj.com/graphics/trump-market-tweets/",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤1-5K",
      "Remove Annotations": 1,
      "Simplify Labels": "The line labels",
      "Adjust Ticks": "X axis",
      "Disable Hover Interactions": "With 'Disable Tooltips'",
      "Add Axis": "Y, possibly as a compensation to removed annotations",
      "Reduce Width": 1
    },
    {
      "Item": "E118-TrumpTweet-2 (Line for details)",
      "Parent": "118-wsj-17-trumptweet",
      "journal": "WSJ",
      "Title": "Think a Negative Tweet From Trump Crushes a Stock? Think Again",
      "URL": "http://www.wsj.com/graphics/trump-market-tweets/",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Small multiples",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50",
      "Serialize Layout": "Text and visualization"
    },
    {
      "Item": "E119-OctobersNot-1 (Vertical bar)",
      "Parent": "119-wsj-17-octobersnot",
      "journal": "WSJ",
      "Title": "October's Not as Bleak as Its Reputation for Stock Markets",
      "URL": "https://www.wsj.com/articles/octobers-not-as-bleak-as-its-reputation-for-stock-markets-1507384342",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Reduce Width": 1,
      "Shorten Annotations": 1,
      "Relocate Annotations": 1,
      "Simplify Labels": "X Axis (4-digit years to 2-digit)"
    },
    {
      "Item": "E119-OctobersNot-2 (Horizontal bar)",
      "Parent": "119-wsj-17-octobersnot",
      "journal": "WSJ",
      "Title": "October's Not as Bleak as Its Reputation for Stock Markets",
      "URL": "https://www.wsj.com/articles/octobers-not-as-bleak-as-its-reputation-for-stock-markets-1507384342",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50",
      "Reduce Width": 1,
      "Adjust Ticks": "X axis"
    },
    {
      "Item": "E119-OctobersNot-3 (Area+Small multiples)",
      "Parent": "119-wsj-17-octobersnot",
      "journal": "WSJ",
      "Title": "October's Not as Bleak as Its Reputation for Stock Markets",
      "URL": "https://www.wsj.com/articles/octobers-not-as-bleak-as-its-reputation-for-stock-markets-1507384342",
      "Chart_Type": [
        "Area",
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Small multiples",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤25K",
      "Reduce Width": 1,
      "Adjust Ticks": "X axis"
    },
    {
      "Item": "E119-OctobersNot-4 (Orange line)",
      "Parent": "119-wsj-17-octobersnot",
      "journal": "WSJ",
      "Title": "October's Not as Bleak as Its Reputation for Stock Markets",
      "URL": "https://www.wsj.com/articles/octobers-not-as-bleak-as-its-reputation-for-stock-markets-1507384342",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤1-5K",
      "Reduce Width": 1,
      "Simplify Labels": "X axis (Month names)"
    },
    {
      "Item": "E120-GopTax-1 (Bar)",
      "Parent": "120-wsj-17-goptax",
      "journal": "WSJ",
      "Title": "Winner or Loser? How Corporations Could Fare Under the GOP Tax Plan",
      "URL": "https://www.wsj.com/graphics/gop-corporate-tax-plan-winners-losers/",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "X"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Dynamic query",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤50",
      "Serialize Layout": "Descriptions and visualization"
    },
    {
      "Item": "E121-CeoPay-1 (Overview bar)",
      "Parent": "121-wsj-17-ceopay",
      "journal": "WSJ",
      "Title": "Top to Bottom: Pay for 500 CEOs",
      "URL": "https://www.wsj.com/graphics/ceopay-2017/",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Parallax",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤1-5K",
      "Reduce Width": 1
    },
    {
      "Item": "E121-CeoPay-2 (Detail bars)",
      "Parent": "121-wsj-17-ceopay",
      "journal": "WSJ",
      "Title": "Top to Bottom: Pay for 500 CEOs",
      "URL": "https://www.wsj.com/graphics/ceopay-2017/",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Length",
        "Value",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50",
      "Incorporate Labels": "Based on the size of a bar",
      "Adjust Ticks": "X axis",
      "Reduce Width": 1
    },
    {
      "Item": "E121-CeoPay-3 (Interval dot plot)",
      "Parent": "121-wsj-17-ceopay",
      "journal": "WSJ",
      "Title": "Top to Bottom: Pay for 500 CEOs",
      "URL": "https://www.wsj.com/graphics/ceopay-2017/",
      "Chart_Type": [
        "Bar",
        "Dot"
      ],
      "Encodings": [
        "Length",
        "Shape",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤50",
      "Reduce Width": 1,
      "Adjust Ticks": "X axis"
    },
    {
      "Item": "E121-CeoPay-4 (Small bars)",
      "Parent": "121-wsj-17-ceopay",
      "journal": "WSJ",
      "Title": "Top to Bottom: Pay for 500 CEOs",
      "URL": "https://www.wsj.com/graphics/ceopay-2017/",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤50",
      "Reduce Width": 1
    },
    {
      "Item": "E122-GopTaxCal-1 (Line)",
      "Parent": "122-wsj-17-goptaxcal",
      "journal": "WSJ",
      "Title": "GOP Tax Plan Calculator",
      "URL": "https://www.wsj.com/graphics/republican-tax-plan-calculator/",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Dynamic query",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50",
      "Toggle Interaction Widget": "By groupoing interaction features",
      "Reduce Height": "Resulting in higher density in the Y axes due to the non-simplified ticks"
    },
    {
      "Item": "E122-GopTaxCal-2 (Dot)",
      "Parent": "122-wsj-17-goptaxcal",
      "journal": "WSJ",
      "Title": "GOP Tax Plan Calculator",
      "URL": "https://www.wsj.com/graphics/republican-tax-plan-calculator/",
      "Chart_Type": [
        "Dot"
      ],
      "Encodings": [
        "Hue",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤200",
      "Serialize Layout": "Visualizations"
    },
    {
      "Item": "E123-Giant-1 (Polar)",
      "Parent": "123-wsj-17-giant",
      "journal": "WSJ",
      "Title": "Courting a Giant",
      "URL": "https://www.wsj.com/graphics/amazon-headquarters/",
      "Chart_Type": [
        "Polar"
      ],
      "Encodings": [
        "Angle",
        "Hue",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤50",
      "Serialize Layout": "Legends and visualization",
      "Remove Annotations": "For fiscal health",
      "Relocate Annotations": 1
    },
    {
      "Item": "E123-Giant-2 (Three polars)",
      "Parent": "123-wsj-17-giant",
      "journal": "WSJ",
      "Title": "Courting a Giant",
      "URL": "https://www.wsj.com/graphics/amazon-headquarters/",
      "Chart_Type": [
        "Polar"
      ],
      "Encodings": [
        "Angle",
        "Hue",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Small multiples",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤50",
      "Serialize Layout": "Visualizations"
    },
    {
      "Item": "E123-Giant-3 (Polar+Small multiples)",
      "Parent": "123-wsj-17-giant",
      "journal": "WSJ",
      "Title": "Courting a Giant",
      "URL": "https://www.wsj.com/graphics/amazon-headquarters/",
      "Chart_Type": [
        "Polar"
      ],
      "Encodings": [
        "Angle",
        "Hue",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Small multiples",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤200",
      "Fluid Small Multiples": 1
    },
    {
      "Item": "E124-Giant20-1 (Line)",
      "Parent": "124-wsj-17-giant20",
      "journal": "WSJ",
      "Title": "Why You Probably Work for a Giant Company, in 20 Charts",
      "URL": "https://www.wsj.com/graphics/big-companies-get-bigger/",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Externalize Annotations": "With remaining the call-out lines",
      "Reduce Width": 1
    },
    {
      "Item": "E124-Giant20-2 (Stacked bar)",
      "Parent": "124-wsj-17-giant20",
      "journal": "WSJ",
      "Title": "Why You Probably Work for a Giant Company, in 20 Charts",
      "URL": "https://www.wsj.com/graphics/big-companies-get-bigger/",
      "Chart_Type": [
        "Bar",
        "Stacked"
      ],
      "Encodings": [
        "Diverging",
        "Length",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50",
      "Adjust Ticks": "X axis",
      "Reduce Width": 1
    },
    {
      "Item": "E124-Giant20-3 (Blue line)",
      "Parent": "124-wsj-17-giant20",
      "journal": "WSJ",
      "Title": "Why You Probably Work for a Giant Company, in 20 Charts",
      "URL": "https://www.wsj.com/graphics/big-companies-get-bigger/",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Adjust Tick Labels": "X axis",
      "Reduce Width": 1
    },
    {
      "Item": "E124-Giant20-4 (Stacked bar with text)",
      "Parent": "124-wsj-17-giant20",
      "journal": "WSJ",
      "Title": "Why You Probably Work for a Giant Company, in 20 Charts",
      "URL": "https://www.wsj.com/graphics/big-companies-get-bigger/",
      "Chart_Type": [
        "Bar",
        "Stacked"
      ],
      "Encodings": [
        "Diverging",
        "Length",
        "Y"
      ],
      "Chart_Size": "Small",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50",
      "Serialize Layout": "Text an visualization",
      "Reduce Width": 1
    },
    {
      "Item": "E124-Giant20-5 (Area)",
      "Parent": "124-wsj-17-giant20",
      "journal": "WSJ",
      "Title": "Why You Probably Work for a Giant Company, in 20 Charts",
      "URL": "https://www.wsj.com/graphics/big-companies-get-bigger/",
      "Chart_Type": [
        "Area",
        "Stacked"
      ],
      "Encodings": [
        "Hue",
        "Size",
        "X",
        "Y"
      ],
      "Chart_Size": "Small",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Serialize Layout": "Text and visualization",
      "Reduce Height": 1,
      "Adjust Ticks": "Y axis"
    },
    {
      "Item": "E124-Giant20-6 (Area, proportion)",
      "Parent": "124-wsj-17-giant20",
      "journal": "WSJ",
      "Title": "Why You Probably Work for a Giant Company, in 20 Charts",
      "URL": "https://www.wsj.com/graphics/big-companies-get-bigger/",
      "Chart_Type": [
        "Area",
        "Stacked"
      ],
      "Encodings": [
        "Hue",
        "Size",
        "X",
        "Y"
      ],
      "Chart_Size": "Small",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Serialize Layout": "Text and visualization",
      "Reduce Width": 1
    },
    {
      "Item": "E124-Giant20-7 (Bar)",
      "Parent": "124-wsj-17-giant20",
      "journal": "WSJ",
      "Title": "Why You Probably Work for a Giant Company, in 20 Charts",
      "URL": "https://www.wsj.com/graphics/big-companies-get-bigger/",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Small",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤50",
      "Serialize Layout": 1,
      "Reduce Width": 1
    },
    {
      "Item": "E124-Giant20-8 (Line)",
      "Parent": "124-wsj-17-giant20",
      "journal": "WSJ",
      "Title": "Why You Probably Work for a Giant Company, in 20 Charts",
      "URL": "https://www.wsj.com/graphics/big-companies-get-bigger/",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "Diverging",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Serialize Layout": "Legends and visualization",
      "Reduce Width": 1
    },
    {
      "Item": "E124-Giant20-9 (Stacked bar)",
      "Parent": "124-wsj-17-giant20",
      "journal": "WSJ",
      "Title": "Why You Probably Work for a Giant Company, in 20 Charts",
      "URL": "https://www.wsj.com/graphics/big-companies-get-bigger/",
      "Chart_Type": [
        "Bar",
        "Stacked"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50",
      "Adjust Ticks": "X axis",
      "Reduce Width": 1
    },
    {
      "Item": "E124-Giant20-10 (Blue and grey bar)",
      "Parent": "124-wsj-17-giant20",
      "journal": "WSJ",
      "Title": "Why You Probably Work for a Giant Company, in 20 Charts",
      "URL": "https://www.wsj.com/graphics/big-companies-get-bigger/",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Small",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50",
      "Adjust Ticks": "X axis",
      "Reduce Width": 1
    },
    {
      "Item": "E124-Giant20-11 (Orange bar)",
      "Parent": "124-wsj-17-giant20",
      "journal": "WSJ",
      "Title": "Why You Probably Work for a Giant Company, in 20 Charts",
      "URL": "https://www.wsj.com/graphics/big-companies-get-bigger/",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "X"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50",
      "Disable Hover Interactions": 1,
      "Add Labels": "As a rsult of 'Disable Hover Interactions'",
      "Incorporate Labels": "Value labels, accompanied with 'Add Labels'",
      "Serialize Label-Marks": 1,
      "Remove Axis": "As a result of 'Serialize Label-Marks'"
    },
    {
      "Item": "E124-Giant20-12 (Blue bar+area)",
      "Parent": "124-wsj-17-giant20",
      "journal": "WSJ",
      "Title": "Why You Probably Work for a Giant Company, in 20 Charts",
      "URL": "https://www.wsj.com/graphics/big-companies-get-bigger/",
      "Chart_Type": [
        "Area",
        "Bar"
      ],
      "Encodings": [
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Serialize Layout": "Visualizations",
      "Adjust Ticks": "X axis"
    },
    {
      "Item": "E125-TrumpChildren-1 (Network)",
      "Parent": "125-wsj-17-trumpchildren",
      "journal": "WSJ",
      "Title": "Trump, His Children, and 500+ Potential Conflicts of Interest",
      "URL": "https://www.wsj.com/graphics/donald-trump-potential-conflicts-of-interest/",
      "Chart_Type": [
        "Network"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Parallax",
      "Data_Type": [
        "Categorical"
      ],
      "Data_Size": "≤1-5K",
      "Split States into Panels": "A dynamic network to static networks",
      "Serialize Layout": "Text and visualization",
      "Disable Hover Interactions": 1
    },
    {
      "Item": "E126-HealthCare-1 (Scatterplot)",
      "Parent": "126-wsj-17-heathcare",
      "journal": "WSJ",
      "Title": "Health-Care Holdouts in the House",
      "URL": "https://www.wsj.com/graphics/house-health-care-holdouts-round-two/",
      "Chart_Type": [
        "Scatterplot"
      ],
      "Encodings": [
        "Hue",
        "Shape",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤1-5K",
      "Externalize Labels": "Axis labels (grey letters in the middle of the plot)",
      "Disable Hover Interactions": 1
    },
    {
      "Item": "E126-HealthCare-2 (Scatterplot with emphases)",
      "Parent": "126-wsj-17-heathcare",
      "journal": "WSJ",
      "Title": "Health-Care Holdouts in the House",
      "URL": "https://www.wsj.com/graphics/house-health-care-holdouts-round-two/",
      "Chart_Type": [
        "Scatterplot"
      ],
      "Encodings": [
        "Hue",
        "Shape",
        "Value",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤1-5K",
      "Externalize Labels": "Axis labels (grey letters in the middle of the plot)",
      "Disable Hover Interactions": 1,
      "Remove Annotations": 1
    },
    {
      "Item": "E126-HealthCare-3 (Zoomed scatterplot)",
      "Parent": "126-wsj-17-heathcare",
      "journal": "WSJ",
      "Title": "Health-Care Holdouts in the House",
      "URL": "https://www.wsj.com/graphics/house-health-care-holdouts-round-two/",
      "Chart_Type": [
        "Scatterplot"
      ],
      "Encodings": [
        "Hue",
        "Shape",
        "Value",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤1-5K",
      "Externalize Labels": "Axis labels (grey letters in the middle of the plot)",
      "Remove Annotations": 1,
      "Remove Context": 1
    },
    {
      "Item": "E126-HealthCare-4 (Scatterplot with annotations)",
      "Parent": "126-wsj-17-heathcare",
      "journal": "WSJ",
      "Title": "Health-Care Holdouts in the House",
      "URL": "https://www.wsj.com/graphics/house-health-care-holdouts-round-two/",
      "Chart_Type": [
        "Scatterplot"
      ],
      "Encodings": [
        "Hue",
        "Shape",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤1-5K",
      "Externalize Labels": "Axis labels (grey letters in the middle of the plot)",
      "Remove Annotations": 1,
      "Disable Hover Interactions": 1
    },
    {
      "Item": "E126-HealthCare-5 (Dotplot)",
      "Parent": "126-wsj-17-heathcare",
      "journal": "WSJ",
      "Title": "Health-Care Holdouts in the House",
      "URL": "https://www.wsj.com/graphics/house-health-care-holdouts-round-two/",
      "Chart_Type": [
        "Dot"
      ],
      "Encodings": [
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤1-5K",
      "Add Redundant References": "Arrows on the X axis",
      "Reduce Width": 1
    },
    {
      "Item": "E127-ThenAndNow-1 (Icon Array)",
      "Parent": "127-wsj-17-thenandnow",
      "journal": "WSJ",
      "Title": "Then and Now: The Big Shift at Work",
      "URL": "https://www.wsj.com/graphics/american-workplace-then-and-now/",
      "Chart_Type": [
        "Icon array"
      ],
      "Encodings": [
        "Hue",
        "Size",
        "Value"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Parallax",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤200",
      "Fluid Layout": 1
    },
    {
      "Item": "E127-ThenAndNow-2 (Donut)",
      "Parent": "127-wsj-17-thenandnow",
      "journal": "WSJ",
      "Title": "Then and Now: The Big Shift at Work",
      "URL": "https://www.wsj.com/graphics/american-workplace-then-and-now/",
      "Chart_Type": [
        "Pie"
      ],
      "Encodings": [
        "Angle",
        "Hue",
        "Value"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50",
      "Serialize Layout": "Visualizations"
    },
    {
      "Item": "E128-Election-1",
      "Parent": "128-wsj-16-election",
      "journal": "WSJ",
      "Title": "Where Trump and Clinton Won",
      "URL": "http://www.wsj.com/graphics/elections/2016/where-they-won/",
      "Chart_Type": [
        "Choropleth"
      ],
      "Encodings": [
        "Diverging",
        "Geo",
        "Value"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Interactive slideshow",
      "Data_Type": [
        "Geospatial",
        "Temporal"
      ],
      "Data_Size": "p25K",
      "Split States into Panels": "An interactive slideshow to static views",
      "Disable Hover Interactions": 1
    },
    {
      "Item": "E129-Counties-1 (National map)",
      "Parent": "129-wsj-16-counties",
      "journal": "WSJ",
      "Title": "The Most Important Counties to Watch on Election Night",
      "URL": "http://www.wsj.com/graphics/elections/2016/bellwether-counties/",
      "Chart_Type": [
        "Choropleth"
      ],
      "Encodings": [
        "Diverging",
        "Geo"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "p25K",
      "Disable Hover Interactions": 1
    },
    {
      "Item": "E129-Counties-2 (State map+Line+Heatmap)",
      "Parent": "129-wsj-16-counties",
      "journal": "WSJ",
      "Title": "The Most Important Counties to Watch on Election Night",
      "URL": "http://www.wsj.com/graphics/elections/2016/bellwether-counties/",
      "Chart_Type": [
        "Choropleth",
        "Heatmap",
        "Line"
      ],
      "Encodings": [
        "Diverging",
        "Geo",
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤1-5K",
      "Fix Tooltip Position": 1,
      "Serialize Layout": "Map and (line and heatmap)",
      "Remove Records": "Heatmap",
      "Simplify Labels": "Y axis for the line graph (party names)"
    },
    {
      "Item": "E130-Jets-1",
      "Parent": "130-wsj-16-jets",
      "journal": "WSJ",
      "Title": "Comparing the World's Fighter Jets",
      "URL": "http://graphics.wsj.com/how-the-worlds-best-fighter-jets-measure-up/",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Animation",
      "Format_2": "",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤50",
      "Reduce Width": 1,
      "Serialize Label-Marks": 1,
      "Remove Axis": 1
    },
    {
      "Item": "E131-Times-1 (Overall)",
      "Parent": "131-wsj-16-times",
      "journal": "WSJ",
      "Title": "Changing Times",
      "URL": "http://graphics.wsj.com/time-use/",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "X"
      ],
      "Chart_Size": "Small",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤1-5K",
      "Serialize Layout": "Text and visualization"
    },
    {
      "Item": "E131-Times-2 (Compared views)",
      "Parent": "131-wsj-16-times",
      "journal": "WSJ",
      "Title": "Changing Times",
      "URL": "http://graphics.wsj.com/time-use/",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "X"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤1-5K",
      "Serialize Layout": "Visualizations"
    },
    {
      "Item": "E132-MegaBank-1",
      "Parent": "132-wsj-16-megabank",
      "journal": "WSJ",
      "Title": "The Rise and Retreat of the Megabank",
      "URL": "http://graphics.wsj.com/citi-revenue/",
      "Chart_Type": [
        "Area",
        "Line",
        "Stacked"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Interactive slideshow",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Split States into Panels": "A dynamic stacked area graph to multiple static views",
      "Remove Annotations": 1
    },
    {
      "Item": "E133-Splinter-1 (Heatmap)",
      "Parent": "133-wsj-16-splinter",
      "journal": "WSJ",
      "Title": "Markets Splinter",
      "URL": "http://www.wsj.com/graphics/markets-splinter-postelection-reaction/",
      "Chart_Type": [
        "Heatmap"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤1-5K",
      "Toggle Labels": 1,
      "Adjust Ticks": "Legends"
    },
    {
      "Item": "E133-Splinter-2 (Table+Heatmap)",
      "Parent": "133-wsj-16-splinter",
      "journal": "WSJ",
      "Title": "Markets Splinter",
      "URL": "http://www.wsj.com/graphics/markets-splinter-postelection-reaction/",
      "Chart_Type": [
        "Heatmap"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50"
    },
    {
      "Item": "E134-Zika-1 (Pink map)",
      "Parent": "134-wsj-16-zika",
      "journal": "WSJ",
      "Title": "Where the Zika Virus Can Thrive and Take Its Toll in the United States",
      "URL": "http://www.wsj.com/graphics/where-zika-can-thrive/",
      "Chart_Type": [
        "Choropleth"
      ],
      "Encodings": [
        "Geo",
        "Value"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤1-5K",
      "Remove Labels": "State names",
      "Serialize Layout": "(Legends and title) and visualization"
    },
    {
      "Item": "E134-Zika-2 (Florida map)",
      "Parent": "134-wsj-16-zika",
      "journal": "WSJ",
      "Title": "Where the Zika Virus Can Thrive and Take Its Toll in the United States",
      "URL": "http://www.wsj.com/graphics/where-zika-can-thrive/",
      "Chart_Type": [
        "Choropleth"
      ],
      "Encodings": [
        "Geo",
        "Value"
      ],
      "Chart_Size": "Small",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤1-5K"
    },
    {
      "Item": "E134-Zika-3 (Bar)",
      "Parent": "134-wsj-16-zika",
      "journal": "WSJ",
      "Title": "Where the Zika Virus Can Thrive and Take Its Toll in the United States",
      "URL": "http://www.wsj.com/graphics/where-zika-can-thrive/",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Length",
        "X",
        "Y"
      ],
      "Chart_Size": "Small",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50"
    },
    {
      "Item": "E134-Zika-4 (Line)",
      "Parent": "134-wsj-16-zika",
      "journal": "WSJ",
      "Title": "Where the Zika Virus Can Thrive and Take Its Toll in the United States",
      "URL": "http://www.wsj.com/graphics/where-zika-can-thrive/",
      "Chart_Type": [
        "Area",
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Small",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50"
    },
    {
      "Item": "E134-Zika-5 (Orange map)",
      "Parent": "134-wsj-16-zika",
      "journal": "WSJ",
      "Title": "Where the Zika Virus Can Thrive and Take Its Toll in the United States",
      "URL": "http://www.wsj.com/graphics/where-zika-can-thrive/",
      "Chart_Type": [
        "Choropleth"
      ],
      "Encodings": [
        "Geo",
        "Value"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤1-5K",
      "Remove Labels": "State names",
      "Serialize Layout": "(Legends and title) and visualization",
      "Remove Annotations": 1
    },
    {
      "Item": "E135-BankStress-1 (Interval dot)",
      "Parent": "135-wsj-16-bankstress",
      "journal": "WSJ",
      "Title": "European Bank Stress Tests 2016",
      "URL": "http://graphics.wsj.com/eba-stress-test-2016/",
      "Chart_Type": [
        "Bar",
        "Dot"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "Shape",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤200",
      "Reduce Width": 1
    },
    {
      "Item": "E136-Candidates-1 (Bar+Dot)",
      "Parent": "136-wsj-16-candidates",
      "journal": "WSJ",
      "Title": "When Losing Presidential Candidates Endorse",
      "URL": "http://graphics.wsj.com/elections/2016/lining-up-support/",
      "Chart_Type": [
        "Bar",
        "Dot"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "Shape",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Reduce Width": 1,
      "Remove Labels": 1,
      "Move Labels": "For the regroupd data",
      "Remove Annotations": 1,
      "Regroup Data": "Endorsement of self and endorsement of another to endorsement of someone, resulting in the removal of gray dots."
    },
    {
      "Item": "E137-RedBlue-1 (Bar+cartogram)",
      "Parent": "137-wsj-16-redblue",
      "journal": "WSJ",
      "Title": "A Field Guide to Red and Blue America",
      "URL": "http://graphics.wsj.com/elections/2016/field-guide-red-blue-america/",
      "Chart_Type": [
        "Bar",
        "Cartogram"
      ],
      "Encodings": [
        "Geo",
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Small multiples",
      "Data_Type": [
        "Geospatial",
        "Temporal"
      ],
      "Data_Size": "≤1-5K",
      "Change Encoding": "Position to Hue",
      "Remove Records": 1
    },
    {
      "Item": "E137-RedBlue-2 (Bar)",
      "Parent": "137-wsj-16-redblue",
      "journal": "WSJ",
      "Title": "A Field Guide to Red and Blue America",
      "URL": "http://graphics.wsj.com/elections/2016/field-guide-red-blue-america/",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Small multiples",
      "Data_Type": [
        "Geospatial",
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Reduce Width": 1
    },
    {
      "Item": "E138-PayGap-1 (Interval dot)",
      "Parent": "138-wsj-16-paygap",
      "journal": "WSJ",
      "Title": "What's Your Pay Gap?",
      "URL": "http://graphics.wsj.com/gender-pay-gap/",
      "Chart_Type": [
        "Bar",
        "Dot"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Interactive slideshow",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤1-5K",
      "Transpose Axes": 1,
      "Adjust Ticks": "Y axis (transposed to the X axis in the SS version)",
      "Regroup Data": "Categories for the jobs",
      "Change Feedback": "Exact search to group filtering",
      "Disable X": "Filtering for 7 jobs where female earn more than male",
      "Add Labels": "For values"
    },
    {
      "Item": "E139-TrumpHappen-1 (Bubble)",
      "Parent": "139-wsj-16-trumphappen",
      "journal": "WSJ",
      "Title": "HOW TRUMP HAPPENED",
      "URL": "http://graphics.wsj.com/elections/2016/how-trump-happened/",
      "Chart_Type": [
        "Bubble"
      ],
      "Encodings": [
        "Proximity",
        "Size"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Parallax",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤50",
      "Change Encoding": "Size to length",
      "Change Trigger": "Parallex to next/prev buttons"
    },
    {
      "Item": "E140-ElecMap-1 (Map)",
      "Parent": "140-wsj-16-elecmap",
      "journal": "WSJ",
      "Title": "Draw the 2016 Electoral College Map",
      "URL": "http://graphics.wsj.com/elections/2016/2016-electoral-college-map-predictions/",
      "Chart_Type": [
        "Cartogram",
        "Choropleth"
      ],
      "Encodings": [
        "Geo",
        "Hue"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Interactive slideshow",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤200",
      "Serialize Layout": "Text and map",
      "Remove Panels/States": "Interactively changed states (via parallex) are not visible in the SS version",
      "Disable Hover Interactions": 1
    },
    {
      "Item": "E140-ElecMap-2 (Vertical bar)",
      "Parent": "140-wsj-16-elecmap",
      "journal": "WSJ",
      "Title": "Draw the 2016 Electoral College Map",
      "URL": "http://graphics.wsj.com/elections/2016/2016-electoral-college-map-predictions/",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Small",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤50"
    },
    {
      "Item": "E140-ElecMap-3 (Horizontal bar)",
      "Parent": "140-wsj-16-elecmap",
      "journal": "WSJ",
      "Title": "Draw the 2016 Electoral College Map",
      "URL": "http://graphics.wsj.com/elections/2016/2016-electoral-college-map-predictions/",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Small",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤50"
    },
    {
      "Item": "E140-ElecMap-4 (Two bars)",
      "Parent": "140-wsj-16-elecmap",
      "journal": "WSJ",
      "Title": "Draw the 2016 Electoral College Map",
      "URL": "http://graphics.wsj.com/elections/2016/2016-electoral-college-map-predictions/",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Small",
      "Format": "Static",
      "Format_2": "Small multiples",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50"
    },
    {
      "Item": "E141-Swing-1 (Bar)",
      "Parent": "141-wsj-16-swing",
      "journal": "WSJ",
      "Title": "Who Will Swing the Swing States?",
      "URL": "http://www.wsj.com/graphics/elections/2016/swing-the-swing-states-to-see-if-hillary-clinton-or-donald-trump-will-win/",
      "Chart_Type": [
        "Bar",
        "Stacked"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial",
        "Numerical"
      ],
      "Data_Size": "≤200",
      "Reduce Width": 1,
      "Remove Feedback": "Small heatmap for battle grounds",
      "Simplify Labels": "Removed images for labels"
    },
    {
      "Item": "E141-Swing-2 (Bar with more sliders)",
      "Parent": "141-wsj-16-swing",
      "journal": "WSJ",
      "Title": "Who Will Swing the Swing States?",
      "URL": "http://www.wsj.com/graphics/elections/2016/swing-the-swing-states-to-see-if-hillary-clinton-or-donald-trump-will-win/",
      "Chart_Type": [
        "Bar",
        "Stacked"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Dynamic query",
      "Data_Type": [
        "Geospatial",
        "Numerical"
      ],
      "Data_Size": "≤200",
      "Reduce Width": 1,
      "Remove Feedback": "Small heatmap for battle grounds",
      "Transpose Interaction Widget": 1
    },
    {
      "Item": "E142-GenderedWorkplace-1 (Icon-bar)",
      "Parent": "142-wsj-16-gendeworkplace",
      "journal": "WSJ",
      "Title": "How Men & Women See the Workplace Differently",
      "URL": "http://graphics.wsj.com/how-men-and-women-see-the-workplace-differently/",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Hue",
        "Length"
      ],
      "Chart_Size": "Medium",
      "Format": "Animation",
      "Format_2": "",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤50",
      "Fluid Layout": 1,
      "Change Encoding": "Length to Size",
      "Remove Transition Animation": 1
    },
    {
      "Item": "E142-GenderedWorkplace-2 (Quiz)",
      "Parent": "142-wsj-16-gendeworkplace",
      "journal": "WSJ",
      "Title": "How Men & Women See the Workplace Differently",
      "URL": "http://graphics.wsj.com/how-men-and-women-see-the-workplace-differently/",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Interactive slideshow",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤50"
    },
    {
      "Item": "E142-GenderedWorkplace-3 (Bar)",
      "Parent": "142-wsj-16-gendeworkplace",
      "journal": "WSJ",
      "Title": "How Men & Women See the Workplace Differently",
      "URL": "http://graphics.wsj.com/how-men-and-women-see-the-workplace-differently/",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤50",
      "Reduce Width": 1
    },
    {
      "Item": "E143-WhatPercent-1",
      "Parent": "143-wsj-16-whatpercet",
      "journal": "WSJ",
      "Title": "What Percent Are You?",
      "URL": "http://graphics.wsj.com/what-percent/",
      "Chart_Type": [
        "Area",
        "Bar"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Dynamic query",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤1-5K",
      "Reduce Width": 1,
      "Adjust Ticks": "X Axis"
    },
    {
      "Item": "E144-EconGravity-1",
      "Parent": "144-wsj-16-econgravity",
      "journal": "WSJ",
      "Title": "The Global Economy's Shifting Center of Gravity in 11 Charts",
      "URL": "http://graphics.wsj.com/global-growth/",
      "Chart_Type": [
        "Area"
      ],
      "Encodings": [
        "Hue",
        "Size"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Interactive slideshow",
      "Data_Type": [
        "Geospatial",
        "Temporal"
      ],
      "Data_Size": "≤25K",
      "Reduce Width": 1,
      "Unfreeze Interaction Widget": 1
    },
    {
      "Item": "E145-Popularity-1 (Negative votes)",
      "Parent": "145-wsj-16-popularity",
      "journal": "WSJ",
      "Title": "Trump and Clinton's Popularity Problem",
      "URL": "http://graphics.wsj.com/elections/2016/donald-trump-and-hillary-clintons-popularity-problem/",
      "Chart_Type": [
        "Bar",
        "Dot"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "Value",
        "X",
        "Y"
      ],
      "Chart_Size": "Small",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤50",
      "Reduce Width": 1,
      "Serialize Layout": "Text and visualization"
    },
    {
      "Item": "E145-Popularity-2 (Reasons to support)",
      "Parent": "145-wsj-16-popularity",
      "journal": "WSJ",
      "Title": "Trump and Clinton's Popularity Problem",
      "URL": "http://graphics.wsj.com/elections/2016/donald-trump-and-hillary-clintons-popularity-problem/",
      "Chart_Type": [
        "Bar",
        "Dot"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "X",
        "Y"
      ],
      "Chart_Size": "Small",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤50",
      "Reduce Width": 1,
      "Serialize Layout": "Text and visualization"
    },
    {
      "Item": "E145-Popularity-3 (Bar)",
      "Parent": "145-wsj-16-popularity",
      "journal": "WSJ",
      "Title": "Trump and Clinton's Popularity Problem",
      "URL": "http://graphics.wsj.com/elections/2016/donald-trump-and-hillary-clintons-popularity-problem/",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Small",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤50",
      "Reduce Width": 1,
      "Serialize Layout": "Text and visualization"
    },
    {
      "Item": "E145-Popularity-4 (Line)",
      "Parent": "145-wsj-16-popularity",
      "journal": "WSJ",
      "Title": "Trump and Clinton's Popularity Problem",
      "URL": "http://graphics.wsj.com/elections/2016/donald-trump-and-hillary-clintons-popularity-problem/",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "X",
        "Y"
      ],
      "Chart_Size": "Small",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50",
      "Reduce Width": 1,
      "Serialize Layout": "Text and visualization",
      "Adjust Ticks": "X axis"
    },
    {
      "Item": "E146-Divided-1 (Scatterplot)",
      "Parent": "146-wsj-16-divided",
      "journal": "WSJ",
      "Title": "A Divided America",
      "URL": "http://www.wsj.com/graphics/elections/2016/divided-america/",
      "Chart_Type": [
        "Scatterplot"
      ],
      "Encodings": [
        "Diverging",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤25K",
      "Reduce Width": 1,
      "Disable Hover Interactions": 1,
      "Remove Annotations": 1
    },
    {
      "Item": "E146-Divided-2 (Map)",
      "Parent": "146-wsj-16-divided",
      "journal": "WSJ",
      "Title": "A Divided America",
      "URL": "http://www.wsj.com/graphics/elections/2016/divided-america/",
      "Chart_Type": [
        "Choropleth"
      ],
      "Encodings": [
        "Diverging",
        "Geo"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤25K",
      "Serialize Layout": "Within the legends"
    },
    {
      "Item": "E146-Divided-3 (Bar+Line)",
      "Parent": "146-wsj-16-divided",
      "journal": "WSJ",
      "Title": "A Divided America",
      "URL": "http://www.wsj.com/graphics/elections/2016/divided-america/",
      "Chart_Type": [
        "Bar",
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Reduce Width": 1
    },
    {
      "Item": "E147-Polling-1 (Line+Dot)",
      "Parent": "147-wsj-16-polling",
      "journal": "WSJ",
      "Title": "Polling for the 2016 Election",
      "URL": "http://graphics.wsj.com/elections/2016/polls/",
      "Chart_Type": [
        "Line",
        "Scatterplot"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤1-5K",
      "Remove Encoding": "Dots (aggregated in the lines)",
      "Disable Hover Interactions": 1
    },
    {
      "Item": "E147-Polling-2 (Red and blue lines)",
      "Parent": "147-wsj-16-polling",
      "journal": "WSJ",
      "Title": "Polling for the 2016 Election",
      "URL": "http://graphics.wsj.com/elections/2016/polls/",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Small multiples",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤1-5K",
      "Serialize Layout": "Visualizations"
    },
    {
      "Item": "E147-Polling-3 (Gray and yellow lines)",
      "Parent": "147-wsj-16-polling",
      "journal": "WSJ",
      "Title": "Polling for the 2016 Election",
      "URL": "http://graphics.wsj.com/elections/2016/polls/",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤1-5K",
      "Disable Hover Interactions": 1
    },
    {
      "Item": "E148-Boardrooms-1 (Icon array)",
      "Parent": "148-wsj-16-boardrooms",
      "journal": "WSJ",
      "Title": "Inside America's Boardrooms",
      "URL": "http://graphics.wsj.com/boards-of-directors-at-SP-500-companies/",
      "Chart_Type": [
        "Icon array"
      ],
      "Encodings": [
        "Hue",
        "Size",
        "Value"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Dynamic query",
      "Data_Type": [
        "Categorical",
        "Numerical"
      ],
      "Data_Size": "≤25K",
      "Remove Panels/States": "Several states are not configurable in the SS version",
      "Split States into Panels": "A parallax-based interactive slideshow to a list of static visualizations"
    },
    {
      "Item": "E149-TopCeos-1 (Bubble+Bar)",
      "Parent": "149-wsj-16-topceos",
      "journal": "WSJ",
      "Title": "How Much Do Top CEOs Make?",
      "URL": "http://graphics.wsj.com/ceo-salary-vs-company-performance/",
      "Chart_Type": [
        "Bar",
        "Bubble"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "Size",
        "X"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Dynamic query",
      "Data_Type": [
        "Numerical",
        "Temporal"
      ],
      "Data_Size": "≤25K",
      "Remove Fields": "Columns in the tables",
      "Serialize Label-Marks": "Abandon Table Format",
      "Remove Panels/States": "The interactive overview and detail views",
      "Disable X": "Filtering",
      "Remove Trigger": "Free input for search"
    },
    {
      "Item": "E150-StartupStock-1 (Line)",
      "Parent": "150-wsj-16-startupstock",
      "journal": "WSJ",
      "Title": "The Startup Stock Tracker",
      "URL": "https://www.wsj.com/graphics/tech-startup-stocks-to-watch/",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "Hue",
        "Shape",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Dynamic query",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤25K",
      "Remove Panels/States": "The interactive overview",
      "Disable X": "Filtering",
      "Remove Trigger": "Free input removed",
      "Remove Fields": "Several columns in the detail table",
      "Serialize Layout": "Legends and visualization (detail views)",
      "Disable Hover Interactions": 1,
      "Simplify Labels": "Year on the X axis",
      "Adjust Tick Labels": "1Q, 2Q",
      "Reduce Width": 1
    },
    {
      "Item": "E151-WinningStock-1",
      "Parent": "151-wsj-16-winningstock",
      "journal": "WSJ",
      "Title": "CAN YOU PICK A WINNING STOCK?",
      "URL": "http://graphics.wsj.com/stock-game/",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "Hue",
        "Value",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Interactive slideshow",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤25K",
      "Reduce Width": 1,
      "Serialize Layout": "Within the interaction widget"
    },
    {
      "Item": "E152-HowBond-1 (Blue line)",
      "Parent": "152-wsj-16-howbond",
      "journal": "WSJ",
      "Title": "How Bond Yields Got This Low",
      "URL": "http://www.wsj.com/graphics/how-bond-yields-got-this-low/",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤1-5K",
      "Adjust Ticks": "Y axis",
      "Reduce Width": 1
    },
    {
      "Item": "E152-HowBond-2 (Line+Area)",
      "Parent": "152-wsj-16-howbond",
      "journal": "WSJ",
      "Title": "How Bond Yields Got This Low",
      "URL": "http://www.wsj.com/graphics/how-bond-yields-got-this-low/",
      "Chart_Type": [
        "Area",
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Reduce Width": 1,
      "Adjust Ticks": "X axis",
      "Remove Records": "Records for years 2010 and 2011",
      "Remove Annotations": "An annotation for year 2010",
      "Remove Encoding": "Area encoding for GDP growth (redundancy to the position encoding, i.e., line mark)"
    },
    {
      "Item": "E152-HowBond-3 (Three grey, green, and blue lines)",
      "Parent": "152-wsj-16-howbond",
      "journal": "WSJ",
      "Title": "How Bond Yields Got This Low",
      "URL": "http://www.wsj.com/graphics/how-bond-yields-got-this-low/",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50",
      "Externalize Annotations": 1,
      "Incorporate Labels": "X axis title",
      "Reduce Width": 1,
      "Simplify Labels": "X axis (dates)",
      "Adjust Ticks": "Y axis"
    },
    {
      "Item": "E152-HowBond-4 (Line with average mark)",
      "Parent": "152-wsj-16-howbond",
      "journal": "WSJ",
      "Title": "How Bond Yields Got This Low",
      "URL": "http://www.wsj.com/graphics/how-bond-yields-got-this-low/",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200"
    },
    {
      "Item": "E152-HowBond-5 (Four lines)",
      "Parent": "152-wsj-16-howbond",
      "journal": "WSJ",
      "Title": "How Bond Yields Got This Low",
      "URL": "http://www.wsj.com/graphics/how-bond-yields-got-this-low/",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤1-5K"
    },
    {
      "Item": "E152-HowBond-6 (Three red, green and blue lines)",
      "Parent": "152-wsj-16-howbond",
      "journal": "WSJ",
      "Title": "How Bond Yields Got This Low",
      "URL": "http://www.wsj.com/graphics/how-bond-yields-got-this-low/",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Reduce Width": 1
    },
    {
      "Item": "E152-HowBond-7 (Bar)",
      "Parent": "152-wsj-16-howbond",
      "journal": "WSJ",
      "Title": "How Bond Yields Got This Low",
      "URL": "http://www.wsj.com/graphics/how-bond-yields-got-this-low/",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Reduce Width": 1,
      "Simplify Labels": "X axis (2005)"
    },
    {
      "Item": "E152-HowBond-8 (Area)",
      "Parent": "152-wsj-16-howbond",
      "journal": "WSJ",
      "Title": "How Bond Yields Got This Low",
      "URL": "http://www.wsj.com/graphics/how-bond-yields-got-this-low/",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤1-5K",
      "Reduce Width": 1,
      "Simplify Labels": "X axis (2005)"
    },
    {
      "Item": "E152-HowBond-9 (Three blue, red, and green lines)",
      "Parent": "152-wsj-16-howbond",
      "journal": "WSJ",
      "Title": "How Bond Yields Got This Low",
      "URL": "http://www.wsj.com/graphics/how-bond-yields-got-this-low/",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Reduce Width": 1
    },
    {
      "Item": "E153-HomeRebound-1 (Red line)",
      "Parent": "153-wsj-16-homerebound",
      "journal": "WSJ",
      "Title": "Home Values Rebound, But Not For Everyone",
      "URL": "http://www.wsj.com/graphics/housing-market-recovery/",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Reduce Width": 1,
      "Shorten Annotations": 1
    },
    {
      "Item": "E153-HomeRebound-2 (By price brackets)",
      "Parent": "153-wsj-16-homerebound",
      "journal": "WSJ",
      "Title": "Home Values Rebound, But Not For Everyone",
      "URL": "http://www.wsj.com/graphics/housing-market-recovery/",
      "Chart_Type": [
        "Area",
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Remove Labels": 1,
      "Serialize Layout": 1
    },
    {
      "Item": "E153-HomeRebound-3 (By regions)",
      "Parent": "153-wsj-16-homerebound",
      "journal": "WSJ",
      "Title": "Home Values Rebound, But Not For Everyone",
      "URL": "http://www.wsj.com/graphics/housing-market-recovery/",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Serialize Layout": 1
    },
    {
      "Item": "E153-HomeRebound-4 (Search view)",
      "Parent": "153-wsj-16-homerebound",
      "journal": "WSJ",
      "Title": "Home Values Rebound, But Not For Everyone",
      "URL": "http://www.wsj.com/graphics/housing-market-recovery/",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤25K",
      "Reduce Width": 1,
      "Adjust Ticks": 1,
      "Disable X": "Search for locations"
    },
    {
      "Item": "E154-Polling-1 (Dot)",
      "Parent": "154-wsj-16-polling",
      "journal": "WSJ",
      "Title": "In Polling, Who's Getting It Right?",
      "URL": "http://www.wsj.com/graphics/elections/2016/in-polling-who-got-it-right/",
      "Chart_Type": [
        "Bar",
        "Dot"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "Shape",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤1-5K",
      "Reduce Width": 1,
      "Disable Hover Interactions": 1
    },
    {
      "Item": "E154-Polling-2 (Dot)",
      "Parent": "154-wsj-16-polling",
      "journal": "WSJ",
      "Title": "In Polling, Who's Getting It Right?",
      "URL": "http://www.wsj.com/graphics/elections/2016/in-polling-who-got-it-right/",
      "Chart_Type": [
        "Bar",
        "Dot"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "Shape",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤200",
      "Reduce Width": 1,
      "Disable Hover Interactions": 1
    },
    {
      "Item": "E155-RollIn-1 (Bar)",
      "Parent": "155-wsj-16-rollin",
      "journal": "WSJ",
      "Title": "What to Watch On Election Night As Results Roll In",
      "URL": "http://www.wsj.com/graphics/elections/2016/what-to-watch-on-election-night/",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤1-5K",
      "Reduce Width": 1
    },
    {
      "Item": "E155-RollIn-2 (Heatmap)",
      "Parent": "155-wsj-16-rollin",
      "journal": "WSJ",
      "Title": "What to Watch On Election Night As Results Roll In",
      "URL": "http://www.wsj.com/graphics/elections/2016/what-to-watch-on-election-night/",
      "Chart_Type": [
        "Heatmap"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Categorical",
        "Geospatial"
      ],
      "Data_Size": "≤200",
      "Serialize Layout": 1,
      "Simplify Labels": "State names are abbreviated"
    },
    {
      "Item": "E156-Hillary-1 (Area with annotations)",
      "Parent": "156-wsj-16-hillary",
      "journal": "WSJ",
      "Title": "Hillary vs. Hillary",
      "URL": "http://graphics.wsj.com/elections/2016/hillary-vs-hillary/",
      "Chart_Type": [
        "Area"
      ],
      "Encodings": [
        "Hue",
        "Size",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Remove Annotations": 1
    },
    {
      "Item": "E156-Hillary-2 (Area)",
      "Parent": "156-wsj-16-hillary",
      "journal": "WSJ",
      "Title": "Hillary vs. Hillary",
      "URL": "http://graphics.wsj.com/elections/2016/hillary-vs-hillary/",
      "Chart_Type": [
        "Area"
      ],
      "Encodings": [
        "Hue",
        "Size",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200"
    },
    {
      "Item": "E156-Hillary-3 (Boxplot)",
      "Parent": "156-wsj-16-hillary",
      "journal": "WSJ",
      "Title": "Hillary vs. Hillary",
      "URL": "http://graphics.wsj.com/elections/2016/hillary-vs-hillary/",
      "Chart_Type": [
        "Boxplot"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50"
    },
    {
      "Item": "E157-Delegate-1",
      "Parent": "157-wsj-16-delegate",
      "journal": "WSJ",
      "Title": "The Delegate Simulator",
      "URL": "http://graphics.wsj.com/elections/2016/delegate-simulator/",
      "Chart_Type": [
        "Area",
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤1-5K",
      "Reduce Width": 1,
      "Adjust Tick Labels": "X axis",
      "Serialize Layout": "Within the interaction widgets"
    },
    {
      "Item": "E158-ClintonSanders-1 (Line+Area)",
      "Parent": "158-wsj-16-clintonsanders",
      "journal": "WSJ",
      "Title": "The Delegate Math Facing Clinton and Sanders",
      "URL": "http://graphics.wsj.com/elections/2016/democratic-delegate-math/",
      "Chart_Type": [
        "Area",
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200"
    },
    {
      "Item": "E158-ClintonSanders-2 (Line)",
      "Parent": "158-wsj-16-clintonsanders",
      "journal": "WSJ",
      "Title": "The Delegate Math Facing Clinton and Sanders",
      "URL": "http://graphics.wsj.com/elections/2016/democratic-delegate-math/",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200"
    },
    {
      "Item": "E158-ClintonSanders-3 (Bar)",
      "Parent": "158-wsj-16-clintonsanders",
      "journal": "WSJ",
      "Title": "The Delegate Math Facing Clinton and Sanders",
      "URL": "http://graphics.wsj.com/elections/2016/democratic-delegate-math/",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50",
      "Internalize Legends": 1
    },
    {
      "Item": "E159-Repulican-1 (Cartogram for all candidates)",
      "Parent": "159-wsj-16-repulican",
      "journal": "WSJ",
      "Title": "Republican Convention's Delegate Math Explained",
      "URL": "http://graphics.wsj.com/elections/2016/rnc-convention-delegates/",
      "Chart_Type": [
        "Cartogram"
      ],
      "Encodings": [
        "Geo",
        "Hue"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤1-5K",
      "Simplify Legends": "For 'John Kasich'",
      "Move Marks": "Non-mainland territories",
      "Remove Legends": "State names"
    },
    {
      "Item": "E159-Repulican-2 (Bar+Cartogram for boundedness)",
      "Parent": "159-wsj-16-repulican",
      "journal": "WSJ",
      "Title": "Republican Convention's Delegate Math Explained",
      "URL": "http://graphics.wsj.com/elections/2016/rnc-convention-delegates/",
      "Chart_Type": [
        "Bar",
        "Cartogram"
      ],
      "Encodings": [
        "Geo",
        "Hue",
        "Length"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤1-5K",
      "Move Marks": "Non-mainland territories",
      "Reduce Width": "Bar"
    },
    {
      "Item": "E160-Swinging-1",
      "Parent": "160-wsj-16-swinging",
      "journal": "WSJ",
      "Title": "How Far is Your State Swinging?",
      "URL": "http://www.wsj.com/graphics/elections/2016/how-is-your-state-swinging/",
      "Chart_Type": [
        "Dot",
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Small multiples",
      "Data_Type": [
        "Geospatial",
        "Temporal"
      ],
      "Data_Size": "≤1-5K",
      "Reduce Width": 1
    },
    {
      "Item": "E201-Responsive-1 (Line)",
      "Parent": "201-add-19-responsive",
      "journal": "Research",
      "Title": "Responsive Visualization",
      "URL": "https://projects.isds.tugraz.at/respvis/",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Remove Axis": "X and Y axes",
      "Add Labels": "For the first and the last records"
    },
    {
      "Item": "E201-Responsive-2 (Bar)",
      "Parent": "201-add-19-responsive",
      "journal": "Research",
      "Title": "Responsive Visualization",
      "URL": "https://projects.isds.tugraz.at/respvis/",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤50",
      "Transpose Axes": 1
    },
    {
      "Item": "E201-Responsive-3 (Parallel coordinates)",
      "Parent": "201-add-19-responsive",
      "journal": "Research",
      "Title": "Responsive Visualization",
      "URL": "https://projects.isds.tugraz.at/respvis/",
      "Chart_Type": [
        "Parallel Coordinates"
      ],
      "Encodings": [
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤25K",
      "Remove Fields": 1,
      "Toggle Fields": "Enable users to choose which fields to plot on a parallel coordinate."
    },
    {
      "Item": "E201-Responsive-4 (Scatterplot)",
      "Parent": "201-add-19-responsive",
      "journal": "Research",
      "Title": "Responsive Visualization",
      "URL": "https://projects.isds.tugraz.at/respvis/",
      "Chart_Type": [
        "Scatterplot"
      ],
      "Encodings": [
        "Hue",
        "Size",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Dynamic query",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤1-5K",
      "Reduce Width": 1
    },
    {
      "Item": "E201-Responsive-5 (Map)",
      "Parent": "201-add-19-responsive",
      "journal": "Research",
      "Title": "Responsive Visualization",
      "URL": "https://projects.isds.tugraz.at/respvis/",
      "Chart_Type": [
        "Choropleth"
      ],
      "Encodings": [
        "Geo",
        "Hue"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Map with pan/zoom",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "p25K",
      "Toggle Interaction Widget": 1
    },
    {
      "Item": "E202-DragonBall-1",
      "Parent": "202-add-19-dragonball",
      "journal": "Blog post",
      "Title": "All fights from DRAGON BALL Z",
      "URL": "http://www.datasketch.es/january/code/nadieh/",
      "Chart_Type": [
        "Network"
      ],
      "Encodings": [
        "Hue",
        "Size",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤1-5K",
      "Disable Hover Interactions": 1,
      "Remove Context": 1
    },
    {
      "Item": "E203-DutchHousing-1",
      "Parent": "203-add-19-dutchhousing",
      "journal": "Blog post",
      "Title": "Woningmarkt",
      "URL": "http://nbremer.github.io/sotshouse/",
      "Chart_Type": [
        "Choropleth",
        "Treemap"
      ],
      "Encodings": [
        "Geo",
        "Hue",
        "Size"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤1-5K",
      "Serialize Layout": "Visualizations",
      "Reduce Width": 1,
      "Remove Labels": "Size-based removal"
    },
    {
      "Item": "E203-DutchHousing-2 (Interval dots)",
      "Parent": "203-add-19-dutchhousing",
      "journal": "Blog post",
      "Title": "Woningmarkt",
      "URL": "http://nbremer.github.io/sotshouse/",
      "Chart_Type": [
        "Bar",
        "Dot"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤200",
      "Reduce Width": 1,
      "Adjust Ticks": "X axis"
    },
    {
      "Item": "E204-CatDog-1 (Bubble)",
      "Parent": "204-add-19-catdog",
      "journal": "Blog post",
      "Title": "Why do cats...?",
      "URL": "https://whydocatsanddogs.com/cats#chart-vs",
      "Chart_Type": [
        "Bubble"
      ],
      "Encodings": [
        "Hue",
        "Size"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Categorical",
        "Numerical"
      ],
      "Data_Size": "≤1-5K",
      "Fluid Layout": 1,
      "Serialize Layout": "Text and visualization"
    },
    {
      "Item": "E204-CatDog-2 (Bubble+Network)",
      "Parent": "204-add-19-catdog",
      "journal": "Blog post",
      "Title": "Why do cats...?",
      "URL": "https://whydocatsanddogs.com/cats#chart-vs",
      "Chart_Type": [
        "Bubble",
        "Network"
      ],
      "Encodings": [
        "Hue",
        "Size"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Categorical",
        "Numerical"
      ],
      "Data_Size": "≤25K",
      "Fluid Layout": 1,
      "Fix Tooltip Position": 1
    },
    {
      "Item": "E204-CatDog-3 (Network)",
      "Parent": "204-add-19-catdog",
      "journal": "Blog post",
      "Title": "Why do cats...?",
      "URL": "https://whydocatsanddogs.com/cats#chart-vs",
      "Chart_Type": [
        "Bubble",
        "Network"
      ],
      "Encodings": [
        "Hue",
        "Size",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Categorical",
        "Numerical"
      ],
      "Data_Size": "≤200",
      "Toggle Annotations": 1,
      "Move Marks": "Circled layout to linear layout"
    },
    {
      "Item": "E204-CatDog-4 (Circled dot)",
      "Parent": "204-add-19-catdog",
      "journal": "Blog post",
      "Title": "Why do cats...?",
      "URL": "https://whydocatsanddogs.com/cats#chart-vs",
      "Chart_Type": [
        "Dot"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤200",
      "Change Encoding": "Diagonal to Vertical",
      "Change Measurements": "A mapping from preferences over cat and dog in each country to blue and yellow is changed to a mapping from cat-preferredness and dog-preferredness of a country to blue and yellow.",
      "Disable Hover Interactions": 1
    },
    {
      "Item": "E205-UNESCOLACI-1",
      "Parent": "205-add-19-unescolaci",
      "journal": "Organizations",
      "Title": "UNESCO Learning Assessment Capacity INdex",
      "URL": "http://uis.unesco.org/apps/visualisations/laci/map.html#",
      "Chart_Type": [
        "Choropleth"
      ],
      "Encodings": [
        "Geo",
        "Hue"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Dynamic query",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤1-5K",
      "Reudce Explorable Area": "In default, smaller area is visible at a given time in the SS version.",
      "Serialize Layout": "Search interaction's position",
      "Disable Hover Interactions": 1
    },
    {
      "Item": "E206-UNESCODive-1",
      "Parent": "206-add-19-unescodive",
      "journal": "Organizations",
      "Title": "UNESCO Dive",
      "URL": "https://ich.unesco.org/dive/constellation/?language=en",
      "Chart_Type": [
        "Network"
      ],
      "Encodings": [
        "Hue",
        "Size",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Dynamic query",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤25K",
      "Reudce Explorable Area": "In default, smaller area is visible at a given time in the SS version."
    },
    {
      "Item": "E207-BetterLife-1 (Bubble map)",
      "Parent": "207-add-19-betterlife",
      "journal": "Organizations",
      "Title": "OECD Better Life Index",
      "URL": "http://www.oecdbetterlifeindex.org",
      "Chart_Type": [
        "Bar",
        "Bubble",
        "Bubble-Map",
        "Dot"
      ],
      "Encodings": [
        "Geo",
        "Hue",
        "Length",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Map with pan/zoom",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤1-5K",
      "Serialize Layout": "Map and rank view",
      "Remove Trigger": 1
    },
    {
      "Item": "E207-BetterLife-2 (Flower+Bar)",
      "Parent": "207-add-19-betterlife",
      "journal": "Organizations",
      "Title": "OECD Better Life Index",
      "URL": "http://www.oecdbetterlifeindex.org",
      "Chart_Type": [
        "Bar",
        "Etc"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤1-5K",
      "Reudce Explorable Area": 1,
      "Fix Tooltip Position": 1,
      "Incorporate Labels": "Bars",
      "Fluid Layout": "Bar positions",
      "Remove Axis": "X axis for bars"
    },
    {
      "Item": "E207-BetterLife-3 (Bar)",
      "Parent": "207-add-19-betterlife",
      "journal": "Organizations",
      "Title": "OECD Better Life Index",
      "URL": "http://www.oecdbetterlifeindex.org",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "X",
        "Y"
      ],
      "Chart_Size": "Small",
      "Format": "Interactive",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤200",
      "Serialize Layout": "Text and visualization",
      "Disable Hover Interactions": 1
    },
    {
      "Item": "E207-BetterLife-4 (Flower+Bar)",
      "Parent": "207-add-19-betterlife",
      "journal": "Organizations",
      "Title": "OECD Better Life Index",
      "URL": "http://www.oecdbetterlifeindex.org",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤200",
      "Reudce Explorable Area": "Less number of bars are visible at a given time in the SS version.",
      "Add Context": "As a compensation for 'Reduce Explorable Area'",
      "Adjust Ticks": "Y axis",
      "Fix Tooltip Position": 1,
      "Incorporate Labels": "Bars",
      "Move Labels": "For flowers",
      "Fluid Layout": "Bar positions",
      "Remove Axis": "X axis for bars"
    },
    {
      "Item": "E208-OECDData-1 (Bar)",
      "Parent": "208-add-19-oecddata",
      "journal": "Organizations",
      "Title": "OECD Data",
      "URL": "https://data.oecd.org",
      "Chart_Type": [
        "Bar",
        "Dot",
        "Line"
      ],
      "Encodings": [
        "Length",
        "Shape",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Geospatial",
        "Temporal"
      ],
      "Data_Size": "p25K",
      "Serialize Layout": 1,
      "Reduce Height": 1
    },
    {
      "Item": "E208-OECDData-2 (Line)",
      "Parent": "208-add-19-oecddata",
      "journal": "Organizations",
      "Title": "OECD Data",
      "URL": "https://data.oecd.org",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial",
        "Temporal"
      ],
      "Data_Size": "≤1-5K",
      "Reduce Width": 1,
      "Remove Axis": "X axis",
      "Serialize Layout": "Within the interaction widget"
    },
    {
      "Item": "E208-OECDData-3 (Line)",
      "Parent": "208-add-19-oecddata",
      "journal": "Organizations",
      "Title": "OECD Data",
      "URL": "https://data.oecd.org",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial",
        "Temporal"
      ],
      "Data_Size": "≤25K",
      "Reduce Width": 1,
      "Remove Axis": "X axis",
      "Serialize Layout": "Within the interaction widget"
    },
    {
      "Item": "E208-OECDData-4 (Bar+Map)",
      "Parent": "208-add-19-oecddata",
      "journal": "Organizations",
      "Title": "OECD Data",
      "URL": "https://data.oecd.org",
      "Chart_Type": [
        "Bar",
        "Bubble-Map"
      ],
      "Encodings": [
        "Geo",
        "Size",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Map with pan/zoom",
      "Data_Type": [
        "Geospatial",
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Reduce Width": 1,
      "Remove Axis": "X axis",
      "Serialize Layout": "Within the interaction widget"
    },
    {
      "Item": "E208-OECDData-5 (Interval dot)",
      "Parent": "208-add-19-oecddata",
      "journal": "Organizations",
      "Title": "OECD Data",
      "URL": "https://data.oecd.org",
      "Chart_Type": [
        "Dot"
      ],
      "Encodings": [
        "Geo",
        "Length",
        "Size",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Interactive slideshow",
      "Data_Type": [
        "Geospatial",
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Reduce Width": 1,
      "Remove Axis": "X axis",
      "Serialize Layout": "Within the interaction widget"
    },
    {
      "Item": "E208-OECDData-6 (Line+Bar)",
      "Parent": "208-add-19-oecddata",
      "journal": "Organizations",
      "Title": "OECD Data",
      "URL": "https://data.oecd.org",
      "Chart_Type": [
        "Bar",
        "Line"
      ],
      "Encodings": [
        "Length",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Geospatial",
        "Temporal"
      ],
      "Data_Size": "≤25K",
      "Serialize Layout": "Abandon a table format",
      "Reduce Height": 1,
      "Adjust Ticks": "Y axis"
    },
    {
      "Item": "E209-NewTown-1 (Dashboard)",
      "Parent": "209-add-19-newtown",
      "journal": "News-Misc",
      "Title": "New Town, 30 Years (using Tableau)",
      "URL": "http://newtown.sisajournal-e.com/skin/page/Price01.html",
      "Chart_Type": [
        "Bar",
        "Map",
        "Treemap"
      ],
      "Encodings": [
        "Geo",
        "Hue",
        "Size",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Geospatial",
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Reduce Width": 1,
      "Remove Labels": "Sized-based reduction",
      "Serialize Layout": "Visualizations",
      "Adjust Ticks": "X and Y axes",
      "Remove Fields": "'Planned population density' represented as a heatmap in the upper right panel",
      "Remove Encoding": "The color encoding (the heatmap in the upper right panel)",
      "Simplify Labels": "by ellipsis",
      "Disable Hover Interactions": 1
    },
    {
      "Item": "E209-NewTown-2 (Map)",
      "Parent": "209-add-19-newtown",
      "journal": "News-Misc",
      "Title": "New Town, 30 Years (using Tableau)",
      "URL": "http://newtown.sisajournal-e.com/skin/page/Price02.html",
      "Chart_Type": [
        "Choropleth"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Map with pan/zoom",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤200",
      "Toggle Legends": 1,
      "Change Trigger": "Buttons to sliders",
      "Disable Hover Interactions": 1
    },
    {
      "Item": "E210-GapMinder-1 (Scatterplot)",
      "Parent": "210-add-19-gapminder",
      "journal": "Misc",
      "Title": "GapMinder Tools",
      "URL": "https://www.gapminder.org/tools/",
      "Chart_Type": [
        "Bubble",
        "Scatterplot"
      ],
      "Encodings": [
        "Hue",
        "Size",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Dynamic query",
      "Data_Type": [
        "Geospatial",
        "Temporal"
      ],
      "Data_Size": "p25K",
      "Disable Hover Interactions": 1,
      "Reduce Width": 1,
      "Toggle Interaction Widget": 1,
      "Serialize Layout": "Visualization and interaction widget",
      "Move Labels": "Axis titles",
      "Remove Labels": "Income levels"
    },
    {
      "Item": "E210-GapMinder-2 (Area)",
      "Parent": "210-add-19-gapminder",
      "journal": "Misc",
      "Title": "GapMinder Tools",
      "URL": "https://www.gapminder.org/tools/",
      "Chart_Type": [
        "Area"
      ],
      "Encodings": [
        "Hue",
        "Size",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Dynamic query",
      "Data_Type": [
        "Geospatial",
        "Temporal"
      ],
      "Data_Size": "p25K",
      "Disable Hover Interactions": 1,
      "Reduce Width": 1,
      "Toggle Interaction Widget": 1,
      "Serialize Layout": "Visualization and interaction widget",
      "Move Labels": "Axis titles",
      "Remove Labels": "Income levels",
      "Adjust Ticks": 1
    },
    {
      "Item": "E210-GapMinder-3 (Map)",
      "Parent": "210-add-19-gapminder",
      "journal": "Misc",
      "Title": "GapMinder Tools",
      "URL": "https://www.gapminder.org/tools/",
      "Chart_Type": [
        "Map"
      ],
      "Encodings": [
        "Geo",
        "Hue",
        "Size"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Dynamic query",
      "Data_Type": [
        "Geospatial",
        "Temporal"
      ],
      "Data_Size": "p25K",
      "Disable Hover Interactions": 1,
      "Reduce Width": 1,
      "Toggle Interaction Widget": 1,
      "Serialize Layout": "Visualization and interaction widget"
    },
    {
      "Item": "E210-GapMinder-4 (Line)",
      "Parent": "210-add-19-gapminder",
      "journal": "Misc",
      "Title": "GapMinder Tools",
      "URL": "https://www.gapminder.org/tools/",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Dynamic query",
      "Data_Type": [
        "Geospatial",
        "Temporal"
      ],
      "Data_Size": "p25K",
      "Reduce Width": "Unusual for maps",
      "Toggle Interaction Widget": 1,
      "Serialize Layout": "Visualization and interaction widget",
      "Adjust Ticks": 1
    },
    {
      "Item": "E210-GapMinder-5 (Bar)",
      "Parent": "210-add-19-gapminder",
      "journal": "Misc",
      "Title": "GapMinder Tools",
      "URL": "https://www.gapminder.org/tools/",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Dynamic query",
      "Data_Type": [
        "Geospatial",
        "Temporal"
      ],
      "Data_Size": "p25K",
      "Reduce Width": 1,
      "Toggle Interaction Widget": 1,
      "Serialize Layout": "Visualization and interaction widget"
    },
    {
      "Item": "E210-GapMinder-6 (Population)",
      "Parent": "210-add-19-gapminder",
      "journal": "Misc",
      "Title": "GapMinder Tools",
      "URL": "https://www.gapminder.org/tools/",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Hue",
        "Size",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Dynamic query",
      "Data_Type": [
        "Geospatial",
        "Temporal"
      ],
      "Data_Size": "p25K",
      "Reduce Width": 1,
      "Toggle Interaction Widget": 1,
      "Serialize Layout": "Visualization and interaction widget",
      "Adjust Ticks": 1
    },
    {
      "Item": "E211-WGEA-1 (Scatterplot)",
      "Parent": "211-add-19-wgea",
      "journal": "Organizations",
      "Title": "WGEA Data Explorer",
      "URL": "https://data.wgea.gov.au/overview",
      "Chart_Type": [
        "Scatterplot"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Dynamic query",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤1-5K",
      "Disable Hover Interactions": 1,
      "Serialize Layout": "Visualization and interaction widget",
      "Reduce Width": 1
    },
    {
      "Item": "E211-WGEA-2 (Bar)",
      "Parent": "211-add-19-wgea",
      "journal": "Organizations",
      "Title": "WGEA Data Explorer",
      "URL": "https://data.wgea.gov.au/overview",
      "Chart_Type": [
        "Bar",
        "Line"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Serialize Layout": "Visualization and interaction widget"
    },
    {
      "Item": "E212-IslamicTerror-1",
      "Parent": "212-add-19-islamicterror",
      "journal": "News-Misc",
      "Title": "Islamic Terrorist Attacks All over the World, 1983 - 2015",
      "URL": "http://0media.tw/t/geoevent/",
      "Chart_Type": [
        "Bubble-Map"
      ],
      "Encodings": [
        "Geo",
        "Size"
      ],
      "Chart_Size": "Medium",
      "Format": "Animation",
      "Format_2": "",
      "Data_Type": [
        "Geospatial",
        "Temporal"
      ],
      "Data_Size": "≤1-5K",
      "Remove Labels": "Timeline",
      "Reudce Explorable Area": "In default, smaller area is visible at a time in the SS version."
    },
    {
      "Item": "E213-YahooDecline-1",
      "Parent": "213-add-19-yahoodecline",
      "journal": "News-Misc",
      "Title": "The Decline of Yahoo in Its Own Words",
      "URL": "https://hbr.org/2016/06/the-decline-of-yahoo-in-its-own-words",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Change Encoding": "(X, Y, Hue) to (Y, Value, X) respectively",
      "Relocate Annotations": 1
    },
    {
      "Item": "E214-CorporateBoard-1 (Circle)",
      "Parent": "214-add-19-corporateboard",
      "journal": "News-Misc",
      "Title": "How Corporate Boards Connect, in Charts",
      "URL": "https://hbr.org/2016/04/how-corporate-boards-connect-in-charts",
      "Chart_Type": [
        "Network"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤1-5K"
    },
    {
      "Item": "E214-CorporateBoard-2 (Zoomed)",
      "Parent": "214-add-19-corporateboard",
      "journal": "News-Misc",
      "Title": "How Corporate Boards Connect, in Charts",
      "URL": "https://hbr.org/2016/04/how-corporate-boards-connect-in-charts",
      "Chart_Type": [
        "Network"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤1-5K"
    },
    {
      "Item": "E214-CorporateBoard-3 (Toggled)",
      "Parent": "214-add-19-corporateboard",
      "journal": "News-Misc",
      "Title": "How Corporate Boards Connect, in Charts",
      "URL": "https://hbr.org/2016/04/how-corporate-boards-connect-in-charts",
      "Chart_Type": [
        "Network"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Interactive slideshow",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤25K"
    },
    {
      "Item": "E214-CorporateBoard-4 (Pie)",
      "Parent": "214-add-19-corporateboard",
      "journal": "News-Misc",
      "Title": "How Corporate Boards Connect, in Charts",
      "URL": "https://hbr.org/2016/04/how-corporate-boards-connect-in-charts",
      "Chart_Type": [
        "Pie"
      ],
      "Encodings": [
        "Angle",
        "Hue"
      ],
      "Chart_Size": "Small",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤50"
    },
    {
      "Item": "E214-CorporateBoard-5 (Bar)",
      "Parent": "214-add-19-corporateboard",
      "journal": "News-Misc",
      "Title": "How Corporate Boards Connect, in Charts",
      "URL": "https://hbr.org/2016/04/how-corporate-boards-connect-in-charts",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Numerical",
        "Temporal"
      ],
      "Data_Size": "≤50",
      "Reduce Width": 1
    },
    {
      "Item": "E215-Howard-1",
      "Parent": "215-add-19-howard",
      "journal": "NYT",
      "Title": "Record-Setting Effort by Howard, but Belgium Ousts U.S.",
      "URL": "https://www.nytimes.com/interactive/2014/07/01/sports/worldcup/usa-belgium.html?smid=tw-share&_r=1",
      "Chart_Type": [
        "Dot",
        "Etc"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "Orientation",
        "X"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Categorical"
      ],
      "Data_Size": "≤200",
      "Serialize Layout": "Visualizations"
    },
    {
      "Item": "E216-IndiaBJP-1",
      "Parent": "216-add-19-indiabjp",
      "journal": "Quartz",
      "Title": "India election results\u2014a landslide for the BJP and crushing defeat for Congress",
      "URL": "https://qz.com/209809/indias-election-trends-live/",
      "Chart_Type": [
        "Bar",
        "Icon array"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "Shape",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Categorical"
      ],
      "Data_Size": "≤200",
      "Serialize Layout": "Icon arrays",
      "Reduce Width": 1
    },
    {
      "Item": "E217-USJobs-1",
      "Parent": "217-add-19-usjobs",
      "journal": "Quartz",
      "Title": "Live: US jobs report",
      "URL": "https://qz.com/229731/today-s-jobs-report-us-june-july-2014/",
      "Chart_Type": [
        "Bar",
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Disable Hover Interactions": 1
    },
    {
      "Item": "E218-LandRush-1",
      "Parent": "218-add-19-landrush",
      "journal": "Quartz",
      "Title": "The biggest land rush in the history of the internet starts on February 4",
      "URL": "https://qz.com/165238/the-biggest-land-rush-in-the-history-of-the-internet-begins-on-february-4/",
      "Chart_Type": [
        "Icon array"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "Shape"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Categorical"
      ],
      "Data_Size": "≤25K",
      "Fluid Layout": 1
    },
    {
      "Item": "E219-Tippers-1",
      "Parent": "219-add-19-tippers",
      "journal": "Quartz",
      "Title": "Where the best and worst tippers in America live",
      "URL": "https://qz.com/200594/where-the-best-and-worst-tippers-in-america-live/",
      "Chart_Type": [
        "Scatterplot"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤200",
      "Reduce Width": 1,
      "Remove Labels": "Size-based removal",
      "Simplify Labels": 1
    },
    {
      "Item": "E220-LatinExport-1",
      "Parent": "220-add-19-latinexport",
      "journal": "Quartz",
      "Title": "Latin America earns more from exporting soccer players than live animals",
      "URL": "https://qz.com/109317/latin-americas-soccer-player-exports-are-worth-more-than-its-animal-exports/",
      "Chart_Type": [
        "Bubble-Map"
      ],
      "Encodings": [
        "Geo",
        "Hue",
        "Size"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Interactive slideshow",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤50"
    },
    {
      "Item": "E221-USAfrica-1",
      "Parent": "221-add-19-usafrica",
      "journal": "Quartz",
      "Title": "The state of US trade with Africa as Obama visits",
      "URL": "https://qz.com/98373/the-state-of-us-trade-with-africa-as-obama-visits/",
      "Chart_Type": [
        "Bubble-Map"
      ],
      "Encodings": [
        "Geo",
        "Hue",
        "Size"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤200",
      "Serialize Layout": "Legends and visualization"
    },
    {
      "Item": "E222-LeagueWC-1 (Cartogram)",
      "Parent": "222-add-19-leaguewc",
      "journal": "WP",
      "Title": "Leagues of the World Cup",
      "URL": "http://www.washingtonpost.com/wp-srv/special/sports/leagues-of-the-world-cup/",
      "Chart_Type": [
        "Cartogram",
        "Icon array"
      ],
      "Encodings": [
        "Geo",
        "Hue",
        "Size"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Interactive slideshow",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤1-5K",
      "Remove Panels/States": 1,
      "Unhide Text": "As a result of 'Remove Scenes'",
      "Add Legends": "As a result of 'Remove Scenes'",
      "Serialize Layout": "Abandon a cartogram format",
      "Disable Hover Interactions": 1,
      "Remove Annotations": 1
    },
    {
      "Item": "E222-LeagueWC-2 (Bar)",
      "Parent": "222-add-19-leaguewc",
      "journal": "WP",
      "Title": "Leagues of the World Cup",
      "URL": "http://www.washingtonpost.com/wp-srv/special/sports/leagues-of-the-world-cup/",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Value",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Interactive slideshow",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤1-5K",
      "Freeze Interaction Widget": 1,
      "Incorporate Labels": 1,
      "Move Labels": 1,
      "Disable X": "Search for leagues"
    },
    {
      "Item": "E223-984WC-1",
      "Parent": "223-add-19-984wc",
      "journal": "NYT",
      "Title": "984 Ways the United States Can Advance to the Next Round of the World Cup",
      "URL": "http://www.nytimes.com/interactive/2014/06/25/upshot/984-ways-the-united-states-can-advance-to-the-next-round-of-the-world-cup.html?_r=0",
      "Chart_Type": [
        "Heatmap"
      ],
      "Encodings": [
        "Hue",
        "Value",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤25K",
      "Remove Axis": "X and Y axes"
    },
    {
      "Item": "E224-OECDWellBeing-1 (Polar)",
      "Parent": "224-add-19-oecdwellbeing",
      "journal": "Organizations",
      "Title": "OECD Regianl Well Being",
      "URL": "https://oecdregionalwellbeing.org/US17.html",
      "Chart_Type": [
        "Polar"
      ],
      "Encodings": [
        "Angle",
        "Hue",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Small multiples",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤50",
      "Fluid Small Multiples": 1,
      "Serialize Layout": "Map and graph"
    },
    {
      "Item": "E224-OECDWellBeing-2 (Bar+Dot)",
      "Parent": "224-add-19-oecdwellbeing",
      "journal": "OECD",
      "Title": "OECD Regianl Well Being",
      "URL": "https://oecdregionalwellbeing.org/US17.html",
      "Chart_Type": [
        "Bar",
        "Dot"
      ],
      "Encodings": [
        "Hue",
        "X"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤1-5K",
      "Serialize Layout": "Three columns to a single column",
      "Fix Tooltip Position": 1
    },
    {
      "Item": "E225-Helmets-1",
      "Parent": "225-add-19-helmets",
      "journal": "NYT",
      "Title": "Fewer Helmets, More Deaths",
      "URL": "http://www.nytimes.com/interactive/2014/03/31/science/motorcycle-helmet-laws.html",
      "Chart_Type": [
        "Area",
        "Bar",
        "Line"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Parallax",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Reduce Width": 1,
      "Adjust Ticks": "X axis",
      "Serialize Layout": "Visualization and text",
      "Change Trigger": "Scrolling-down to swiping-left"
    },
    {
      "Item": "E226-Refugee-1 (Map)",
      "Parent": "226-add-19-refugee",
      "journal": "Misc",
      "Title": "The Refugee Project",
      "URL": "http://www.therefugeeproject.org/#/2018",
      "Chart_Type": [
        "Bar",
        "Bubble-Map",
        "Flowmap"
      ],
      "Encodings": [
        "Geo",
        "Hue",
        "Size",
        "Value",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Dynamic query",
      "Data_Type": [
        "Geospatial",
        "Temporal"
      ],
      "Data_Size": "p25K",
      "Serialize Layout": "Map and detail panel",
      "Disable X": "Map browsing",
      "Disable Hover Interactions": 1
    },
    {
      "Item": "E226-Refugee-2 (Bar)",
      "Parent": "226-add-19-refugee",
      "journal": "Misc",
      "Title": "The Refugee Project",
      "URL": "http://www.therefugeeproject.org/#/2018",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤200",
      "Reduce Width": 1
    },
    {
      "Item": "E227-NBAFanMap-1 (Entire map)",
      "Parent": "227-add-19-nbafanmap",
      "journal": "NYT",
      "Title": "Which Team Do You Cheer For? An N.B.A. Fan Map",
      "URL": "http://www.nytimes.com/interactive/2014/05/12/upshot/12-upshot-nba-basketball.html?ref=multimedia",
      "Chart_Type": [
        "Choropleth"
      ],
      "Encodings": [
        "Geo",
        "Hue",
        "Value"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "p25K"
    },
    {
      "Item": "E227-NBAFanMap-2 (Miami vs. Brooklyn)",
      "Parent": "227-add-19-nbafanmap",
      "journal": "NYT",
      "Title": "Which Team Do You Cheer For? An N.B.A. Fan Map",
      "URL": "http://www.nytimes.com/interactive/2014/05/12/upshot/12-upshot-nba-basketball.html?ref=multimedia",
      "Chart_Type": [
        "Choropleth"
      ],
      "Encodings": [
        "Geo",
        "Hue",
        "Value"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "p25K"
    },
    {
      "Item": "E227-NBAFanMap-3 (New York vs. Conneticut)",
      "Parent": "227-add-19-nbafanmap",
      "journal": "NYT",
      "Title": "Which Team Do You Cheer For? An N.B.A. Fan Map",
      "URL": "http://www.nytimes.com/interactive/2014/05/12/upshot/12-upshot-nba-basketball.html?ref=multimedia",
      "Chart_Type": [
        "Choropleth"
      ],
      "Encodings": [
        "Geo",
        "Hue",
        "Value"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤25K"
    },
    {
      "Item": "E227-NBAFanMap-4 (Interactive)",
      "Parent": "227-add-19-nbafanmap",
      "journal": "NYT",
      "Title": "Which Team Do You Cheer For? An N.B.A. Fan Map",
      "URL": "http://www.nytimes.com/interactive/2014/05/12/upshot/12-upshot-nba-basketball.html?ref=multimedia",
      "Chart_Type": [
        "Choropleth"
      ],
      "Encodings": [
        "Geo",
        "Hue",
        "Value"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Map with pan/zoom",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "p25K",
      "Reudce Explorable Area": 1,
      "Fix Tooltip Position": 1,
      "Disable X": "Search for locations"
    },
    {
      "Item": "E228-EliManning-1",
      "Parent": "228-add-19-elimanning",
      "journal": "NYT",
      "Title": "For Eli Manning, 150 Games and Counting",
      "URL": "http://www.nytimes.com/newsgraphics/2013/09/28/eli-manning-milestone/",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Length",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤25K",
      "Reduce Width": 1,
      "Remove Text": 1,
      "Remove Emphases": 1
    },
    {
      "Item": "E229-Battle-1 (Map)",
      "Parent": "229-add-19-battle",
      "journal": "NYT",
      "Title": "Taking the Battle to the States",
      "URL": "http://www.nytimes.com/interactive/2014/01/11/us/politics/who-controls-the-states-and-where-they-stand.html",
      "Chart_Type": [
        "Bar",
        "Choropleth"
      ],
      "Encodings": [
        "Geo",
        "Hue",
        "Length"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤200",
      "Remove Panels/States": 1
    },
    {
      "Item": "E229-Battle-2 (Bubble)",
      "Parent": "229-add-19-battle",
      "journal": "NYT",
      "Title": "Taking the Battle to the States",
      "URL": "http://www.nytimes.com/interactive/2014/01/11/us/politics/who-controls-the-states-and-where-they-stand.html",
      "Chart_Type": [
        "Bubble"
      ],
      "Encodings": [
        "Hue",
        "Size",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤1-5K",
      "Serialize Layout": 1
    },
    {
      "Item": "E230-SenateWin-1 (Line)",
      "Parent": "230-add-19-senatewin",
      "journal": "NYT",
      "Title": "Who Will Win The Senate?",
      "URL": "http://www.nytimes.com/newsgraphics/2014/senate-model/index.html",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤1-5K",
      "Reduce Width": 1,
      "Adjust Ticks": 1
    },
    {
      "Item": "E230-SenateWin-2 (Heatmap)",
      "Parent": "230-add-19-senatewin",
      "journal": "NYT",
      "Title": "Who Will Win The Senate?",
      "URL": "http://www.nytimes.com/newsgraphics/2014/senate-model/index.html",
      "Chart_Type": [
        "Heatmap"
      ],
      "Encodings": [
        "Hue"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤200",
      "Serialize Layout": "Tables"
    },
    {
      "Item": "E230-SenateWin-3 (Bar)",
      "Parent": "230-add-19-senatewin",
      "journal": "NYT",
      "Title": "Who Will Win The Senate?",
      "URL": "http://www.nytimes.com/newsgraphics/2014/senate-model/index.html",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤50",
      "Remove Encoding": "Horizontal position (bar marks redunant to the values)"
    },
    {
      "Item": "E230-SenateWin-4 (Pie+Small multiples)",
      "Parent": "230-add-19-senatewin",
      "journal": "NYT",
      "Title": "Who Will Win The Senate?",
      "URL": "http://www.nytimes.com/newsgraphics/2014/senate-model/index.html",
      "Chart_Type": [
        "Pie"
      ],
      "Encodings": [
        "Angle",
        "Hue"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤200",
      "Serialize Layout": 1
    },
    {
      "Item": "E230-SenateWin-5",
      "Parent": "230-add-19-senatewin",
      "journal": "NYT",
      "Title": "Who Will Win The Senate?",
      "URL": "http://www.nytimes.com/newsgraphics/2014/senate-model/index.html",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤50",
      "Remove Fields": "'Majority' column in the table",
      "Reduce Width": 1
    },
    {
      "Item": "E230-SenateWin-6",
      "Parent": "230-add-19-senatewin",
      "journal": "NYT",
      "Title": "Who Will Win The Senate?",
      "URL": "http://www.nytimes.com/newsgraphics/2014/senate-model/index.html",
      "Chart_Type": [
        "Heatmap"
      ],
      "Encodings": [
        "Diverging",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤200",
      "Reduce Width": 1,
      "Simplify Labels": 1,
      "Remove Records": "Less prioritized journals"
    },
    {
      "Item": "E231-RentOrBuy-1",
      "Parent": "231-add-19-rentorbuy",
      "journal": "NYT",
      "Title": "Is It Better to Rent or Buy?",
      "URL": "https://www.nytimes.com/interactive/2014/upshot/buy-rent-calculator.html",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Dynamic query",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤1-5K",
      "Remove Feedback": "Table view",
      "Reduce Width": 1,
      "Serialize Layout": "Interaction feedback and visualization",
      "Adjust Tick Labels": 1
    },
    {
      "Item": "E232-TempWorker-1",
      "Parent": "232-add-19-tempworker",
      "journal": "Propublica",
      "Title": "Temp Worker Regulations Around the World",
      "URL": "https://projects.propublica.org/graphics/temps-around-the-world",
      "Chart_Type": [
        "Bar",
        "Bubble-Map"
      ],
      "Encodings": [
        "Geo",
        "Size",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Interactive slideshow",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤200",
      "Remove Panels/States": "Buble map",
      "Transpose Axes": "Bar",
      "Disable Hover Interactions": 1,
      "Remove Annotations": 1
    },
    {
      "Item": "E233-SchoolSegregation-1",
      "Parent": "233-add-19-schoolsegregation",
      "journal": "Propublica",
      "Title": "School Segregation after Brown",
      "URL": "https://projects.propublica.org/segregation-now/",
      "Chart_Type": [
        "Bar",
        "Choropleth"
      ],
      "Encodings": [
        "Geo",
        "Value",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Interactive slideshow",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤1-5K",
      "Serialize Layout": "Visualizations"
    },
    {
      "Item": "E235-MessageMachine-1",
      "Parent": "235-add-19-messagemachine",
      "journal": "Propublica",
      "Title": "Message Machine: Reverse-Engineering the 2012 Campaign",
      "URL": "https://projects.propublica.org/emails",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤25K",
      "Remove Panels/State": 1
    },
    {
      "Item": "E236-OpportunityGap-1",
      "Parent": "236-add-19-opportunitygap",
      "journal": "Propublica",
      "Title": "The Opportunity Gap",
      "URL": "https://projects.propublica.org/schools/",
      "Chart_Type": [
        "Bar",
        "Heatmap"
      ],
      "Encodings": [
        "Hue",
        "Length",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤1-5K",
      "Remove Encoding": "Position encoding for AP pass rate and enrollment",
      "Remove Fields": "AP pass rate and enrollment"
    },
    {
      "Item": "E237-NursingHome-1",
      "Parent": "237-add-19-nursinghome",
      "journal": "Propublica",
      "Title": "Nursing Home Inspect",
      "URL": "https://projects.propublica.org/nursing-homes/",
      "Chart_Type": [
        "Bar",
        "Choropleth"
      ],
      "Encodings": [
        "Geo",
        "Hue",
        "Value",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤200",
      "Remove Panels/States": "Bar Graph",
      "Remove Legends": "Legends for the bar graph",
      "Serialize Layout": "Maps"
    },
    {
      "Item": "E239-ERWait-1",
      "Parent": "239-add-19-erwait",
      "journal": "Propublica",
      "Title": "ER Wait Watcher",
      "URL": "https://projects.propublica.org/emergency/",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤200",
      "Serialize Marks": "Abandoned a table format",
      "Serialize Label-Marks": 1,
      "Add Labels": "Beacause it abandoned a table format"
    },
    {
      "Item": "E240-Koch-1",
      "Parent": "240-add-19-koch",
      "journal": "Propublica",
      "Title": "How Dark Money Flows Through the Koch Network",
      "URL": "https://projects.propublica.org/graphics/koch",
      "Chart_Type": [
        "Flow"
      ],
      "Encodings": [
        "Hue",
        "Size",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤1-5K",
      "Remove Encoding": "The thickness of arrows for the size of money sources which is compensated by unhiding labels for the values.",
      "Add Labels": "Vaies",
      "Remove Panels/States": "Overview",
      "Change Trigger": "Hover to search through a list",
      "Change Feedback": "Toggle-filtering to a table",
      "Disable Hover Interactions": 1
    },
    {
      "Item": "E241-Cardinals-1 (Icon array)",
      "Parent": "241-add-19-cardinals",
      "journal": "Boston Globe",
      "Title": "Explore the College of Cardinals",
      "URL": "http://www.bostonglobe.com/news/world/2013/02/27/pope/UvB5Shk5EkawzTG0kRNdCN/story.html",
      "Chart_Type": [
        "Icon array"
      ],
      "Encodings": [
        "Shape",
        "Size"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Dynamic query",
      "Data_Type": [
        "Categorical"
      ],
      "Data_Size": "≤1-5K",
      "Serialize Layout": "Within the interaction widget",
      "Fluid Layout": "Icons"
    },
    {
      "Item": "E243-Overhauling-1",
      "Parent": "243-add-19-overhauling",
      "journal": "Boston Globe",
      "Title": "Overhauling the school assignment system",
      "URL": "http://www.bostonglobe.com/2012/09/24/schoolplans/t60CkakzBfOeO3IQkLzn8J/story.html",
      "Chart_Type": [
        "Map"
      ],
      "Encodings": [
        "Geo",
        "Hue"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Interactive slideshow",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤200"
    },
    {
      "Item": "E244-Inaugural-1",
      "Parent": "244-add-19-inaugural",
      "journal": "Boston Globe",
      "Title": "Inaugural language",
      "URL": "http://www.bostonglobe.com/2013/01/21/main/4kXqydaTvcSf8WdIt6FlhM/story.html#2013entrusting",
      "Chart_Type": [
        "Radar"
      ],
      "Encodings": [
        "Angle",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Small multiples",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤25K",
      "Serialize Layout": "Interaction feedback (words) and visualization"
    },
    {
      "Item": "E245-Menino-1",
      "Parent": "245-add-19-menino",
      "journal": "Boston Globe",
      "Title": "'Women' a central theme in Menino's speech",
      "URL": "http://www.bostonglobe.com/2013/01/30/mai/yWQCjhK7lyBaqgqFrakr1M/story.html",
      "Chart_Type": [
        "Bubble"
      ],
      "Encodings": [
        "Size",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤200",
      "Serialize Layout": "Visualization and text"
    },
    {
      "Item": "E246-Tycoon-1",
      "Parent": "246-add-19-tycoon",
      "journal": "Boston Globe",
      "Title": "Evolution of a tycoon",
      "URL": "http://www.bostonglobe.com/Page/Boston/2011-2020/WebGraphics/Metro/BostonGlobe.com/2013/02/spEvolution/main.xml",
      "Chart_Type": [
        "Icon array"
      ],
      "Encodings": [
        "Size"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤50",
      "Serialize Layout": "Abandon Table Format",
      "Serialize Label-Marks": 1
    },
    {
      "Item": "E247-Ticks-1",
      "Parent": "247-add-19-ticks",
      "journal": "Boston Globe",
      "Title": "Analyzing ticks, town by town",
      "URL": "http://www.bostonglobe.com/2013/06/02/analyzing-ticks-town-town/u30a7MHbJ1yHT7DgDpjTdN/story.html",
      "Chart_Type": [
        "Choropleth"
      ],
      "Encodings": [
        "Geo",
        "Hue"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤1-5K"
    },
    {
      "Item": "E249-BostonMayor-1",
      "Parent": "249-add-19-bostonmayor",
      "journal": "Boston Globe",
      "Title": "Results of the preliminary election for mayor",
      "URL": "http://www.bostonglobe.com/2013/09/24/results/oFoYkTunQrfNzcplUtboCP/story.html",
      "Chart_Type": [
        "Bar"
      ],
      "Encodings": [
        "Length",
        "X"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤50",
      "Reduce Width": 1
    },
    {
      "Item": "E251-MTSnow-1",
      "Parent": "251-add-19-mtsnow",
      "journal": "Boston Globe",
      "Title": "Snow totals in Mass., Northeast",
      "URL": "http://www.bostonglobe.com/2014/01/09/snow-totals-mass-northeast/badi2tA5EWGipQN6xjPX3L/story.html",
      "Chart_Type": [
        "Choropleth"
      ],
      "Encodings": [
        "Geo",
        "Value"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Map with pan/zoom",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤1-5K",
      "Increase Bin Size": "Color scale",
      "Adjust Ticks": "In the legend, as a result of 'Increase Bin Size'",
      "Reudce Explorable Area": "In default, smaller area is visible at a given time in the SS version."
    },
    {
      "Item": "E252-Treatment-1",
      "Parent": "252-add-19-treatment",
      "journal": "Propublica",
      "Title": "Treatment Tracker",
      "URL": "https://projects.propublica.org/treatment/",
      "Chart_Type": [
        "Pie",
        "Polar"
      ],
      "Encodings": [
        "Angle",
        "Hue",
        "SIze"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Small multiples",
      "Data_Type": [
        "Geospatial"
      ],
      "Data_Size": "≤1-5K",
      "Serialize Layout": "Visualization and table",
      "Fluid Small Multiples": 1
    },
    {
      "Item": "E261-ArcticVirus-1",
      "Parent": "261-SciAm-17-arcticvirus",
      "journal": "Scientific American",
      "Title": "Viruses Thrive in the Arctic Ocean ",
      "URL": "https://www.scientificamerican.com/article/viruses-thrive-in-the-arctic-ocean/",
      "Chart_Type": [
        "Heatmap"
      ],
      "Encodings": [
        "Hue",
        "Value",
        "X"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤25K",
      "Serialize Layout": "Visualizations"
    },
    {
      "Item": "E262-Eclipse1000-2 (Map)",
      "Parent": "262-SciAm-17-eclipse1000",
      "journal": "Scientific American",
      "Title": "Solar Eclipse Charted for the Next 1,000 Years",
      "URL": "https://www.scientificamerican.com/article/solar-eclipse-charted-for-the-next-1-000-years/",
      "Chart_Type": [
        "Map"
      ],
      "Encodings": [
        "Geo"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Geospatial",
        "Temporal"
      ],
      "Data_Size": "≤50",
      "Externalize Annotations": 1,
      "Simplify Labels": "Month-Date-Year to Year"
    },
    {
      "Item": "E262-Eclipse1000-3 (Radar)",
      "Parent": "262-SciAm-17-eclipse1000",
      "journal": "Scientific American",
      "Title": "Solar Eclipse Charted for the Next 1,000 Years",
      "URL": "https://www.scientificamerican.com/article/solar-eclipse-charted-for-the-next-1-000-years/",
      "Chart_Type": [
        "Radar"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤25K"
    },
    {
      "Item": "E263-FB150Friends-1 (Line)",
      "Parent": "263-SciAm-17-fb150friends",
      "journal": "Scientific American",
      "Title": "Only 150 of Your Facebook Contacts Are Real Friends",
      "URL": "https://www.scientificamerican.com/article/only-150-of-your-facebook-contacts-are-real-friends/",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "p25K",
      "Reduce Width": 1,
      "Number Annotations": 1
    },
    {
      "Item": "E263-FB150Friends-2 (Heatmap)",
      "Parent": "263-SciAm-17-fb150friends",
      "journal": "Scientific American",
      "Title": "Only 150 of Your Facebook Contacts Are Real Friends",
      "URL": "https://www.scientificamerican.com/article/only-150-of-your-facebook-contacts-are-real-friends/",
      "Chart_Type": [
        "Heatmap"
      ],
      "Encodings": [
        "Hue"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤200",
      "Fluid Layout": 1
    },
    {
      "Item": "E264-SolarEclipse-1",
      "Parent": "264-SciAm-17-solareclipse",
      "journal": "Scientific American",
      "Title": "Coming Soon? A Solar Eclipse Near You",
      "URL": "https://www.scientificamerican.com/article/coming-soon-a-solar-eclipse-near-you/",
      "Chart_Type": [
        "Map",
        "Bar"
      ],
      "Encodings": [
        "Geo",
        "Hue"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Map with pan/zoom",
      "Data_Type": [
        "Geospatial",
        "Temporal"
      ],
      "Data_Size": "≤1-5K",
      "Serialize Layout": "Bar and globe"
    },
    {
      "Item": "E265-Inauguration-1",
      "Parent": "265-Add-17-inauguration",
      "journal": "Misc",
      "Title": "INAUGURATE",
      "URL": "http://inauguratespeeches.com/",
      "Chart_Type": [
        "Bar",
        "Heatmap",
        "Line"
      ],
      "Encodings": [
        "Value",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Interactive",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤25K",
      "Reduce Width": 1
    },
    {
      "Item": "E266-Exoplanet-1",
      "Parent": "266-SciAm-17-exoplanet",
      "journal": "Scientific American",
      "Title": "A Visual Guide to the Search for Exoplanets",
      "URL": "https://blogs.scientificamerican.com/sa-visual/a-visual-guide-to-the-search-for-exoplanets/",
      "Chart_Type": [
        "Bubble",
        "Bar"
      ],
      "Encodings": [
        "Hue",
        "Size",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤200",
      "Serialize Layout": "Bar and bubble",
      "Relocate Annotations": 1,
      "Transpose Axes": "Axis for the bar"
    },
    {
      "Item": "E267-ChinaEnergy-1",
      "Parent": "267-SciAm-17-chinaenergy",
      "journal": "Scientific American",
      "Title": "China Takes the Lead on Clean Energy",
      "URL": "https://blogs.scientificamerican.com/sa-visual/china-takes-the-lead-on-clean-energy/",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "Hue",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤1-5K",
      "Transpose Axes": 1,
      "Externalize Labels": 1
    },
    {
      "Item": "E268-Cetaceans-1",
      "Parent": "268-SciAm-17-cetaceans",
      "journal": "Scientific American",
      "Title": "Cetaceans' Big Brains Are Linked to Their Rich Social Life",
      "URL": "https://www.scientificamerican.com/article/cetaceans-rsquo-big-brains-are-linked-to-their-rich-social-life/",
      "Chart_Type": [
        "Bubble"
      ],
      "Encodings": [
        "Diverging",
        "Size",
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Single view",
      "Data_Type": [
        "Numerical"
      ],
      "Data_Size": "≤200",
      "Transpose Axes": "Graph, accordingly in legend",
      "Externalize Annotations": 1
    },
    {
      "Item": "E269-LightCurves-1",
      "Parent": "269-SciAm-17-lightcurves",
      "journal": "Scientific American",
      "Title": "Unexplained Light Curves",
      "URL": "https://blogs.scientificamerican.com/sa-visual/unexplained-light-curves/",
      "Chart_Type": [
        "Line"
      ],
      "Encodings": [
        "X",
        "Y"
      ],
      "Chart_Size": "Medium",
      "Format": "Static",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤1-5K",
      "Relocate Annotations": 1,
      "Serialize Layout": "Two visualization (bottom)"
    },
    {
      "Item": "E270-SleepingScience-1",
      "Parent": "270-SciAm-17-sleepingscience",
      "journal": "Scientific American",
      "Title": "Sleeping Beauties of Science",
      "URL": "https://blogs.scientificamerican.com/sa-visual/sleeping-beauties-of-science/",
      "Chart_Type": [
        "Bubble"
      ],
      "Encodings": [
        "Hue",
        "Size",
        "X",
        "Y"
      ],
      "Chart_Size": "Big",
      "Format": "Static",
      "Format_2": "Multiple views",
      "Data_Type": [
        "Temporal"
      ],
      "Data_Size": "≤25K",
      "Serialize Layout": "Within the legends",
      "Serialize Label-Marks": "Numbers and bubbles",
      "Adjust Ticks": "X axis"
    }
  ]
}

sample.common_keys = ["Order", "Item", "Parent", "journal", "Title", "URL", "Format", "Format_2", "Chart_Type", "Encodings", "Chart_Size", "Data_Type", "Data_Size", "Patterns"]
sample.filter_by_feature = function (feat) {
  let d = sample.data;
  return d.filter(function (el) {
    return el[feat] != undefined;
  });
}
sample.get_bulk_by_key = function (keys) {
  let d = sample.data;
  return d.filter(function (el) {
    return keys.includes(el.Item);
  });
}
sample.get_by_key = function (key) {
  let d = sample.data;
  
  let item = d.filter(function (el) {
    return el.Item == key;
  })[0]
  let patterns = Object.keys(item).filter(function(el) { return !sample.common_keys.includes(el); })
  item.Patterns = patterns.map(function(el) {
    return {
      name: el,
      desc: item[el]
    };
  }) ;
  return item;
}
sample.get_filtered_data = function (fq) {
  if (fq){
    let d = sample.data;
    let fc = Object.keys(fq);
    let fd = d.filter(function (el) {
      for (let i = 0; i < fc.length; i++) {
        if (fq[fc[i]].length > 0){
          if (!fq[fc[i]].union(el[fc[i]])) return false;
        }
      }
      return true;
    })
    return fd;
  } 
  return sample.data;
}