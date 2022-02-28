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
const baseUrl =   "http://api.exchangeratesapi.io/v1/latest?access_key=dc910983a5b9c10ef5085d83298283cc";
// Test API to see if it works
function fetchGetData() {  
    fetch(`${baseUrl}`)    .then((response) => {       return response.json();     })    .then((justData) => {       return justData;     });
}
fetchGetData();
/////////////// FIRST STEP  DECLARE VARIABLES ///////////////

let firstRate; // our first variable of our equation
let amountOfMoney; // the amount of money the user wants to convert
let secondRate; // our second variable of our equation
let newData; // the data we copied from our api

async function getCurrencyData() {  
    let response = await fetch(`${baseUrl}&symbols=COP,USD,CAD,MXN,EUR`);  
    let data = await response.json();  
    if (data) {     // checking if our data is fetched (not null or undefined)
            
        newData = {       // copying the data from the api
                   colombia: data.rates.COP,       usd: data.rates.USD,       canada: data.rates.CAD,       mexico: data.rates.MXN,      };     // }
             //initial state...
            
        firstRate = newData.usd;    
        secondRate = newData.usd;  
    }

      
    console.log("the new data", newData);
}
getCurrencyData();
///////////////// FIRST SET OF DROPDOWNS //////////////////////
const firstSelection = document.getElementById("country2convert"); //our first dropdown

firstSelection.addEventListener("change", () => {   // we are getting the  value of our first set of dropdowns
      
    const dropdownValueOne = firstSelection.value;  
    switch (    dropdownValueOne // switch statement to check what the value is and set the data accordingly
          ) {    
        case "colombia": // if the value of our dropdown is colombia try setting this code... to the variable we set up top which is the global scope
                  firstRate = newData.colombia;      
            break;    
        case "us":
                  firstRate = newData.usd;      
            break;    
        case "canada":
                  firstRate = newData.canada;      
            break;    
        case "mexico":
                  firstRate = newData.mexico;      
            break;    
        default:
                  break;  
    }  
    console.log(`the first rate for ${dropdownValueOne} is: `, firstRate);
});
////////////// SECOND SET OF DROPDOWNS //////////////
const secondSelection = document.getElementById("countryConverted"); // our second dropdown
secondSelection.addEventListener("change", () => {   // we are getting the  value of our second set of dropdowns
      
    const dropdownValueTwo = secondSelection.value;  
    switch (    dropdownValueTwo // switch statement to check what the value is and set the data accordingly
          ) {    
        case "colombia": // if the value of our dropdown is colombia try setting this code... to the variable we set up top which is the global scope
                  secondRate = newData.colombia;      
            break;    
        case "us":
                  secondRate = newData.usd;      
            break;    
        case "canada":
                  secondRate = newData.canada;      
            break;    
        case "mexico":
                  secondRate = newData.mexico;      
            break;    
        default:
                  break;  
    }  
    console.log(`the second rate for ${dropdownValueTwo} is: `, secondRate);
});
const inputAmount = document.getElementById("inputAmount"); // our input
inputAmount.addEventListener("input", () => {  
    amountOfMoney = inputAmount.value;  
    const number = parseFloat(amountOfMoney);  
    amountOfMoney = number;  
    console.log("this is our input: ", number);
});

function convertRate2Money() {  
    const inputAmount = document.getElementById("inputAmount");   //   if (inputAmount && typeof inputAmount === Number) {
       // if its truthy and a number
      
    if (inputAmount.value) {     // checking if its truthy or there is a value
            
        const mulitplied = Math.imul(amountOfMoney, secondRate);    
        const valueOfMoney = firstRate / mulitplied;    
        console.log(valueOfMoney);    
        document.getElementById(      "display"    ).innerHTML = `your converted currency is: ${valueOfMoney}`;  
    }   //   }
}
const convertButton = document.getElementById("convertMoney"); // our button
convertButton.addEventListener("click", convertRate2Money);