/**
 * function to target the sessions object in the cached data with the good id
 * @param {object} datas  
 * @returns sessions array in the activity endpoint
 */
export const getDataActivity = (datas) => {
    const activityData = datas.activity
    if (activityData) {
        return activityData.sessions;
    }
}