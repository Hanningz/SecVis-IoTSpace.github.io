# SecVis-IoTSpace.github.io
This website is monitoring and visualising the IoT sensor devices in smart houses environment. 

index.html - The overview of the design 

scatter.html - The code for scatter chart only, showing how this scatter chart is being rendered in HTML page.

other.html/test.json - An simple example of line chart, getting data from a JSON file.

## Use of Echarts library 

Only external dependency is Echart and for using the Echart library in your own project, just add the following script as head in your html file.

`<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/echarts@5/dist/echarts.min.js"></script>`

The code of each visualziation is put as one js script. So the overall structure of the code is:

```
var dom = document.getElementById("sev"); //rendering the visualization to the html page
var myChart = echarts.init(dom);
var app = {};
var symbols; //if any
option = {
            ...// detailed setting and customise vsiualzuation itself 
            }          
if (option && typeof option === 'object') {
      myChart.setOption(option);
        } // set the chart
```

## Data fomat used for each visualization

#### Data format for Temperature Heatmap chart view:

[Device type index, Room number, Temperature value] 


Device type index -> using 0, 1,2 for different device types, integer type 

Room number -> room number (correlate to the X Axis), integer type 

Temperature value -> floating type 


Examples:  

[0, 1, 22.9] 

[1, 2, 26.7] 


#### Data format for humidity Heatmap chart view:

[Device type index, Room number, Humidity value] 

 
Device type index -> using 0, 1,2 for different device types, integer type 

Room number -> room number (correlate to the X Axis), integer type 

Humidity value -> integer type 
 
Examples:  

[0, 1, 21] 

[1, 2, 36] 


#### Data format for Temperature scatter chart view:

[Room index, Temperature value, ID, Room number, Device type] 


Room index -> room number (correlate to the X Axis), integer type 

Temperature value -> floating type 

ID -> String type 

Room number -> String type 

Device Type -> using 1,2 for different device types, integer type 

Examples:  

[1,23.8,"ID21","Room01", 1] 

[7,19.6,"ID35","Room07", 3] 

#### Data format for humidity scatter chart view:

[Room index, Humidity value, ID, Room number, Device type] 

 
Room index -> room number (correlate to the X Axis), integer type 

Humidity value -> integer type 

ID -> String type 

Room number -> String type 

Device Type -> using 1,2 for different device types, integer type 

Examples:  

[1,37,"ID21","Room01", 1] 

[7,49,"ID35","Room07", 3] 


#### Data format for CO2/TVOC scatter chart view:

[Room index, CO2/TVOC value, ID, Room number, Device type] 


Room index -> room number (correlate to the X Axis), integer type 

CO2 or TVOC value -> integer type 

ID -> String type 

Room number -> String type 

Device Type -> using 1,2 for different device types, integer type 


Examples:  

[1,321,"ID21","Room01", 1] 

[2,45,"ID21","Room01", 2] 


#### Data format for battery scatter chart view:

[Room index, Battery value, ID, Room number, Device type] 

 
Room index -> room number (correlate to the X Axis), integer type 

Battery value -> floating type 

ID -> String type 

Room number -> String type 

Device Type -> using 1,2 for different device types, integer type 

 
Examples:  

[1,3.1,"ID21","Room01", 1] 

[3,2.6,"ID21","Room01", 2]
