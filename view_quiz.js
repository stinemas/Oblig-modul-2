let html = '';


//tre radio input her, men vil få de inn i funksjoner fåt å feste til riktige svaralternativ.
//navn for at du ikke får velge mer enn en knapp om gangen. Skulle også få lagt til submit knapp
//til hvært spørsmål som skal få en onclick som ser til en funksjon som kjører når den klikkes
//i funksjonen vil jeg få skjekket radio knappene, om det er en aktiv knapp, og se hvilken boolean verdi 
//som tilhører svaralternativet jeg ønsker at knappen skal se. Funksjonen kjører med if statement som ser
//om verdien er truthy eller falsy, og gir tilbakemelding relevant til verdi i paragraf elementet
//som har id ansInp. 
function updateQuizView() {
    let html = `
        <h1>Quiz!</h1>
        <button onclick="goToLanding()">test</button>
        <h2>${quizList()}</h2>

        <input type="radio" id="choose" name="qOne -">

        <input type="radio" id="choose" name="qTwo">

        <input type="radio" id="choose" name="qTre">

        <p id="ansInp"></p> 
        
        <h3>do you have a dad joke quiz idea you would like to share? :)</h3>
        <input type="text" id="newQuiz" oninput="model.newQuestion.question = this.value" placeholder="type question here">
        <button onclick="addQuestion()">Add question</button>
        <p id="quizInp"></p> <br>

        <input type="text" id="altOne" placeholder="Answer 1" oninput="model.newQuestion.answere1 = this.value" >
        <button onclick="ansOne()">Add</button><br>
        <input type="text" id="altTwo" placeholder="Answer 2" oninput="model.newQuestion.answere2 = this.value">
        <button onclick="ansTwo">Add</button><br>
        <input type="text" id="altTre" placeholder="Answer 3" oninput="model.newQuestion.answere3 = this.value">
        <button onclick="ansTre()">add</button>

        `;
    document.querySelector('#app').innerHTML = html;
}

//henter innholdet i model så spørsmål og svaralternativ kommer fram
function quizList() {
    let listehtml = '';
    for (let i = 0; i < model.questions.length; i++) {
        listehtml += `
            <div id="questions">${model.questions[i].question}</div>
            
        `;
    }

    //Slet med å få svaralternativene fram, viste som: object Object. her er det satt i egen loop
    //som fikser det problemet med å spesifisere nærmere i model og objektene.
    // For question in questions
    for (let question of model.questions) {
        // For answer in answers
        for (let i = 0; i < question.answers.length; i++) {
            listehtml += `
                <div id="answers">${question.answers[i].answerAlt}</div>
            `;
        }


//Jeg trenger kanskje en egen funksjon til det, men prøver her å få radioknapp på alle svaralternativ til den ene gruppa.
//navn på knappene, hvis samme navn på flere, vil gindre bruker i å kunne ha flere knapper aktiv samtidig. får bare velge ett svar
        // for (let j = 0; j < question.radioOne.length; j++) {
        //     listehtml += `
        //         <input type="radio" id="choose" name="qOne">
        //     `
        // }
    }

    return listehtml;
}


// function answerList() {
//     for (let i = 0; i < model.questions.length; i++) {
//         html += `
//             <div id="answers">${model.questions[i].answer}</div>
//         `;
//     }
//     return html;
// }


//husk this.value på radio også!








