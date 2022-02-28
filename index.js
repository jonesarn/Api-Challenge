// break down it
// step 2. get 2nd country (Colombia)
// step 3. get number (1 USD)
// step 4. convert USD to EUR
// step 4a. fetch rate from USD to ERU (async)
// step 4b. convert and get EUR number <-- book processB to do this
// step 5. convert EUR to COL
// step 5a. fetch rate from EUR to COL (async)
// step 5b. convert and get COL number <-- book processC to do this

//fetching currency in API
const baseUrl = "http://api.exchangeratesapi.io/v1/latest?access_key=dc910983a5b9c10ef5085d83298283cc"
    // Test API to see if it works
function fetchGetData() {
    fetch(`${baseUrl}`)
        .then((response) => {
            return response.json()
        })
        .then((justData) => { return justData })
}
fetchGetData();

async function getCurrencyData() {
    let response = await fetch(`${baseUrl}&symbols=COP,USD,CAD,MXN,EUR`);
    let data = await response.json();
    console.log(data)
    grabRate(data);
}
getCurrencyData();


function grabRate(currency) {
    //want to grab currency and add currency rate from the country
    //currency put in a variable
    let cop = currency.rates.COP;
    let usd = currency.rates.USD;
    let cad = currency.rates.CAD;
    let mxn = currency.rates.MXN;
    let eur = currency.rates.EUR;

    //const getFirstCountry = document.getElementsByClassName("country2convert");
    /*let cop2 = currency2.rates.COP;
        let usd2 = currency2.rates.USD;
        let cad2 = currency2.rates.CAD;
        let mxn2 = currency2.rates.MXN;
        let eur2 = currency2.rates.EUR;
    */
    //now we grab the two currencies
    // first currency
    //document.getElementById("country2convert").
};

//grab dropdown element- eventually want this in my grab currency 
let firstSelection = document.querySelector('select');
let result = document.querySelector("span");
firstSelection.addEventListener('change', () => {
    result.innerText.firstSelection.options[firstSelection.selectedIndex].value;
    console.log(firstSelection.selectedIndex);
})

function convertRate2Money() {
    let firstRate;
    let secondRate;
    //console.log((usd) / eur) //should equal around .88 cents which mean every one dollar for eur money = .88usd
    //console.log(100 * (cop) / (usd))
    //console.log(cop / usd)
    //grab number 
    amountOfMoney = document.getElementById('amountOne');
    console.log(amountOne.value)

    if (amountOfMoney = NaN) {
        console.log("This is not a number");
        window.alert("This is not a number");
    } else if (amountOfMoney != NaN) {
        let valueOfMoney = (firstRate) / (amountOfMoney * secondRate);
        console.log(valueOfMoney);
    }
}
convertRate2Money();