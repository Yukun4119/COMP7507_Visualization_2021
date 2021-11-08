import react from "react";
import { Row, Col, Divider } from 'antd';
import "./styles.css"
const Accident = () => {
    const style = { background: '#0092ff', padding: '8px 0' };
    return(
        <div className = "accidentImg">
            Accident Charts
            <div >
                <Row gutter={[16, 24]}>
                    <Col className="gutter-row" span={12}>
                        <img src = "AccFig1.jpg"
                             width = "100%"/>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <img src = "AccFig2.jpg"
                             width = "100%"/>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <img src = "AccFig3.jpg"
                             width = "100%"/>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <img src = "AccFig4.jpg"
                             width = "100%"/>
                    </Col>
                </Row>
            </div>
            <div >
                Kepler Map
            </div>

            <div >
                <iframe
                    src="https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/s/k9ma138gbapw9cy/keplergl_s0dkd1q.json"
                    width="1100" 
                    height="800"
                    >
                </iframe>
            </div>
        </div>
    )
};

export default Accident