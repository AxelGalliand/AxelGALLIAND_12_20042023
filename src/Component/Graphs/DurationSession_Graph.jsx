import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Rectangle } from "recharts"; 
import styles from './DurationSession_Graph.module.css';

const sessions = [
  {
    day: 1,
    sessionLength: 30
},
{
    day: 2,
    sessionLength: 23
},
{
    day: 3,
    sessionLength: 45
},
{
    day: 4,
    sessionLength: 50
},
{
    day: 5,
    sessionLength: 0
},
{
    day: 6,
    sessionLength: 0
},
{
    day: 7,
    sessionLength: 60
}
];

const CustomTooltip=({active, payload})=>{
  if (active) {
      return (
          <div className={styles["customTooltipSession"]}>
              <p className={styles["tooltipDataSession"]}>{`${payload[0].value} `}min</p>
          </div>
      );
}
return null;
}

const CustomCursor = ({points}) => {
  return <Rectangle fill="#000000" opacity={0.2} x={points[1].x} width={1000} height={500} />;
};

const DurationSession_Graph = () => {

  return ( 
   <div className={styles["Duration"]}>
    <ResponsiveContainer width="100%" aspect={1} >
      <LineChart
        style={{backgroundColor: "#FF0000", borderRadius: "5px"}}
        width={258}
        height={263}
        data={sessions}
        margin={{
                  top: 50,
                  right: -2,
                  left: -60, 
                  bottom: 10
                }}>    
                    
      <CartesianGrid  vertical={false} horizontal={false}/>
      <XAxis dataKey="day" tickLine={false} fillOpacity={0.5} style={{ transform: 'scale(0.9)', transformOrigin: 'bottom' }}tick={{fill:"#FFFFFF",  fontWeight:500, fontSize:12}} tickMargin={10}  axisLine={false} interval="preserveStartEnd"/>
      <YAxis axisLine={false} tickLine={false} tick={false} domain={['dataMin - 5', 'dataMax + 5']}/>
      <Tooltip  content={<CustomTooltip/>} cursor={<CustomCursor/>}/>
      <Line type="monotone" dataKey="sessionLength"  stroke="#FFFFFF"dot={false} opacity={0.8} strokeWidth={2}/>
      <text className={styles["graphTitle"]} x="12%" y="15%" width={147} height={48}textAnchor="start" dominantBaseline="middle"  fill="#FFFFFF" style={{fontWeight:500, opacity:0.5}} > Durée moyenne des </text>
      <text className={styles["graphTitle"]} x="12%" y="25%" width={147} height={48}textAnchor="start" dominantBaseline="middle"  fill="#FFFFFF" style={{ fontWeight:500, opacity:0.5}} > sessions</text>
                    
      </LineChart>
      </ResponsiveContainer>
   </div> 
  ); 
};

export default DurationSession_Graph;