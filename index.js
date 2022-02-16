const baseUrl = "http://api.exchangeratesapi.io/v1/latest?access_key=dc910983a5b9c10ef5085d83298283cc"
function fetchGetData(){
    fetch(`${baseUrl}`)
    .then((response) => {
        return response.json()
    })
    .then((justData) => console.log(justData))
}
fetchGetData()

//US Data
function getUSDData(){
    fetch(`${baseUrl}&symbols=USD`)
    .then((response) => {
        return response.json()
    })
    .then((justUSData) => console.log(justUSData))
      
}
getUSDData()

//Colombian Data
function getCOPData(){
    fetch(`${baseUrl}&symbols=COP`)
    .then((response) => {
        return response.json()
    })
    .then((justCOPData) => console.log(justCOPData))
}
getCOPData()
//We need to make USD
/*function convertFromUSD(x){
    let conversionRatetoEUR = getUSDData()
    let EURMoneys = x/ conversionRatetoEUR
    let COLMoney = EURMoneys * conversionRatetoCOL
    return COLMoney;
}
convertFromUSD(1)
*/
function convertToUSD(x){
    let convertRate = getUSDData();
    let theMoney = x/ convertRate
    let ColMoney  = theMoney * convertRate
    return ColMoney;
}
console.log(convertToUSD(3));
