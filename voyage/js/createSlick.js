// Slick
function MainPageSlick(){
	$(document).ready(function(){
		$('.autoplay').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  // autoplay: true,
	  autoplaySpeed: 2000,
		});
	});
}
function SpecialsPageSlick(){
	$(document).ready(function(){
		$('.data-slider').slick();
		$('.specials').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  // autoplay: true,
	  autoplaySpeed: 2000,
	  responsive: [
			{
				breakpoint: 993,
				settings: {
					slidesToShow: 3,
				}
			}
		]
		});

	});
}
function ClientsPageSlick(){
	$(document).ready(function(){
		$('.data-slider').slick();
		$('.happy__clients').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  // autoplay: true,
	  autoplaySpeed: 2000,
	  responsive: [
	  {
				breakpoint: 993,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			}
		]
		});

	});
}