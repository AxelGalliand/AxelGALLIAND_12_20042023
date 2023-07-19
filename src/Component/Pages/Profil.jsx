import {useParams} from "react-router-dom";
import styles from "./Profil.module.css"
import yoga from "../IMG/svgFolder/yoga.svg"
import swim from "../IMG/svgFolder/swim.svg"
import bike from "../IMG/svgFolder/bike.svg"
import bumbbell from "../IMG/svgFolder/dumbbell.svg"
import Activity_Graph from "../Graphs/Activity_Graph"
import DurationSession_Graph from "../Graphs/DurationSession_Graph"
import Performance_Graph from "../Graphs/Performance_Graph"
import Percent_Graph  from "../Graphs/Percent_Graph"
import Cards from "../Cards/Cards.jsx"
import caloriesIcon from "../IMG/svgFolder/calories.svg";
import proteinIcon from "../IMG/svgFolder/proteines.svg";
import glucidesIcon from "../IMG/svgFolder/glucides.svg";
import lipidesIcon from "../IMG/svgFolder/lipides.svg";
import { useRequestDatas } from "../../Data/Get"
import { getDataActivity } from "../../Data/Formaters/Activity_GraphFormater";
import { getDataSession } from "../../Data/Formaters/DurationSession_GraphFormater";
import { getDataPerform } from "../../Data/Formaters/Performance_GraphFormater"; 
import { getDataPercent } from "../../Data/Formaters/Percent_GraphFormater";
import { getDataCalorie } from "../../Data/Formaters/CardDataFormater";
import { getDataProtein } from "../../Data/Formaters/CardDataFormater";
import { getDataCarbohydrate } from "../../Data/Formaters/CardDataFormater";
import { getDataLipid } from "../../Data/Formaters/CardDataFormater";

/**
 * const to create the personal graph page 
 * 
 */
export const Page = () => {

  let {id}  = useParams();

  const { data } = useRequestDatas(id);

  const cachedDataFirst = () => {
    const userData = data.user
    if (userData) {
        return userData.userInfos.firstName;
    }
}

const cachedDataActivity = getDataActivity (data)
const cachedDataSession = getDataSession (data)
const cachedDataPerform = getDataPerform (data)
const cachedDataPercent = getDataPercent (data)

const cachedDataCalorie = getDataCalorie(data)
const cachedDataProtein = getDataProtein(data)
const cachedDataCarbonhydrate = getDataCarbohydrate(data)
const cachedDataLipid = getDataLipid(data)


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
        <h1>Bonjour {cachedDataFirst()}</h1>
        <span className={styles["Info_Span"]}> Félicitations ! Vous avez explosé vos objectifs hier 👏</span>
        <div className={styles["Dashboard"]}>
          <div className={styles["Graph"]}>
            <Activity_Graph data={cachedDataActivity}/>
            <div className={styles["Graph_edge"]}>
              <DurationSession_Graph data={cachedDataSession}/>
              <Performance_Graph data={cachedDataPerform}/>
              <Percent_Graph data={cachedDataPercent}/>
            </div>
          </div>
          <div className={styles["Count"]}>
          <Cards image={caloriesIcon} data={cachedDataCalorie} unit="Kcal" text="Calories"/>
          <Cards image={proteinIcon} data={cachedDataProtein} unit="g" text="Protéines"/>
          <Cards image={glucidesIcon} data={cachedDataCarbonhydrate} unit="g" text="Glucides"/>
          <Cards image={lipidesIcon} data={cachedDataLipid} unit="g" text="Lipides"/>
          </div>
        </div>
      </div>
    </div>  
  )
}
export default Page;