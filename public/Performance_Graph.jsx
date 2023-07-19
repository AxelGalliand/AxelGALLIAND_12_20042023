import React, { Component } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer} from 'recharts';
import styles from './Performance_Graph.module.css';
import PropTypes from "prop-types";

/**
 * const to creat a charts with hexagon who represent different datas of User activities
 * @param {Array} props array with relative datas
 * @returns {JSX|Component} return a Jsx div that contain the chart  
 */
const Performance_Graph = (props) => {
  return (
    <div className={styles["Performance"]}>
        <ResponsiveContainer   width={330} aspect={1} >
        <RadarChart cx="50%" cy="50%" outerRadius="80%" style={{backgroundColor: "#282D30", borderRadius: "5px"}} data={props.data}>
          <PolarGrid radialLines={false}/>
          <PolarAngleAxis dataKey="kind" tickLine={false} axisLine={false} dy={5} stroke="#FFF" tick={{fill:"#FFFFFF",fontSize:10}} />
          <PolarRadiusAxis tick={false} tickCount={6} axisLine={false} stroke="#FFFFFF"/>
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
Performance_Graph.prototype= {
  data: PropTypes.array
}
export default Performance_Graph;