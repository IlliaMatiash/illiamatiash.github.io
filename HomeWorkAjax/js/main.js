const API = 'https://test-users-api.herokuapp.com/';
let allUsers = [];
const carousel = document.querySelector('.carousel');
const nameEl = document.querySelector('#name');
const ageEl = document.querySelector('#age');
const btnCreate = document.querySelector('#create');

btnCreate.addEventListener('click', () => {
    const user = {
        name: nameEl.value,
        age: ageEl.value
    };
    if (nameEl.value != "" && ageEl.value != "") {
        fetch(API + "users", {
            method: "POST",
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then((data) => {
          allUsers.data.push(user);
          renderUsers();
        }).catch(err => {
            console.log(err);
        });
    nameEl.value = "";
    ageEl.value = "";
    }
})

async function changeValue(id, userNameInput, userAgeInput) {
    const user = {
        name: userNameInput,
        age: userAgeInput
    };
    await fetch(API + 'users/' + id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    }).then((data) => {
        allUsers.data.name = user.name;
        allUsers.data.age = user.age;
    })
}

function getUsers() {
    return fetch(API + 'users').then(res => {
          return res.json();
        console.log(res.json());
    }).catch(err => {
        console.log('Cant get users' ,err);
    })
}

async function deleteUser(userId) {
    await fetch(API + 'users/' + userId, {
        method: 'DELETE'
    })
    allUsers.data = allUsers.data.filter((user) => user.id !== userId);
    renderUsers();
}

function renderUsers(){
    carousel.innerHTML = '';
    allUsers.data.forEach((user) => {
        
        const carouseliItem = document.createElement('div');
        carouseliItem.className = 'carousel-item';
        
        const card = document.createElement('div');
        card.className = 'row';
        
        const aboutPerson = document.createElement('div');
        aboutPerson.className = 'aboutPerson';
        
        const buttons = document.createElement('div');
        buttons.className = 'buttons';
        
        const btnSave = document.createElement('button');
        btnSave.className = 'btn';
        btnSave.textContent = "SAVE";
        
        const btnDelete = document.createElement('button');
        btnDelete.className = 'btn';
        btnDelete.textContent = "DELETE";
        
        const nameInput = document.createElement('input');
        nameInput.defaultValue = `${user.name}`;
        
        const ageInput = document.createElement('input');
        ageInput.defaultValue = `${user.age}`;

        btnDelete.addEventListener('click', () => {
            deleteUser(user.id);
        })
        
         btnSave.addEventListener('click', () => {
            changeValue(user.id, nameInput.value, ageInput.value);
        });
        
        aboutPerson.append(nameInput);
        aboutPerson.append(ageInput);
        
        card.append(aboutPerson);
        buttons.append(btnSave);
        buttons.append(btnDelete);
        card.append(buttons);
        
        carouseliItem.append(card);
        carousel.append(carouseliItem);
    }) 
    $(document).ready(function(){
        $('.carousel').carousel();
  });
}

getUsers().then(data => {
    allUsers = data;
    console.log(allUsers);
    renderUsers(allUsers);
    
})























