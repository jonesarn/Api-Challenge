const baseUrl = "http://api.exchangeratesapi.io/v1/latest?access_key=dc910983a5b9c10ef5085d83298283cc"
// Test API to see if it works
function fetchGetData(){
    fetch(`${baseUrl}`)
    .then((response) => {
        return response.json()
    })
    .then((justData) => {return justData})
}
fetchGetData()
// Grab only US Currency Data
//US Data
function getUSDData(){
    fetch(`${baseUrl}&symbols=USD`)
    .then((response) =>  {
        return response.json()
    })
    .then((justUSData) => {return justUSData.rates})
       
}
getUSDData()

//Grab Colombian Currency Data
//Colombian Data
function getCOPData(){
    fetch(`${baseUrl}&symbols=COP`)
    .then((response) => {
        return response.json()
    })
    .then((justCOPData) => {return justCOPData.rates})
}
getCOPData()
//We need to make USD
function convertFromUSD(x){
    let conversionRatetoEUR = getUSDData()
    let conversionRatetoCOL = getCOPData()
    let EURMoneys = x/ conversionRatetoEUR
    let COLMoney = EURMoneys * conversionRatetoCOL
    return COLMoney;
}
console.log(convertFromUSD(1))

/*function convertToUSD(x){
    let convertRate = getUSDData();
    let theMoney = x/ convertRate
    let CopMoney  = theMoney * convertRate
    return CopMoney;
}
console.log(convertToUSD(3));*/