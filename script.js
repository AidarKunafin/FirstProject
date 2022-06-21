'use strict'
let right = 0;
let indexGlobal = 1
let page = 0;
let theme;
let total;
let result = "result"
let resultstr = localStorage.getItem('resultstr');
let resultarr = localStorage.getItem('resultarr');
let resultobj = localStorage.getItem('resultobj');


//Темы вопросов
let questons1 = [
    {
        id: 1,
        title: 'Как преобразовать строку в верхний регистр?',
        answer: ['toUppercase', 'toLowercase', 'push', 'pop'],
        correctAnswer: 'toUppercase'
    },
    {
        id: 2,
        title: 'Какое свойство возращает длину строки?',
        answer: ['charAt', 'confirm', 'length', 'includes'],
        correctAnswer: 'length'
    },
    {
        id: 3,
        title: 'Какой метод возвращает часть строки от start до (не включая) end?',
        answer: ['indexOf', 'splice', 'substring', 'slice'],
        correctAnswer: 'slice'
    },
    {
        id: 4,
        title: 'Какой метод Возвращает часть строки между start и end (не включая) end?',
        answer: ['includes', 'slice', 'substring', 'splice'],
        correctAnswer: 'substring'
    },
    {
        id: 5,
        title: 'Какой метод возвращает часть строки от start длины length?',
        answer: ['indexOf', 'substr', 'substring', 'slice'],
        correctAnswer: 'substr'
    },
    {
        id: 6,
        title: 'Какой метод возвращает true, если в строке str есть искомая подстрока?',
        answer: ['filter', 'splice', 'includes', 'map'],
        correctAnswer: 'includes'
    },
    {
        id: 7,
        title: 'Какой метод ищет подстроку substr в строке str, начиная с позиции pos, и возвращает позицию, на которой располагается совпадение, либо -1 при отсутствии совпадений?',
        answer: ['sort', 'includes', 'substring', 'indexOf'],
        correctAnswer: 'indexOf'
    },
    {
        id: 8,
        title: 'Какой метод меняет строку в нижний регистр?',
        answer: ['lowerCase', 'splice', 'toLowerCase', 'toUpperCase'],
        correctAnswer: 'toLowerCase'
    },
    {
        id: 9,
        title: 'С помощью какого метода можно получить символ, который занимает позицию pos?',
        answer: ['indexOf', 'includes', 'filter', 'charAt'],
        correctAnswer: 'charAt'
    },
    {
        id: 10,
        title: 'С помощью какого метода можно проверить начинается ли строка определённой строкой?',
        answer: ['charAt', 'splice', 'endsWith', 'startsWith '],
        correctAnswer: 'startsWith'
    }
]
let questons2 = [
    {
        id: 1,
        title: 'Какой метод перебора массива не возвращает значение?',
        answer: ['filter', 'map', 'forEach', 'slice'],
        correctAnswer: 'forEach'
    },
    {
        id: 2,
        title: 'Какой метод позволяет соединять массивы в один массив?',
        answer: ['includes', 'concat', 'splice', 'map'],
        correctAnswer: 'concat'
    },
    {
        id: 3,
        title: 'Какой метод поиска возращает все искомые значения?',
        answer: ['split', 'filter', 'map', 'sort'],
        correctAnswer: 'filter'
    },
    {
        id: 4,
        title: 'Какой метод используют для проверки массива на массив?',
        answer: ['split', 'thisArg', 'map', 'isArray'],
        correctAnswer: 'isArray'
    },
    {
        id: 5,
        title: 'Какой метод извлекает элемент с конца?',
        answer: ['push', 'splice', 'pop', 'shift'],
        correctAnswer: 'pop'
    },
    {
        id: 6,
        title: 'Какой метод добавляет элементы в начало?',
        answer: ['shift', 'splice', 'map', 'unshift'],
        correctAnswer: 'unshift'
    },
    {
        id: 7,
        title: 'Какой метод создаёт новый массив, копируя в него элементы с позиции start до end (не включая end)?',
        answer: ['split', 'slice', 'sort', 'splice'],
        correctAnswer: 'slice'
    },
    {
        id: 8,
        title: 'Какой метод вычисляет одно значение на основе всего массива, вызывая func для каждого элемента и передавая промежуточный результат между вызовами?',
        answer: ['forEach', 'find', 'reduce', 'map'],
        correctAnswer: 'reduce'
    },
    {
        id: 9,
        title: 'Какой метод ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено?',
        answer: ['filter', 'indexOf', 'includes', 'findIndex'],
        correctAnswer: 'indexOf'
    },
    {
        id: 10,
        title: 'Какой метод начиная с индекса pos, удаляет deleteCount элементов и вставляет items?',
        answer: ['split', 'slice', 'splice', 'concat'],
        correctAnswer: 'splice'
    }
]
let questons3 = [
    {
        id: 1,
        title: 'Какой метод создает массив ключей объекта?',
        answer: ['newArray', 'freeze', 'keys', 'create'],
        correctAnswer: 'keys'
    },
    {
        id: 2,
        title: 'Какой метод создает вложенный массив пар "ключ-значение" объекта?',
        answer: ['seal', 'values', 'entries', 'create'],
        correctAnswer: 'entries'
    },
    {
        id: 3,
        title: 'Какой метод предотвращает изменение объекта?',
        answer: ['values', 'assign', 'create', 'freeze'],
        correctAnswer: 'freeze'
    },
    {
        id: 4,
        title: 'Какой метод используется для перебора всех свойств объекта?',
        answer: ['forEach', 'map', 'for..in', 'for..of'],
        correctAnswer: 'for..in'
    },
    {
        id: 5,
        title: 'Какой метод возвращает массив значений свойств переданного ему объекта?',
        answer: ['values', 'assign', 'for..in', 'freeze'],
        correctAnswer: 'values'
    },
    {
        id: 6,
        title: 'Какой метод позволяет «запечатать» объект, предотвратив добавление новых свойств?',
        answer: ['create', 'entries', 'seal', 'freeze'],
        correctAnswer: 'seal'
    },
    {
        id: 7,
        title: 'Какой метод позволяет объединять объекты, копируя свойства из одного объекта в другой?',
        answer: ['map', 'assign', 'create', 'clone'],
        correctAnswer: 'assign'
    },
    {
        id: 8,
        title: 'Какой метод позволяет создавать новые объекты и соединять их с прототипами существующих объектов?',
        answer: ['entries', 'assign', 'create', 'freeze'],
        correctAnswer: 'create'
    },
    {
        id: 9,
        title: 'С помощью какого оператора можно удалять свойства и методы объекта?',
        answer: ['seal', 'remove', 'clear', 'delete'],
        correctAnswer: 'delete'
    },
    {
        id: 10,
        title: 'С помощью какого оператора можно проверить существование свойства в объекте?',
        answer: ['include', 'in', 'create', 'filter'],
        correctAnswer: 'in'
    }
]

//Основная функция
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
        case 3:
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
    console.log(`${result + total}`)

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
        button.removeAttribute('disabled')
    }

    function completedTest(){
        main.insertAdjacentHTML('beforeend', `<div class= "completed">Тест завершен!</div>`),
        main.insertAdjacentHTML('beforeend', `<div class= "res">Процент верных ответов ${((right/theme.length)*100).toFixed(1)}%</div>`),
        main.insertAdjacentHTML('beforeend', `<button class= "startButton" id="startButton">В начало</button>`),
        startButton.addEventListener('click', start);
        localStorage.setItem(`${result + total}`, `${((right/theme.length)*100).toFixed(1)}`)
    }


    function remove(){
        block.remove()
        button.remove()
    }

    function start(){
        window.location.reload()
    }

    function condition(){
        if (indexGlobal < theme.length){
            indexGlobal += 1;
        }else{
            setTimeout(remove, 500)
            return setTimeout(completedTest, 500)
        }
        setTimeout(deleteQuestion, 500)
        setTimeout(add, 500, indexGlobal) 
    }

    function e(){
        let trueAnswer = document.querySelectorAll("input[type='radio']")
        for (let radio of trueAnswer) {
    		if (radio.checked) {
                if(theme[indexGlobal-1].correctAnswer == radio.value){
                    button.setAttribute('disabled', true)
                    block.style.backgroundColor = "green";
                    right += 1;
                    condition()
                }else{
                    block.style.backgroundColor = "red";
                    button.setAttribute('disabled', true)
                    condition()
                }
    		}
    	}
    }

    button.addEventListener('click', e)
}    

function startPage(){

    root.insertAdjacentHTML('afterbegin', `<h1 class="start">Проверка знаний</h1>`)
    root.insertAdjacentHTML('beforeend', `<div class="button-string"><button class="string" id="str">Строки</button></div>`)
    root.insertAdjacentHTML('beforeend', `<div class="button-massive"><button class="massive" id="arr">Массивы</button></div>`)
    root.insertAdjacentHTML('beforeend', `<div class="button-object"><button class="object" id="obj">Объекты</button></div>`)
    root.insertAdjacentHTML('beforeend', `<div class="button-result"><button class="result" id="res">Очистить результаты</button></div>`)

    function resultTest(x, y){
        if (x != undefined){
            y.insertAdjacentHTML('afterend', `<span id="produce">Процент верных ответов ${x}%</span>`)
        }
    }

    resultTest(resultstr, str);
    resultTest(resultarr, arr);
    resultTest(resultobj, obj);

    function strClick(n) {
        root.innerHTML="";
        page = n;
        basic();
    }

    function clear(){
        produce.remove();
        localStorage.clear();
    }

    str.addEventListener('click',()=>strClick(1));
    arr.addEventListener('click',()=>strClick(2));
    obj.addEventListener('click',()=>strClick(3));
    res.addEventListener('click', clear)
}

basic();

