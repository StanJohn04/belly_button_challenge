

function buildGauge(id){

    d3.json(url).then(function(data){
        let samples = data.metadata;
        let filterArray = samples.filter(item =>
            item.id == id);
        let selectSample = filterArray[0];
        if (selectSample.wfreq === null){
            selectSample.wfreq = 0;
        }
        let wfreq = parseInt(selectSample.wfreq)

        let degree = wfreq * (180/10);
        console.log(wfreq)
        // Trig to calc meter point
        let degrees = 180 - degree;
        let radius = .5;
        let radians = degrees * Math.PI / 180;
        let x = radius * Math.cos(radians);
        let y = radius * Math.sin(radians);

        let mainPath = 'M -.0 -0.025 L .0 0.025 L ',
            pathX = String(x),
            space = ' ',
            pathY = String(y),
            pathEnd = ' Z';
        let path = mainPath.concat(pathX, space, pathY, pathEnd);

        let trace = [{ type: 'scatter',
        x: [0], y:[0],
            marker: {size: 50, color:'2F6497'},
            showlegend: false,
            name: 'WASH FREQ',
            text: wfreq,
            hoverinfo: 'text+name'},
        { values: [1, 1, 1, 1, 1, 1, 1, 1, 1, 9],
        rotation: 90,
        text: ['8-9', '7-8', '6-7', '5-6', '4-5', '3-4', '2-3', '1-2', '0-1',''],
        textinfo: 'text',
        textposition:'inside',
        textfont:{
            size : 16,
            },
        marker: {colors:['rgb(23, 119, 23)','rgb(89, 192, 89)','rgb(126, 194, 126)','rgb(155, 196, 155)','rgb(175, 210, 175)','rgb(225, 235, 206)','rgb(238, 238, 226)','rgb(238, 238, 204)','rgb(235, 235, 178)', 'white']},
        labels: ['8-9', '7-8', '6-7', '5-6', '4-5', '3-4', '2-3', '2-1', '0-1',''],
        hoverinfo: 'text',
        hole: .5,
        type: 'pie',
        showlegend: false
        }];

        let layout = {
        shapes:[{
            type: 'path',
            path: path,
            fillcolor: '#2F6497',
            line: {
                color: '#2F6497'
            }
            }],

        title: '<b>Belly Button Washing Frequency</b> <br> <b>Scrub Per Week</b>',
        xaxis: {zeroline:false, showticklabels:false,
                    showgrid: false, range: [-1, 1]},
        yaxis: {zeroline:false, showticklabels:false,
                    showgrid: false, range: [-1, 1]},
        width: 600, height: 500, margin: { t: 0, b: 0 }, padding:0 
        };

        Plotly.newPlot('gauge', trace, layout, {responsive: true});
    });
}

buildGauge(940)