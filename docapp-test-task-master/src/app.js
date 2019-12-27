// Entry point for project

import './main.css';
const roomsJson = require('../data/rooms.json');
const consentJson = require('../data/consent-forms.json');
let card;
const app = document.getElementById("app");
const divForm = document.createElement("div");

function createPerson(){
	renderRooms();
	card = document.querySelectorAll('.card');
	for(let i = 0; i < card.length; i++){
		card[i].addEventListener('click', ()=> {
			renderPerson(i);
		});
	}
}

function renderRooms(){
	for(let i = 0; i < roomsJson.length; i++){
		const arr = [roomsJson[i]["appointment"]["first_name"], 
		roomsJson[i]["appointment"]["last_name"], 
		roomsJson[i]["status"]["title"], 
		roomsJson[i]["appointment"]["start_time"], 
		roomsJson[i]["appointment"]["doctor_title"], 
		roomsJson[i]["appointment"]["assistant"]];

		const div = document.createElement("div");
		div.classList.add("card");

		const h2 = document.createElement("h2");
		h2.innerHTML = `Room ${i+1} (${roomsJson[i]["appointment"]["code"]})`;
		div.append(h2);
		for(let j = 0; j < arr.length; j++){
			const p = document.createElement("p");
			if(j === 0){
				p.innerHTML = `${arr[j]}  ${arr[j+1]}`;
				div.append(p);
				j++;
			}else{
				p.innerHTML = arr[j];
				div.append(p);
			}
			
		}
		app.append(div);
	}
}

function renderPerson(element){	
	const divCard = document.querySelectorAll("div");
	const arr = [roomsJson[element]["appointment"]["start_date"], 
	roomsJson[element]["appointment"]["vital_signs"]["height_ft"], 
	roomsJson[element]["appointment"]["vital_signs"]["weight"], 
	roomsJson[element]["appointment"]["vital_signs"]["bmi"], 
	roomsJson[element]["appointment"]["first_name"], 
	roomsJson[element]["appointment"]["last_name"],
	roomsJson[element]["appointment"]["gender"]];

	const h2 = document.createElement("h2");
	h2.innerHTML = `Room ${element+1}`;
	divCard[element+1].innerHTML = '';
	divCard[element+1].append(h2);
	for(let j = 0; j < arr.length; j++){
		const p = document.createElement("p");
		if(j === 4){
			if(roomsJson[element]["appointment"]["is_doctor"] === true){
				p.innerHTML = `Dr. ${arr[j]}  ${arr[j+1]}`;
			}else if(roomsJson[element]["appointment"]["gender"] === "Male"){
				p.innerHTML = `Mr. ${arr[j]}  ${arr[j+1]}`;
			}else {
				p.innerHTML = `Ms. ${arr[j]}  ${arr[j+1]}`;
			}			
			divCard[element+1].append(p);
			j++;
		}else{
			p.innerHTML = arr[j];
			divCard[element+1].append(p);
		}
	}
}

export default (function () {
	createPerson();
}());
