//////////////////////////////////////////////////////////////
//////////////////////// Set-Up //////////////////////////////
//////////////////////////////////////////////////////////////

var margin = {top: 40, right: 20, bottom: 80, left: 20},
	width = Math.min(document.getElementById("radarChartDetail").clientWidth, window.innerWidth - 10) - margin.left - margin.right,
	height = Math.min(width, 550 - margin.top - margin.bottom - 20);

var marginIndividual = {top: 10, right: 10, bottom: 10, left: 10};

//////////////////////////////////////////////////////////////
////////////////////////// Data //////////////////////////////
//////////////////////////////////////////////////////////////

var dataOverall = [
			[//Scotland 2016
				{axis:"Any gambling",value:0.662},
				{axis:"Any non-national lottery gambling",value:0.491},
				{axis:"No gambling in 12 months",value:0.338},
				{axis:"National lottery",value:0.511},
				{axis:"Scratchcards",value:0.235},
				{axis:"Other lotteries",value:0.182}
			],[//England 2016
				{axis:"Any gambling",value:0.61},
				{axis:"Any non-national lottery gambling",value:0.46},
				{axis:"No gambling in 12 months",value:0.39},
				{axis:"National lottery",value:0.45},
				{axis:"Scratchcards",value:0.21},
				{axis:"Other lotteries",value:0.14}
			],[///Wales 2016
				{axis:"Any gambling",value:0.547},
				{axis:"Any non-national lottery gambling",value:0.404},
				{axis:"No gambling in 12 months",value:0.453},
				{axis:"National lottery",value:0.414},
				{axis:"Scratchcards",value:0.245},
				{axis:"Other lotteries",value:0.145}
			]
		];

		var dataDetail = [
					[//Scotland 2016
						{axis:"Football pools",value:0.051},
						{axis:"Offline bingo",value:0.074},
						{axis:"Slot machines",value:0.081},
						{axis:"Machines in bookmakers",value:0.037},
						{axis:"Casino tables",value:0.034},
						{axis:"Poker played in club or pub",value:0.013},
						{axis:"Online slots, casinos, or bingo",value:0.039},
						{axis:"Online betting with bookmaker",value:0.098},
						{axis:"Betting exchange",value:0.009},
						{axis:"Horse races (offline)",value:0.115},
						{axis:"Dog races (offline)",value:0.018},
						{axis:"Sport events (offline)",value:0.073},
						{axis:"Other events (offline)",value:0.022},
						{axis:"Spread-betting",value:0.006},
						{axis:"Private betting",value:0.033},
						{axis:"Any other gambling",value:0.013}
					],[//England 2016
						{axis:"Football pools",value:0.04},
						{axis:"Offline bingo",value:0.03},
						{axis:"Slot machines",value:0.08},
						{axis:"Machines in bookmakers",value:0.05},
						{axis:"Casino tables",value:0.05},
						{axis:"Poker played in club or pub",value:0.02},
						{axis:"Online slots, casinos, or bingo",value:0.04},
						{axis:"Online betting with bookmaker",value:0.13},
						{axis:"Betting exchange",value:0.02},
						{axis:"Horse races (offline)",value:0.12},
						{axis:"Dog races (offline)",value:0.03},
						{axis:"Sport events (offline)",value:0.09},
						{axis:"Other events (offline)",value:0.02},
						{axis:"Spread-betting",value:0.01},
						{axis:"Private betting",value:0.06},
						{axis:"Any other gambling",value:0.02}
					],[///Wales 2016
						{axis:"Football pools",value:0.023},
						{axis:"Offline bingo",value:0.064},
						{axis:"Slot machines",value:0.047},
						{axis:"Machines in bookmakers",value:0.022},
						{axis:"Casino tables",value:0.022},
						{axis:"Poker played in club or pub",value:0.01},
						{axis:"Online slots, casinos, or bingo",value:0.024},
						{axis:"Online betting with bookmaker",value:0.044},
						{axis:"Betting exchange",value:0.006},
						{axis:"Horse races (offline)",value:0.083},
						{axis:"Dog races (offline)",value:0.013},
						{axis:"Sport events (offline)",value:0.042},
						{axis:"Other events (offline)",value:0.013},
						{axis:"Spread-betting",value:0.006},
						{axis:"Private betting",value:0.026},
						{axis:"Any other gambling",value:0.011}
					]
				];

				var dataEngland =  [//England 2016
					[{axis:"Football pools",value:0.04},
					{axis:"Offline bingo",value:0.03},
					{axis:"Slot machines",value:0.08},
					{axis:"Machines in bookmakers",value:0.05},
					{axis:"Casino tables",value:0.05},
					{axis:"Poker played in club or pub",value:0.02},
					{axis:"Online slots, casinos, or bingo",value:0.04},
					{axis:"Online betting with bookmaker",value:0.13},
					{axis:"Betting exchange",value:0.02},
					{axis:"Horse races (offline)",value:0.12},
					{axis:"Dog races (offline)",value:0.03},
					{axis:"Sport events (offline)",value:0.09},
					{axis:"Other events (offline)",value:0.02},
					{axis:"Spread-betting",value:0.01},
					{axis:"Private betting",value:0.06},
					{axis:"Any other gambling",value:0.02}]
				];

				var dataScotland = [
					[
						{axis:"Football pools",value:0.051},
						{axis:"Offline bingo",value:0.074},
						{axis:"Slot machines",value:0.081},
						{axis:"Machines in bookmakers",value:0.037},
						{axis:"Casino tables",value:0.034},
						{axis:"Poker played in club or pub",value:0.013},
						{axis:"Online slots, casinos, or bingo",value:0.039},
						{axis:"Online betting with bookmaker",value:0.098},
						{axis:"Betting exchange",value:0.009},
						{axis:"Horse races (offline)",value:0.115},
						{axis:"Dog races (offline)",value:0.018},
						{axis:"Sport events (offline)",value:0.073},
						{axis:"Other events (offline)",value:0.022},
						{axis:"Spread-betting",value:0.006},
						{axis:"Private betting",value:0.033},
						{axis:"Any other gambling",value:0.013}
					]
				];

				var dataWales = [
					[
						{axis:"Football pools",value:0.023},
						{axis:"Offline bingo",value:0.064},
						{axis:"Slot machines",value:0.047},
						{axis:"Machines in bookmakers",value:0.022},
						{axis:"Casino tables",value:0.022},
						{axis:"Poker played in club or pub",value:0.01},
						{axis:"Online slots, casinos, or bingo",value:0.024},
						{axis:"Online betting with bookmaker",value:0.044},
						{axis:"Betting exchange",value:0.006},
						{axis:"Horse races (offline)",value:0.083},
						{axis:"Dog races (offline)",value:0.013},
						{axis:"Sport events (offline)",value:0.042},
						{axis:"Other events (offline)",value:0.013},
						{axis:"Spread-betting",value:0.006},
						{axis:"Private betting",value:0.026},
						{axis:"Any other gambling",value:0.011}
					]
				]

//////////////////////////////////////////////////////////////
//////////////////// Draw the Chart //////////////////////////
//////////////////////////////////////////////////////////////

var color = d3.scaleOrdinal()
	.range(["#2DAEFF","#CF091F","#00AC36"]);

var colorEngland = d3.scaleOrdinal()
	.range(["#CF091F"]);

var colorScotland = d3.scaleOrdinal()
		.range(["#2DAEFF"]);

var colorWales = d3.scaleOrdinal()
		.range(["#00AC36"]);

var radarChartOptions = {
	w: width,
	h: height - 120,
	margin: margin,
	maxValue: 0,
	levels: 5,
	roundStrokes: true,
	color: color
};

var radarChartOptionsEngland = {
	w: document.getElementById("radarChartEngland").clientWith,
	h: 200,
	margin: marginIndividual,
	maxValue: 0,
	levels: 5,
	roundStrokes: true,
	color: colorEngland
};

var radarChartOptionsScotland = {
	w: document.getElementById("radarChartScotland").clientWith,
	h: 200,
	margin: marginIndividual,
	maxValue: 0,
	levels: 5,
	roundStrokes: true,
	color: colorScotland
};

var radarChartOptionsWales = {
	w: document.getElementById("radarChartWales").clientWith,
	h: 200,
	margin: marginIndividual,
	maxValue: 0,
	levels: 5,
	roundStrokes: true,
	color: colorWales
};
//Call function to draw the Radar chart
RadarChart("#radarChartDetail", dataDetail, radarChartOptions, true);
RadarChart("#radarChartEngland", dataEngland, radarChartOptionsEngland, false);
RadarChart("#radarChartScotland", dataScotland, radarChartOptionsScotland, false);
RadarChart("#radarChartWales", dataWales, radarChartOptionsWales, false);

function RadarChart(id, data, options, labels) {
	var cfg = {
	 w: 600,				//Width of the circle
	 h: 600,				//Height of the circle
	 margin: {top: 20, right: 20, bottom: 20, left: 20}, //The margins of the SVG
	 levels: 3,				//How many levels or inner circles should there be drawn
	 maxValue: 0.0, 			//What is the value that the biggest circle will represent
	 labelFactor: 1.25, 	//How much farther than the radius of the outer circle should the labels be placed
	 wrapWidth: 60, 		//The number of pixels after which a label needs to be given a new line
	 opacityArea: 0.10, 	//The opacity of the area of the blob
	 dotRadius: 4, 			//The size of the colored circles of each blog
	 opacityCircles: 0.1, 	//The opacity of the circles of each blob
	 strokeWidth: 2, 		//The width of the stroke around each blob
	 roundStrokes: false,	//If true the area and stroke will follow a round path (cardinal-closed)
	 color: d3.scaleOrdinal(d3.schemeCategory10)	//Color function
	};

	//Put all of the options into a variable called cfg
	if('undefined' !== typeof options){
	  for(var i in options){
		if('undefined' !== typeof options[i]){ cfg[i] = options[i]; }
	  }//for i
	}//if

	//If the supplied maxValue is smaller than the actual one, replace by the max in the data
	//var maxValue = Math.max(cfg.maxValue, d3.max(data, function(i){return d3.max(i.map(function(o){return o.value;}))}));
	var maxValue = 0.13;

	var allAxis = (data[0].map(function(i, j){return i.axis})),	//Names of each axis
		total = allAxis.length,					//The number of different axes
		radius = Math.min(cfg.w/2, cfg.h/2), 	//Radius of the outermost circle
		Format = d3.format('%'),			 	//Percentage formatting
		angleSlice = Math.PI * 2 / total;		//The width in radians of each "slice"

	//Scale for the radius
	var rScale = d3.scaleLinear()
		.range([0, radius])
		.domain([0, maxValue]);

	/////////////////////////////////////////////////////////
	//////////// Create the container SVG and g /////////////
	/////////////////////////////////////////////////////////

	//Remove whatever chart with the same id/class was present before
	//d3.select(id).select("svg").remove();

	//Initiate the radar chart SVG
	var svg = d3.select(id).append("svg")
			.attr("width",  cfg.w + cfg.margin.left + cfg.margin.right)
			.attr("height", cfg.h + cfg.margin.top + cfg.margin.bottom)
			.attr("class", "radar"+id);
	//Append a g element
	var g = svg.append("g")
			.attr("transform", "translate(" + (cfg.w/2 + cfg.margin.left) + "," + (cfg.h/2 + cfg.margin.top) + ")");

	/////////////////////////////////////////////////////////
	////////// Glow filter for some extra pizzazz ///////////
	/////////////////////////////////////////////////////////

	//Filter for the outside glow
	var filter = g.append('defs').append('filter').attr('id','glow'),
		feGaussianBlur = filter.append('feGaussianBlur').attr('stdDeviation','2.5').attr('result','coloredBlur'),
		feMerge = filter.append('feMerge'),
		feMergeNode_1 = feMerge.append('feMergeNode').attr('in','coloredBlur'),
		feMergeNode_2 = feMerge.append('feMergeNode').attr('in','SourceGraphic');

	/////////////////////////////////////////////////////////
	/////////////// Draw the Circular grid //////////////////
	/////////////////////////////////////////////////////////

	//Wrapper for the grid & axes
	var axisGrid = g.append("g").attr("class", "axisWrapper");

	//Draw the background circles
	axisGrid.selectAll(".levels")
	   .data(d3.range(1,(cfg.levels+1)).reverse())
	   .enter()
		.append("circle")
		.attr("class", "gridCircle")
		.attr("r", function(d, i){return radius/cfg.levels*d;})
		.style("fill", "#CDCDCD")
		.style("stroke", "#CDCDCD")
		.style("fill-opacity", cfg.opacityCircles)
		.style("filter" , "url(#glow)");

	//Text indicating at what % each level is
	if (labels === true){
	axisGrid.selectAll(".axisLabel")
	   .data(d3.range(1,(cfg.levels+1)).reverse())
	   .enter().append("text")
	   .attr("class", "axisLabel")
	   .attr("x", 10)
	   .attr("y", function(d){return -d*radius/cfg.levels;})
	   .attr("dy", "0.4em")
	   .style("font-size", "12px")
	   .attr("fill", "black")
	   .text(function(d,i) { return Math.round(parseFloat(Format(0.13 * d/cfg.levels))) + "%"; });
 };
	/////////////////////////////////////////////////////////
	//////////////////// Draw the axes //////////////////////
	/////////////////////////////////////////////////////////

	//Create the straight lines radiating outward from the center
	var axis = axisGrid.selectAll(".radarAxis")
		.data(allAxis)
		.enter()
		.append("g")
		.attr("class", "radarAxis");
	//Append the lines
	axis.append("line")
		.attr("x1", 0)
		.attr("y1", 0)
		.attr("x2", function(d, i){ return rScale(maxValue*1.1) * Math.cos(angleSlice*i - Math.PI/2); })
		.attr("y2", function(d, i){ return rScale(maxValue*1.1) * Math.sin(angleSlice*i - Math.PI/2); })
		.attr("class", "line")
		.style("stroke", "white");

	//Append the labels at each axis
  if (labels === true){
		axis.append("text")
			.attr("class", "legend")
			.style("font-size", "12px")
			.style("color", "black")
			.attr("text-anchor", "middle")
			.attr("dy", "0.35em")
			.attr("x", function(d, i){ return rScale(maxValue * cfg.labelFactor) * Math.cos(angleSlice*i - Math.PI/2); })
			.attr("y", function(d, i){ return rScale(maxValue * cfg.labelFactor) * Math.sin(angleSlice*i - Math.PI/2); })
			.text(function(d){return d})
			.call(wrap, cfg.wrapWidth);
	};

	/////////////////////////////////////////////////////////
	///////////// Draw the radar chart blobs ////////////////
	/////////////////////////////////////////////////////////

	//The radial line function
	var radarLine = d3.radialLine()
		.radius(function(d) { return rScale(d.value); })
		.angle(function(d,i) {	return i*angleSlice; })
		.curve(d3.curveCardinalClosed);

	//Create a wrapper for the blobs
	var blobWrapper = g.selectAll(".radarWrapper")
		.data(data)
		.enter().append("g")
		.attr("class", "radarWrapper");

	//Append the backgrounds
	blobWrapper
		.append("path")
		.attr("class", "radarArea")
		.attr("d", function(d,i) { return radarLine(d); })
		.style("fill", function(d,i) { return cfg.color(i); })
		.style("fill-opacity", cfg.opacityArea)
		.on('mouseover', function (d,i){
			//Dim all blobs
			d3.selectAll(".radarArea")
				.transition().duration(200)
				.style("fill-opacity", 0.1);
			//Bring back the hovered over blob
			d3.select(this)
				.transition().duration(200)
				.style("fill-opacity", 0.7);
		})
		.on('mouseout', function(){
			//Bring back all blobs
			d3.selectAll(".radarArea")
				.transition().duration(200)
				.style("fill-opacity", cfg.opacityArea);
		});

	//Create the outlines
	blobWrapper.append("path")
		.attr("class", "radarStroke")
		.attr("d", function(d,i) { return radarLine(d); })
		.style("stroke-width", cfg.strokeWidth + "px")
		.style("stroke", function(d,i) { return cfg.color(i); })
		.style("fill", "none")
		.style("filter" , "url(#glow)");

	//Append the circles
	blobWrapper.selectAll(".radarCircle")
		.data(function(d,i) { return d; })
		.enter().append("circle")
		.attr("class", "radarCircle")
		.attr("r", cfg.dotRadius)
		.attr("cx", function(d,i){ return rScale(d.value) * Math.cos(angleSlice*i - Math.PI/2); })
		.attr("cy", function(d,i){ return rScale(d.value) * Math.sin(angleSlice*i - Math.PI/2); })
		.style("fill", function(d,i,j) { return cfg.color(j); })
		.style("fill-opacity", 0.8);

	/////////////////////////////////////////////////////////
	//////// Append invisible circles for tooltip ///////////
	/////////////////////////////////////////////////////////

	//Wrapper for the invisible circles on top
	var blobCircleWrapper = g.selectAll(".radarCircleWrapper")
		.data(data)
		.enter().append("g")
		.attr("class", "radarCircleWrapper");

	//Append a set of invisible circles on top for the mouseover pop-up
	blobCircleWrapper.selectAll(".radarInvisibleCircle")
		.data(function(d,i) { return d; })
		.enter().append("circle")
		.attr("class", "radarInvisibleCircle")
		.attr("r", cfg.dotRadius*1.5)
		.attr("cx", function(d,i){ return rScale(d.value) * Math.cos(angleSlice*i - Math.PI/2); })
		.attr("cy", function(d,i){ return rScale(d.value) * Math.sin(angleSlice*i - Math.PI/2); })
		.style("fill", "none")
		.style("pointer-events", "all")
		.on("mouseover", function(d,i) {
			newX =  parseFloat(d3.select(this).attr('cx')) - 10;
			newY =  parseFloat(d3.select(this).attr('cy')) - 10;

			tooltip
				.attr('x', newX)
				.attr('y', newY)
				.text(parseFloat(Format(d.value)).toFixed(2) + "%")
				.transition().duration(200)
				.style('opacity', 1);


		})
		.on("mouseout", function(){
			tooltip.transition().duration(200)
				.style("opacity", 0);
		});

	//Set up the small tooltip for when you hover over a circle
	var tooltip = g.append("text")
		.attr("class", "tooltip")
		.style("opacity", 0);

	/////////////////////////////////////////////////////////
	/////////////////// Helper Function /////////////////////
	/////////////////////////////////////////////////////////

	//Taken from http://bl.ocks.org/mbostock/7555321
	//Wraps SVG text
	function wrap(text, width) {
	  text.each(function() {
		var text = d3.select(this),
			words = text.text().split(/\s+/).reverse(),
			word,
			line = [],
			lineNumber = 0,
			lineHeight = 1.4, // ems
			y = text.attr("y"),
			x = text.attr("x"),
			dy = parseFloat(text.attr("dy")),
			tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");

		while (word = words.pop()) {
		  line.push(word);
		  tspan.text(line.join(" "));
		  if (tspan.node().getComputedTextLength() > width) {
			line.pop();
			tspan.text(line.join(" "));
			line = [word];
			tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
		  }
		}
	  });
	}//wrap

}//RadarChart
