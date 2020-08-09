var questionArray = [
    {
        question: "Pakista became the first muslim country to have Nuclear power?",
        answer: "1998",
        options: [
            "1999",
            "2000",
            "1998",
            "1997",
        ]
    },

    {
        question: "Who desinged the National Falg of Pakistan?",
        answer: "Syed Amir Uddin Kedwaii",
        options: [
            "Allama iqbal",
            "Syed Amir Uddin Kedwaii",
            "Dr Abdul Qadeer Khan",
            "Zulfiqar Ali Bhutto",
        ]
    },

    {
        question: "Who was the driver of Quaid e Azam?",
        answer: "Muhammad hanif Azad",
        options: [
            "Muhammad hanif Azad",
            "Ayyub Khan",
            "Dr Abdul Qadeer Khan",
            "Zulfiqar Ali Bhutto",
        ]
    },


    {
        question: "The lyrics of Pakistan national Anthem were written by ?",
        answer: "Hafeez Jullundhri",
        options: [
            "Allama Iqbal",
            "Ahmed.G. Chagla",
            "Amir Uddin Kidwai",
            "Hafeez Jullundhri",
        ]
    },

    
    {
        question: "In which year did Pakistan win the Cricket World Cup?",
        answer: "1992",
        options: [
            "1999",
            "1992",
            "1995",
            "1996",
        ]
    },

    {
        question: "Gwader port is situated in _______ province?",
        answer: "Balochistan",
        options: [
            "Punjab",
            "Sindh",
            "Balochistan",
            "KPK",
        ]
    },
    
    {
        question: "Which Pakistani Mosque is featured on the Rs:5000 banknote?",
        answer: "Faisal Mosque",
        options: [
            "Fiasal Mosque",
            "Badshahi Mosque",
            "ShahJahan",
            "Bhong Mosque",
        ]
    },

]


function showQues(e){
    var ques = document.getElementById("Question");
    ques.innerHTML = questionArray[e].question;

    var element = document.getElementsByClassName('options');
    for(var i =0; i<element.length; i++){
        element[i].innerHTML = questionArray[e].options[i];

    }
    
    
}


var quesNo = document.getElementById("score")
var questionCount = 0;


function next(){
    questionCount++;
    showQues(questionCount);
    removeActive()
}

function activeClass(e){
    removeActive()
    e.classList.add("active")

}

function removeActive(){
    var remove = document.getElementsByClassName("active");
    for(var i = 0; i < remove.length; i++){
        remove[i].classList.remove('active')
    }
}