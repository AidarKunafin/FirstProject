'use strict'
let right = 0;
let indexGlobal = 1
let page = 0;
let theme;
let total;
let result = "result"
// let resultstr;
// let resultarr;
// let resultobj;

let questons1 = [
    {
        id: 1,
        title: 'Как преобразовать строку в верхний регистр?',
        answer: ['toUppercase', 'toLowercase', 'push', 'pop'],
        definition: 'метод toUpperCase() возвращает строку в верхнем регистре',
        correctAnswer: 'toUppercase'
    },
    {
        id: 2,
        title: 'Какое свойство возращает длдину строки?',
        answer: ['charAt', 'confirm', 'length', 'includes'],
        definition: 'promt',
        correctAnswer: 'length'
    },
    {
        id: 3,
        title: 'Какой метод возвращает часть строки от start до (не включая) end',
        answer: ['indexOf', 'splice', 'substring', 'slice'],
        definition: '|| оператор «ИЛИ»',
        correctAnswer: 'slice'
    }
]
let questons2 = [
    {
        id: 1,
        title: 'Какой метод перебора массива не возвращает значение?',
        answer: ['filter', 'map', 'forEach', 'slice'],
        definition: 'метод toUpperCase() возвращает строку в верхнем регистре',
        correctAnswer: 'for'
    },
    {
        id: 2,
        title: 'Какой метод позволяет соединять массивы в один массив?',
        answer: ['includes', 'concat', 'splice', 'map'],
        definition: 'promt',
        correctAnswer: 'concat'
    },
    {
        id: 3,
        title: 'Какой метод возращает все искомые значения?',
        answer: ['split', 'filter', 'map', 'sort'],
        definition: '|| оператор «ИЛИ»',
        correctAnswer: 'filter'
    }
]
let questons3 = [
    {
        id: 1,
        title: 'Какой метод создает массив ключей объекта?',
        answer: ['newArray', 'freeze', 'keys', 'create'],
        definition: 'метод toUpperCase() возвращает строку в верхнем регистре',
        correctAnswer: 'keys'
    },
    {
        id: 2,
        title: 'Какой метод создает вложенный массив пар "ключ-значение" объекта?',
        answer: ['seal', 'values', 'entries', 'create'],
        definition: 'promt',
        correctAnswer: 'entries'
    },
    {
        id: 3,
        title: 'Какой метод предотвращает изменение объетка?',
        answer: ['values', 'assign', 'create', 'freeze'],
        definition: '|| оператор «ИЛИ»',
        correctAnswer: 'freeze'
    }
]
let resultstr = localStorage.getItem("resultstr")
let resultarr = localStorage.getItem("resultarr")
let resultobj = localStorage.getItem("resultobj")

// button.addEventListener("click", myFn)

// function myFn(){
//     page = page + 1;
//     basic()
// }

function basic(){
    switch (page) {
        case 0:
            startPage()
            break;
        case 1:
            theme = questons1;
            total = "str"
            test()
            break;
        case 2:
            theme = questons2;
            total = "arr"
            test()
            break;
        case 2:
            theme = questons3;
            total = "obj"
            test()
            break;
    
        default:
            alert("Код не выполнился")
            break;
    }
}


function test(){
    root.insertAdjacentHTML('afterend', `<div class="button-box"><button class="button" id="button">Ответить</button></div>`)

    function template(quetion) {
        return `
            <div class="block" id="block">
                <h1>
                    ${quetion.title}
                </h1>
                <form>
                    ${quetion.answer.map(function(item, index, array){
                        return `                   
                            <div class="blockBack" id="${index}">
                                <input class="id" type="radio" name="answer" value="${item}">
                                    ${item}
                                </input>
                            </div>
                        `
                    }).join('')}
                </form>
            </div>
        `
    }

    function add(id = 1) {
        root.insertAdjacentHTML('afterbegin', template(theme[id - 1]))
    }

    add(indexGlobal)

    function deleteQuestion(){
        block.remove()
    }

    function completedTest(){
        main.insertAdjacentHTML('beforeend', `<div class= "completed">Тест завершен!</div>`),
        main.insertAdjacentHTML('beforeend', `<div class= "res">Процент верных ответов ${((right/theme.length)*100).toFixed(1)}%</div>`),
        main.insertAdjacentHTML('beforeend', `<button class= "startButton" id="startButton">В начало</button>`),
        startButton.addEventListener('click', start);
        localStorage.setItem(`${result + total}`, `${((right/theme.length)*100).toFixed(1)}`)
        console.log(localStorage.getItem(`${result + total}`))
        console.log(total)
        console.log(resultstr)
    }

    // function addAnswer(){
    //     main.insertAdjacentHTML('afterend', `<div class="answer-block" id="answerBlock">
    //                             <div class="definition" id="definition">Верный ответ:${questons[indexGlobal-1].definition}</div>
    //                             <div class="nextButtonBlock"><button class="nextButton" id="nextButton">Следующий вопрос</button></div>
    //                             </div>`);
    // }

    function remove(){
        block.remove()
        button.remove()
    }

    // function next(){
    //     return nextButton.onclick = function(){
    //         button.disabled = false;
    //         if (indexGlobal < questons.length){
    //             indexGlobal += 1;
    //         } else{
    //             remove()
    //             answerBlock.remove()
    //             return completedTest();

    //         }
    //         answerBlock.remove()
    //         deleteQuestion()
    //         add(indexGlobal) 
    //     }
    // }

    function start(){
        window.location.reload()
    }

    function condition(){
        if (indexGlobal < theme.length){
            indexGlobal += 1;
        }else{
            setTimeout(remove, 1000)
            return setTimeout(completedTest, 1000)
        }
        setTimeout(deleteQuestion, 1000)
        setTimeout(add, 1000, indexGlobal) 
    }

    function e(){
        let trueAnswer = document.querySelectorAll("input[type='radio']")
        let x = document.getElementById(`${indexGlobal-1}`)
        console.log(x)
        for (let radio of trueAnswer) {
    		if (radio.checked) {
                if(theme[indexGlobal-1].correctAnswer == radio.value){
                    block.style.backgroundColor = "green";
                    right += 1;
                    condition()
                }else{
                    block.style.backgroundColor = "red";
                    condition()
                }
    		}
    	}
    }

    button.addEventListener('click', e)
}    

function startPage(){

    root.insertAdjacentHTML('afterbegin', `<h1 class="start">Проверка знаний</h1>`)
    root.insertAdjacentHTML('beforeend', `<div class="button-string"><button class="string" id="str">Строки</button><span>Процент верных ответов ${resultstr}%</span></div>`)
    root.insertAdjacentHTML('beforeend', `<div class="button-massive"><button class="massive" id="arr">Массивы</button><span>Процент верных ответов ${resultarr}%</span></div>`)
    root.insertAdjacentHTML('beforeend', `<div class="button-object"><button class="object" id="obj">Объекты</button><span>Процент верных ответов ${resultobj}%</span></div>`)
    root.insertAdjacentHTML('beforeend', `<div class="button-result"><button class="result" id="res">Очистить результаты</button></div>`)
    
    function strClick() {
        root.innerHTML="";
        page = 1;
        basic();
    }
    str.addEventListener('click', strClick)
}

basic();


