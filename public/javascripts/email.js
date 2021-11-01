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

    let predictionary;
    var b = document.getElementById('b');
    if (b.innerHTML == "1") {
        predictionary = Predictionary.instance();
        // Get dictionary
        $.get('/dictionaries/words_incorrect_updated.txt').then(function (result) {
            parseWords(result, DICT_EN);
        });
    } else if (b.innerHTML == "0") {
        predictionary = Predictionary.instance();
        $.get('/dictionaries/words_correct.txt').then(function (result) {
            parseWords(result, DICT_EN);
        });
    }

    let DICT_EN = 'DICT_EN'
    let startTime = new Date().getTime();

    let input = '';
    let suggestions = [];
    let nrOfSuggestions = 1;
    let learnFromChosen = true;

    let predictionDisplayTime;
    let prevSuggestion;

    function parseWords(string, dictionaryKey) {
        predictionary.parseWords(string, {
            elementSeparator: '\n',
            rankSeparator: ' ',
            wordPosition: 2,
            rankPosition: 0,
            addToDictionary: dictionaryKey
        });
    }

    function refreshSuggestions() {
        suggestions = predictionary.predict(input, {
            maxPredictions: nrOfSuggestions
        });
        if (suggestions.length > 0) {
            suggestions[0] = suggestions[0].toLowerCase();
            var lastSpace = input.lastIndexOf(' ');
            var lastWord = input.substring(lastSpace + 1);
            if (lastWord == suggestions[0].substring(0, lastWord.length)) {
                predictionDisplayTime = new Date().getTime();
                if (suggestions[0] != prevSuggestion) {
                    prevSuggestion = suggestions[0];
                }
            }
        }
    }

    function add(suggestion) {
        // encoding for d'
        var tabTime = new Date().getTime();
        var lastSpace = input.lastIndexOf(' ');
        var lastWord = input.substring(lastSpace + 1);
        if (b.innerHTML == "0") { // unbiased
            dPrime.push({
                code: "hit",
                suggestion: suggestions[0],
                suggestionTime: predictionDisplayTime,
                root: lastWord,
                tabTime: tabTime
            })
        } else { // biased
            if (incorrectWords.includes(suggestions[0])) {
                dPrime.push({
                    code: "false alarm",
                    suggestion: suggestions[0],
                    suggestionTime: predictionDisplayTime,
                    root: lastWord,
                    tabTime: tabTime
                })
            } else {
                dPrime.push({
                    code: "hit",
                    suggestion: suggestions[0],
                    suggestionTime: predictionDisplayTime,
                    root: lastWord,
                    tabTime: tabTime
                }) 
            }
        }

        input = predictionary.applyPrediction(input, suggestion, {
            dontLearn: false
        });
        var response = document.getElementById('email');
        response.value = input.substring(0, input.length - 1);
        refreshSuggestions();
        predictionary.learnFromInput(input);
    }

    // Train predictionary on original email
    var originalEmail = document.getElementById('message-text').innerHTML.replace(/<(.|\n)*?>/g, ' ');
    predictionary.learnFromText(originalEmail);

    // Press tab key
    var email = document.getElementById('email');
    email.addEventListener('keydown', function (event) {
        if (event.key == 'Tab') {
            event.preventDefault();
            if (suggestions.length > 0) {
                add(suggestions[0]);
                var lastSpace = input.lastIndexOf(' ');
                if (suggestions.length > 0) {
                    document.getElementById('predictions').innerHTML = input + '<span style="color:Gray">' + suggestions[0].substring(input.length - lastSpace - 1) + '</span>';
                }
            }
        }
    });

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

    // Predict: focus on displaying predictive text behind textarea correctly
    email.oninput = handleInput;

    function handleInput(event) {
        input = email.value;
        var lastSpace = input.lastIndexOf(' ');
        var lastWord = input.substring(lastSpace + 1);
        if (event.key != 'Tab') {
            predictionary.learnFromInput(input);
            if (input.length == event.target.selectionStart && suggestions.length > 0) {
                var currentTime = new Date().getTime();
                if (lastWord != suggestions[0].substring(0, lastWord.length) && b.innerHTML == "0") {
                    dPrime.push({
                        code: "miss",
                        suggestion: suggestions[0],
                        suggestionTime: predictionDisplayTime,
                        root: lastWord,
                        tabTime: currentTime
                    })
                } else if (lastWord != suggestions[0].substring(0, lastWord.length) && b.innerHTML == "1") {
                    if (incorrectWords.includes(suggestions[0])) {
                        dPrime.push({
                            code: "correct rejection",
                            suggestion: suggestions[0],
                            suggestionTime: predictionDisplayTime,
                            root: lastWord,
                            tabTime: currentTime
                        })
                    } else {
                        dPrime.push({
                            code: "miss",
                            suggestion: suggestions[0],
                            suggestionTime: predictionDisplayTime,
                            root: lastWord,
                            tabTime: currentTime
                        }) 
                    }
                }
            }
            refreshSuggestions();
            select_scroll_1(event);
        }

        var suggestion = "";
        if (suggestions.length > 0) {
            suggestion = suggestions[0];
        }
        if (lastWord != suggestion.substring(0, lastWord.length)) {
            document.getElementById('predictions').innerHTML = input;
            suggestions = [];
        } else {
            document.getElementById('predictions').innerHTML = input + '<span style="color:Gray">' + suggestion.substring(input.length - lastSpace - 1) + '</span>';
        }
    }

    // Click send button
    var button = document.getElementById('send');
    if (!clicked && button != null) {
        button.addEventListener('click', function (event) {
            var wordCount = document.getElementById('wordcount').innerHTML;
            if (wordCount < 100) {
                document.getElementById("wc_error").innerHTML = " Word count must be greater than 100."
            } else {
                clicked = true;
                button.disabled = true;
                var str = window.location.pathname;
                var id = str.substring(
                    str.indexOf("/") + 1,
                    str.lastIndexOf("/")
                );
                var email = str.substring(
                    str.lastIndexOf("/") + 1
                );
                var response = document.getElementById('email').value;
                fetch('/send', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            message: response,
                            uid: id,
                            email_id: email,
                            dprime: dPrime
                        })
                    })
                    .then(response => response.json())
                    .then(result => {
                        if (result.email_id == -1) {
                            window.location = '/goodbye';
                        } else if (result.prompt_count == 4) {
                            window.location = '/' + id + '/s1'
                        } else if (result.prompt_count == 8) {
                            window.location = '/' + id + '/m2'
                        } else {
                            window.location = '/' + id + '/' + result.email_id;
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
            }
        });
    }

    // Click tutorial send 0
    var tutorialSend0 = document.getElementById('send-tutorial-0');
    if (tutorialSend0 != null) {
        tutorialSend0.addEventListener('click', function (event) {
            var str = window.location.pathname;
            var id = str.substring(
                str.indexOf("/") + 1,
                str.lastIndexOf("/")
            );
            window.location = '/' + id + '/tutorial_transition_0';
        })
    }

    // Click tutorial send 1
    var tutorialSend1 = document.getElementById('send-tutorial-1');
    if (tutorialSend1 != null) {
        tutorialSend1.addEventListener('click', function (event) {
            var str = window.location.pathname;
            var id = str.substring(
                str.indexOf("/") + 1,
                str.lastIndexOf("/")
            );
            window.location = '/' + id + '/tutorial_transition_1';
        })
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