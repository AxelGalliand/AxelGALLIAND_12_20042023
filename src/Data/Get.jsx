import axios from "axios";
import React, {createContext, useState} from "react";
import { useEffect } from "react";
import cardDataFormater from "./Formaters/CardDataFormater"


export const dataContext = createContext(null)

 

export const DataContextProvider = ({ children }) => {
  
    const [cardsData, setCardsData] = useState([])
   
    useEffect(() => {

      
       const userId = 18
 
       /**
        * urls with all endpoints
        */
       const userDataUrl = `http://localhost:3000/user/${userId}`
    //    const activityUrl = `http://localhost:3000/user/${userId}/activity`
    //    const sessionUrl = `http://localhost:3000/user/${userId}/average-sessions`
    //    const performanceUrl = `http://localhost:3000/user/${userId}/performance`
 
       /**
        * using axios to make a http get request
        */
       const getUserData = axios.get(userDataUrl)
    //    const getActivity = axios.get(activityUrl)
    //    const getSession = axios.get(sessionUrl)
    //    const getPerformance = axios.get(performanceUrl)
       console.log(getUserData)
       
       axios
          .all([getUserData])
        //   .all([getUserData, getActivity, getSession, getPerformance])
          .then(
             axios.spread((...allData) => {
               
                const cardDataFormat = new cardDataFormater(
                   allData[0].data.data.keyData
                )    
                console.log(allData[0])
              
                setCardsData(cardDataFormat)
               
             })
          )
       
    }, [])
   
    const value = {
      cardsData,
    //    userData,
    //    activity,
    //    performance,
    //    session,

    }
   
    return <dataContext.Provider value={value}>{children}</dataContext.Provider>
 }