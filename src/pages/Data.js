import react from "react";
import { Row, Col, Divider , Button} from 'antd';
import {ChromeFilled} from '@ant-design/icons';
import "./styles.css"
const Data = () => {
    const handle = (url) => {
        const w=window.open('about:blank');
        w.location.href=url
    }
    return(
        <div>
            <div className = "accidentImg">
                <div className="title">
                    Dataset1: Special-traffic news data
                    <img width = "5%" onClick={() => {handle("https://data.gov.hk/en-data/dataset/hk-td-tis_19-special-traffic-news-v2/resource/9dc69d26-b62e-45b5-b222-384a685ed550")}} src = "link@2x.png"/>
                </div>
                {/* <div className = "tips">Real-time data</div> */}
            
                <div className="title">
                    Dataset2: Traffic Speeds of Road Network Segments
                    <img width = "5%" onClick={() => {handle("https://data.gov.hk/en-data/dataset/hk-td-sm_4-traffic-data-strategic-major-roads/resource/76a23387-b82e-4518-8e93-ff74937326c0")}} src = "link@2x.png"/>
                </div>
                {/* <div className = "tips">The location of detections in HK</div>
                <div className = "tips">Updating frequency is in Minute</div> */}
            </div>
            <div className = "accidentImg">
                <div>
                    <img  className = "dataImg" src = "XKB-Fig-1.jpg" width = "70%"/>
                </div >
                <div>
                    This figure shows the overall distribution of the number of different types of accidents. There are 3962 incidents included. We can directly see from the figure that the most numerous accident type is Road Incident, and the most numerous sub-type in Road Incident is Traffic Accident.
                </div>
                <div>
                    <img className = "dataImg"  src = "XKB-Fig-2.jpg" width = "70%"/>
                </div>
                <div>
                    The incident types besides Road Incident are displayed in this treemap. There are 109 Highwind Incidents, consist of HZMB High Wind Incidents, Low Visibility Incidents, and Strong Wind Incidents. Other supertypes are MTR Incident, Ferry Incident, Tram Incident, and so on.
                </div>
                <div>
                    <img className = "dataImg"  src = "XKB-Fig-3.jpg" width = "70%"/>
                </div>
                <div>
                    This figure is about the number and type of accidents announced every day. Overall the numbers of accidents announced every day vary in a wide range, from 0 to 34. After simple calculation we know the dayly average number is 10.8.
                </div>
                <div>
                    <img className = "dataImg"  src = "XKB-Fig-4.jpg" width = "70%"/>
                </div>
                <div>
                    If we plot the bar chart by announcement month, we will get such result. We can roughly see that in winter there are a few less Road Incidents, maybe it is because lower temperature makes the drivers more sane.
                </div>
                <div>
                    <img className = "dataImg"  src = "XKB-Fig-5.jpg" width = "70%"/>
                </div>
                <div>
                    There are also several incidents having strong time feature. For example, Rainstorm Incidents mostly occur in summer especially in June, and Typhoon Incidents come with typhoons in specific time.
                </div>
                <div>
                    <img className = "dataImg"  src = "XKB-Fig-6.jpg" width = "70%"/>
                </div>
                <div>
                    The subject of the current graph is about the announcement time of the incidents during the days. Despite the delay owing to necessary processes, it is quite obvious that accidents mainly occur in the morning rush hour and evening rush hour. 
                </div>
                <div className = "dataImg" >
                    <iframe src="https://public.tableau.com/views/visualanalysis_16361132388280/1?:language=zh-CN&publish=yes&:display_count=n&:origin=viz_share_link&:showVizHome=no"
                        width="1100" 
                        height="800"
                    ></iframe>
                </div>
                <div>
                This figure consistes of 5 sub-figures. It shows the variation of data in different time dimensions. Figure 1 shows the total records of each month. Figure 2 shows the differences of data amount between days of each month. Figure 3 shows the actual number of data in 8th and 11th of each month from April to September. Figure 4 shows the amount of data of every hour in 11th. Figure 5 shows the change in speed over the 11th day.
                </div>
                <div className = "dataImg" >
                    <iframe src="https://public.tableau.com/views/detectorroadandspeed/1?:language=zh-CN&publish=yes&:display_count=n&:origin=viz_share_link&:showVizHome=no"
                        width="1100" 
                        height="800"
                    ></iframe>
                </div>
                <div>
                The graph shows the road information in Hong Kong. The different red colors show the different speed limitaiton on the roads in Hong Kong. The blue points present parts of the detectors on the roads in Hong Kong.
                </div>
            </div>    
        </div>
    )};

export default Data