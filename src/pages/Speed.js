import react from "react";
import "./styles.css"

const Speed = () => {
    return(
        <div className = "accidentImg">
            Speed Charts
           
            <div>
                Kepler Map
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

export default Speed