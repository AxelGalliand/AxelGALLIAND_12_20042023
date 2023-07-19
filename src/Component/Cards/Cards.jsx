import React, {Component} from "react";
import styles from "./Cards.module.css";
import PropTypes from "prop-types";

/**
 * const to creat a card with the user details
 * @param {string} image link for a svg 
 * @param {number} data 
 * @param {string} unit
 * @param {string} text nutrient type
 * @returns {JSX|Component} return a jsx div with 
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
Cards.prototype = {
    image: PropTypes.string,
    data: PropTypes.number,
    unit: PropTypes.string,
    text: PropTypes.string
}
 export default Cards;