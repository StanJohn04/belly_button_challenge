// TEST BAR CHART//
let xValues = ['None', 'Two', 'Four', 'Six', 'Eight', 'Two2', 'Four2', 'Six2', 'Eight2']
let yValues = [0,2,4,6,8,2,4,6,8]


let barTrace = {
    y:xValues,
    x:yValues,
    type:'bar',
    orientation:'h'
}

let barData = [barTrace];

let barLayout = {
    title: "Bar Test",
    barmode: 'group',
    xaxis: {
        title: 'X values'
        // font: {family:<font style>, size: <font size>, color: <font color>}
    },
    yaxis:{
        title:'Y values'
    }
    // margin: //margin code goes here
};

Plotly.newPlot("bar", barData, barLayout);

// GAUGE CHART //
let gaugeData = [
	{
		domain: { x: [0, 1], y: [0, 1] },
		value: 0,
		title: { text: "Belly Button Washing Frequency" },
		type: "indicator",
		mode: "gauge",
        gauge:{
            axis:{
                range: [0,9],
                visible: false,
            },
            steps:[
                {
                    range:[0,1],
                    color:'rgb(238, 238, 226)'
                },
                {
                    range:[1,2],
                    color:'rgb(238, 238, 204)'
                },
                {
                    range:[2,3],
                    color:'rgb(235, 235, 178)'
                },
                {
                    range:[3,4],
                    color:'rgb(238, 238, 136)'
                },
                {
                    range:[4,5],
                    color:'rgb(171, 196, 171)'
                },
                {
                    range:[5,6],
                    color:'rgb(155, 196, 155)'
                },
                {
                    range:[6,7],
                    color:'rgb(126, 194, 126)'
                },
                {
                    range:[7,8],
                    color:'rgb(89, 192, 89)'
                },
                {
                    range:[8,9],
                    color:'rgb(23, 119, 23)'
                }

            ]
        }
	}
  ];
  
  let gaugeLayout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
  
  Plotly.newPlot('gauge', gaugeData, gaugeLayout);

// TEST BUBBLE CHART //
let bubbleTrace = {
    x: [1,2,3,4,],
    y:[10,11,20,13],
    mode:"markers",
    marker:{
        size:[40,60,100,200],
        color:['yellow','red', 'blue', 'green']
    }
};

let bubbleData = [bubbleTrace];

let bubbleLayout = {
    title: "Bubble Test",
    showlegend: false,
};

Plotly.newPlot('bubble', bubbleData, bubbleLayout);