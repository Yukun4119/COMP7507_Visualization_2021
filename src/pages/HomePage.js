import react from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import  './styles.css'
const { Header, Content, Footer } = Layout;
const HomePage = () => {
    return(
        <div className = "accidentImg"> 
            <div className = "title">Relationship between the data related to traffic accidents.</div>
            <div className = "subtitle">COMP7507 Visualization and visual analytics</div>
            <div className = "subtitle">Group 16</div>

            <div className = "overview">Objectives</div>
            <div className = "tips">1. Present the relationship between the data related to traffic accidents.</div>
            <div className = "tips">2. Extract spatiotemporal patterns of traffic accidents.</div>
            <div className = "tips">3. Analyze the features. Give practical suggestions.</div>

            <div className = "overview">Road Traffic Accident Statistics in Hong Kong, 2009 to 2018</div> 
            <div> Based on the road traffic accident data collected by the Hong Kong Police Force and maintained by the Transport Department, there were 15 935 road traffic accidents in Hong Kong in 2018, involving 19 637 casualties and 25 726 vehicles. This article presents the trends of road traffic casualties and accidents for the period from 2009 to 2018, and the characteristics of road users and vehicles involved.</div>
        </div>
    )
} 
export default HomePage