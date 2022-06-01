'use strict'

let questons = [
    {
        id:1,
        title:'Как преобразовать строку в верхний регистр?',
        answer: ['uppercase', 'lowercase', 'push', 'pop']
    },
    {
        id:2,
        title:'Какой метод window показывает сообщение и запрашивает ввод текст пользователя?',
        answer: ['promt', 'alert', 'confirm', 'map']
    },
    {
        id:3,
        title:'Для чего используется оператор ||?',
        answer: ['сравнение', 'деление', 'и', 'или']
    }
]

function add(id=1){
    root.insertAdjacentHTML('afterbegin', `<div>${questons[id-1].title}</div>`)
    root.insertAdjacentHTML('beforeend', `<form id="form"></form>`)
    form.insertAdjacentHTML('beforeend', `<input type="radio" name="answer" value="uppercase" style="margin: 30px 20px 20px 0px">${questons[id-1].answer[0]}</input><br>`)
    form.insertAdjacentHTML('beforeend', `<input type="radio" name="answer" value="lowercase" style="margin: 0px 20px 20px 0px">${questons[id-1].answer[1]}</input><br>`)
    form.insertAdjacentHTML('beforeend', `<input type="radio" name="answer" value="push" style="margin: 0px 20px 20px 0px">${questons[id-1].answer[2]}</input><br>`)
    form.insertAdjacentHTML('beforeend', `<input type="radio" name="answer" value="pop" style="margin: 0px 20px 20px 0px">${questons[id-1].answer[3]}</input>`)
    form.insertAdjacentHTML('beforeend', `<p><button type="submit" id="button" style="margin: 0px 20px  0px 0px; width: 200px; height:40px; font-size: 20px">Ответить</button></p>`);
}
add()
