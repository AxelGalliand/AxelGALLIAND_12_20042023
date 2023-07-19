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