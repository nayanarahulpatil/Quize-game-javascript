const quizeDb=[
{
que: "Q1:How the objects of array can be denoted?",
a: "Indices",
b: "Name",
c: "Random numbers",
d: "Alphabets",
ans:"ans1"
},
{
que: "Q2:When are the array of objects without any initialization useful?",
a: "When object data is not required just after the declaration",
b: "When initialization of object data is to be made by the compiler",
c: "When object data doesn’t matter in the program",
d: "When the object should contain garbage data",
ans:"ans1"
},
{
que: "Q3:Can we have two dimensional object array?",
a: "Yes, always",
b: "Yes, only if primitive type array",
c: "No, since two indices are impossible",
d: "No, never",
ans:"ans1"
},
{
que: "Q4:From which index does the array of objects start?",
a: "0",
b: "1",
c: "2",
d: "3",
ans:"ans1"
}
];

const question = document.getElementById("question");
const opetion1 = document.getElementById("option1");
const opetion2 = document.getElementById("option2");
const opetion3 = document.getElementById("option3");
const opetion4 = document.getElementById("option4");
const submit = document.getElementById("SubmitAns");
const scorediv = document.getElementById("scorecode");
const answers = document.getElementsByName("Answer");

//for loading the question/answer randomly
let countforque = 0;
let score=0;

const loadquiz=() =>
{
    let data = quizeDb[countforque];
    question.innerText = data.que;
    opetion1.innerText = data.a;
    opetion2.innerText = data.b;
    opetion3.innerText = data.c;
    opetion4.innerText = data.d;

}
loadquiz();


//for checking selected ans on button click
const checkans = ()=>
{
    let answer;
    answers.forEach((element)=>{
        if(element.checked)
        {
            answer=element.id;
         }
    });
    return answer;
}
//for deselecting radio button on button click
const deselect = () =>
{
    answers.forEach((val)=>{val.checked=false});
}

submit.addEventListener("click" , () =>{
    const selectedans = checkans();
    console.log(selectedans);
    if(selectedans===quizeDb[countforque].ans)
    {
        score++;
    }
    countforque++;
    deselect();
    if(countforque<quizeDb.length)
    {
        loadquiz();
    }
    else
    {
        scorediv.innerHTML=
        `<h1>You score ${score}/${quizeDb.length} congratulations</h1>
        <button class="btn" onclick = "location.reload()">Play again</button>`;
        scorediv.classList.remove('score');
    }

})

