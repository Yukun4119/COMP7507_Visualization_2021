import react from "react";
import { Row, Col, Divider } from 'antd';
import "./styles.css"
const Accident = () => {
    const style = { background: '#0092ff', padding: '8px 0' };
    return(
        <div className = "accidentImg">
            Accident Charts
            <div >
                <iframe
                    src="https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/s/k9ma138gbapw9cy/keplergl_s0dkd1q.json"
                    width="1100" 
                    height="800"
                    >
                </iframe>
            </div>
            <div>
                <iframe
                    src="https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/s/60rswjua4igrq29/keplergl_w5yipcq.json&:showVizHome=no"
                    width="1100" 
                    height="800"
                    >
                </iframe>
            </div>
        </div>
    )
};

export default Accident