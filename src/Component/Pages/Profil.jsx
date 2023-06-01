import styles from "./Profil.module.css"
import yoga from "../IMG/svgFolder/yoga.svg"
import swim from "../IMG/svgFolder/swim.svg"
import bike from "../IMG/svgFolder/bike.svg"
import bumbbell from "../IMG/svgFolder/dumbbell.svg"
import Activity_Graph from "../Graphs/Activity_Graph"
import DurationSession_Graph from "../Graphs/DurationSession_Graph"
import Performance_Graph from "../Graphs/Performance_Graph"
import  Percent_Graph  from "../Graphs/Percent_Graph"
import CardsBrut from "../Cards/Cards.jsx"


export function Page () {
  return(
    <div className={styles["Page"]}>

      <div className={styles["SideBar"]}>
        <div className={styles["SportIcons"]}>
          <div className={styles["SportIcons_list"]}>
            <img src={yoga} alt="yoga"/>
            <img src={swim} alt="swim"/>
            <img src={bike} alt="bike"/>
            <img src={bumbbell} alt="dumbbell"/>
          </div>
        </div>
        <span className={styles["copyright"]}> Copyright SportSee 2020</span>    
      </div>

      <div className={styles["Info"]}>
        <h1>Bonjour Thomas</h1>
        <span className={styles["Info_Span"]}> Félicitations ! Vous avez explosé vos objectifs hier 👏</span>
        <div className={styles["Dashboard"]}>
          <div className={styles["Graph"]}>
            <Activity_Graph/>
            <div className={styles["Graph_edge"]}>
              <DurationSession_Graph/>
              <Performance_Graph/>
              <Percent_Graph/>
            </div>
          </div>
          <div className={styles["Count"]}>
            <CardsBrut/>
          </div>
        </div>
      </div>
    </div>  
    
  )
}