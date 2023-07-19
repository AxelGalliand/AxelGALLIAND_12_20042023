import React from 'react';
import { RadialBarChart, RadialBar,  ResponsiveContainer, PolarAngleAxis} from 'recharts';
import styles from "./Performance_Graph.module.css";
import PropTypes from "prop-types";

/**
 * const to creat a charts with circular bar to show the progretion to the objective in %
 * @param {Array} props array with relative datas
 * @returns {JSX|Component} return a Jsx div that contain the chart 
 */
const Percent_Graph = (props) => {

  const data = 
  [{
    uv: props.data,
    fill: '#E60000'
  }]

  return (
    <div className={styles["Percent"]}>
      <ResponsiveContainer  width={330} aspect={1}>
        <RadialBarChart cx="50%" cy="50%" style={{backgroundColor: "#FBFBFB", borderRadius: "5px"}} width="100%" height="100%" margin={{ top: 30, right: 30, bottom: 30, left: 30 }} innerRadius={70}  barSize={10} data={[data]} startAngle={90} endAngle={450} >
          <circle cx="50%" cy="50%" fill="white" r="82"></circle>
          <PolarAngleAxis type='number' domain={[0, 100]} angleAxisId={1} tick={false}/>
          <RadialBar background dataKey="uv" angleAxisId={1} fill="#E60000" cornerRadius="10" data={[data[0]]} />
          <text className={styles['scoreSize']} fontWeight="700" fontSize={26} fill='#282D30' x="50%" y="45%" textAnchor='middle'>{`${props.data}%`}</text>
          <text className={styles['graphTitle']} fontWeight="500" fill='#74798C' x="50%" y="55%" textAnchor='middle'>de votre</text>
          <text className={styles['graphTitle']} fontWeight="500" fill='#74798C' x="50%" y="65%" textAnchor='middle'>objectif</text>
          <text className={styles['graphTitle']} x="12%" y="15%" width={147} height={48} textAnchor="start" dominantBaseline="middle" fill="#20253A" style={{ fontWeight:500}} > Score </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};
Percent_Graph.prototype = {
  data: PropTypes.number
}

export default Percent_Graph;


