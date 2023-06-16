import React from "react";
import { useRequestDatas } from "../../Data/Get"

const user_score = [
    {
      id: 12,
      userInfos: {
          firstName: 'Karl',
          lastName: 'Dovineau',
          age: 31,
      },
      todayScore: 0.12,
      keyData: {
          calorieCount: 1930,
          proteinCount: 155,
          carbohydrateCount: 290,
          lipidCount: 50
      }
  }
  ]
  
  /**
   * 
   * @returns {Array} new format map
   */
  export const getData = () => {

    console.log(useRequestDatas(18).data.user)
  
    const scoreData = user_score[0].todayScore * 100

     return scoreData
   }