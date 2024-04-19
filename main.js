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

async function getUserById (userId) {
    let response = await fetch(url)
    return response.json()
}

async function getUser2 () {
    let userId = idInput.value
    try {
        let userInfo = await getUserById(userId)
        idList.innerHTML = `
        <li>${userInfo.name}</li>
        <li>${userInfo.username}</li>
        <li>${userInfo.email}</li>
        <li>${userInfo.phone}</li>
        <li>${userInfo.website}</li>
        `
    }
    catch (error) {
        console.log(error);
    }
}

form2.addEventListener('submit', getUser2)