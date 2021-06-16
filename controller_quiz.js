//funksjon til en onclick på knapp som er i view_landing, så du kan navigere derfra
//til quiz. 
function goToQuiz() {
    model.app.currentPage = 'quiz';
    updateView();
}

//denne skal sette verdien bruker har skrevet i input feltet med id newQuiz
//fra view_quiz fila i variabel nq. så sier vi at paragrafen med id quizInp
//skal være lik denne variabelen så vi får se den printa på siden i p.
function addQuiz() {
    let nq = document.querySelector('#newQuiz').value;
    document.querySelector('#quizInp').innerHTML = nq;
    
}

function checkAns() {
    
}

//funksjon for å legge til spørsmål og svaralternativer som bruker på siden. Er laget array
//og her er funksjon som pusher input fra bruker inn i arrayet/lista. Den er repetitiv nå, men funker.
//vil finne løsninger for å gjøre koden enklere og mindre repetitiv.
function addQuestion() {

    let newList = [];
    let newObjectAns1 = {};
    let newObjectAns2 = {};
    let newObjectAns3 = {};
    newObjectAns1.answerAlt = model.newQuestion.answere1
    newList.push(newObjectAns1)
    
    newObjectAns2.answerAlt = model.newQuestion.answere2
    newList.push(newObjectAns2)

    newObjectAns3.answerAlt = model.newQuestion.answere3
    newList.push(newObjectAns3)

    let newQuestion ={
        id: model.questions.length,
        question: model.newQuestion.question,
        answers: newList,
        
    }
    model.questions.push(newQuestion)
    updateView()
}



function noesomhelst(){

    //denne skal gjøre dette for meg
        
    // så skal den gjøre dette
}

// tips fra Erlend:
//<button onclick="sendGame(${model.logList[i].id})">Send</button>
//                                  questions[i].answer
//legger til knapp/radiobutton på alle svarene, slipper å legge manuelt
//one by one

// du lagger 3 knapper: 
// eks: ${model.questin[i].answear1} som er knapp 1 altså svar alternativ 1
// eks. ${model.questin[i}.answear2} som er knapp 2 altså svar alternative 2
