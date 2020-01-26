
function register(){
	const section = sectionTag();
	section.id = "register";
	const container = renderDivContainer();
	const div1 = divTag();
	div1.className = "registerMain"
	const div2 = divTag();
	div2.className = "registerChild";
	const div3 = divTag();
	div3.className = "registerChild";
	const arrRegister = ["Agent Login", "Customer Login", "Call Us Now: 815-123-4567"];
	for(let i = 0; i < arrRegister.length; i++){
		renderA(div2, arrRegister[i], "registerBtn");
	}
	const arrIcon = ["fab fa-facebook-f", "fab fa-twitter", "fab fa-tumblr", "fab fa-pinterest"];
	for(let i = 0; i < arrIcon.length; i++){
		renderIcons(arrIcon[i], div3);
	}
	div1.append(div2);
	div1.append(div3);
	container.append(div1);
	section.append(container);
	document.body.append(section);
}

// Create Nav
function nav(){
	const span = spanTag();
	span.innerHTML = "o";
	const section = sectionTag();
	section.id = "header";
	const container = renderDivContainer();
 const div1 = divTag();
	div1.className = "registerMain"
	const div2 = divTag();
	div2.className = "logo";
	const div3 = divTag();
	div3.className = "nav";
	div2.append("V");
	div2.append(span);
	div2.append("yage");
                                                  
 const arrNav = ["Home", "Specials", "Holidays", "Clients", "Contacts", "fas fa-search"];
 createNav(arrNav, div3);
 
	div1.append(div2);
	div1.append(div3);
	
	container.append(div1);
	
	section.append(container);
	document.body.append(section);
}

function createNav(element1, element2){
	for(let i = 0; i < element1.length; i++){
 	if(i === element1.length - 1){
 		const a = aTag();
 		a.className = "nav__link";
 		a.className = "search";
 		const tagIcon = iTag();
			tagIcon.className = element1[i];
			a.append(tagIcon);
			element2.append(a);
 	}else{
 		const a = aTag();
 		a.id = element1[i];
			a.className = "nav__link";
		 a.innerHTML = element1[i];
		 element2.append(a);
 	}
 	
 }
} // End Create Nav
register();
nav();


function CreateMainPage(){
	const main = document.createElement("main");
	main.className = "main";
	main.id = "main";
	document.body.append(main);
}
CreateMainPage();

function mainZeroing(){
	const main = document.querySelector("#main");
	main.innerHTML = "";
	return main;
}

function StyleMainPage(element, heightPaige, minHeight ,backgroundPage){
	element.style.height = heightPaige;
	element.style.minHeight = minHeight;
	element.style.background = backgroundPage;
}

function main(){
	MainPageSlick();
	const main = mainZeroing();
	StyleMainPage(main, "auto", "auto", "var(--hardBlue-color)");
	//Create slick-slider
	const divSlick = divTag();
	divSlick.className = "autoplay";
	createSlick(divSlick, 3, "main");
	main.append(divSlick);
	// End create slick-slider

	// Create div with content on main page
	const divContent = divTag();
	mainContent(divContent, "mainContent");

 const divBtn = divTag();
 mainBtn(divBtn);
 divContent.append(divBtn);

 main.append(divContent);
}

function createSlick(element, number, folder){
	for(let i = 0; i < number; i++){
		const img = imgTag();
		img.src = `./img/${folder}/${i+1}.jpg`;
		const div = divTag();
		div.append(img);
		element.append(div);
	}
}

function mainContent(element, className){
	element.className = className;
	renderh1(element, "To travel is to live");
 renderP(element,"You Don't Need Magic to Disappear. All you need is a destination.");
}

function mainBtn(element){
	element.className = "btnBox";
 const arrBtnText = ["Show on the map", "More info"];
 for(let i = 0; i < arrBtnText.length; i++){
 	const btn = btnTag();
 	btn.innerHTML = arrBtnText[i];
 	btn.className = "btn";
 	element.append(btn);
 }
}

// Special offers Page
function specials(){
	SpecialsPageSlick();
	const main = mainZeroing();
	StyleMainPage(main, "80vh", "250px", "#fff");
	const sectionHeader = divTag();
	renderSectionHeader(sectionHeader, "Special Offers", "Best 2014 packages where people love to stay!");
 main.append(sectionHeader);
	const divSlick = divTag();
	divSlick.className = "specials";
	const arrDescription = ["New York", "Rome", "France, Paris", "London, Big Ben", "Japan, Fushimi Inari Shrine", "China, Great Wall", "Germany", "Ukraine, Kiev"];
	createSlickWithDescriptionImg(divSlick, arrDescription.length, "specials", arrDescription);
	main.append(divSlick);
	document.body.append(main);
} 

function createSlickWithDescriptionImg(element, number, folder, arr){
	for(let i = 0; i < number; i++){
		const img = imgTag();
		img.src = `./img/${folder}/${i+1}.jpg`;
		const div = divTag();
		div.append(img);
		renderP(div, arr[i]);
		element.append(div);
	}
}
// End Special offers Page


// Holidays Page
function holidays(){
	const main = mainZeroing();
	StyleMainPage(main, "80vh","400px", "url(./img/holidays/background1.jpg) center center no-repeat");
	main.style.backgroundSize = "cover";
	const divHolidaysBackground = divTag();
	divHolidaysBackground.className = ("holidays__background");
	main.append(divHolidaysBackground);
	const container = renderDivContainer();
	const sectionHeader = divTag();
	renderSectionHeader(sectionHeader, "Holidays Type", "get explore your dream to travel the world!");
	container.append(sectionHeader);
	holidaysContent(container);
	divHolidaysBackground.append(container);
	main.append(divHolidaysBackground);
}

function holidaysContent(element){
	const arrIcon = ["fas fa-ship", "fas fa-city", "fas fa-heart", "far fa-compass", "fas fa-umbrella-beach"];
	const arrDescription = ["Cruise", "City Breaks", "Honeymoon", "Adventure", "Beach"];
	const divAllIcons = divTag();
	divAllIcons.className = "div__allIcon";
	for(let j = 0; j < arrIcon.length; j++){
		const divHolidaysContent = divTag();
		divHolidaysContent.className = "holidays__content";
		const divHolidaysIcon = divTag();
		divHolidaysIcon.className = "holidays__icon";
		const p = pTag();
		p.innerHTML = arrDescription[j];
		renderIcons(arrIcon[j], divHolidaysIcon);
		divHolidaysContent.append(divHolidaysIcon);
		divHolidaysContent.append(p);
		divAllIcons.append(divHolidaysContent);
	}
	element.append(divAllIcons);
}
// End Holidays Page

// Happy Clients
function happyClients(){
	ClientsPageSlick();
	const main = mainZeroing();
	StyleMainPage(main, "auto", "auto", "#fff");
	const sectionHeader = divTag();
	renderSectionHeader(sectionHeader, "Happy Clients", "what customer say about us and why love our services!!");
 main.append(sectionHeader);
	const divSlick = divTag();
	divSlick.className = "happy__clients";
	const clientsSay = "Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been the industry's standard dummy text ever hen an with new version look.";
	const clientsName = "Client Name";
	const clientsCity = "United States";
	createSlickHappyClients(divSlick, 10, clientsSay, clientsName, clientsCity);
	main.append(divSlick);
	document.body.append(main);
}

function createSlickHappyClients(element, number, say, namePerson, city){
	for(let i = 0; i < number; i++){
			const pSay = pTag();
			pSay.className = "say";
			const pName = pTag();
			pName.className = "namePerson";
			const pCity = pTag();
			pCity.className = "city";
			pSay.innerHTML = say;
			pName.innerHTML = namePerson;
			pCity.innerHTML = city;
			const div = divTag();
			div.append(pSay);
			div.append(pName);
			div.append(pCity);
			div.className = "clients__content";
			element.append(div);
	}
}
// End Happy Clients

// Contacts
function contacts(){
	const main = mainZeroing();
	StyleMainPage(main, "80vh", "500px", "var(--hardBlue-color)");
	const container = renderDivContainer();
	const divContacts = divTag();
	divContacts.className = "contacts";

	const divNewsletter = divTag();
	divNewsletter.className = "contactsBox";
	footerHeader(divNewsletter, "Newsletter ");
	renderP(divNewsletter,"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore.");
	const divInput = divTag();
	divInput.className = "div__input";
	const input = inputTag();
	input.placeholder = "Subscribes...";
	const btn = btnTag();
	btn.innerHTML = "GO";
	divInput.append(input);
	divInput.append(btn);
	divNewsletter.append(divInput);
	divContacts.append(divNewsletter);

	const divLatestNews = divTag();
	divLatestNews.className = "contactsBox";
	footerHeader(divLatestNews, "Latest News");
	renderP(divLatestNews,"Postformat Gallery: Multiple images");
	footerSpan(divLatestNews,"October 21, 2013 - 3:31 pm");
	renderP(divLatestNews,"Snowboarding is fun!");
	footerSpan(divLatestNews,"December 12, 2012 - 9:11 pm");
	divContacts.append(divLatestNews);

	const divTags = divTag();
	divTags.className = "contactsBox";
	footerHeader(divTags, "Tags");
	const arrTags = ['Agent Login', 'Customer Login', 'Not a Member?', 'Contact', 'New Horizons', ' Lanscape', 'Tags', 'Nice', 'Some', 'Portrait'];
	for(let i = 0; i < arrTags.length; i++){
		renderA(divTags, arrTags[i], "tags");
	};
	divContacts.append(divTags);
	const divAddress = divTag();
	divAddress.className = "contactsBox";
	footerHeader(divAddress, "Address");
	renderP(divAddress,"DieSachbearbeiter Schönhauser Allee 167c,10435 Berlin Germany");
	footerSpan(divAddress, "E-mail: moin@blindtextgenerator.de");
	const divIcons = divTag();
	divIcons.className = "address__divIcons";
	const arrIcon = ["fab fa-facebook-f", "fab fa-twitter", "fab fa-tumblr", "fab fa-pinterest"];
 for(let i = 0; i < arrIcon.length; i++){
 	renderIcons(arrIcon[i], divIcons);
	}
 divAddress.append(divIcons);
	
	divContacts.append(divAddress);
	container.append(divContacts);
	main.append(container);
}
// End Contacts

function activeBtn(){
	let HomeBtn = document.querySelector("#Home");
	let SpecialsBtn = document.querySelector('#Specials');
	let HolidaysBtn = document.querySelector('#Holidays');
	let ClientsBtn = document.querySelector('#Clients');
	let ContactsBtn = document.querySelector('#Contacts');
	HomeBtn.addEventListener('click', ()=>{
		main();
	});
	SpecialsBtn.addEventListener('click', ()=>{
		specials();
	});
	HolidaysBtn.addEventListener('click', ()=>{
		holidays();
	});
	ClientsBtn.addEventListener('click', ()=>{
		happyClients();
	});
	ContactsBtn.addEventListener('click', ()=>{
		contacts();
	});
}
activeBtn();
main();






