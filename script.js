'use strict'

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
        title:'Для чего используется оператор ||?'
    }
]

function add(id=1){
    root.insertAdjacentHTML('afterbegin', `<div>${questons[id-1].title}</div>`)
    root.insertAdjacentHTML('beforeend', `<form id="form"></form>`)
    form.insertAdjacentHTML('beforeend', `<input type="radio" name="answer" style="margin: 30px 20px 20px 0px">${questons[id-1].answer[0]}</input><br>`)
    form.insertAdjacentHTML('beforeend', `<input type="radio" name="answer" style="margin: 0px 20px 20px 0px">${questons[id-1].answer[1]}</input><br>`)
    form.insertAdjacentHTML('beforeend', `<input type="radio" name="answer" style="margin: 0px 20px 20px 0px">${questons[id-1].answer[2]}</input><br>`)
    form.insertAdjacentHTML('beforeend', `<input type="radio" name="answer" style="margin: 0px 20px  0px 0px">${questons[id-1].answer[3]}</input>`)
}

add()
