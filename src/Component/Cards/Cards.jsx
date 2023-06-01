import React from "react";
import styles from "./Cards.module.css";
import caloriesIcon from "../IMG/svgFolder/calories.svg";
import proteinIcon from "../IMG/svgFolder/proteines.svg";
import glucidesIcon from "../IMG/svgFolder/glucides.svg";
import lipidesIcon from "../IMG/svgFolder/lipides.svg";


const user_score = [
  {
    id: 12,
    userInfos: {
        firstName: 'Karl',
        lastName: 'Dovineau',
        age: 31,
    },
    todayScore: 0.12,
    keyData: {
        calorieCount: 1930,
        proteinCount: 155,
        carbohydrateCount: 290,
        lipidCount: 50
    }
}
]



const Cards = (props) => {
  
console.log('data' ,props.data)
console.log('image' ,props.image)
console.log('unit' ,props.unit)
console.log('text' ,props.text)


  return (
      <div className={styles["Card"]}>
          <img src={props.image} alt="" className={styles["CardImg"]}/>
          <div className={styles["CardTxt"]}>
              <h3 className={styles["CardUnit"]}>{props.data}{props.unit}</h3>
              <p className={styles["CardDenom"]}>{props.text}</p>
          </div>
      </div>
  );
};

 Cards;

const CardsBrut = () => {

  return (
  <div className={styles['cards']}>
    <Cards image={caloriesIcon} data={user_score[0].keyData.calorieCount} unit="Kcal" text="Calories"/>
    <Cards image={proteinIcon} data={user_score[0].keyData.proteinCount} unit="g" text="Protéines"/>
    <Cards image={glucidesIcon} data={user_score[0].keyData.lipidCount} unit="g" text="Glucides"/>
    <Cards image={lipidesIcon} data={user_score[0].keyData.carbohydrateCount} unit="g" text="Lipides"/>
  </div>
  )
}
export default CardsBrut;