import react from "react";

const Speed = () => {
    return(
        <div>
            Speed Charts
            <div>
                <iframe src="https://public.tableau.com/views/visualanalysis_16361132388280/1?:language=zh-CN&publish=yes&:display_count=n&:origin=viz_share_link&:showVizHome=no"
                    width="1100" 
                    height="800"
                ></iframe>
            </div>
            <div>
                <iframe src="https://public.tableau.com/views/detectorroadandspeed/1?:language=zh-CN&publish=yes&:display_count=n&:origin=viz_share_link&:showVizHome=no"
                    width="1100" 
                    height="800"
                ></iframe>
            </div>
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