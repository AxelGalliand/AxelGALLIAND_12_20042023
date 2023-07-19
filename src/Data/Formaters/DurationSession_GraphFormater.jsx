/**
 * function to target the sessions object in the cached data with the good id
 * @param {object} datas 
 * @returns sessions array in the average endpoint
 */
export const getDataSession = (datas) => {
    const averageData = datas.average
    if (averageData) {
        return averageData.sessions;
    }
}