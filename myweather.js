const apiKey = "231948b88d712c82621316430e5ae67b"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");
async function checkwether(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "https://tse1.mm.bing.net/th?id=OIP.v3wkO2rF_rC83NO6oG_eWQHaE8&pid=Api&rs=1&c=1&qlt=95&w=154&h=102";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "https://tse1.mm.bing.net/th?id=OIP.QXYu8JqMdwfnNnAlDTuoGQHaFN&pid=Api&rs=1&c=1&qlt=95&w=146&h=102";
    }
    else if(data.weather[0].main == "Rainy"){
        weatherIcon.src = "https://tse1.mm.bing.net/th?id=OIP._WBQtcrpwA8MFXaKMW8d8QHaJ7&pid=Api&rs=1&c=1&qlt=95&w=72&h=97";
    }
    else if(data.weather[0].main == "Suny"){
        weatherIcon.src = "https://tse1.mm.bing.net/th?id=OIP._6UW1704oYjKYfVcf84iMgHaEc&pid=Api&rs=1&c=1&qlt=95&w=162&h=97";
    }
    else if(data.weather[0].main == "Wind"){
        weatherIcon.src = "https://tse1.mm.bing.net/th?id=OIP.CBs-jM4rfcfu-Pr-1niePwHaGn&pid=Api&rs=1&c=1&qlt=95&w=109&h=97";
    }
        
}

searchBtn.addEventListener("click", ()=>{
    checkwether(searchBox.value)
})

setInterval(() =>{
    let date = new Date();
    let time = date.toLocaleTimeString();
    let newTime = document.getElementById("myclock").innerHTML = time;
         console.log(newTime);
    

}, 1000)