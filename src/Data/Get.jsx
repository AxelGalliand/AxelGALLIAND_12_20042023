import React, {createContext, useState} from "react";
import axios from "axios";
import { useEffect } from "react";
import cardDataFormater from "./Formaters/CardDataFormater"




export function useRequestDatas (userId){

   const [data, setData] = useState({});
   const [isLoading, setIsLoading] = useState(false);
   const [error, SetError] = useState(false);

   useEffect(() => {
       const endPoints = [`http://localhost:3000/user/${userId}`, 
                          `http://localhost:3000/user/${userId}/activity`,
                          `http://localhost:3000/user/${userId}/average-sessions`, 
                          `http://localhost:3000/user/${userId}/performance`]; 
       
       async function getUserDatas(){
        setIsLoading(true);

           await axios.all(endPoints.map(endPoint => axios.get(endPoint)))
                      .then(axios.spread((responseUser,responseActivity,responseAverage,responsePerform) => {
                          setData({
                              user: responseUser.data.data,
                              activity: responseActivity.data.data,
                              average: responseAverage.data.data,
                              perform: responsePerform.data.data
                           });
                           setIsLoading(false);
                      }))
                      .catch(err => {
                        console.log(err)
                        SetError(true);
                      });
       }
       getUserDatas();
   }, [userId]);

   return { data, isLoading, error };
}               









// export const dataContext = createContext(null)



// export const DataContextProvider = ({ children }) => {
  
//     const [cardsData, setCardsData] = useState([])
   
//     useEffect(() => {

      
//        const userId = 18
 
//        /**
//         * urls with all endpoints
//         */
//        const userDataUrl = `http://localhost:3000/user/${userId}`
//     //    const activityUrl = `http://localhost:3000/user/${userId}/activity`
//     //    const sessionUrl = `http://localhost:3000/user/${userId}/average-sessions`
//     //    const performanceUrl = `http://localhost:3000/user/${userId}/performance`
 
//        /**
//         * using axios to make a http get request
//         */
//        const getUserData = axios.get(userDataUrl)
//     //    const getActivity = axios.get(activityUrl)
//     //    const getSession = axios.get(sessionUrl)
//     //    const getPerformance = axios.get(performanceUrl)
//        console.log(getUserData)
       
//        axios
//           .all([getUserData])
//         //   .all([getUserData, getActivity, getSession, getPerformance])
//           .then(
//              axios.spread((...allData) => {
               
//                 const cardDataFormat = new cardDataFormater(
//                    allData[0].data.data.keyData
//                 )    
//                 console.log(allData[0])
              
//                 setCardsData(cardDataFormat)
               
//              })
//           )
       
//     }, [])
   
//     const value = {
//       cardsData,
//     //    userData,
//     //    activity,
//     //    performance,
//     //    session,
//     }
//    console.log(value)
//     return <dataContext.Provider value={value}>{children}</dataContext.Provider>
//  }