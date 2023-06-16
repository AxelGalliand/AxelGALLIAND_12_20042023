import React, {useContext} from "react";
import styles from "./Cards.module.css";

import { useRequestDatas } from "../../Data/Get";


/**
 * 
 * @param {*} props data, image, unit, text
 * @returns {JSXElement}
 */
const Cards = (props) => {


  
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

 export default Cards;

