import React from "react";
import { useRequestDatas } from "../../Data/Get"


  /**
   * 
   * @returns {number} new format map
   */
  export const getData = () => {
    const userData = useRequestDatas(18).data.user
    if (userData) {
        return (userData.score * 100 || userData.todayScore * 100)
    }
}