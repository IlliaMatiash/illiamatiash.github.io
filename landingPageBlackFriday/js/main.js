const photo = document.querySelectorAll(".photo-Dom");
const lastPrice = document.querySelectorAll(".last-price__Dom");
const newPrice = document.querySelectorAll(".new-price__Dom");
const arrLastPriceSmallWindow = ["USD 328.00", "USD 328.00", "USD 328.00"];
const arrNewPriceSmallWindow = ["USD 318.50", "USD 318.50", "USD 318.50"];
const arrLastPriceLargeWindow = ["USD 79.00", "USD 69.00", "USD 149.00"];
const arrNewPriceLargeWindow = ["USD 60.50", "USD 50.00", "USD 139.00"];
// Add content to page
function createPrice(elementLastPrice, elementNewPrice, counter){
    for(let i = 0; i < lastPrice.length; i++){
        lastPrice[i].innerHTML = `${elementLastPrice[i]}`;
        newPrice[i].innerHTML = `${elementNewPrice[i]}`;
        photo[i].src = `./img/product/${i+1+counter}.png`;
    }
}
// check width window
function check(){
    if(window.innerWidth > 1199){
        createPrice(arrLastPriceLargeWindow, arrNewPriceLargeWindow, 0);
    } else {
        createPrice(arrLastPriceSmallWindow, arrNewPriceSmallWindow, 3);
    }
}
check();
// Listener change width window
window.addEventListener('resize', function(event){
    check();
});

// If window scroll top < 100px header will be opacity = 0;
// If window scroll top > 100px  header will be opacity = 7 and background #000;
const header = document.querySelector("header");
window.onscroll = function() {myFunction()};
function myFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    header.style.background = "rgba(0,0,0,.7)";
  }  
  else {
    header.style.background = "rgba(0,0,0,.0)";
  }
}
myFunction();

// Event after click on Burger
const body = document.querySelector('body');
const burger = document.querySelector('.header-burger');
const headerMenu = document.querySelector('.header-menu');
const search = document.querySelector('.search');
const logoM = document.querySelector('.logo-m');
const chatM = document.querySelector('.chat-m');


burger.addEventListener('click', ()=>{
    burger.classList.toggle('active');
    headerMenu.classList.toggle('active');
    body.classList.toggle('lock');
    header.classList.toggle('m-menu');
    search.classList.toggle('menu');
    logoM.classList.toggle('menu');
    chatM.classList.toggle('menu');
});

// Timer 
let timeForTimer = (new Date().getTime() / 1000) + (86400 * 2) + 1;
// let timeForTimer = (new Date().getTime() / 1000) + (3);
let flipdown = new FlipDown(timeForTimer);
flipdown.start();
// End Timer

// Scroll
const anchors = [].slice.call(document.querySelectorAll('a.scroll')),
      animationTime = 300,
      framesCount = 20;
anchors.forEach(function(item) {
  // каждому якорю присваиваем обработчик события
  item.addEventListener('click', function(e) {
    // убираем стандартное поведение
    e.preventDefault();
    
    // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
    
    // запускаем интервал, в котором
    let scroller = setInterval(function() {
      // считаем на сколько скроллить за 1 такт
      let scrollBy = coordY / framesCount;
      
      // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
      // и дно страницы не достигнуто
      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        // то скроллим на к-во пикселей, которое соответствует одному такту
        window.scrollBy(0, scrollBy);
      } else {
        // иначе добираемся до элемента и выходим из интервала
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    // время интервала равняется частному от времени анимации и к-ва кадров
    }, animationTime / framesCount);
  });
});
