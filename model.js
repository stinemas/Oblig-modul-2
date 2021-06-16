const model = {

    app: {
        currentPage: 'quiz',
    },

    //navigasjonsbar i fremtiden til flere sider med kode jeg leker meg med
    navBar: [
        { home: '' },
        { quiz: '' },
        { page3: '' },
        { page4: '' }
    ],
    
    //array/liste som får ta imot input fra bruker via funksjon på controller som pusher input til lista.
    newQuestion: {
        id: 4,
        question:"",
        answere1:"",
        answere2:"",
        answere3:"",
    },
    
//array med mine spørsmål og svar objecter
    questions: [
        {
            id: 1,
            question: 'What do you call a deer with no eyes?',
            answers: [
                {   
                    radioOne: 1, //noe forsøk å sette noe å identifisere svaralternativ til ett spm, får å kunne sette ett sett med knapper på ett sett med spm
                    answerAlt: 'Blind deer',
                    isCorrect: false,
                },
                {   
                    radioOne: 1,
                    answerAlt: 'No eye-deer',
                    isCorrect: true,
                },
                {
                    radioOne: 1,
                    answerAlt: 'Deer in the dark',
                    isCorrect: false,
                },
            ],

        },

        {
            id: 2,
            question: 'What do you call a fish with no eyes?',

            answers: [
                {   
                    radioTwo: 2,
                    answerAlt: 'fsh',
                    isCorrect: true,
                },
                {
                    radioTwo: 2,
                    answerAlt: 'Fish in the deep',
                    isCorrect: false,
                },
                {
                    radioTwo: 2,
                    answerAlt: 'Blind fish',
                    isCorrect: false,
                },
            ],

        },

        {
            id: 3,
            question: 'What do you call a deer with no eyes and no legs?',

            answers: [
                {
                    radioTre: 3,
                    answerAlt: 'Blind legless deer',
                    isCorrect: false,
                },
                {
                    radioTre: 3,
                    answerAlt: 'Deer in the dark',
                    isCorrect: false,
                },
                {
                    radioTre: 3,
                    answerAlt: 'Still no eye-deer',
                    isCorrect: true,
                },
                {
                    radioTre: 3,
                    answerAlt: 'Oh dear',
                    isCorrect: false,
                },
            ]
        },
    ]
}


// function that creates 

/**
 * Functions:
 *  - delete question
 *  - add question
 *  - edit question
 *  - list questtion ?
 *
 * La bruker kunne legge til et spm. via GUI
 *  - Unit test tekst input fra brukeren når de endrer eller legger til spm, svar-alt osv.
 */
