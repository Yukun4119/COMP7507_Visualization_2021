import react from "react";
import "./styles.css"
const Github = () => {
    return(
        <div>
            <div className ="title">
            Github link:
            </div>
            <div className ="aboutLink">
                https://github.com/Yukun4119/COMP7507_Visualization_2021
            </div>
            <div className = "title">
            Contributors:
            </div>
            <div className = "contributors">
                <img className='aboutImg' src = "https://avatars.githubusercontent.com/u/50010920?s=96&v=4"/>
                Yukun4119 Yukun SHANG
            </div>
            <div className = "contributors">
                <img className='aboutImg' src = "https://avatars.githubusercontent.com/u/58099973?v=4" />
                Jia-py Jia Pengyue
            </div>
            <div className = "contributors">
            <img className='aboutImg' src = "https://raw.githubusercontent.com/Yukun4119/BlogImg/main/img/351636628159_.pic.jpg"/>
                chenghgh
            </div>
            <div className = "contributors">
            <img className='aboutImg' src = "https://raw.githubusercontent.com/Yukun4119/BlogImg/main/img/361636628167_.pic.jpg"/>
            LocalHost808080 嘞萌
            </div>
        </div>
    )
};
export default Github