// Read in json data //
let url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// function to createCharts based on sample //
function populateDemoInfo(id) {
    d3.json(url).then(function(item){
        let metadata = item.metadata;
        sampleArray = metadata.filter(item => item.id == id);
        let selectSample = sampleArray[0];
        let panel = d3.select("#sample-metadata");
        panel.html("");
        Object.entries(selectSample).forEach(([key,value]) =>{
            panel.append('div').text(`${key}: ${value}`);
        })
    })
}

function createCharts(id) {
    d3.json(url).then(function(data){
        let samples = data.samples;
        let filterArray = samples.filter(item =>
            item.id == id);
        let selectSample = filterArray[0];
        
        // console.log(selectSample)
        let ids = selectSample.otu_ids;
        let labels = selectSample.otu_labels;
        let values = selectSample.sample_values;
        
        // bar chart //

        let yValues = ids.slice(0,10).map(otuID => `OTU ${otuID}`).reverse();
        let xValues = values.slice(0,10).reverse();
        let text = labels.slice(0,10).reverse();

        let barData = {
            y:yValues,
            x:xValues,
            text:text,
            type:'bar',
            orientation:'h',
            marker:{
                color:'light blue'
            }
        };

        let barLayout = {
            autosize: false,
            width: 500,
            height: 780,
            margin: {
            l: 75,
            r: 50,
            b: 200,
            t: 10,
            pad: 4
            },
            // title: "Bar Test",
            barmode: 'group',
            // margin: //margin code goes here
        };

        Plotly.newPlot("bar", [barData], barLayout);


        // Bubble Chart //

        let bubbleData = {
            x:ids,
            y:values,
            text:labels,
            mode:'markers',
            marker:{
                color:ids,
                size:values
            }
        }

        let bubbleLayout = {
            autosize: false,
            width: 1200,
            height: 500,
            margin: {
              l: 50,
              r: 50,
              b: 100,
              t: 30,
              pad: 4
            },
            showlegend: false,
        };

        Plotly.newPlot("bubble", [bubbleData], bubbleLayout)
    })
}

// initialize charts //
function init() {
    // populate dropdown options // 
    d3.json(url).then(function(data){
        let nameList = data.names;
        for (let i = 0; i < nameList.length; i++) {
            d3.select("#selDataset")
                .append("option")
                .text(nameList[i])
                .property("value", nameList[i])
        }
        let firstID = nameList[0];
        createCharts(firstID);
        populateDemoInfo(firstID)
    })
}

function optionChanged(id){

    createCharts(id);
    populateDemoInfo(id);
};

init();