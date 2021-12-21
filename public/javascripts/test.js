// prevent backpaging
if (window.history && history.pushState) {
    addEventListener('load', function () {
        history.pushState(null, null, null); // creates new history entry with same URL
        addEventListener('popstate', function () {
            alert("Please do not return to the previous page.");
            history.pushState(null, null, null);
        });
    });
}

var clicked = false;
var incorrectWords = [
    'abcense',
    'abilty',
    'accomodate',
    'accomodated',
    'accomodation',
    'accomodations',
    'accordence',
    'accross',
    'acept',
    'aceptable',
    'acess',
    'acessories',
    'acheive',
    'acheived',
    'acheivement',
    'acheivements',
    'acheives',
    'acknowlege',
    'acknowleged',
    'acknowlegement',
    'Acknowlegements',
    'acknowleges',
    'Acording',
    'acorrding',
    'acount',
    'actualy',
    'acurate',
    'additionol',
    'adminestration',
    'Adminestration',
    'adminestrative',
    'adresses',
    'adventage',
    'advertizing',
    'agensies',
    'agression',
    'agressive',
    'agressively',
    'alchohol',
    'alternotive',
    'Amercan',
    'announsed',
    'announsements',
    'anual',
    'apealing',
    'aplicable',
    'aplications',
    'apparantly',
    'appearence',
    'appearences',
    'apreciate',
    'aproaches',
    'apropriate',
    'aproval',
    'arguement',
    'arguements',
    'asessible',
    'asociated',
    'Asociation',
    'assasination',
    'assesment',
    'assistence',
    'assosiation',
    'atempts',
    'authorties',
    'automaticaly',
    'avaliable',
    'basicly',
    'becomming',
    'Becomming',
    'becuase',
    'begining',
    'beginings',
    'behavor',
    'behavour',
    'beleive',
    'beleived',
    'beleiver',
    'beleivers',
    'beleives',
    'benafit',
    'benafits',
    'beuatiful',
    'bizzare',
    'boyfreind',
    'buisness',
    'buisnesses',
    'buisnessman',
    'buisnessmen',
    'calender',
    'calenders',
    'campiagn',
    'capasity',
    'capitel',
    'Carribean',
    'casulties',
    'cemetary',
    'centerpeice',
    'centrol',
    'circumstences',
    'coherant',
    'colection',
    'collegue',
    'collegues',
    'colunm',
    'comitment',
    'comming',
    'commited',
    'commitee',
    'commitees',
    'communcation',
    'comperhensive',
    'competetive',
    'compitetion',
    'completly',
    'componant',
    'componants',
    'comunications',
    'comunities',
    'comunnity',
    'concious',
    'conciously',
    'conciousness',
    'conferance',
    'Conferance',
    'confidance',
    'conserned',
    'consistant',
    'continueing',
    'contrebution',
    'corection',
    'corperate',
    'Corperation',
    'corupt',
    'criminol',
    'culturel',
    'curently',
    'curiculum',
    'curiousity',
    'decsribed',
    'defanse',
    'defenition',
    'definately',
    'departmant',
    'desicion',
    'desicions',
    'Develapment',
    'develeped',
    'develepment',
    'dicuss',
    'diference',
    'diferent',
    'diffcult',
    'diffculty',
    'dilemna',
    'dilemnas',
    'disccusion',
    'discusions',
    'dissapear',
    'dissapeared',
    'dissapearence',
    'dissapearing',
    'dissapears',
    'dissapointed',
    'dissapointing',
    'dissapointment',
    'documants',
    'e-buisness',
    'ecomony',
    'ecstacy',
    'efficency',
    'efficent',
    'elevaters',
    'elimenation',
    'embarassed',
    'embarassing',
    'embarassment',
    'emotionel',
    'employes',
    'employmant',
    'enforcemant',
    'enthusastic',
    'enviroment',
    'enviromental',
    'enviromentalists',
    'enviromentally',
    'enviroments',
    'equivalant',
    'esential',
    'Especialy',
    'espesially',
    'eventualy',
    'evidance',
    'excelent',
    'excercise',
    'existance',
    'existence',
    'expereiences',
    'expereince',
    'expereinced',
    'experment',
    'explenation',
    'expresed',
    'eyepeice',
    'facilties',
    'familar',
    'familarity',
    'Farenheit',
    'Febuary',
    'fedaral',
    'finaly',
    'financal',
    'florescent',
    'folowing',
    'foriegn',
    'foriegner',
    'foriegners',
    'forseeable',
    'forthcomming',
    'fourty',
    'foward',
    'foward-looking',
    'fowarded',
    'fowarding',
    'fowards',
    'Fransisco',
    'freind',
    'freindly',
    'freinds',
    'freindship',
    'freindships',
    'frequantly',
    'futher',
    'futhermore',
    'gaurd',
    'gaurded',
    'gaurdian',
    'gaurdians',
    'gaurding',
    'gaurds',
    'genaration',
    'generaly',
    'genorated',
    'girlfreind',
    'girlfreinds',
    'glamourous',
    'globalisation',
    'goverment',
    'govermental',
    'goverments',
    'guidlines',
    'happend',
    'harrassed',
    'harrassment',
    'honourary',
    'hospitol',
    'humourous',
    'husbend',
    'illastration',
    'immediatly',
    'immegrant',
    'implemant',
    'implemantation',
    'implemanted',
    'importence',
    'improvemant',
    'incidently',
    'incomming',
    'incraesing',
    'indefinately',
    'Independance',
    'independant',
    'independantly',
    'independants',
    'indeviduals',
    'indivdual',
    'influance',
    'infrestructure',
    'instaled',
    'instence',
    'institutons',
    'insurence',
    'intarest',
    'intarested',
    'intelligance',
    'intergovermental',
    'internationol',
    'Internationol',
    'internol',
    'interupt',
    'interupted',
    'interuption',
    'interuptions',
    'invester',
    'investmant',
    'involvemant',
    'irresistable',
    'Isreal',
    'isues',
    'judgmant',
    'knowlege',
    'knowlegeable',
    'langage',
    'leest',
    'legeslation',
    'liason',
    'lisence',
    'lost',
    'maintanence',
    'managment',
    'marrage',
    'masterpeice',
    'mearly',
    'medisine',
    'mentaly',
    'millenia',
    'millenium',
    'Minester',
    'movment',
    'Nationel',
    'nationol',
    'naturol',
    'neccessary',
    'nesessarily',
    'non-govermental',
    'nonsence',
    'normaly',
    'noticable',
    'ocassion',
    'ocassional',
    'ocassionally',
    'ocassions',
    'occurance',
    'occurances',
    'occured',
    'occuring',
    'oparate',
    'oparating',
    'oparation',
    'oparations',
    'oportunities',
    'oportunity',
    'Organization',
    'overcomming',
    'Overcomming',
    'Parlament',
    'particapants',
    'particpate',
    'particpation',
    'particuler',
    'pavillion',
    'peeple',
    'peice',
    'peices',
    'performence',
    'permenant',
    'Permenant',
    'perpared',
    'persent',
    'persentage',
    'persistant',
    'personel',
    'personol',
    'polisy',
    'politcal',
    'politican',
    'politicans',
    'Portugese',
    'posession',
    'posessions',
    'positon',
    'possiblity',
    'potental',
    'precedures',
    'prefered',
    'prefering',
    'preperation',
    'preposal',
    'preposals',
    'presance',
    'presontation',
    'pressent',
    'prevision',
    'previsions',
    'produse',
    'prodused',
    'profesionals',
    'proffesional',
    'programing',
    'propoganda',
    'prosess',
    'publically',
    'purpases',
    'realise',
    'realy',
    'reccomendations',
    'reccommend',
    'recieve',
    'recieved',
    'reciever',
    'recievers',
    'recieves',
    'recieving',
    'recognising',
    'Recomended',
    'recomennded',
    'refered',
    'regestration',
    'registared',
    'regulor',
    'reletively',
    'relevent',
    'religous',
    'religously',
    'remeber',
    'remebered',
    'remebering',
    'remebers',
    'repersent',
    'repersentative',
    'repersented',
    'requrements',
    'resalution',
    'resently',
    'residants',
    'resistence',
    'responce',
    'responcible',
    'responsability',
    'responsibiltes',
    'revanue',
    'reveiw',
    'Reveiwer',
    'safegaurd',
    'safegaurding',
    'safegaurds',
    'sciance',
    'scientfic',
    'sease',
    'Secertary',
    'seige',
    'seigel',
    'self-concious',
    'sence',
    'senced',
    'sences',
    'seperate',
    'seperated',
    'seperately',
    'seperates',
    'seriouslly',
    'severol',
    'shortcommings',
    'signficant',
    'signifcantly',
    'sitaution',
    'softwear',
    'somthing',
    'soveriegnty',
    'specificaly',
    'spirtual',
    'standadized',
    'statemant',
    'straightfoward',
    'Subcommitee',
    'subcommitee',
    'subconcious',
    'submited',
    'substantal',
    'succesful',
    'succesfully',
    'sufficent',
    'suprise',
    'suprised',
    'suprises',
    'tatoo',
    'technalogy',
    'temperture',
    'tendancy',
    'therefor',
    'threshhold',
    'threshholds',
    'thruogh',
    'tommorow',
    'tounge',
    'tounges',
    'traditionel',
    'transpertation',
    'truely',
    'typicaly',
    'unconcious',
    'unconciously',
    'unfamilar',
    'unforseen',
    'unfortunatly',
    'uninterupted',
    'univercities',
    'Univercity',
    'univercity',
    'unneccessary',
    'unsuccesful',
    'unsuccesfully',
    'untill',
    'upcomming',
    'Upcomming',
    'user-freindly',
    'usualy',
    'violance',
    'Wedesday',
    'welcomming',
    'whereever',
    'wierd',
    'yestarday'
]
var dPrime = []

var url = window.location.href
var firstTime = localStorage.getItem(url);
if (!firstTime) {
    var progressCount = parseInt(localStorage.getItem("progressCount")) + 1
    localStorage.setItem("progressCount", progressCount.toString())
    localStorage.setItem(url, progressCount.toString());
}
var progressCount = parseInt(localStorage.getItem(url))

window.onload = function () {
    document.getElementById('completed').style.width = (progressCount * 20).toString() + "px"

    var b = document.getElementById('b');
    if (b.innerHTML == "1") {
    } else if (b.innerHTML == "0") {
    }

    let input = '';
    let currSuggestion = '';
    let inputSuggestion = '';

    // Send input to GPT-3 API
    async function gpt_predict() {
        if (input.substring(input.length - 1) == ".") {
            fetch('/gpt_predict', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({prompt: input.trimEnd() })})
            .then(response => response.json())
            .then(result => {
                currSuggestion = result.text.trimStart()
                var email = document.getElementById('email');
                input = email.value;
                if (input.substring(input.length - 2) == ". ") {
                    document.getElementById('predictions').innerHTML = input + '<span style="color:Gray">' + currSuggestion + '</span>';
                } else if (input.substring(input.length - 1) == ".") {
                    currSuggestion = " " + currSuggestion
                    document.getElementById('predictions').innerHTML = input + '<span style="color:Gray">' + currSuggestion + '</span>';
                }
                inputSuggestion = input + currSuggestion
            })
            .catch(error => {
                console.error('Error:', error);
            }); 
        }
    }

    // Press tab key
    var email = document.getElementById('email');
    email.addEventListener('keydown', function (event) {
        if (event.key == 'Tab' && input == inputSuggestion.substring(0, input.length)) {
            event.preventDefault();
            var response = document.getElementById('email');
            response.value = inputSuggestion
            inputSuggestion = ''
        }
    });

    // Predict: focus on displaying predictive text behind textarea correctly
    email.oninput = handleInput;
    function handleInput(event) {
        input = email.value;
        if (event.key != 'Tab') {
            gpt_predict();
            select_scroll_1(event);
            if (input.length < inputSuggestion.length - currSuggestion.length - 1) {
                inputSuggestion = ''
            }
            if (input == inputSuggestion.substring(0, input.length)) {
                document.getElementById('predictions').innerHTML = input + '<span style="color:Gray">' + inputSuggestion.substring(input.length) + '</span>';
            } else {
                document.getElementById('predictions').innerHTML = input;
            }
        }
    }
    
    // Get word count
    email.addEventListener("keyup", function countWord() {
        let res = [];
        let str = this.value.replace(/[\t\n\r\.\?\!]/gm, " ").split(" ");
        str.map((s) => {
            let trimStr = s.trim();
            if (trimStr.length > 0) {
                res.push(trimStr);
            }
        });
        document.querySelector("#wordcount").innerText = res.length;
    });

    // Click send button
    var button = document.getElementById('send');
    if (!clicked && button != null) {
        button.addEventListener('click', function (event) {
        });
    }

    // Scroll predictive text div and textarea at the same time
    var s1 = document.getElementById('email');
    var s2 = document.getElementById('predictions');
    function select_scroll_1(e) {
        s2.scrollTop = s1.scrollTop;
    }
    s1.addEventListener('scroll', select_scroll_1, false);

    // Set time difference
    var hour = new Date().getHours();
    if (hour <= 9) {
        hour += 15;
    } else {
        hour -= 9;
    }
    var time = document.getElementById('time');
    if (hour == 1) {
        time.innerText = "9:15 AM (" + hour + " hour ago)"
    } else {
        time.innerText = "9:15 AM (" + hour + " hours ago)"
    }

    var _typingIndicator = document.querySelector('.typing'),
        _input = document.querySelector('#email'),
        idleTime = 400,
        idleTimer = null,
        inputValue,
        indicatorState = {
            active: 'is-typing-active',
            init: 'is-typing-init'
        };

    function showIndicator() {
        _typingIndicator.classList.add(indicatorState.init);
    }

    function activateIndicator(el) {
        _typingIndicator.classList.add(indicatorState.active);
        inputValue = el.value;
        detectIdle(el);
    }

    function removeIndicator() {
        _typingIndicator.classList.remove(indicatorState.init, indicatorState.active);
    }

    function detectIdle(el) {
        if (idleTimer) {
            clearInterval(idleTimer);
        }

        idleTimer = setTimeout(function () {
            if (getInputCurrentValue(el) === inputValue) {
                _typingIndicator.classList.remove(indicatorState.active);
            }
        }, idleTime);
    }

    function getInputCurrentValue(el) {
        var currentValue = el.value;
        return currentValue;
    }

    function initTypingIndicator() {
        _input.onfocus = function () {
            showIndicator();
        };

        _input.onkeyup = function () {
            activateIndicator(this);
        };

        _input.onblur = function () {
            removeIndicator();
        };
    }

    initTypingIndicator();
}