import React from "react";
import styles from './Header.module.css';
import Logo from './IMG/svgFolder/logo.svg'


export function Header () {
  return(
    <ul className={styles["header"]}>
      <img className={styles["header_logo"]} src={Logo} alt="logo du site"/>
        <li>Accueil</li>
        <li>Profil</li>
        <li>Réglages</li>
        <li>Communauté</li>
    </ul>
  )
}  