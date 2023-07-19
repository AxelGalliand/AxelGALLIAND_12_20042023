/**
 * function to target the score object in the cached data with the good id
 * @param {object} datas 
 * @returns sessions array in the user endpoint * 100
 */
  export const getDataPercent = (datas) => {
    const userData = datas.user
    if (userData) {
        return (userData.score * 100 || userData.todayScore * 100)
    }
}