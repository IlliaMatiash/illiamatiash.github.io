// get users -> 
// GET https://jsonplaceholder.typicode.com/users?search=Ihor&limit=20
// get user -> GET https://jsonplaceholder.typicode.com/users?id=212312
// get user -> GET https://jsonplaceholder.typicode.com/users/212312
// create user -> POST https://jsonplaceholder.typicode.com/users
// update user -> PUT https://jsonplaceholder.typicode.com/users/212312
// delete user -> DELETE https://jsonplaceholder.typicode.com/users/212312

// path variable / query params

function swiperAll(){
    let swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 40,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });


}
const API = 'https://test-users-api.herokuapp.com/';
let allUsers = [];
//const container = document.querySelector('.users');
const swiperWrapper = document.querySelector('.swiper-wrapper');
const nameEl = document.querySelector('#name');
const ageEl = document.querySelector('#age');
//const idEl = document.querySelector('#id');
const btnCreate = document.querySelector('#create');

btnCreate.addEventListener('click', () => {
    
    console.log(allUsers.data[allUsers.data.length-1].id);
//    if(allUsers.data.length-1 === 9){
//        if(allUsers.data.length-2 === 9 && allUsers.data.length-1 === 9){
//            idEl = allUsers.splice(0 ,allUsers.data.length-2) + "100"; 
//        }
//        const lastNumb = Number(allUsers.data.length-1 +1).toString();
//        idEl = allUsers.splice(0 ,allUsers.data.length-1) + lastNumb;
//        console.log(idEl);
//    }
    const user = {
    name: nameEl.value,
    age: ageEl.value
    };
    fetch(API + "users", {
        method: "POST",
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    
    .then((data) => {
//      user.id = data.id;
        
      allUsers.data.push(user);
      renderUsers();
    }).catch(err => {
        console.log(err);
    })
})

function getUsers() {
    return fetch(API + 'users').then(res => {
          return res.json();
        console.log(res.json());
    }).catch(err => {
        console.log('Cant get users' ,err);
    })
}
async function deleteUser(userId) {
    swiperAll();
    await fetch(API + 'users/' + userId, {
        method: 'DELETE'
    })
    allUsers.data = allUsers.data.filter((user) => user.id !== userId);
    renderUsers();
    
}
//
//
//async function btnSave(userId) {
//        inputName.value = user.name;
//        inputAge.value = user.age;
//    await fetch(API + 'users/' + userId, {
//        method: 'PUT',
//        headers: {
//        'Content-Type': 'application/json'
//        },
//        body: JSON.stringify(user)
//    })
////    allUsers.data = allUsers.data.filter((user) => user.id !== userId);
//    renderUsers();
//}
function renderUsers(){
    
    swiperWrapper.innerHTML = '';
    allUsers.data.forEach((user) => {
        const swiperSlide = document.createElement('div');
        swiperSlide.className = 'swiper-slide';
        
        const card = document.createElement('div');
        card.className = 'card';
        
        const sliderText = document.createElement('div');
        sliderText.className = 'sliderText';
        sliderText.innerHTML = `<h3>Persons card</h3>`;
        
        const content = document.createElement('div');
        content.className = 'content';
        
//        const inputName = document.createElement('input');
//        const inputAge = document.createElement('input');
//        inputName.value = user.name;
//        inputAge.value = user.age;
        content.innerHTML = `
            <h4>${user.name}</h4>
            <h5>${user.age}</h5>
        `
        const btn = document.createElement('button');
        btn.textContent = "X";
        
        btn.addEventListener('click', () => {
            deleteUser(user.id);
        })
        
//        const btnSave = document.createElement('button');
//        btnSave.textContent = "Save";
        
//        btn.addEventListener('click', () => {
//            saveChange(user.id);
//        })
        btn.className = 'user__remove'; 
//        div.append(inputName);
//        div.append(inputAge);
//        div.append(btnSave);
        card.append(sliderText);
        card.append(content);
        swiperSlide.append(card);
        swiperSlide.append(btn);
        swiperWrapper.append(swiperSlide);
    })
}

getUsers().then(data => {
    allUsers = data;
    
    console.log(allUsers);
   
    renderUsers(allUsers);
    swiperAll();
    
})













