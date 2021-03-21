
const ques = document.getElementById("question")
const ch = Array.from( document.getElementsByClassName("choice"))
const sc = document.getElementById("show-score")
const sch = document.getElementById("score-h1")
const qcount = document.getElementById("qcount")
const score = document.getElementById("score")

let points = 0
let cur = {}
let ac = false
let quc = 0
let aq = []
let questions = [
    {
        question: "Who created C ?",
        c1: "Kem Thompson",
        c2: "James Gosling",
        c3: "Dennis Ritchie",
        c4: "Guido van Rossum",
        a: 3
    },
    {
        question: "Which one is not C Keyword ?",
        c1: "if",
        c2: "case",
        c3: "short",
        c4: "total",
        a: 4
    },
    {
        question: "Which tag is not generally embedded inside head tag",
        c1: "title",
        c2: "script",
        c3: "meta",
        c4: "pre",
        a: 4
    },
    {
        question: "Which of the following is not a hexadecimal color in HTML ?",
        c1: "ffffff",
        c2: "000000",
        c3: "dddddd",
        c4: "eeeeee",
        a: 4 
    },
    {
        question: "Which one is a datatype ?",
        c1: "Float",
        c2: "float",
        c3: "decimal",
        c4: "Decimal",
        a: 2
    },
    {
        question: "Which is not derived data type ?",
        c1: "typedef",
        c2: "Array",
        c3: "Union",
        c4: "Structure",
        a: 1
    },
    {
        question: "Tag which represent line break",
        c1: "<lb>",
        c2: "<br>",
        c3: "<break>",
        c4: "<b>",
        a: 2
    },
    {
        question: "Which is not a storage class ?",
        c1: "auto",
        c2: "register",
        c3: "public",
        c4: "static",
        a: 3
    },
    {
        question: "Which one is not part of switch statement ?",
        c1: "default",
        c2: "else",
        c3: "break",
        c4: "case",
        a: 2
    },
    {
        question: "A single line comment in C language source code can begin with",
        c1: "#",
        c2: "//",
        c3: "/",
        c4: "/*",
        a: 2
    },
    {
        question: "Which library is use to use clrscr() ?",
        c1: "stdio.h",
        c2: "math.h",
        c3: "stdlib.h",
        c4: "conio.h",
        a: 4
    },
    {
        question: "Format specifier for single character is ",
        c1: "%d",
        c2: "%c",
        c3: "%s",
        c4: "%f",
        a: 2
    },
    {
        question: "In scanf, & is optional for ",
        c1: "char",
        c2: "int",
        c3: "char[]",
        c4: "float",
        a: "3"
    },
    {
        question: "Termination will occur if character is present in ",
        c1: "%[^ ]",
        c2: "%[ ]",
        c3: "%[$ ]",
        c4: "$[ ]",
        a: 1
    },
    {
        question: "Default precision of real values is ",
        c1: "2",
        c2: "10",
        c3: "15",
        c4: "6",
        a: 4
    },{
        question: "HTML is ",
        c1: "Scripting Language",
        c2: "Coding Language",
        c3: "Markup Language",
        c4: "Local Language",
        a: 3
    }
]
const tot = questions.length

startgame = () =>{
    quc = 0
    points = 0
    aq = [...questions]
    newquestion()
}

newquestion = () =>{
    if(ac.length == 0 || quc >= tot){
        endgame()
    }
    quc++
    qcount.innerHTML = quc+" / "+tot
    const i = Math.floor(Math.random() * aq.length)
    cur = aq[i]
    ques.innerText = cur.question
    
    ch.forEach((choice) =>{
        const num = choice.dataset['number']
        choice.innerText = cur['c' + num]
    })
    aq.splice(i,1)
    ac = true
}

ch.forEach(choice =>{
    choice.addEventListener('click',e =>{
        if(!ac) return;

        ac = false
        const select = e.target
        const selans = select.dataset['number']
        const cla = (selans == cur.a)?"correct":"incorrect"
        select.classList.add(cla)
        if(cla == "correct"){
            points++
            score.innerText = points
        }
        setTimeout( () => {
            select.classList.remove(cla)
            newquestion()
        },1500)
    })
})

function endgame(){
    document.getElementById("item").classList.add("hidden")
    document.getElementById("point").classList.add("hidden")
    document.getElementById("game").classList.add("hidden")
    sc.classList.remove("hidden")
    sch.innerHTML = "Total Score : "+points+""
}
setTimeout(() => {
    document.getElementById("main").classList.remove("hidden")
    document.getElementById("load").classList.add("hidden")
}, 3000);
startgame()