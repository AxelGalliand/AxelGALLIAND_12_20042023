/**
 * function to target the sessions object in the cached data with the good id
 * @param {object} datas  
 * @returns sessions array in the activity endpoint
 */

export const getDataActivity = (datas) => {
    const activityData = datas.activity
    if (activityData) {
    const sessionMap = activityData.sessions.map((sessions, index) => ({
        ...sessions,
        kilogram: sessions.kilogram,
        calories: sessions.calories,
        day: (index + 1).toString()
    }))
    return sessionMap
  
  }
  }