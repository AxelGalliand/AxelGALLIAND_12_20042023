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