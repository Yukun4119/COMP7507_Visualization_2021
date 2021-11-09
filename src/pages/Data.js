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
            <div className="title">
                Dataset1
                <Button
                    type="primary"
                    icon={<ChromeFilled />}
                    onClick={() => {handle("https://data.gov.hk/sc-data/dataset/hk-td-tis_19-special-traffic-news-v2/resource/f45a7b05-3811-4171-9165-e6b631feb156")}}
                />
            </div>
            <div className = "tips">Real-time data</div>
           
            <div className="title">
                Dataset2
                <Button
                    type="primary"
                    icon={<ChromeFilled />}
                    onClick={() => {handle("https://data.gov.hk/sc-data/dataset/hk-td-sm_4-traffic-data-strategic-major-roads")}}
                />
            </div>
            <div className = "tips">The location of detections in HK</div>
            <div className = "tips">Update frequency is in Minute</div>
            <div >
                <img  className = "dataImg" src = "AccFig1.jpg" width = "70%"/>
                <img className = "dataImg"  src = "AccFig2.jpg" width = "70%"/>
                <img className = "dataImg"  src = "AccFig3.jpg"width = "70%"/>
                <img className = "dataImg" src = "AccFig4.jpg"width = "70%"/>
            </div>
            <div className = "dataImg" >
                <iframe src="https://public.tableau.com/views/visualanalysis_16361132388280/1?:language=zh-CN&publish=yes&:display_count=n&:origin=viz_share_link&:showVizHome=no"
                    width="1100" 
                    height="800"
                ></iframe>
            </div>
            <div className = "dataImg" >
                <iframe src="https://public.tableau.com/views/detectorroadandspeed/1?:language=zh-CN&publish=yes&:display_count=n&:origin=viz_share_link&:showVizHome=no"
                    width="1100" 
                    height="800"
                ></iframe>
            </div>
        </div>
    )};

export default Data