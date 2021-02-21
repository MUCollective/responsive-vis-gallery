let pattern_def = {
  data: [
    {
      "Name": "Toggle Fields",
      "Definition": "Enable users to select data fields to be shown on small screen, while those data fields are fully visible on large screen.",
      "Target": "Data-Field",
      "Target1": "Data",
      "Target2": "Field",
      "Action": "Compensate-Toggle",
      "Action1": "Compensate",
      "Action2": "Toggle"
    },
    {
      "Name": "Remove Fields",
      "Definition": "Remove one or more data fields. This requires further changes in encoding.",
      "Target": "Data-Field",
      "Target1": "Data",
      "Target2": "Field",
      "Action": "Recompose-Remove",
      "Action1": "Recompose",
      "Action2": "Remove"
    },
    {
      "Name": "Aggregate",
      "Definition": "Aggregate data points to a hierarchically higher level by means of aggregate function, such as average, count, or sum. For example, daily temperature data can be aggregated into monthly average temperature.",
      "Target": "Data-Level",
      "Target1": "Data",
      "Target2": "Level",
      "Action": "Recompose-Aggregate",
      "Action1": "Recompose",
      "Action2": "Aggregate"
    },
    {
      "Name": "Regroup Data",
      "Definition": "Transform a categorical variable into smaller levels often by merging several levels into one level.",
      "Target": "Data-Level",
      "Target1": "Data",
      "Target2": "Level",
      "Action": "Recompose-Aggregate",
      "Action1": "Recompose",
      "Action2": "Aggregate"
    },
    {
      "Name": "Increase Bin Size",
      "Definition": "Increase the bin size of a continuous variable.",
      "Target": "Data-Level",
      "Target1": "Data",
      "Target2": "Level",
      "Action": "Recompose-Aggregate",
      "Action1": "Recompose",
      "Action2": "Aggregate"
    },
    {
      "Name": "Remove Records",
      "Definition": "Remove some data records.",
      "Target": "Data-Record",
      "Target1": "Data",
      "Target2": "Record",
      "Action": "Recompose-Remove",
      "Action1": "Recompose",
      "Action2": "Remove"
    },
    {
      "Name": "Remove Encoding",
      "Definition": "Remove an encoding channel.",
      "Target": "Encoding-Channel",
      "Target1": "Encoding",
      "Target2": "Channel",
      "Action": "Recompose-Remove",
      "Action1": "Recompose",
      "Action2": "Remove"
    },
    {
      "Name": "Add Encoding",
      "Definition": "Add an encoding channel. This may introduce new marks.",
      "Target": "Encoding-Channel",
      "Target1": "Encoding",
      "Target2": "Channel",
      "Action": "Recompose-Add",
      "Action1": "Recompose",
      "Action2": "Add"
    },
    {
      "Name": "Change Encoding",
      "Definition": "Change an encoding channel, e.g., from vertical position to color value.",
      "Target": "Encoding-Channel",
      "Target1": "Encoding",
      "Target2": "Channel",
      "Action": "Recompose-Replace",
      "Action1": "Recompose",
      "Action2": "Replace"
    },
    {
      "Name": "Change Measurements",
      "Definition": "Change the mapping of an encoding channel. For example, the range of encdoing (i.e., visual variable) may be changed, e.g., from value to rank. This is separated from whether to maintain the encoding channel.",
      "Target": "Data-Field",
      "Target1": "Data",
      "Target2": "Field",
      "Action": "Recompose-Replace",
      "Action1": "Recompose",
      "Action2": "Replace"
    },
    {
      "Name": "Transpose Axes",
      "Definition": "Exchange X- and Y-axes. This is a special case of changing encoding.",
      "Target": "Encoding-Channel",
      "Target1": "Encoding",
      "Target2": "Encoding",
      "Action": "Transpose-Axis Transpose",
      "Action1": "Transpose",
      "Action2": "Axis-Transpose"
    },
    {
      "Name": "Disable Hover Interactions",
      "Definition": "Remove hover interactions that often allow instant checking of currently interested data points.",
      "Target": "Interaction-Feature",
      "Target1": "Interaction",
      "Target2": "Feature",
      "Action": "Recompose-Remove",
      "Action1": "Recompose",
      "Action2": "Remove"
    },
    {
      "Name": "Disable X",
      "Definition": "Remove an interaction feature X (e.g., search, hypothesis).",
      "Target": "Interaction-Feature",
      "Target1": "Interaction",
      "Target2": "Feature",
      "Action": "Recompose-Remove",
      "Action1": "Recompose",
      "Action2": "Remove"
    },
    {
      "Name": "Add GPS",
      "Definition": "Add a GPS interaction which receives geolocation as input.",
      "Target": "Interaction-Feature",
      "Target1": "Interaction",
      "Target2": "Feature",
      "Action": "Recompose-Add",
      "Action1": "Recompose",
      "Action2": "Add"
    },
    {
      "Name": "Remove Feedback",
      "Definition": "Remove a feedback (outcome) of an interaction when there are two or more feedbacks appear.",
      "Target": "Interaction-Feedback",
      "Target1": "Interaction",
      "Target2": "Feedback",
      "Action": "Recompose-Remove",
      "Action1": "Recompose",
      "Action2": "Remove"
    },
    {
      "Name": "Fix Tooltip Position",
      "Definition": "Fix the position of a tooltip with regard to the screen space. Tooltips are often fixed at the bottom of the screen.",
      "Target": "Interaction-Feedback",
      "Target1": "Interaction",
      "Target2": "Feedback",
      "Action": "Reposition-Fix",
      "Action1": "Reposition",
      "Action2": "Fix"
    },
    {
      "Name": "Change Feedback",
      "Definition": "Change a feedback (outcome) of an interaction feature",
      "Target": "Interaction-Feedback",
      "Target1": "Interaction",
      "Target2": "Feedback",
      "Action": "Recompose-Replace",
      "Action1": "Recompose",
      "Action2": "Replace"
    },
    {
      "Name": "Remove Trigger",
      "Definition": "Remove a trigger of an interaction feature, while remaining the feature itself. This is applicable when an interaction feature receives input through two or more triggers.",
      "Target": "Interaction-Trigger",
      "Target1": "Interaction",
      "Target2": "Trigger",
      "Action": "Recompose-Remove",
      "Action1": "Recompose",
      "Action2": "Remove"
    },
    {
      "Name": "Change Trigger",
      "Definition": "Change a trigger of an interaction feature.",
      "Target": "Interaction-Trigger",
      "Target1": "Interaction",
      "Target2": "Trigger",
      "Action": "Recompose-Replace",
      "Action1": "Recompose",
      "Action2": "Replace"
    },
    {
      "Name": "Number Annotations",
      "Definition": "Replace all/some of text annotations for some part of the visualization with number while moving those annotations from its inside to out of it.",
      "Target": "Narrative-Annotation/Emphases",
      "Target1": "Narrative",
      "Target2": "Annotation/Emphases",
      "Action": "Compensate-Number",
      "Action1": "Compensate",
      "Action2": "Number"
    },
    {
      "Name": "Toggle Annotations",
      "Definition": "To hide annotation text for important parts and allow readers to toggle them.",
      "Target": "Narrative-Annotation/Emphases",
      "Target1": "Narrative",
      "Target2": "Annotation/Emphases",
      "Action": "Compensate-Toggle",
      "Action1": "Compensate",
      "Action2": "Toggle"
    },
    {
      "Name": "Shorten Annotations",
      "Definition": "Remvoe some part of annotations, not annotation itself.",
      "Target": "Narrative-Annotation/Emphases",
      "Target1": "Narrative",
      "Target2": "Annotation/Emphases",
      "Action": "Rescale-Rescale",
      "Action1": "Rescale",
      "Action2": "-"
    },
    {
      "Name": "Remove Annotations",
      "Definition": "Remove some/all of annotations for important points, ranges, or areas in the visualization. If those annotations points are accompanied with emphasis marks, those emphases do not have to be removed together, but some of them can be remained in some other area in/out of the visualization.",
      "Target": "Narrative-Annotation/Emphases",
      "Target1": "Narrative",
      "Target2": "Annotation/Emphases",
      "Action": "Recompose-Remove",
      "Action1": "Recompose",
      "Action2": "Remove"
    },
    {
      "Name": "Remove Emphases",
      "Definition": "Remove all/some of emphasis marks for important points, ranges, or areas in the visualization. If those emphases are accompanied with text annotations, those annotations do not have to be removed together, but some of them can be remained in some other area in/out of the visualization.",
      "Target": "Narrative-Annotation/Emphases",
      "Target1": "Narrative",
      "Target2": "Annotation/Emphases",
      "Action": "Recompose-Remove",
      "Action1": "Recompose",
      "Action2": "Remove"
    },
    {
      "Name": "Add Callout Line",
      "Definition": "Add a callout line that connects some range/point of data to an annotations, which is often caused by moving annotations",
      "Target": "Narrative-Annotation/Emphases",
      "Target1": "Narrative",
      "Target2": "Annotation/Emphases",
      "Action": "Recompose-Add",
      "Action1": "Recompose",
      "Action2": "Add"
    },
    {
      "Name": "Externalize Annotations",
      "Definition": "Move all/some of text annotations for some part of the visualization from its inside to out of it.",
      "Target": "Narrative-Annotation/Emphases",
      "Target1": "Narrative",
      "Target2": "Annotation/Emphases",
      "Action": "Reposition-Externalize",
      "Action1": "Reposition",
      "Action2": "Externalize"
    },
    {
      "Name": "Relocate Annotations",
      "Definition": "Move all/some of annotations (text messages attacted to some part of the data), where the target and source of movement cannot be formalized.",
      "Target": "Narrative-Annotation/Emphases",
      "Target1": "Narrative",
      "Target2": "Annotation/Emphases",
      "Action": "Reposition-Relocate",
      "Action1": "Reposition",
      "Action2": "Relocate"
    },
    {
      "Name": "Change Annotations",
      "Definition": "Change the content of annotations",
      "Target": "Narrative-Annotation/Emphases",
      "Target1": "Narrative",
      "Target2": "Annotation/Emphases",
      "Action": "Recompose-Replace",
      "Action1": "Recompose",
      "Action2": "Replace"
    },
    {
      "Name": "Remove Panels/States",
      "Definition": "Remove one or more panels (static facets)/states (interactive scenes) when the visualization contains multiple of them.",
      "Target": "Narrative-Sequencing",
      "Target1": "Narrative",
      "Target2": "Sequencing",
      "Action": "Recompose-Remove",
      "Action1": "Recompose",
      "Action2": "Remove"
    },
    {
      "Name": "Split States into Panels",
      "Definition": "When a visualization is explorable (e.g. interactive slideshow, a time slider, zooming, panning) in the large screen version, replace it with several prominent static panels.",
      "Target": "Narrative-Sequencing",
      "Target1": "Narrative",
      "Target2": "Sequencing",
      "Action": "Reposition-Fix",
      "Action1": "Reposition",
      "Action2": "Fix"
    },
    {
      "Name": "Remove Transition Animation",
      "Definition": "Remove a transition animation between scenes.",
      "Target": "Narrative-Sequencing",
      "Target1": "Narrative",
      "Target2": "Sequencing",
      "Action": "Recompose-Remove",
      "Action1": "Recompose",
      "Action2": "Remove"
    },
    {
      "Name": "Overlay Text",
      "Definition": "Place the text message above or below the scene when a scene and the related text message are placed horizontally next to each other.",
      "Target": "References/Layout-Layout",
      "Target1": "References/Layout",
      "Target2": "Layout",
      "Action": "Transpose-Serialize",
      "Action1": "Transpose",
      "Action2": "Serialize"
    },
    {
      "Name": "Sequentialize Visualization-Text",
      "Definition": "Interactively rearrange the text message over the visualization to be visited one by one, when a visualization and the related text message are placed horizontally next to each other.",
      "Target": "References/Layout-Layout",
      "Target1": "References/Layout",
      "Target2": "Layout",
      "Action": "Transpose-Serialize",
      "Action1": "Transpose",
      "Action2": "Serialize"
    },
    {
      "Name": "Reduce Text",
      "Definition": "Reducing some part of text messages for a visualization while maintaining key ideas.",
      "Target": "Narrative-Text",
      "Target1": "Narrative",
      "Target2": "Text",
      "Action": "Rescale-Rescale",
      "Action1": "Rescale",
      "Action2": "-"
    },
    {
      "Name": "Remove Text",
      "Definition": "Removing text description for a visualization at all.",
      "Target": "Narrative-Text",
      "Target1": "Narrative",
      "Target2": "Text",
      "Action": "Recompose-Remove",
      "Action1": "Recompose",
      "Action2": "Remove"
    },
    {
      "Name": "Add Text",
      "Definition": "Add a paragraph that describes a visualization.",
      "Target": "Narrative-Text",
      "Target1": "Narrative",
      "Target2": "Text",
      "Action": "Recompose-Add",
      "Action1": "Recompose",
      "Action2": "Add"
    },
    {
      "Name": "Unhide Text",
      "Definition": "Show text messages constantly on small screen, when they are visible only interactively on large screen. ",
      "Target": "Narrative-Text",
      "Target1": "Narrative",
      "Target2": "Text",
      "Action": "Reposition-Fix",
      "Action1": "Reposition",
      "Action2": "Fix"
    },
    {
      "Name": "Toggle Labels",
      "Definition": "Enable users to choose whether to show labels, while the labels are constantly visible on large screen.",
      "Target": "References/Layout-Labels",
      "Target1": "References/Layout",
      "Target2": "Labels",
      "Action": "Compensate-Toggle",
      "Action1": "Compensate",
      "Action2": "Toggle"
    },
    {
      "Name": "Simplify Labels",
      "Definition": "Reduce the length of labels by means of abbreviation or deleting some part of the label format.",
      "Target": "References/Layout-Labels",
      "Target1": "References/Layout",
      "Target2": "Labels",
      "Action": "Rescale-Rescale",
      "Action1": "Rescale",
      "Action2": "-"
    },
    {
      "Name": "Adjust Tick Labels",
      "Definition": "Remove some tick labels systematically, not always caused by adjusting ticks.",
      "Target": "References/Layout-Labels",
      "Target1": "References/Layout",
      "Target2": "Labels",
      "Action": "Rescale-Rescale",
      "Action1": "Rescale",
      "Action2": "-"
    },
    {
      "Name": "Remove Labels",
      "Definition": "Remove labels for marks or other elements.",
      "Target": "References/Layout-Labels",
      "Target1": "References/Layout",
      "Target2": "Labels",
      "Action": "Recompose-Remove",
      "Action1": "Recompose",
      "Action2": "Remove"
    },
    {
      "Name": "Add Labels",
      "Definition": "Add labels for marks or other elements.",
      "Target": "References/Layout-Labels",
      "Target1": "References/Layout",
      "Target2": "Labels",
      "Action": "Recompose-Add",
      "Action1": "Recompose",
      "Action2": "Add"
    },
    {
      "Name": "Elaborate Labels",
      "Definition": "Make label text longer because related layout changes allows space or labels can no longer appear systematically.",
      "Target": "References/Layout-Labels",
      "Target1": "References/Layout",
      "Target2": "Labels",
      "Action": "Rescale-Rescale",
      "Action1": "Rescale",
      "Action2": "-"
    },
    {
      "Name": "Externalize Labels",
      "Definition": "Move labels out of the visualization.",
      "Target": "References/Layout-Labels",
      "Target1": "References/Layout",
      "Target2": "Labels",
      "Action": "Reposition-Externalize",
      "Action1": "Reposition",
      "Action2": "Externalize"
    },
    {
      "Name": "Incorporate Labels",
      "Definition": "Move labels into the visualization or the corresponding marks.",
      "Target": "References/Layout-Labels",
      "Target1": "References/Layout",
      "Target2": "Labels",
      "Action": "Reposition-Internalize",
      "Action1": "Reposition",
      "Action2": "Internalize"
    },
    {
      "Name": "Move Labels",
      "Definition": "Move labels irregularly",
      "Target": "References/Layout-Labels",
      "Target1": "References/Layout",
      "Target2": "Labels",
      "Action": "Reposition-Relocate",
      "Action1": "Reposition",
      "Action2": "Relocate"
    },
    {
      "Name": "Dissociate Labels-Marks",
      "Definition": "Make the relationship between labels and marks less visible.",
      "Target": "References/Layout-Labels",
      "Target1": "References/Layout",
      "Target2": "Labels",
      "Action": "Reposition-Externalize",
      "Action1": "Reposition",
      "Action2": "Externalize"
    },
    {
      "Name": "Toggle Interaction Widget",
      "Definition": "Let an interaction widget (a set/bundle of interaction features) toggled.",
      "Target": "References/Layout-Layout",
      "Target1": "References/Layout",
      "Target2": "Layout",
      "Action": "Compensate-Toggle",
      "Action1": "Compensate",
      "Action2": "Toggle"
    },
    {
      "Name": "Release Interaction Widget",
      "Definition": "Remove the layout of an interaction widget (a set/bundle of interaction features), by placing the component interaction features at different positions.",
      "Target": "References/Layout-Layout",
      "Target1": "References/Layout",
      "Target2": "Layout",
      "Action": "Recompose-Remove",
      "Action1": "Recompose",
      "Action2": "Remove"
    },
    {
      "Name": "Externalize Legends",
      "Definition": "Move legends out of the visualization when they are attached to data marks on large screen.",
      "Target": "References/Layout-Layout",
      "Target1": "References/Layout",
      "Target2": "Layout",
      "Action": "Reposition-Externalize",
      "Action1": "Reposition",
      "Action2": "Externalize"
    },
    {
      "Name": "Freeze Interaction Widget",
      "Definition": "Make an interaction widget (a set/bundle of interaction features) fixed at some part of the screen.",
      "Target": "References/Layout-Layout",
      "Target1": "References/Layout",
      "Target2": "Layout",
      "Action": "Reposition-Fix",
      "Action1": "Reposition",
      "Action2": "Fix"
    },
    {
      "Name": "Fluid Layout",
      "Definition": "Let the position of elements adjustable by screen width.",
      "Target": "References/Layout-Layout",
      "Target1": "References/Layout",
      "Target2": "Layout",
      "Action": "Reposition-Fluid",
      "Action1": "Reposition",
      "Action2": "Fluid"
    },
    {
      "Name": "Fluid Small Multiples",
      "Definition": "Let the position of small multiples adjustable by screen width.",
      "Target": "References/Layout-Layout",
      "Target1": "References/Layout",
      "Target2": "Layout",
      "Action": "Reposition-Fluid",
      "Action1": "Reposition",
      "Action2": "Fluid"
    },
    {
      "Name": "Unfreeze Interaction Widget",
      "Definition": "Make an interaction widget (a set/bundle of interaction features) not fixed.",
      "Target": "References/Layout-Layout",
      "Target1": "References/Layout",
      "Target2": "Layout",
      "Action": "Reposition-Fluid",
      "Action1": "Reposition",
      "Action2": "Fluid"
    },
    {
      "Name": "Internalize Legends",
      "Definition": "Move legends into the visualization. This does not necessarily associate legends to marks.",
      "Target": "References/Layout-Layout",
      "Target1": "References/Layout",
      "Target2": "Layout",
      "Action": "Reposition-Internalize",
      "Action1": "Reposition",
      "Action2": "Internalize"
    },
    {
      "Name": "Move Marks",
      "Definition": "Move non-position encoded marks irregularly. For example, moving non-mainland part (e.g., Hawaii of US) of a map or a cartogram.",
      "Target": "References/Layout-Layout",
      "Target1": "References/Layout",
      "Target2": "Layout",
      "Action": "Reposition-Relocate",
      "Action1": "Reposition",
      "Action2": "Relocate"
    },
    {
      "Name": "Parallelize Labels",
      "Definition": "Place labels horizontally next to the corresponding target.",
      "Target": "References/Layout-Layout",
      "Target1": "References/Layout",
      "Target2": "Layout",
      "Action": "Transpose-Parallelize",
      "Action1": "Transpose",
      "Action2": "Parallelize"
    },
    {
      "Name": "Parallelize Legends",
      "Definition": "Place legends horizontally next to the corresponding visalization.",
      "Target": "References/Layout-Layout",
      "Target1": "References/Layout",
      "Target2": "Layout",
      "Action": "Transpose-Parallelize",
      "Action1": "Transpose",
      "Action2": "Parallelize"
    },
    {
      "Name": "Serialize Layout",
      "Definition": "Place element (not marks) vertically, while they are horizontally next to each other on large screen.",
      "Target": "References/Layout-Layout",
      "Target1": "References/Layout",
      "Target2": "Layout",
      "Action": "Transpose-Serialize",
      "Action1": "Transpose",
      "Action2": "Serialize"
    },
    {
      "Name": "Serialize Label-Marks",
      "Definition": "Place labels and marks vertically, while they are horizontally next to each other on large screen.",
      "Target": "References/Layout-Layout",
      "Target1": "References/Layout",
      "Target2": "Layout",
      "Action": "Transpose-Serialize",
      "Action1": "Transpose",
      "Action2": "Serialize"
    },
    {
      "Name": "Serialize Marks",
      "Definition": "Place marks in a horizontal order while they are in a vertical order on large screen. ",
      "Target": "References/Layout-Layout",
      "Target1": "References/Layout",
      "Target2": "Layout",
      "Action": "Transpose-Serialize",
      "Action1": "Transpose",
      "Action2": "Serialize"
    },
    {
      "Name": "Transpose Interaction Widget",
      "Definition": "When an interaction widget  (a set/bundle of interaction features) has X- and Y-axes, exchange those axes.",
      "Target": "References/Layout-Layout",
      "Target1": "References/Layout",
      "Target2": "Layout",
      "Action": "Transpose-Axis Transpose",
      "Action1": "Transpose",
      "Action2": "Axis-Transpose"
    },
    {
      "Name": "Toggle Legends",
      "Definition": "Enable legends to be toggled.",
      "Target": "References/Layout-References",
      "Target1": "References/Layout",
      "Target2": "References",
      "Action": "Compensate-Toggle",
      "Action1": "Compensate",
      "Action2": "Toggle"
    },
    {
      "Name": "Adjust Ticks",
      "Definition": "Remove some ticks systematically.",
      "Target": "References/Layout-References",
      "Target1": "References/Layout",
      "Target2": "References",
      "Action": "Rescale-Rescale",
      "Action1": "Rescale",
      "Action2": "-"
    },
    {
      "Name": "Simplify Legends",
      "Definition": "When legends has information or decorations, remove them.",
      "Target": "References/Layout-References",
      "Target1": "References/Layout",
      "Target2": "References",
      "Action": "Rescale-Rescale",
      "Action1": "Rescale",
      "Action2": "-"
    },
    {
      "Name": "Remove Legends",
      "Definition": "Remove legends of a visualization.",
      "Target": "References/Layout-References",
      "Target1": "References/Layout",
      "Target2": "References",
      "Action": "Recompose-Remove",
      "Action1": "Recompose",
      "Action2": "Remove"
    },
    {
      "Name": "Remove Axis",
      "Definition": "Remove an axis mark of the visualization. This is not removal of a position encoding.",
      "Target": "References/Layout-References",
      "Target1": "References/Layout",
      "Target2": "References",
      "Action": "Recompose-Remove",
      "Action1": "Recompose",
      "Action2": "Remove"
    },
    {
      "Name": "Remove Context",
      "Definition": "Remove a context view of a visualization.",
      "Target": "References/Layout-References",
      "Target1": "References/Layout",
      "Target2": "References",
      "Action": "Recompose-Remove",
      "Action1": "Recompose",
      "Action2": "Remove"
    },
    {
      "Name": "Add Legends",
      "Definition": "Add legends for a visualization.",
      "Target": "References/Layout-References",
      "Target1": "References/Layout",
      "Target2": "References",
      "Action": "Recompose-Add",
      "Action1": "Recompose",
      "Action2": "Add"
    },
    {
      "Name": "Add Context",
      "Definition": "Add a context view for a visualization.",
      "Target": "References/Layout-References",
      "Target1": "References/Layout",
      "Target2": "References",
      "Action": "Recompose-Add",
      "Action1": "Recompose",
      "Action2": "Add"
    },
    {
      "Name": "Add Redundant References",
      "Definition": "Add redundant marks for references when relevant information is already available.",
      "Target": "References/Layout-References",
      "Target1": "References/Layout",
      "Target2": "References",
      "Action": "Recompose-Add",
      "Action1": "Recompose",
      "Action2": "Add"
    },
    {
      "Name": "Add Axis",
      "Definition": "Add an axis to a visualization.",
      "Target": "References/Layout-References",
      "Target1": "References/Layout",
      "Target2": "References",
      "Action": "Recompose-Add",
      "Action1": "Recompose",
      "Action2": "Add"
    },
    {
      "Name": "Reduce Width",
      "Definition": "Change the aspect ratio a visualization to be narrower.",
      "Target": "References/Layout-Size",
      "Target1": "References/Layout",
      "Target2": "Size",
      "Action": "Rescale-Rescale",
      "Action1": "Rescale",
      "Action2": "-"
    },
    {
      "Name": "Reduce Explorable Area",
      "Definition": "Reduce the explorable area (an area that is shown at a time) of a visualization.",
      "Target": "References/Layout-Size",
      "Target1": "References/Layout",
      "Target2": "Size",
      "Action": "Rescale-Rescale",
      "Action1": "Rescale",
      "Action2": "-"
    },
    {
      "Name": "Reduce Height",
      "Definition": "Change the aspect ratio a visualization to be wider.",
      "Target": "References/Layout-Size",
      "Target1": "References/Layout",
      "Target2": "Size",
      "Action": "Rescale-Rescale",
      "Action1": "Rescale",
      "Action2": "-"
    },
    {
      "Name": "Expand Explorable Area",
      "Definition": "Increase the explorable area (an area that is shown at a time) of a visualization.",
      "Target": "References/Layout-Size",
      "Target1": "References/Layout",
      "Target2": "Size",
      "Action": "Rescale-Rescale",
      "Action1": "Rescale",
      "Action2": "-"
    }
  ],
  vis_action2_orders: [
    'Remove', 'Add', 'Replace', 'Aggregate',
    'Rescale',
    'Serialize', 'Parallelize', 'Axis Transpose',
    'Externalize', 'Internalize', 'Fix', 'Fluid', 'Relocate',
    'Toggle', 'Number'
  ]
}
pattern_def.filtered_list = function (key, value) {
  let d = pattern_def.data;
  return d.filter(function (el) { return el[key] == value })
    .sort(function (a, b) {
      return pattern_def.vis_action2_orders.indexOf(a.Action2) > pattern_def.vis_action2_orders.indexOf(b.Action2)
    });
}

pattern_def.filter_pattern = function(pname) {
  return pattern_def.data.filter(function(el) {
    if (el.Name === pname) return true;
  })[0];
}

pattern_def.data.forEach(function (e) {
  e["Image"] = "patterns/" + e["Name"].toLowerCase().split(" ").join("-").replace("/","-") + ".png";
})

let by_target = [];
let targets = ['Data-Record', 'Data-Field', 'Data-Level', 'Encoding-Channel', 'Interaction-Feature', 'Interaction-Trigger', 'Interaction-Feedback', 'Narrative-Sequencing', 'Narrative-Annotation/Emphases', 'Narrative-Text', 'References/Layout-Labels', 'References/Layout-References', 'References/Layout-Layout', 'References/Layout-Size'];
for (let i = 0; i < targets.length; i++) {
  let temp = {keyword: targets[i]};
  temp['number'] = i;
  temp['data'] = pattern_def.filtered_list('Target', targets[i]);
  by_target.push(temp);
}

