let quiz=[
{
    question:"How can you catch a computer virus?",
    option:[
        "Sending e-mail messages",
        "Using a laptop during the winter",
        "Opening e-mail attachments",
        "Shopping on-line"
    ],
    answer:3
},
{
    question:"Google (www.google.com) is a:",
    option:[
        "Search Engine",
        "Number in Math",
        "Directory of images",
        "Chat service on the web"
    ],
    answer:1

},
{
    question:"Which of the following is not a valid domain name?",
    option:[
        "www.yahoo.com",
        "www.yahoo.co.uk",
        "www.com.yahoo",
        "www.yahoo.co.in"
    ],
    answer:3

},
{
    question:'www" stands for:',
    option:[
        "World Wide Web",
        "World Wide Wares",
        "World Wide Wait",
        "World Wide War"
    ],
    answer:1

},
{
    question:"Another name for a computer chip is:",
    option:[
        "Execute",
        "Micro chip",
        "Microprocessor",
        "Select"
    ],
    answer:2

},
{
    question:"In computer jargon, RAM refers to",
    option:[
        " Read Only Menu",
        "Random Access Memory",
        "Random Accent Memory",
        "Read Access Memory"
    ],
    answer:2

},
{
    question:"Which of the following is not a computer language?",
    option:[
        "Windows 98",
        "PASCAL",
        "FORTRAN",
        "c++"
    ],
    answer:1

},
{
    question:"The basic architecture of computer was developed by?",
    option:[
        "John Von Neumann",
        "Charles Babbage",
        "Blaise Pascal",
        "Garden Moore"
    ],
    answer:1

},
{
    question:"'.JPG' extension refers usually to what kind of file?",
    option:[
        "System file",
        "Animation/movie file",
        "MS Encarta document",
        "Image file"
    ],
    answer:4

},
{
    question:"'.TXT' extension refers usually to what kind of file?",
    option:[
        "Text File",
        "Image file",
        "Audio file",
        "Adobe Acrobat file"
    ],
    answer:1

}
];


let index=0;
let attempt=0;
let score=0;
let wrong=0;
let questions=quiz.sort(function (){
    return 0.5-Math.random();
});
let totalQuestion=questions.length;
$(function(){
    let totalTime=200;
    let min=0;
    let sec=0;
    let counter=0;
    let timer=setInterval(function(){
        counter++;
        min=Math.floor((totalTime-counter)/60);
        sec=totalTime-min*60-counter;
        
        $(".timer span").text(min+":"+sec);
        if(counter==totalTime){
            alert("Time's up.Press ok to show result");
            result();
            clearInterval(timer);
        }
    },1000);
    printQuestion(index);
});
function printQuestion(i){
    
    $(".questions").text(questions[i].question);
    $(".options span").eq(0).text(questions[i].option[0]);
    $(".options span").eq(1).text(questions[i].option[1]);
    $(".options span").eq(2).text(questions[i].option[2]);
    $(".options span").eq(3).text(questions[i].option[3]);
}
function checkAnswer(option){
    attempt++;
    let optionClicked=$(option).data("opt");
    if(optionClicked==questions[index].answer){
        $(option).addClass("right");
        score++;
    }
    else{
        $(option).addClass("wrong");
        wrong++;
    }
    $(".score span").text(score);
    $(".options span").attr("onclick","");
}
function showNext(){
    if(index>=questions.length-1){
        showResult(0);
        return;
    }
    index++;
    $(".options span").removeClass();
    $(".options span").attr("onclick","checkAnswer(this)")
    printQuestion(index);

}
function showResult(j){
    if(j==1 && index<questions.length-1 && !confirm("Quiz has not finished yet,Press ok to skip & get your final result")){
        return;
    }
    result();
}
function result(){
    $("#questionScreen").hide();
    $("#resultScreen").show();
    $("#totalQuestion").text(totalQuestion);
    $("#attemptQuestion").text(attempt);
    $("#correctAnswer").text(score);
    $("#wrongAnswer").text(wrong);
}