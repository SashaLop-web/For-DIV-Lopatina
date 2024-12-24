const DATA = [
	{
		question:'Что такое операционная система?',
		answers: [
			{ 
                id:'1',
                value:'Это просто программа на компьютере, как и другие - Word или Chrome.',
                correct:false,
            },
            {
                id:'2',
                value:'Это показатель того, какой процессор используется на компьютере. Например, 32-битный или 64-битный.',
                correct:false,
            },
			{
                id:'3',
                value:'Это набор взаимосвязанных программ, осуществляющих управление компьютером и взаимодействие с пользователем.',
                correct:true,
            },
			{
                id:'4',
                value:'Нет такого понятия, есть понятие "файловая система".',
                correct:false,
            },
		],
        answersCorrect:"3",
	},
	{
		question: 'Является ли Android операционной системой?',
		answers: [
			{
                id:'5',
                value:'Да, это такая же ОС, как и другие, просто для мобильных девайсов.',
                correct:true,
            },
			{
                id:'6',
                value:'Нет, операционные системы бывают только для ПК.',
                correct:false,
            },
			{
                id:'7',
                value:'Нет, Android это программа, которая ставится на операционную систему девайса. ОС на разных девайсах разные.',
                correct:false,
            },
			{
                id:'8',
                value:'Это домашняя страничка в настройках вашего браузера.',
                correct:false,
            },
		],
        answersCorrect:"5",
	},
	{
		question: 'Что такое процессор компьютера?',
		answers: [
			{
                id:'9',
                value:'Это блок, внутри которого находится дисковод и много разъемов для монитора, клавиатуры и компьютерной мышки.',
                correct:false,
            },
			{
                id:'10',
                value:'Это общее название всех комплектующих компьютера.',
                correct:false,
            },
			{
                id:'11',
                value:'Это элемент компьютера, с помощью которого обрабатывается информация, находящаяся как в собственной памяти, так и в памяти других устройств.',
                correct:true,

            },
			{
                id:'12',
                value:'Это суммарный показатель вычислительной мощности компьютера, например 2,7 ГГц.',
                correct:false,
            },
		],
        answersCorrect:"11",
	},
	{
		question: 'Какие бывают разрядности у современных процессоров?',
		answers: [
            {
                id:'13',
                value:'32 и 64 бита.',
                correct:true,
            }, 
            {
                id:'14',
                value:'12 и 32 бита.',
                correct:false,
            }, 
            {
                id:'15',
                value:'15 и 32 бита.',
                correct:false,
            }, 
            {
                id:'16',
                value:'86 и 64 бита.',
                correct:false,

            }
        ],
        answersCorrect:"13",
	},
	{
		question: 'Какой тип процессора чаще всего используют мобильные девайсы?',
		answers: [
			{
                id:'17',
                value:'iOS использует Intel, остальные используют AMD.',
                correct:false,

            },
			{
                id:'18',
                value:'Чаще всего используют Intel.',
                correct:false,

            },
			{
                id:'19',
                value:'Чаще всего используют AMD.',
                correct:false,

            },
			{
                id:'20',
                value:'Чаще всего используют ARM.',
                correct:true,

            },
		],
        answersCorrect:"20",
	},
	{
		question: 'Для чего компьютеру нужна RAM?',
		answers: [
			{
                id:'21',
                value:'Для быстрого доступа к данным.',
                correct:true,

            },
			{
                id:'22',
                value:'Для долгосрочного хранения данных.',
                correct:false,

            },
			{
                id:'23',
                value:'Для правильной фрагментации памяти.',
                correct:false,

            },
			{
                id:'24',
                value:'Для дефрагментации данных.',
                correct:false,

            },
		],
        answersCorrect:"21",
	},
	{
		question: 'Чем отличается HDD от SSD?',
		answers: [
			{
                id:'25',
                value:'HDD - это твердотельный накопитель без подвижных частей. Более дешевый, чем SSD. HDD работает быстрее.',
                correct:false,
            },
			{
                id:'26',
                value:'HDD - это твердотельный накопитель без подвижных частей. Более дорогой, чем SSD. HDD работает быстрее.',
                correct:false,
            },
			{
                id:'27',
                value:'SSD - это твердотельный накопитель без подвижных частей. Более дешевый, чем HDD. SSD работает быстрее.',
                correct:false,
            },
			{
                id:'28',
                value:'SSD - это твердотельный накопитель без подвижных частей. Более дорогой, чем HDD. SSD работает быстрее.',
                correct:true,
            },
		],
        answersCorrect:"28",
	},
	{
		question: 'Как отличаются между собой USB?',
		answers: [
			{
                id:'29',
                value:'Бывают только USB 2.0 и 3.2.',
                correct:false,
            },
			{
                id:'30',
                value:'Бывают только micro-USB и mini-USB.',
                correct:false,
            },
			{
                id:'31',
                value:'USB отличаются по пропускной способности (micro-USB, mini-USB, lightning и т.д.) и форме (USB 2.0, USB 3.2).',
                correct:false,
            },
			{
                id:'32',
                value:'USB отличаются по форме (micro-USB, mini-USB, lightning и т.д.) и пропускной способности (USB 2.0, USB 3.2).',
                correct:true,
            },
		],
        answersCorrect:"32",
	},
	{
		question: 'Какой файловой системы не существует?',
		answers: [
            {
                id:'33',
                value:'Fat.',
                correct:false,
            }, 
            {
                id:'34',
                value:'NTFS.',
                correct:false,
            }, 
            {
                id:'35',
                value:'APFS.',
                correct:false,
            }, 
            {
                id:'36',
                value:'BolSFS.',
                correct:true,
            },
        ],
        answersCorrect:"36",
	},
];


const quiz = document.querySelector('#quiz');
const questions = document.querySelector('#questions');
const quizTitle = document.querySelector('#quiz-title');
const indicator = document.querySelector('#indicator');
const progress = document.querySelector('#progress');
const quizIndicator = document.querySelector('.quiz-indicator');
const results = document.querySelector('#results');
const progressBar = document.querySelector('#progressBar');
const btnRestart = document.querySelector('#btn-restart');
const quizResultTitle = document.querySelector('#quiz__result-title');


quizResultTitle.innerHTML = "";
let localResults = {};
let currentQuestionIndex = 0;
let score = 0;
let hasAnsweredCurrentQuestion = false;

//функция рандом
function generateRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Создание списка с перемешанными в случайном порядке элементами из заданного списка
function createNewOrder(list) {
    let listCopy = list.slice();
    let newList = [];
    while (listCopy.length > 0) {
        let generatedInt = generateRandomInt(1, listCopy.length);
        let newResult = listCopy[generatedInt - 1];
        listCopy.splice(generatedInt - 1, 1);
        newList.push(newResult);
    }
    return newList;
}

// Функция для получения перемешанных данных
function getShuffledData() {
    return createNewOrder(DATA).map(item => {
        return {
            ...item,
            answers: createNewOrder(item.answers)
        };
    });
}
console.log(getShuffledData());

// Вызов функции для получения нового перемешанного списка
let shuffledData = getShuffledData();

//прогрессбар
const renderIndicator = (currentStep = 0) => { 
    indicator.innerHTML = `<p style="font-weight: bold;">${currentStep}</p>`;
    progress.innerHTML = `<p style="font-weight: bold;">${shuffledData.length}</p>`;
    
    const progressPercentage = Math.round((currentStep / shuffledData.length) * 100);
    progressBar.style.width = `${progressPercentage}%`;
    indicator.style.left = `${progressPercentage}%`;

    if (currentStep === shuffledData.length) {
        indicator.style.display = 'none'; 
    } else {
        indicator.style.display = 'block';
    }
};
// Показ карточек
const renderQuestions = (index) => {
    renderIndicator(index + 1);
    questions.dataset.currentStep = index;

    const renderAnswers = () => shuffledData[index].answers
        .map((answer) => `
            <li>
                <label>
                    <input type="radio" name=${index} value=${answer.id} class="answer-input">
                    <span id="radio-style" class="radio-style"></span>
                    <span class="radio-text">${answer.value}</span>
                </label>
            </li>
        `)
        .join('');

    questions.innerHTML = `
        <div class="quiz-questions-item">
            <h2 class="quiz-questions__question">${shuffledData[index].question}</h2>
            <ul class="quiz-questions__answers">${renderAnswers()}</ul>
        </div>

    `;
};

//результаты
const renderResults = () => {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    shuffledData.forEach((question, index) => {
        const { question: questionText, answersCorrect, answers } = question;
        const userAnswer = localResults[String(index)];
        const correctAnswer = answers.find(answer => answer.correct).value;
        const resultItem = document.createElement('div');
        resultItem.className = 'quiz-results-item';
        resultItem.style.backgroundColor = userAnswer === answersCorrect ? '#E5F5E1' : '#FFE0E0';

        resultItem.innerHTML = `
            <div class="quiz-results-block">
                <h3 class="quiz-results__question">${questionText}</h3>
                <span class="showAnswer">${correctAnswer}</span>
            </div> 
        `;
        resultsContainer.appendChild(resultItem); 
    });
};
function showResults(){

    quizResultTitle.innerHTML = '';
	let mainTitle, result, message, showTitle;

	if(score === shuffledData.length){

		showTitle = `<div class="quiz-result-title" id="quiz-result-title">
            <h1 class="title-result">%main-title%</h1>
            <h2 class="result">%result%</h2>
            <h2 class="message">%message%</h2>
        </div>`

		mainTitle = 'Поздравляем!';
		result = 'Вы правильно ответили на все вопросы.';
		message = 'Вы действительно отлично разбираетесь в IT.';

	} else if(score == 0){

		showTitle = `<div class="quiz-result-title" id="quiz-result-title">
            <h1 class="title-result">%main-title%</h1>
            <h2 class="result">%result%</h2>
            <h2 class="message">%message%</h2>
        </div>`

		mainTitle = 'Упс :('
		result = 'Вы неправильно ответили на все вопросы.';
		message = 'Нужно подучить теорию.';

	} else if(score == 1){
		showTitle = `<div class="quiz-result-title" id="quiz-result-title">
            <h1 class="title-result">%main-title%</h1>
            <h2 class="result">%result%</h2>
            <h2 class="message">%message%</h2>
        </div>`

		mainTitle = 'Маловато!'
		result = 'Вы ответили правильно на 1 вопрос.';
		message = 'Нужно подучить теорию!';

	} else if(score > 1 && score < 5){
		showTitle = `<div class="quiz-result-title" id="quiz-result-title">
            <h1 class="title-result">%main-title%</h1>
            <h2 class="result">Вы ответили правильно на %result% вопроса</h2>
            <h2 class="message">%message%</h2>
        </div>`

		mainTitle = 'Маловато!'
		result = score;
		message = 'Нужно подучить теорию!';

	}else{
		showTitle = `<div class="quiz-result-title" id="quiz-result-title">
            <h1 class="title-result">%main-title%</h1>
            <h2 class="result">Вы ответили правильно на %result% вопросов</h2>
            <h2 class="message">%message%</h2>
        </div>`

		mainTitle = 'Хороший результат!'
		result = score;
		message = 'Так держать!';
	}

	const finalResults = showTitle
		.replace('%main-title%', mainTitle)
		.replace('%result%', result)
		.replace('%message%', message)

	quizResultTitle.innerHTML += finalResults;
}

// логика ответа
quiz.addEventListener('click', (event) => {
    if (event.target.classList.contains('answer-input')) {
        const questionIndex = event.target.name; 
        const selectedAnswerId = event.target.value; 

        // Проверяем, является ли выбранный ответ правильным
        const question = shuffledData[questionIndex]; 
        const isCorrect = question.answers.some(answer => answer.id === selectedAnswerId && answer.correct);

        // Если ответ правильный и он ещё не был выбран
        if (isCorrect && !localResults[questionIndex]) {
            score++;
        }
        localResults[questionIndex] = selectedAnswerId; 
        console.log(`Текущий счет: ${score}`);

        // Деактивируем все другие радиокнопки для данного вопроса
        const allAnswerInputs = document.querySelectorAll(`input[name="${questionIndex}"]`);
        allAnswerInputs.forEach(input => {
            input.disabled = true;
        });

        const nextQuestionIndex = Number(questions.dataset.currentStep) + 1;
        const isLastQuestion = shuffledData.length === nextQuestionIndex;

        setTimeout(() => {
            if (isLastQuestion) {
                // Переход к результатам
                questions.classList.add('questions--hidden');
                quizTitle.classList.add('quizTitle--hidden');
                quizIndicator.classList.add('indicator--hidden'); 
                results.classList.add('results--visible');
                btnRestart.classList.add('btnRestart--visible');

                showResults();
                renderResults();
            } else {
                // Переход к следующему вопросу
                renderQuestions(nextQuestionIndex);
            }
        }, 1000);
    }

    // Обработчик для кнопки перезапуска квиза
    if (event.target.classList.contains('btn-restart')) {
        questions.classList.remove('questions--hidden');
        quizTitle.classList.remove('quizTitle--hidden');
        quizIndicator.classList.remove('indicator--hidden'); 
        results.classList.remove('results--visible');
        btnRestart.classList.remove('btnRestart--visible');

        // Обнуляем результаты
        currentQuestionIndex = 0;
        quizResultTitle.innerHTML = '';
        localResults = {};
        score = 0;
        currentData = {};

        // Функция сброса данных
        function refreshShuffledData() {
            shuffledData = getShuffledData();
            console.log(shuffledData);
        }

        refreshShuffledData();
        renderQuestions(0);
        renderIndicator(1);
    }
});
renderQuestions(0);