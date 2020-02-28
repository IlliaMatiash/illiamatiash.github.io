	let clock = $('.clock').FlipClock({
		clockFace: 'TwelveHourClock'
	});

// Preloader
let preloader = document.getElementById('page-preloader');
function preloaderActive(){
	document.body.onload =function(){
		timePreloader();
	}
}

function timePreloader(){
	setTimeout(function(){			
		if(!preloader.classList.contains('done')){
			preloader.classList.add('done');
		}
	}, 1000);
}
preloaderActive();

const nameCity = document.querySelector(".section-town");
const sectionWeather = document.querySelector(".section-weather");
const btnSendCity = document.querySelector('#send');


function creatElement(element){
	return document.createElement(`${element}`);
}

listCity.forEach(function(city){
	let addOption = document.createElement('option');
	addOption.innerHTML = city.city_name;
	citys.append(addOption);
});

function zeroingSectionWeather(){
	sectionWeather.innerHTML = "";
}


function createContent(widthDiv, element, data){
	const divWithInfoWeather = creatElement("div");
	const pTimeZone = creatElement('p');
	pTimeZone.innerHTML = `Time zone: ${element.timezone}`;
	const pCity = creatElement('p');
	pCity.innerHTML = `Weather in: ${element.city_name}`;
	const pData = document.createElement("p");
	pData.innerHTML = `Date: ${data.valid_date}`;
	const pTemp = creatElement("p");
	pTemp.innerHTML = `Temp. &degС: ${data.temp}`;
	const pMaxTemp = creatElement("p");
	pMaxTemp.innerHTML = `Max Temp. &degС: ${data.max_temp}`;
	const pMinTemp = creatElement("p");
	pMinTemp.innerHTML = `Min Temp. &degС: ${data.min_temp}`;
	const pDescription = creatElement("p");
	pDescription.innerHTML = `Description: ${data.weather.description}`;
	const img = document.createElement("img");
	img.src = `icons/${data.weather.icon}.svg`;
	divWithInfoWeather.className = "section-weather__content";
	divWithInfoWeather.style.width = widthDiv;
	divWithInfoWeather.append(pTimeZone);
	divWithInfoWeather.append(pCity);
	divWithInfoWeather.append(pData);
	divWithInfoWeather.append(pTemp);
	divWithInfoWeather.append(pMaxTemp);
	divWithInfoWeather.append(pMinTemp);
	divWithInfoWeather.append(pDescription);
	divWithInfoWeather.append(img);
	sectionWeather.append(divWithInfoWeather);
	timePreloader();
	
}

function getCity(element){
	return fetch(element).then(response => {
			return response.json();
  }).catch(error => {
  	alert(`We can not download data, please check your internet connection`);
  })
};

function boxWithContent(data, index){
	let width = 99/index;
	let infoAboutCity = data;
	for(let i = 0; i < index; i++){
		let info = infoAboutCity.data[i];
		// WeatherIn(info);
		createContent(`${width}%`,infoAboutCity, info);
	}
}

btnSendCity.addEventListener('click', ()=> {
	zeroingSectionWeather();
	preloader.classList.remove('done');
	const nameEl = document.querySelector('#cityName');
	if(nameEl.value !== ""){
		let API = `https://api.weatherbit.io/v2.0/forecast/daily/current?city=${nameEl.value},UA&key=decd910556e6453dbbf85c4c4c16f733`;
		getCity(API).then(data => {
			boxWithContent(data, 5);
		});
 	} else {
			alert("You do not choose a city please select a city");
		 }
});

function apiForShowPosition(positionLat,positionLon){
	let API = `https://api.weatherbit.io/v2.0/forecast/daily/current?lat=${positionLat}&lon=${positionLon}&key=decd910556e6453dbbf85c4c4c16f733`;
	getCity(API).then(data => {
		// let info = data.data[0];
		boxWithContent(data, 5);
	});
}

function getLocation() {
	
  if (navigator.geolocation) {
	zeroingSectionWeather();
	preloader.classList.remove('done');
  	// if(localStorage.length > 0){
  		let lat = localStorage.getItem('latitude');
				let lon = localStorage.getItem('longitude');
  		apiForShowPosition(lat,lon);
  	// }	else {
    // 		navigator.geolocation.getCurrentPosition(showPosition);
  	// 		}
  	
  } else { 
    alert("Geolocation is not supported by this browser.");
  }
}
function showPosition(position) {
	localStorage.setItem('latitude', position.coords.latitude);
	localStorage.setItem('longitude', position.coords.longitude);
	let lat = localStorage.getItem('latitude');
	let lon = localStorage.getItem('longitude');
	apiForShowPosition(lat, lon);
  console.log( "Latitude: " + position.coords.latitude + "Longitude: " + position.coords.longitude);
}


