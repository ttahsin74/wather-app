 const inputElm = document.querySelector("input")
 const searchElm = document.querySelector("i")
 const degreeElm = document.querySelector(".degree")
 const cityElm = document.querySelector(".city")
const humidityElm = document.querySelector(".humidity")
const windElm = document.querySelector(".wind")
const dateElm = document.querySelector(".dates")
const messageElm = document.querySelector(".message")


const apiKey = "a08b1a9bf1520883b9d26e23c5986abc";
const apiUrl = " https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let cityName= inputElm.value;
async function weather(city) {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
    let data = await response.json();
    // console.log(data);
    
    
    degreeElm.innerHTML= `${Math.round(data.main.temp)} C`;
    cityElm.innerHTML= data.name;
    humidityElm.innerText = `${data.main.humidity}%`
    windElm.innerText = `${data.wind.speed}km/h`
    // return cityName = data.name;
}


searchElm.addEventListener("click",search)
async function search() {
    let value = inputElm.value;
    const response = await fetch(`${apiUrl}${value}&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);
    inputElm.value=""
    if (response.status != 404) {
        weather(value)
        
    } else {
        messageElm.innerText= "Not Match Any city name"
        messageElm.style.color = "red"
    }
    date()
}
let dayName =["Sunday","Monday", "Tuesday", "Wednesday","Thusday","Friday","Saturday"];
function date() {
    let today = new Date()
    let day = today.getDay();
    let todayDay=dayName[day]
    let month = today.getMonth()
    let date = today.getDate()
    let year = today.getFullYear()

    dateElm.innerText = `${todayDay}, ${date}/${month}/${year}`
}

