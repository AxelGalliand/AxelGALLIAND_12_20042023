import React, {useContext} from "react";
import styles from "./Cards.module.css";
import caloriesIcon from "../IMG/svgFolder/calories.svg";
import proteinIcon from "../IMG/svgFolder/proteines.svg";
import glucidesIcon from "../IMG/svgFolder/glucides.svg";
import lipidesIcon from "../IMG/svgFolder/lipides.svg";
import { dataContext } from "../../Data/Get";


/**
 * 
 * @param {*} props data, image, unit, text
 * @returns {JSXElement}
 */
const Cards = (props) => {

  console.log(cardsData);
  
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

  const {cardsData} = useContext(dataContext)
  console.log(cardsData);

  return (
  <div className={styles['cards']}>
    <Cards image={caloriesIcon} data={cardsData.calorieCount} unit="Kcal" text="Calories"/>
    <Cards image={proteinIcon} data={cardsData.proteinCount} unit="g" text="Protéines"/>
    <Cards image={glucidesIcon} data={cardsData.carbohydrateCount} unit="g" text="Glucides"/>
    <Cards image={lipidesIcon} data={cardsData.lipidCount} unit="g" text="Lipides"/>
  </div>
  )
}
export default CardsBrut;