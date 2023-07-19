import React, {createContext, useState} from "react";
import axios from "axios";
import { useEffect } from "react";


/**
 * function to cached the data in the intern server 
 * @param {number} userId id cached in the url in page.jsx 
 * @returns export this function to page.jsx
 */
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
