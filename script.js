'use strict'

let x = document.querySelector('#root')

let questons = [
    {
        id:1,
        title:'Как преобразовать строку в верхний регистр?',
        answer: ['uppercase', 'lowercase', 'push', 'pop']
    },
    {
        id:2,
        title:'Какой метод window показывает сообщение и запрашивает ввод текст пользователя?'
    },
    {
        id:3,
        title:'Для чего исползуется оператор ||?'
    }
]

function add(id=1){
    x.insertAdjacentHTML('afterbegin', `<div id=''>${questons[id-1].title}</div>`)
}

add()
// x.outerHTML = '<div>Привет</div>'

// questons.forEach(function(item, index, array){
//     // x.insertAdjacentHTML('afterbegin', `<div>${item.title}</div>`)

//     // let div = document.createElement('div');
//     // div.innerHTML = `<div>${item.title}</div>`
//     // x.append(div)
// })