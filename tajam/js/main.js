/*--- Preloader ---*/

let p = $('.preloader');
function preloader() {
		p.css('opacity', 1);
		p.css('display', "flex");
	$(() => {
		setTimeout(() => {
			p.css('opacity', 0);
			setTimeout(
					() => p.css('display', "none"),
					// .preloader__third.css('ami')
					parseInt(p.css('--duration')) * 500
				);
			},300);
	});
}
preloader();
function preloaderAdd() {
	$(window).addClass("preloader");
}
/*--- End preloader---*/

$(function() {
 let header = $("#header");
 let main = $("#main").innerHeight();
 let scrollOffset = $(window).scrollTop();

 
//    Fixed Header
 checkScroll(scrollOffset);
 $(window).on("scroll", function() {
     scrollOffset = $(this).scrollTop();
     checkScroll(scrollOffset);
 });
 
 function checkScroll(scrollOffset){
     if(scrollOffset >= main){
         header.addClass("fixed");
     } else {
         header.removeClass("fixed");
     }
 }

 //    menu nav toggle
 $("#nav_toggle").on("click", function(event){
  event.preventDefault();
  
  $(this).toggleClass("active");
  $("#nav").toggleClass("active");
 });
 
//    Smoot scroll
 
 $("[data-scroll]").on("click", function(event){
     event.preventDefault();
     
     let $this = $(this)
     let blockId = $this.data('scroll');
     let blockOffset = $(blockId).offset().top;
     
     $("#nav a").removeClass("active");
     $this.addClass("active");
     
     $("html, body").animate({
         scrollTop: blockOffset
     }, 500);
 });
});

/*--- Slick ---*/
$(document).ready(function(){
	$('.our__team-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [{
				breakpoint: 1024,
				settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: true
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
});
/*--- Slick end---*/

/*--- Log in ---*/

/*--- Registration of variables ---*/
const logInBtn = document.querySelector('.authorization'); // Log In btn in navbar 
const sendBtn = document.querySelector('#sendBtn'); // Send btn in modal window
const headerLogIn = document.querySelector('.headerLogIn'); //Header in modal window
const inputFromModal = document.querySelectorAll('.input');
const inputLabel = document.querySelectorAll('.input__label');

/*--- Rendered text---*/
const textLogIn = "Log In"; // The text that will be displayed in the button and modal window 
const textInputName = "your name";
const textInputEmail = "your email";
const textInputPhone = "phone number";
const textHello = "Hello";
const textArr = [textInputName, textInputEmail, textInputPhone];
const textInput = "Input";
const textOpen = "Open";
const textSend = "Send";
const textDelete = "Delete";

function cleanLocalStorage(){
	localStorage.clear();
}
// cleanLocalStorage();

function logIn(){
	const personName = document.querySelector('#personName');
	const personEmail = document.querySelector('#personEmail');
	const personPhoneNumber = document.querySelector('#personPhoneNumber');
	return personName, personEmail, personPhoneNumber;
}

/*--- Render text in modal window if Local Storrage empty ---*/
function renderTextWithoutPerson(){
	logInBtn.innerHTML = textLogIn;
	headerLogIn.innerHTML = textLogIn;
	sendBtn.innerHTML = textSend;
	for(let i = 0; i < inputFromModal.length; i++){
		inputLabel[i].innerHTML = textInput + " " + textArr[i];
		inputFromModal[i].disabled = false;
		inputFromModal[i].value = "";
	}
}/*--- End Render ---*/

/*--- Render text in modal window if Local Storrage not empty ---*/
function renderTextWithPerson(){
	if(localStorage.getItem('namePerson') === null){
		localStorage.setItem('namePerson', personName.value);
		localStorage.setItem('emailPerson', personEmail.value);
		localStorage.setItem('phoneNumberPerson', personPhoneNumber.value);
	}
	const arrInfoPerson = [localStorage.getItem('namePerson'), localStorage.getItem('emailPerson'),  localStorage.getItem('phoneNumberPerson')];
	sendBtn.innerHTML = textDelete;
	logInBtn.innerHTML = textOpen;
	headerLogIn.innerHTML = "Hello " + localStorage.getItem('namePerson');
	for(let i = 0; i < inputFromModal.length; i++){
		inputFromModal[i].value = arrInfoPerson[i];
		inputLabel[i].innerHTML = textArr[i];
		inputFromModal[i].disabled = true;
	}
}/*--- End Render---*/

/*--- Сheck user registration when loading page ---*/
function check() {
	if(localStorage.getItem('namePerson') === null){
		renderTextWithoutPerson();
	}
	else {
		renderTextWithPerson();
	}
}
check();

sendBtn.addEventListener('click', (arrInfoPerson)=> {
	const allPersonsValue = [personName, personEmail, personPhoneNumber];
	if(localStorage.getItem('namePerson') !== null){
		preloader();
		allPersonsValue.forEach(element => {
			element.placeholder = "";
		});
		cleanLocalStorage();
		check();
	}else{
		let counter = 0;
		logIn();
		for(let i = 0; i < allPersonsValue.length; i++){
			if(allPersonsValue[i].value === ""){
				allPersonsValue[i].placeholder = "Please fill in this field !";
			}else{
				counter++;
			}
		}
		if(counter === allPersonsValue.length) {
			preloader();
			renderTextWithPerson();
		}
	}
});

/*--- End Log in ---*/








jQuery(document).ready(function(){
var modalTriggerBts = $('a[data-type="cd-modal-trigger"]'),
	coverLayer = $('.cd-cover-layer');

/*
	convert a cubic bezier value to a custom mina easing
	http://stackoverflow.com/questions/25265197/how-to-convert-a-cubic-bezier-value-to-a-custom-mina-easing-snap-svg
*/
var duration = 600,
	epsilon = (1000 / 60 / duration) / 4,
	firstCustomMinaAnimation = bezier(.63,.35,.48,.92, epsilon);

modalTriggerBts.each(function(){
	initModal($(this));
});

function initModal(modalTrigger) {
	var modalTriggerId =  modalTrigger.attr('id'),
		modal = $('.cd-modal[data-modal="'+ modalTriggerId +'"]'),
		svgCoverLayer = modal.children('.cd-svg-bg'),
		paths = svgCoverLayer.find('path'),
		pathsArray = [];
	//store Snap objects
	pathsArray[0] = Snap('#'+paths.eq(0).attr('id')),
	pathsArray[1] = Snap('#'+paths.eq(1).attr('id')),
	pathsArray[2] = Snap('#'+paths.eq(2).attr('id'));

	//store path 'd' attribute values	
	var pathSteps = [];
	pathSteps[0] = svgCoverLayer.data('step1');
	pathSteps[1] = svgCoverLayer.data('step2');
	pathSteps[2] = svgCoverLayer.data('step3');
	pathSteps[3] = svgCoverLayer.data('step4');
	pathSteps[4] = svgCoverLayer.data('step5');
	pathSteps[5] = svgCoverLayer.data('step6');
	
	//open modal window
	modalTrigger.on('click', function(event){
		event.preventDefault();
		modal.addClass('modal-is-visible');
		coverLayer.addClass('modal-is-visible');
		animateModal(pathsArray, pathSteps, duration, 'open');
	});

	//close modal window
	modal.on('click', '.modal-close', function(event){
		event.preventDefault();
		modal.removeClass('modal-is-visible');
		coverLayer.removeClass('modal-is-visible');
		animateModal(pathsArray, pathSteps, duration, 'close');
	});
}

function animateModal(paths, pathSteps, duration, animationType) {
	var path1 = ( animationType == 'open' ) ? pathSteps[1] : pathSteps[0],
		path2 = ( animationType == 'open' ) ? pathSteps[3] : pathSteps[2],
		path3 = ( animationType == 'open' ) ? pathSteps[5] : pathSteps[4];
	paths[0].animate({'d': path1}, duration, firstCustomMinaAnimation);
	paths[1].animate({'d': path2}, duration, firstCustomMinaAnimation);
	paths[2].animate({'d': path3}, duration, firstCustomMinaAnimation);
}

function bezier(x1, y1, x2, y2, epsilon){
	//https://github.com/arian/cubic-bezier
	var curveX = function(t){
		var v = 1 - t;
		return 3 * v * v * t * x1 + 3 * v * t * t * x2 + t * t * t;
	};

	var curveY = function(t){
		var v = 1 - t;
		return 3 * v * v * t * y1 + 3 * v * t * t * y2 + t * t * t;
	};

	var derivativeCurveX = function(t){
		var v = 1 - t;
		return 3 * (2 * (t - 1) * t + v * v) * x1 + 3 * (- t * t * t + 2 * v * t) * x2;
	};

	return function(t){

		var x = t, t0, t1, t2, x2, d2, i;

		// First try a few iterations of Newton's method -- normally very fast.
		for (t2 = x, i = 0; i < 8; i++){
			x2 = curveX(t2) - x;
			if (Math.abs(x2) < epsilon) return curveY(t2);
			d2 = derivativeCurveX(t2);
			if (Math.abs(d2) < 1e-6) break;
			t2 = t2 - x2 / d2;
		}

		t0 = 0, t1 = 1, t2 = x;

		if (t2 < t0) return curveY(t0);
		if (t2 > t1) return curveY(t1);

		// Fallback to the bisection method for reliability.
		while (t0 < t1){
			x2 = curveX(t2);
			if (Math.abs(x2 - x) < epsilon) return curveY(t2);
			if (x > x2) t0 = t2;
			else t1 = t2;
			t2 = (t1 - t0) * .5 + t0;
		}

		// Failure
		return curveY(t2);

	};
};
});

