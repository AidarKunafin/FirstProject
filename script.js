'use strict'
let indexGlobal = 1
let questons = [
    {
        id: 1,
        title: 'Как преобразовать строку в верхний регистр?',
        answer: ['uppercase', 'lowercase', 'push', 'pop']
    },
    {
        id: 2,
        title: 'Какой метод window показывает сообщение и запрашивает ввод текст пользователя?',
        answer: ['promt', 'alert', 'confirm', 'map']
    },
    {
        id: 3,
        title: 'Для чего используется оператор ||?',
        answer: ['сравнение', 'деление', 'и', 'или']
    }
]

function template(quetion) {
    return `
        <div id="block">
            <h1>
                ${quetion.title}
            </h1>
            <form>
                ${quetion.answer.map(element => {
                    return `
                        <input type="radio" onchange="alert(this.value)">
                            ${element}
                        </input>
                    `
                }).join('')}
            </form>
        </div>
    `
}
function add(id = 1) {
   root.insertAdjacentHTML('afterbegin', template(questons[id - 1]))
}

add(indexGlobal)

function deleteQuestion(){
    block.remove()
    console.log(indexGlobal)
}


button.onclick = function(e){
    e.preventDefault()
    indexGlobal += 1;
    deleteQuestion()
    add(indexGlobal)
}

