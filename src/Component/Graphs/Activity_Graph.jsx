import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from './Activity_Graph.module.css';
import PropTypes from "prop-types";

/**
 * custom tooltip for the hover information 
 * @param {boolean} 
 * @param {array} payload array witch contains datas 
 * @returns {jsx|Component} return the required component
 */
const CustomTooltip=({active, payload})=>{
    if (active) {
        return (
            <div className={styles["customTooltip"]}>
                <p className={styles["tooltipData"]}>{`${payload[0].value} `}kg</p>
                <p className={styles["tooltipData"]}>{`${payload[1].value} `}Kcal</p>
            </div>
        );
}
return null;
}

CustomTooltip.prototype = {
    active: PropTypes.bool,
    payload: PropTypes.array
}

/**
 * const to creat a charts with bars to shows the kilograms and the calories 
 * @param {Array} data array with relative datas
 * @returns {Jsx|Component} return a jsx div that contain the chart
 */
const Activity_Graph = (props) => {
    return (
     <div className={styles["Activity"]}>
      <ResponsiveContainer >
      <BarChart
                width={835}
                height={320}
                data={props.data}
                margin={{
                    top: 80,
                    right: 50,
                    left: 45,
                    bottom: 20,
                }}
                barSize={7}
                barGap={8}
                barCategoryGap={54}
            >
          <CartesianGrid strokeDasharray="3 3" vertical={false}/>
          <XAxis dataKey="day" tickLine={false}  stroke=" #DEDEDE" tick={{fill:"#9B9EAC", fontWeight:500, fontSize:14}} padding={{ left: -47, right: -48 }} tickMargin={16}/>
          <YAxis yAxisId="kilogram" tickLine={false} orientation="right" axisLine={false} tick={{fill:"#9B9EAC", fontWeight:500, fontSize:14}} tickMargin={45} minTickGap={27} dataKey={'kilogram'} domain={['dataMin - 10', 'dataMax +1']} allowDataOverflow={true}/>
          <YAxis yAxisId="calories" tickLine={false} orientation="right" axisLine={false} tick={{fill:"#9B9EAC", fontWeight:500, fontSize:14}} tickMargin={45} minTickGap={27} dataKey={'calories'} domain={['dataMin - 10', 'dataMax +10']} allowDataOverflow={true}/>
          <Tooltip content={<CustomTooltip/>}/>
          <Legend className='activityLegend' verticalAlign='top' align='right' iconType={"circle"} iconSize={8} width={277} height={25} wrapperStyle={{ top: 35, right: 26 }}  formatter={(value) => {
                return <span style={{ color: "#74798C", fontSize:14, fontWeight:500}}>{value}</span>;
            }}/>

          <Bar dataKey="kilogram"  yAxisId="kilogram" name="Poids (kg)" fill="#282D30" radius={[4, 4,0,0]} />
          <Bar dataKey="calories"  yAxisId="calories" name="Calories brûlées (kCal)" fill="#E60000" radius={[4, 4,0,0]} maxBarSize={14} />
          <text x="5%" y="15%" width={147} height={48}textAnchor="start" dominantBaseline="middle"  fill="#20253A" style={{ fontWeight:500}} >
          Activité quotidienne </text>
        </BarChart>
      </ResponsiveContainer>
     </div> 
    ); 
}

Activity_Graph.prototype= {
    data: PropTypes.array
}
export default Activity_Graph;