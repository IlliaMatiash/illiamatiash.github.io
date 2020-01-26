
//Scroll
$("a.scrollto").click(function () {
 var elementClick = '#' + $(this).attr("href").split("#")[1]
 var destination = $(elementClick).offset().top;
 jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
 return false;
});

// Slick
$(document).ready(function(){
	$('.data-slider').slick();
	$('.autoplay').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
	photoNumber();
});

function photoNumber(){
	let slickSlide = document.querySelectorAll(".design .slick-slide");
	let slickpPrev = document.querySelector(".slick-prev");
	let slickpNext = document.querySelector(".slick-next");
	
	slickpPrev.addEventListener('click', ()=>{
		searchActive(slickSlide);
	});

	slickpNext.addEventListener('click', ()=>{
		searchActive(slickSlide);
	});

}

function searchActive(element){
	let photoNumber = document.querySelector(".photo__number");
	for(let i = 0; i < element.length; i++){
			if(element[i].classList.contains('slick-active')){
				photoNumber.innerHTML = "0" + i + "/05";
				break;
			}
		}
}


let navToggle = document.querySelector('.nav-icon');
let navSmall = document.querySelector('.nav__small-width');
let nav = document.querySelector('.nav__small-width');
let nav__link = document.querySelectorAll('.nav__link');


// Add display none for nav__small-width if change width
window.addEventListener('resize', function(event){
		if(window.innerWidth > 991){
		navSmall.style.display = 'none';
	}
});

// Open or close nav
navToggle.addEventListener('click',()=> {
	let styleDisplay = window.getComputedStyle(navSmall).display;
	styleDisplay === "none" ? navSmall.style.display = 'flex' : navSmall.style.display = 'none';
});















































