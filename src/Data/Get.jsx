import React, {createContext, useState} from "react";
import axios from "axios";
import { useEffect } from "react";
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE, } from "./Mock";




/**
 * function to cached the data in the intern server 
 * @param {number} userId id cached in the url in page.jsx 
 * @returns export this function to page.jsx
 */
export function useRequestDatas (userId){

   const [data, setData] = useState({});
   const [isLoading, setIsLoading] = useState(false);
   const [error, SetError] = useState(false);
  
  const mockedData = false
  const mockedId = 18


  if (mockedData === false) {
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
   
  } else {

    const selectedUser = USER_MAIN_DATA.filter((user) => user.userId === mockedId ) [0]
    const activityUser = USER_ACTIVITY.filter((user) => user.userId === mockedId ) [0]
    const averageUser = USER_AVERAGE_SESSIONS.filter((user) => user.userId === mockedId ) [0]
    const performUser = USER_PERFORMANCE.filter((user) => user.userId === mockedId ) [0]
    
    useEffect(() => {

     async function getUserDatas(){
      setIsLoading(true);

      setData({
          user: selectedUser,
          activity: activityUser,
          average: averageUser,
          perform: performUser
        });
        setIsLoading(false);
                    
     }
     getUserDatas();
    }, [mockedId]);
  }


   return { data, isLoading, error };
}               
