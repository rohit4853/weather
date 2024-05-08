const apiKey="b66a55d2b13e3e134509cf8ffea65fe2";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const saerchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weathericon")

async function checkWeather(city){
    const response =await fetch(apiUrl +city +`&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{

    
    var data= await response.json();
    
    document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";
if(data.weather[0].main=="Haze"){
 weatherIcon.src="https://www.transparentpng.com/thumb/clouds/Ts3nDH-clouds-outline-png.png"
}

document.querySelector(".weather").style.display="block";
document.querySelector(".error").style.display="none";
    }
}

saerchBtn.addEventListener("click" , ()=>{
    checkWeather(searchBox.value);
})

console.log("hi...");