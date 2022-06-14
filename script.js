'use strict'
let right = 0;
let indexGlobal = 1
const theme = [

]
let questons = [
    {
        id: 1,
        title: 'Как преобразовать строку в верхний регистр?',
        answer: ['toUppercase', 'toLowercase', 'push', 'pop'],
        definition: 'метод toUpperCase() возвращает строку в верхнем регистре',
        correctAnswer: 'toUppercase'
    },
    {
        id: 2,
        title: 'Какой метод window показывает сообщение и запрашивает ввод текст пользователя?',
        answer: ['prompt', 'alert', 'confirm', 'map'],
        definition: 'promt',
        correctAnswer: 'prompt'
    },
    {
        id: 3,
        title: 'Для чего используется оператор ||?',
        answer: ['сравнение', 'деление', 'и', 'или'],
        definition: '|| оператор «ИЛИ»',
        correctAnswer: 'или'
    }
]

function template(quetion) {
    return `
        <div id="block">
            <h1>
                ${quetion.title}
            </h1>
            <form>
                ${quetion.answer.map(function(item, index, array){
                    return `
                        <input class="id" id="${index}" type="radio" name="answer" value="${item}"> 
                            ${item}
                        </input>
                        <br>
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
}

function completedTest(){
    main.insertAdjacentHTML('beforeend', `<div class= "completed">Тест завершен!</div>`),
    main.insertAdjacentHTML('beforeend', `<div class= "result">Процент верных ответов ${((right/questons.length)*100).toFixed(1)}%</div>`),
    main.insertAdjacentHTML('beforeend', `<button class= "startButton" id="startButton">В начало</button>`),
    startButton.addEventListener('click', start);
}

function addAnswer(){
    main.insertAdjacentHTML('afterend', `<div class="answer-block" id="answerBlock">
                            <div class="definition" id="definition">Верный ответ:${questons[indexGlobal-1].definition}</div>
                            <div class="nextButtonBlock"><button class="nextButton" id="nextButton">Следующий вопрос</button></div>
                            </div>`);
}

function next(){
    button.disabled = true;
    return nextButton.onclick = function(){
        button.disabled = false;
        if (indexGlobal < questons.length){
            indexGlobal += 1;
        } else{
            block.remove()
            button.remove()
            answerBlock.remove()
            return completedTest();

        }
        answerBlock.remove()
        deleteQuestion()
        add(indexGlobal) 
    }
}

function start(){
    window.location.reload()
}

function e(){
    let trueAnswer = document.querySelectorAll("input[type='radio']")
    for (let radio of trueAnswer) {
		if (radio.checked) {
            if(questons[indexGlobal-1].correctAnswer == radio.value){
                // block.style.backgroundColor = "green";
                right += 1;
                if (indexGlobal < questons.length){
                    indexGlobal += 1;
                }else{
                    block.remove()
                    button.remove()
                    return completedTest();
                }
                setTimeout(deleteQuestion, 100)
                setTimeout(add, 100, indexGlobal)            
            }else{
                // block.style.backgroundColor = "red";
                addAnswer();
                next();
            }
		}
	}
}

button.addEventListener('click', e)

