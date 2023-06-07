import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer} from 'recharts';
import styles from './Performance_Graph.module.css';

/**
 * @type {Array}
 */
const performance = [
  {
      userId: 12,
      kind: {
          1: 'cardio',
          2: 'energy',
          3: 'endurance',
          4: 'strength',
          5: 'speed',
          6: 'intensity'
      },
      data: [
          {
              value: 80,
              kind: 1
          },
          {
              value: 120,
              kind: 2
          },
          {
              value: 140,
              kind: 3
          },
          {
              value: 50,
              kind: 4
          },
          {
              value: 200,
              kind: 5
          },
          {
              value: 90,
              kind: 6
          }
      ]
  }]

/**
 * 
 * @returns {Array} new format map
 */
const getData = () => {

 const mapData = performance[0].data.map(item =>{
    return {
      value: item.value,
      kind: performance[0].kind[item.kind.toString()]
    }
  })
  return mapData
}

const Performance_Graph = () => {
  return (
    <div className={styles["Performance"]}>
        <ResponsiveContainer   width={330} aspect={1} >
        <RadarChart cx="50%" cy="50%" outerRadius="80%" style={{backgroundColor: "#282D30", borderRadius: "5px"}} data={getData()}>
          <PolarGrid radialLines={false}/>
          <PolarAngleAxis dataKey="kind" tickLine={false} axisLine={false} dy={5} stroke="#FFF" tick={{fill:"#FFFFFF",fontSize:10}} />
          <PolarRadiusAxis tick={false} tickCount={6} axisLine={false} stroke="#FFFFFF"/>
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
export default Performance_Graph;