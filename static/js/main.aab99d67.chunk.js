(this.webpackJsonpvis=this.webpackJsonpvis||[]).push([[0],{157:function(e,t,s){},158:function(e,t,s){"use strict";s.r(t);var i=s(0),c=s(16),a=s.n(c),n=(s(86),s(80)),r=s(161),d=s(162),o=s(1),h=d.a.SubMenu;function l(e){var t=e.handleClick;return Object(o.jsx)(r.a.Sider,{style:{overflow:"auto",height:"100vh",position:"fixed",left:0},children:Object(o.jsx)(d.a,{theme:"dark",mode:"inline",openKeys:"sub1",defaultSelectedKeys:["1"],children:Object(o.jsxs)(h,{title:Object(o.jsx)("span",{children:Object(o.jsx)("span",{children:"Group 16"})}),children:[Object(o.jsx)(d.a.Item,{onClick:t,children:"Overview"},"1"),Object(o.jsx)(d.a.Item,{onClick:t,children:"Data"},"2"),Object(o.jsx)(d.a.Item,{onClick:t,children:"Accident"},"3"),Object(o.jsx)(d.a.Item,{onClick:t,children:"Analysis"},"5"),Object(o.jsx)(d.a.Item,{onClick:t,children:"About"},"6")]},"sub1")})})}s(157),s(31),r.a.Header,r.a.Content,r.a.Footer;var j=function(){return Object(o.jsxs)("div",{className:"accidentImg",children:[Object(o.jsx)("div",{className:"title",children:"Relationship between the data related to traffic accidents."}),Object(o.jsx)("div",{className:"subtitle",children:"COMP7507 Visualization and visual analytics"}),Object(o.jsx)("div",{className:"subtitle",children:"Group 16"}),Object(o.jsx)("div",{className:"overview",children:"Objectives"}),Object(o.jsx)("div",{className:"tips",children:"1. Present the relationship between the data related to traffic accidents."}),Object(o.jsx)("div",{className:"tips",children:"2. Extract spatiotemporal patterns of traffic accidents."}),Object(o.jsx)("div",{className:"tips",children:"3. Analyze the features. Give practical suggestions."}),Object(o.jsx)("div",{className:"overview",children:"Road Traffic Accident Statistics in Hong Kong, 2009 to 2018"}),Object(o.jsx)("div",{className:"tips",children:" Based on the road traffic accident data collected by the Hong Kong Police Force and maintained by the Transport Department, there were 15 935 road traffic accidents in Hong Kong in 2018, involving 19 637 casualties and 25 726 vehicles. This article presents the trends of road traffic casualties and accidents for the period from 2009 to 2018, and the characteristics of road users and vehicles involved."})]})},m=function(){var e=function(e){window.open("about:blank").location.href=e};return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"accidentImg",children:[Object(o.jsxs)("div",{className:"title",children:["Dataset1",Object(o.jsx)("img",{width:"5%",onClick:function(){e("https://data.gov.hk/sc-data/dataset/hk-td-tis_19-special-traffic-news-v2/resource/f45a7b05-3811-4171-9165-e6b631feb156")},src:"link@2x.png"})]}),Object(o.jsx)("div",{className:"tips",children:"Real-time data"}),Object(o.jsxs)("div",{className:"title",children:["Dataset2",Object(o.jsx)("img",{width:"5%",onClick:function(){e("https://data.gov.hk/sc-data/dataset/hk-td-sm_4-traffic-data-strategic-major-roads")},src:"link@2x.png"})]}),Object(o.jsx)("div",{className:"tips",children:"The location of detections in HK"}),Object(o.jsx)("div",{className:"tips",children:"Updating frequency is in Minute"})]}),Object(o.jsxs)("div",{className:"accidentImg",children:[Object(o.jsx)("div",{children:Object(o.jsx)("img",{className:"dataImg",src:"XKB-Fig-1.jpg",width:"70%"})}),Object(o.jsx)("div",{children:"This figure shows the overall distribution of the number of different types of accidents. There are 3962 incidents included. We can directly see from the figure that the most numerous accident type is Road Incident, and the most numerous sub-type in Road Incident is Traffic Accident."}),Object(o.jsx)("div",{children:Object(o.jsx)("img",{className:"dataImg",src:"XKB-Fig-2.jpg",width:"70%"})}),Object(o.jsx)("div",{children:"The incident types besides Road Incident are displayed in this treemap. There are 109 Highwind Incidents, consist of HZMB High Wind Incidents, Low Visibility Incidents, and Strong Wind Incidents. Other supertypes are MTR Incident, Ferry Incident, Tram Incident, and so on."}),Object(o.jsx)("div",{children:Object(o.jsx)("img",{className:"dataImg",src:"XKB-Fig-3.jpg",width:"70%"})}),Object(o.jsx)("div",{children:"This figure is about the number and type of accidents announced every day. Overall the numbers of accidents announced every day vary in a wide range, from 0 to 34. After simple calculation we know the dayly average number is 10.8."}),Object(o.jsx)("div",{children:Object(o.jsx)("img",{className:"dataImg",src:"XKB-Fig-4.jpg",width:"70%"})}),Object(o.jsx)("div",{children:"If we plot the bar chart by announcement month, we will get such result. We can roughly see that in winter there are a few less Road Incidents, maybe it is because lower temperature makes the drivers more sane."}),Object(o.jsx)("div",{children:Object(o.jsx)("img",{className:"dataImg",src:"XKB-Fig-5.jpg",width:"70%"})}),Object(o.jsx)("div",{children:"There are also several incidents having strong time feature. For example, Rainstorm Incidents mostly occur in summer especially in June, and Typhoon Incidents come with typhoons in specific time."}),Object(o.jsx)("div",{children:Object(o.jsx)("img",{className:"dataImg",src:"XKB-Fig-6.jpg",width:"70%"})}),Object(o.jsx)("div",{children:"The subject of the current graph is about the announcement time of the incidents during the days. Despite the delay owing to necessary processes, it is quite obvious that accidents mainly occur in the morning rush hour and evening rush hour."}),Object(o.jsx)("div",{className:"dataImg",children:Object(o.jsx)("iframe",{src:"https://public.tableau.com/views/visualanalysis_16361132388280/1?:language=zh-CN&publish=yes&:display_count=n&:origin=viz_share_link&:showVizHome=no",width:"1100",height:"800"})}),Object(o.jsx)("div",{children:"This figure consistes of 5 sub-figures. It shows the variation of data in different time dimensions. Figure 1 shows the total records of each month. Figure 2 shows the differences of data amount between days of each month. Figure 3 shows the actual number of data in 8th and 11th of each month from April to September. Figure 4 shows the amount of data of every hour in 11th. Figure 5 shows the change in speed over the 11th day."}),Object(o.jsx)("div",{className:"dataImg",children:Object(o.jsx)("iframe",{src:"https://public.tableau.com/views/detectorroadandspeed/1?:language=zh-CN&publish=yes&:display_count=n&:origin=viz_share_link&:showVizHome=no",width:"1100",height:"800"})}),Object(o.jsx)("div",{children:"The graph shows the road information in Hong Kong. The different red colors show the different speed limitaiton on the roads in Hong Kong. The blue points present parts of the detectors on the roads in Hong Kong."})]})]})},b=function(){return Object(o.jsxs)("div",{className:"accidentImg",children:[Object(o.jsx)("div",{className:"title",children:"Accident Chart"}),Object(o.jsx)("div",{children:Object(o.jsx)("iframe",{src:"https://kepler.gl/demo/map?mapUrl=https://dl.dropboxusercontent.com/s/k9ma138gbapw9cy/keplergl_s0dkd1q.json",width:"1100",height:"800"})}),Object(o.jsx)("div",{className:"title",children:"Speed data:"}),Object(o.jsx)("div",{className:"smallLink",children:"https://raw.githubusercontent.com/Yukun4119/COMP7507_Visualization_2021/main/route_speed_9.8.geojson"})]})},u=function(){return Object(o.jsxs)("div",{className:"accidentImg",children:[Object(o.jsx)("div",{className:"title",children:"Analysis"}),Object(o.jsx)("div",{children:Object(o.jsx)("img",{width:"80%",src:"analysis.png"})}),Object(o.jsx)("div",{className:"subtitle",children:"The color red denotes the accidents frequency. The redder the color, the more accidents."}),Object(o.jsx)("div",{className:"subtitle",children:"The color purple denotes the vehicle speed. The more purple the color, the more the vehicle speed."}),Object(o.jsx)("div",{className:"tips",children:"1. From the data tab, we can find that most accidents are road incidents. Vehicle speed is one of the most important facts in road incidents."}),Object(o.jsx)("div",{className:"tips",children:"2. From the figure above, there are several areas where accident is more frequent than others, and the average speed of vehicles are faster than other roads. In These areas or roads, we advise that the speed limit should be lower to reduce the possibility of accidents or road incidents."})]})},g=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"title",children:"Github link:"}),Object(o.jsx)("div",{className:"aboutLink",children:"https://github.com/Yukun4119/COMP7507_Visualization_2021"}),Object(o.jsx)("div",{className:"title",children:"Contributors:"}),Object(o.jsxs)("div",{className:"contributors",children:[Object(o.jsx)("img",{className:"aboutImg",src:"https://avatars.githubusercontent.com/u/50010920?s=96&v=4"}),"Yukun4119 Yukun SHANG"]}),Object(o.jsxs)("div",{className:"contributors",children:[Object(o.jsx)("img",{className:"aboutImg",src:"https://avatars.githubusercontent.com/u/58099973?v=4"}),"Jia-py Jia Pengyue"]}),Object(o.jsxs)("div",{className:"contributors",children:[Object(o.jsx)("img",{className:"aboutImg",src:"https://raw.githubusercontent.com/Yukun4119/BlogImg/main/img/351636628159_.pic.jpg"}),"chenghgh"]}),Object(o.jsxs)("div",{className:"contributors",children:[Object(o.jsx)("img",{className:"aboutImg",src:"https://raw.githubusercontent.com/Yukun4119/BlogImg/main/img/361636628167_.pic.jpg"}),"LocalHost808080 \u561e\u840c"]})]})},v=(r.a.Header,r.a.Content);r.a.Footer;function p(){var e={fontSize:"30px",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},t={1:Object(o.jsxs)("div",{style:e,children:[" ",Object(o.jsx)(j,{})," "]}),2:Object(o.jsxs)("div",{style:e,children:[" ",Object(o.jsx)(m,{})]}),3:Object(o.jsxs)("div",{style:e,children:[" ",Object(o.jsx)(b,{})]}),5:Object(o.jsxs)("div",{style:e,children:[" ",Object(o.jsx)(u,{})]}),6:Object(o.jsxs)("div",{style:e,children:[" ",Object(o.jsx)(g,{})]})},s=Object(i.useState)(1),c=Object(n.a)(s,2),a=c[0],d=c[1];return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(r.a,{style:{minHeight:"100vh"},children:[Object(o.jsx)(l,{handleClick:function(e){d(e.key)}}),Object(o.jsx)(r.a,{children:Object(o.jsx)(v,{children:t[a]})})]})})}var f=document.getElementById("root");a.a.render(Object(o.jsx)(p,{}),f)},31:function(e,t,s){}},[[158,1,2]]]);
//# sourceMappingURL=main.aab99d67.chunk.js.map