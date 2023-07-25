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

/**
 * function to target the sessions object in the cached data with the good id
 * @param {object} datas 
 * @returns sessions array in the average endpoint
 */
export const getDataSession = (datas) => {
        function sessionDay () {
        const weekDay = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
        return weekDay
    }
        const averageData = datas.average
        if (averageData) {
            const sessionsMap = averageData.sessions.map((sessions, index) => ({
                ...sessions,
                sessionLength: sessions.sessionLength,
                day: sessionDay(sessions.day)[index]
            }))
           return sessionsMap
        }
    }
    
/**
 * function to target the perform object in the cached data with the good id
 * @param {object} datas 
 * @returns sessions array in the perform endpoint
 */
 export const getDataPerform = (datas) => {
    const performData = datas.perform
    if (performData) {
        const mapData = performData
        if (mapData){
            const mapDataData= mapData.data.map(item =>{
            return {
              value: item.value,
              kind: mapData.kind[item.kind.toString()]
            }
          })
          return mapDataData
        }
    }
}

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

/**
 * function to target the calorieCount data in the cached data with the good id
 * @param {object} datas 
 * @returns sessions array in the user endpoint
 */
export const getDataCalorie = (datas) => {
    const userData = datas.user
    if (userData) {
        return userData.keyData.calorieCount;
    }
}

/**
 * function to target the proteinCount data in the cached data with the good id
 * @param {object} datas 
 * @returns sessions array in the user endpoint
 */
export const getDataProtein = (datas) => {
    const userData = datas.user
    if (userData) {
        return userData.keyData.proteinCount;
    }
}

/**
 * function to target the carbohydrateCount data in the cached data with the good id
 * @param {object} datas 
 * @returns sessions array in the user endpoint
 */
export const getDataCarbohydrate = (datas) => {
    const userData = datas.user
    if (userData) {
        return userData.keyData.carbohydrateCount;
    }
}

/**
 * function to target the lipidCount data in the cached data with the good id
 * @param {object} datas 
 * @returns sessions array in the user endpoint
 */
export const getDataLipid = (datas) => {
    const userData = datas.user
    if (userData) {
        return userData.keyData.lipidCount;
    }
}