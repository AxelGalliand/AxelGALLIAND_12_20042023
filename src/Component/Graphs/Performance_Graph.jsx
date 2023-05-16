import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer} from 'recharts';
import styles from './Performance_Graph.module.css';


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

const performance1 = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
  },
];

export default function Performance_Graph () {
  return (
    <div className={styles["Performance"]}>
        <ResponsiveContainer   width="100%" aspect={1} >
        <RadarChart cx="50%" cy="50%" outerRadius="80%" style={{backgroundColor: "#282D30", borderRadius: "5px"}} data={performance}>
          <PolarGrid radialLines={false}/>
          <PolarAngleAxis dataKey="kind" tickLine={false} axisLine={false} dy={5} stroke="#FFF" tick={{fill:"#FFFFFF",fontSize:12}} />
          <PolarRadiusAxis tick={false} tickCount={6} axisLine={false} stroke="#FFFFFF"/>
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
);
}