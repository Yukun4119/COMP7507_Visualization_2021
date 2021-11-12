import react from "react";
import { Row, Col, Divider } from 'antd';
import "./styles.css"
const Accident = () => {
    const style = { background: '#0092ff', padding: '8px 0' };
    return(
        <div className = "accidentImg">
             <div className = "title">
                Accident Chart
            </div>
            <div >
                <iframe
                    src="https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/s/k9ma138gbapw9cy/keplergl_s0dkd1q.json"
                    width="1400" 
                    height="800"
                    >
                </iframe>
            </div>
            <div className = "title">
                Speed data:
            </div>
            <div className = "smallLink">
                https://raw.githubusercontent.com/Yukun4119/COMP7507_Visualization_2021/main/route_speed_9.8.geojson
            </div>
            
        </div>
    )
};

export default Accident