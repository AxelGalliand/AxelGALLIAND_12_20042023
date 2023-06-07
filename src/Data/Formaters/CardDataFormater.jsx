class cardDataFormater {
    constructor(keyData) {
        this.keyData = keyData
        this.calories = keyData.calorieCount
        this.proteines = keyData.proteinCounts
        this.glucides = keyData.carbohydrateCount
        this.lipides = keyData.lipidCount
    }
}
export default cardDataFormater