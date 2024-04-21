// Создать кнопку получить данные, по клику на нее вызвать GET запрос
// на адрес https://jsonplaceholder.typicode.com/users
// Сделать все это с помощью async await, с помощтю InnerHTML отобразить данные
// На странице


let url = "https://jsonplaceholder.typicode.com/users"
let btn = document.querySelector('#btn')
// let userList = document.querySelector('#userList')

// let form = document.forms.form
// let ageInput = document.querySelector('#ageInput')


// async function getUsers () {
//     const response = await fetch(url)
//     return response.json();
// }



// async function displayUsers () {
//     let data = await getUsers()
//     data.forEach(user => {
//         userList.innerHTML += `<li>${user}</li>`
//     })
// }


// btn.addEventListener('click', displayUsers)





// Создать input type=“number”, получить с него value которое будет сравниваться
// с вашим возрастом, в async function вернуть либо Promise.resolve(“Успех”) ,
// либо Promise.reject(“Ошибка”)
// Отобразить в консоли результат использовать then и catch



// async function compareAge (event) {
//     event.preventDefault()
//     const myAge = 25
//     let userInputAge = parseInt(ageInput.value)

//     if(userInputAge === myAge) {
//         return "Ваш возраст совпадает"
//     } else if(userInputAge < myAge) {
//         return "Вы моложе меня"
//     } else if(userInputAge > myAge) {
//         return "Вы старше меня"
//     } else {
//         return "Введите возраст"
//     }
// }

// form.addEventListener('submit', event => {
//     compareAge(event)
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.log(error);
//     })
// })





// Создать Input где вы будете вводить id пользователя
// Создать кнопку, кликая на которую вы получаете информацию об этом пользователе
// информацию о пользователе отображаем на странице
// использовать async await

let form2 = document.forms.form2
let idInput = document.querySelector('#idInput')
let idList = document.querySelector('#idList')


async function getUsers (id = null) {

    try {

        if(id) {
            url += `?id=${id}`
        }

        let response = await fetch(url)
        if(response.status === 200) {
            let users = await response.json()
            addUsersToDOM (users)
            return users
        } else if(response.status === 404) {
            throw `Error: 404 Not found this url`
        } else if(response.status === 401) {
            throw `Error: 401 Unauthorized`
        }
    }
    catch(error) {
        console.error(error);
    }

}

function addUsersToDOM (users) {
    idList.innerHTML = '';
    users.forEach(el => {
        idList.innerHTML += `<li>id: ${el.id} <br> ${el.name} <br> ${el.username} <br> ${el.email} <br> ${el.phone} <br> ${el.website}</li>`
    })
}


async function getById (event) {
    event.preventDefault()
   const {id} = form2

   getUsers(id.value)

}

// getUsers()
form2.addEventListener('submit', getById)