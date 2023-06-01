import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from './Activity_Graph.module.css'

const data = [
  {
    day: '2020-07-01',
    kilogram: 80,
    calories: 240
},
{
    day: '2020-07-02',
    kilogram: 80,
    calories: 220
},
{
    day: '2020-07-03',
    kilogram: 81,
    calories: 280
},
{
    day: '2020-07-04',
    kilogram: 81,
    calories: 290
},
{
    day: '2020-07-05',
    kilogram: 80,
    calories: 160
},
{
    day: '2020-07-06',
    kilogram: 78,
    calories: 162
},
{
    day: '2020-07-07',
    kilogram: 76,
    calories: 390
}
];

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

const Activity_Graph = () => {

    return (
     <div className={styles["Activity"]}>
      <ResponsiveContainer >
      <BarChart
                width={835}
                height={320}
                data={data}
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
export default Activity_Graph;
