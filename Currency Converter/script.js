const api = "https://api.exchangerate-api.com/v4/latest/USD";
const search = document.querySelector("#amount")
const Convert = document.querySelector(".Convert")
const curencyfrom = document.querySelector(".from")
const curencyto = document.querySelector(".to")
const finalamount = document.querySelector(".result")
let resultfrom;
let resultTo
let searchValue;

curencyfrom.addEventListener('change', (event) =>{
    resultfrom = `${event.target.value}`
})
curencyto.addEventListener('change', (event) => {
    resultTo = `${event.target.value}`
})

search.addEventListener('input', updateValue)
function updateValue(e) {
    searchValue = e.target.value;
}

Convert.addEventListener('click', getresult)
function getresult() {
    fetch (`${api}`).then(currency => {
        return currency.json();
    }).then(displayreuselt)
}
function displayreuselt(currency) {
    let fromRate = currency.rates[resultfrom]
    let toRate = currency.rates[resultTo]
    finalamount.innerHTML = ((toRate / fromRate) *searchValue).toFixed(2);
    finalamount.style.display = 'block'
}

function clearval() {
    window.location.reload();
    document.getElementsByClassName('finalamount').innerHTML = "";
}
