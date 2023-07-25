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
    
    