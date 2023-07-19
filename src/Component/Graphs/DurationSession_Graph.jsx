import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Rectangle } from "recharts"; 
import styles from './DurationSession_Graph.module.css';
import PropTypes from "prop-types";

/**
 * const ti creat the hover informations 
 * @param {boolean}
 * @param {array} payload array witch contains datas 
 * @returns {Jsx} return jsx element 
 */
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

CustomTooltip.prototype = {
  active: PropTypes.bool,
  payload: PropTypes.array
}

const CustomCursor = ({points}) => {
  return <Rectangle fill="#000000" opacity={0.2} x={points[1].x} width={1000} height={500} />;
};

/**
 * const to creat a charts with line who represent the duration of the sport session 
 * @param {Array} props array with relative datas
 * @returns {Jsx|Component} return a jsx div that contain the chart
 */
const DurationSession_Graph = (props) => {

  return ( 
   <div className={styles["Duration"]}>
    <ResponsiveContainer width={330} aspect={1} >
      <LineChart
        style={{backgroundColor: "#FF0000", borderRadius: "5px"}}
        width={258}
        height={263}
        data={props.data}
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
DurationSession_Graph.prototype= {
  data: PropTypes.array
}
export default DurationSession_Graph;