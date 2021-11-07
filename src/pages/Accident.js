import react from "react";
import { Row, Col, Divider } from 'antd';
const Accident = () => {
    const style = { background: '#0092ff', padding: '8px 0' };
    return(
        <div>
            Accident Charts
            <div>
                <Row gutter={[16, 24]}>
                    <Col className="gutter-row" span={12}>
                        <img src = "./1_AccidentAnnouncement_by_Month.jpg"
                             width = "100%"/>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <img src = "2_AccidentAnnouncementbyQuarter.jpg"
                             width = "100%"/>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <img src = "3_AccidentAnnouncementbyweek.jpg"
                             width = "100%"/>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <img src = "4_AccidentAnnouncementbyday.jpg"
                             width = "100%"/>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <img src = "5_IncidentTypes_except_Road_Incident.jpg"
                             width = "100%"/>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <img src = "6_AccidentAnnouncementbytime.jpg"
                             width = "100%"/>
                    </Col>
                </Row>
            </div>
            <div>
                Kepler Map
            </div>

            <div>
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