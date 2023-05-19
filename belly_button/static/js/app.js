// TEST BAR CHART//
let xValues = ['None', 'Two', 'Four', 'Six', 'Eight']
let yValues = [0,2,4,6,8]


let trace = {
    x:xValues,
    y:yValues,
    type:'bar'
}

let data = [trace];

let layout = {
    title: "Test Plot",
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

Plotly.newPlot("bar", plotData, layout);