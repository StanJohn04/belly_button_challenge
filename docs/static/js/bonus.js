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

        // Trig to calc meter point
        let degrees = 175 - degree;
        let radius = .75;
        let radians = degrees * Math.PI / 180;
        let x = radius * Math.cos(radians);
        let y = radius * Math.sin(radians);

        let mainPath = 'M -.0 -0.025 L .0 0.05 L ',
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
        { domain: { x: [0, 1], y: [0, 1] },
		value: 0,
		title: { text: "Belly Button Washing Frequency" },
		type: "indicator",
		mode: "gauge",
        gauge:{
            showticklabels:true,
            axis:{
                range: [0,9],
                visible: true,
                showticklabels:true,
                ticks: "outside",
                tickvals: [0,1,2,3,4,5,6,7,8,9],
                ticktext:["0","1","2","3","4","5","6","7","8",'9']
            },
            steps:[
                {
                    range:[0,1],
                    color:'rgb(235, 235, 178)',
                },
                {
                    range:[1,2],
                    color:'rgb(238, 238, 204)'
                },
                {
                    range:[2,3],
                    color:'rgb(238, 238, 226)'
                },
                {
                    range:[3,4],
                    color:'rgb(225, 235, 206)'
                },
                {
                    range:[4,5],
                    color:'rgb(175, 210, 175)'
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
        xaxis: {zeroline:false, showticklabels:false,
                    showgrid: false, range: [-1, 1]},
        yaxis: {zeroline:false, showticklabels:false,
                    showgrid: false, range: [-1, 2]},
        width: 600, height: 500, margin: { t: 0, b: 0 }, padding:0 
        };

        Plotly.newPlot('gauge', trace, layout, {responsive: true});
    });
}

buildGauge(940)