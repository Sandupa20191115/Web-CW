var question1 = ["<span class='Question'> Q.1) how many phyllums does kindom animalia has?</span>"];
var choices1 = ["<br><span class='answers'><input  onclick=correct1() name=button1 type=radio id='b1'/> 7<br /><input  onclick=incorrect1() name=button1 type=radio id='b2'/> 8<br /><input onclick=incorrect1() name=button1 type=radio id='3'/> 9<br /></span>"];

var question2 = ["<span class='Question'> Q.2) kingdom fungi is member of domain ?</span>"];
var choices2 = ["<br><span class='answers'><input onclick=incorrect2() name=button2 type=radio /> Archea<br /><input onclick=incorrect2() name=button2 type=radio /> Bacteria<br /><input onclick=correct2() name=button2 type=radio /> Eu kariya<br /></span>"];

var question3 = ["<span class='Question'> Q.3) How many elements are there in periodic table ?</span>"];
var choices3 = ["<br><span class='answers'><input onclick=correct3() name=button3 type=radio /> 118<br /><input onclick=incorrect3() name=button3 type=radio /> 96<br /><input onclick=incorrect3() name=button3 type=radio /> 132<br /></span>"];

var question4 = ["<span class='Question'> Q.4) What is the most reactive element ?</span>"];
var choices4 = ["<br><span class='answers'><input onclick=incorrect4() name=button4 type=radio /> Hydrogen<br /><input onclick=correct4() name=button4 type=radio /> Cesium<br /><input onclick=incorrect4() name=button4 type=radio /> Nitrogen<br /></span>"];

var question5 = ["<span class='Question'> Q.5) Who discovered electron ?</span>"];
var choices5 = ["<br><span class='answers'><input onclick=incorrect5() name=button5 type=radio /> Neils Bhor<br /><input onclick=correct5() name=button5 type=radio /> J.J. Thomson<br /><input onclick=incorrect5() name=button5 type=radio /> Aiseak Newton<br /></span>"];

var question6 = ["<span class='Question'> Q.6) Who stepped on the moon first ?</span>"];
var choices6 = ["<br><span class='answers'><input onclick=correct6() name=button6 type=radio /> Neil Armstrong<br /><input onclick=incorrect6() name=button6 type=radio /> ‎Buzz Aldrin<br /><input onclick=incorrect6() name=button6 type=radio />  ‎Michael Collins<br /></span>"];

var question7 = ["<span class='Question'> Q.7) Closest planet to earth ?</span>"];
var choices7 = ["<br><span class='answers'><input onclick=incorrect7() name=button7 type=radio /> Mercury<br /><input onclick=correct7() name=button7 type=radio /> Neptune<br /><input onclick=correct7() name=button7 type=radio /> Venus<br /></span>"];

var question8 = ["<span class='Question'> Q.8) How many planets are there ?</span>"];
var choices8 = ["<br><span class='answers'><input onclick=incorrect8() name=button8 type=radio /> 7<br /><input onclick=correct8() name=button8 type=radio /> 8<br /><input onclick=incorrect8() name=button8 type=radio /> 9<br /></span>"];

var question9 = ["<span class='Question'> Q.9) The phenomenon used in optical fibre for transmission of light energy is ? </span>"];
var choices9 = ["<br><span class='answers'><input onclick=correct9() name=button9 type=radio /> Total internal reflection<br /><input onclick=incorrect9() name=button9 type=radio /> Diffraction<br /><input onclick=incorrect9() name=button9 type=radio /> Scattering<br /></span>"];

var question10 = ["<span class='Question'> Q.10) The unit of electric power is ?</span>"];
var choices10 = ["<br><span class='answers'><input onclick=incorrect10() name=button10 type=radio /> Coulomb<br /><input onclick=incorrect10() name=button10 type=radio /> Ampere<br /><input onclick=correct10() name=button10 type=radio /> Watt<br /></span>"];

var q1;
var q2;
var q4;
var q3;
var q5;
var q6;
var q7;
var q8;
var q9;
var q10;
var total;
var t;

/* First page loading */
window.onload = function() {

    text1.innerHTML = "<span class='openingQuiz'>Welcome to the Quiz </span> <br><br> <span class='instructions'> -- INSTRUCTIONS -- <BR> There are 10 questions to answer. <br> Once you click the Next button you can't go back to the previous question.<br> You have 120 seconds to answer the quiz. <br><br> Corrcet Answer : 2 marks <br> Wrong answer : -1 marks <br> Do not answer : 0 marks </span>";
    click.innerHTML = "<button class='startBtn' onclick=setq1()>Start</button>";
    document.getElementById("QuizBox").style.backgroundImage = "url('../Images/black-and-white-blackboard-business-chalkboard-356043.jpg')";
    document.getElementById("center001").style.backgroundColor = "rgb(0, 0, 0, 0.5)";


}

/* Question No.1 */

function setq1() {
    q1 = 0;
    t = 121;
    text1.innerHTML = question1;
    text2.innerHTML = choices1;
    click.innerHTML = "<button class='nextBtn' onclick=setq2()>Next</button>";
    document.getElementById("QuizBox").style.backgroundImage = "url('../Images/black-telescope-under-blue-and-blacksky-2034892.jpg')";

}

function correct1() {
    q1 = 2;

}

function incorrect1() {
    q1 = -1;

}

/* Question No.2 */

function setq2() {
    q2 = 0;
    text1.innerHTML = question2;
    text2.innerHTML = choices2;
    click.innerHTML = "<button class='nextBtn' onclick=setq3()>Next</button>";

}

function correct2() {
    q2 = 2;

}

function incorrect2() {
    q2 = -1;

}

/* Question No.3 */

function setq3() {
    q3 = 0;
    text1.innerHTML = question3;
    text2.innerHTML = choices3;
    click.innerHTML = "<button class='nextBtn' onclick=setq4()>Next</button>";

}

function correct3() {
    q3 = 2;

}

function incorrect3() {
    q3 = -1;

}

/* Question No.4 */

function setq4() {
    q4 = 0;
    text1.innerHTML = question4;
    text2.innerHTML = choices4;
    click.innerHTML = "<button class='nextBtn' onclick=setq5()>Next</button>";

}

function correct4() {
    q4 = 2;

}

function incorrect4() {
    q4 = -1;

}

/* Question No.5 */

function setq5() {
    q5 = 0;
    text1.innerHTML = question5;
    text2.innerHTML = choices5;
    click.innerHTML = "<button class='nextBtn' onclick=setq6()>Next</button>";

}

function correct5() {
    q5 = 2;

}

function incorrect5() {
    q5 = -1;

}

/* Question No.6 */

function setq6() {
    q6 = 0;
    text1.innerHTML = question6;
    text2.innerHTML = choices6;
    click.innerHTML = "<button class='nextBtn' onclick=setq7()>Next</button>";

}

function correct6() {
    q6 = 2;

}

function incorrect6() {
    q6 = -1;

}

/* Question No.7 */

function setq7() {
    q7 = 0;
    text1.innerHTML = question7;
    text2.innerHTML = choices7;
    click.innerHTML = "<button class='nextBtn' onclick=setq8()>Next</button>";

}

function correct7() {
    q7 = 2;

}

function incorrect7() {
    q7 = -1;

}
/* Question No.8 */

function setq8() {
    q8 = 0;
    text1.innerHTML = question8;
    text2.innerHTML = choices8;
    click.innerHTML = "<button class='nextBtn' onclick=setq9()>Next</button>";

}

function correct8() {
    q8 = 2;

}

function incorrect8() {
    q8 = -1;

}

/* Question No.9 */

function setq9() {
    q9 = 0;
    text1.innerHTML = question9;
    text2.innerHTML = choices9;
    click.innerHTML = "<button class='nextBtn' onclick=setq10()>Next</button>";

}

function correct9() {
    q9 = 2;

}

function incorrect9() {
    q9 = -1;

}

/* Question No.10 */

function setq10() {
    q10 = 0;
    text1.innerHTML = question10;
    text2.innerHTML = choices10;
    click.innerHTML = "<button class='nextBtn' onclick=ScoreCard()>Score</button>";

}

function correct10() {
    q10 = 2;

}

function incorrect10() {
    q10 = -1;

}

/* Timer */

function timerCountDown() {

    t = t - 1;
    if (t < 121) {

        /* Colour change of the timer */
        if (t >= 31) {
            document.getElementById("timer").style.color = " rgb(21, 255, 0)";
            timer.innerHTML = t;
        } else if (t >= 11) {
            document.getElementById("timer").style.color = " rgb(255, 251, 0)";
            timer.innerHTML = t;
        } else if (t == 10) {
            document.getElementById("timer").style.color = " red";
            timer.innerHTML = t;
        } else {
            timer.innerHTML = "0" + t;
            document.getElementById("timer").style.color = " red ";
        }

    }
    /* if time is over */
    if (t < 1) {
        window.clearInterval(update);
        text1.innerHTML = " TIME IS OVER ";
        text2.innerHTML = "";
        text3.innerHTML = "";
        click.innerHTML = "<button class='nextBtn' onclick=ScoreCard()>Score</button>";
    }
}

/* Score carrd */

function ScoreCard() {
    window.clearInterval(update);
    t = "  ";
    document.getElementById("QuizBox").style.backgroundImage = "url('../Images/IMG_2278.png')";



    /* if time ends before completeing the quiz -> here it shoes how to calculate the total and display the summary */

    if (q2 == undefined) {
        total = q1;

        summary1.innerHTML = "<span class='summaryText'> Question No.01 :        " + q1 + "</span>";

        summary2.innerHTML = "<span class='summaryText'> Question No.02 :  0     </span>";
        summary3.innerHTML = "<span class='summaryText'> Question No.03 :  0     </span>";
        summary4.innerHTML = "<span class='summaryText'> Question No.04 :  0     </span>";
        summary5.innerHTML = "<span class='summaryText'> Question No.05 :  0     </span>";
        summary6.innerHTML = "<span class='summaryText'> Question No.06 :  0     </span>";
        summary7.innerHTML = "<span class='summaryText'> Question No.07 :  0     </span>";
        summary8.innerHTML = "<span class='summaryText'> Question No.08 :  0     </span>";
        summary9.innerHTML = "<span class='summaryText'> Question No.09 :  0     </span>";
        summary10.innerHTML = "<span class='summaryText'> Question No.10 : 0     </span>";


    } else if (q3 == undefined) {
        total = q1 + q2;

        summary1.innerHTML = "<span class='summaryText'> Question No.01 :        " + q1 + "</span>";
        summary2.innerHTML = "<span class='summaryText'> Question No.02 :        " + q2 + "</span>";

        summary3.innerHTML = "<span class='summaryText'> Question No.03 :  0     </span>";
        summary4.innerHTML = "<span class='summaryText'> Question No.04 :  0     </span>";
        summary5.innerHTML = "<span class='summaryText'> Question No.05 :  0     </span>";
        summary6.innerHTML = "<span class='summaryText'> Question No.06 :  0     </span>";
        summary7.innerHTML = "<span class='summaryText'> Question No.07 :  0     </span>";
        summary8.innerHTML = "<span class='summaryText'> Question No.08 :  0     </span>";
        summary9.innerHTML = "<span class='summaryText'> Question No.09 :  0     </span>";
        summary10.innerHTML = "<span class='summaryText'> Question No.10 : 0     </span>";


    } else if (q4 == undefined) {
        total = q1 + q2 + q3;

        summary1.innerHTML = "<span class='summaryText'> Question No.01 :        " + q1 + "</span>";
        summary2.innerHTML = "<span class='summaryText'> Question No.02 :        " + q2 + "</span>";
        summary3.innerHTML = "<span class='summaryText'> Question No.03 :        " + q3 + "</span>";

        summary4.innerHTML = "<span class='summaryText'> Question No.04 :  0     </span>";
        summary5.innerHTML = "<span class='summaryText'> Question No.05 :  0     </span>";
        summary6.innerHTML = "<span class='summaryText'> Question No.06 :  0     </span>";
        summary7.innerHTML = "<span class='summaryText'> Question No.07 :  0     </span>";
        summary8.innerHTML = "<span class='summaryText'> Question No.08 :  0     </span>";
        summary9.innerHTML = "<span class='summaryText'> Question No.09 :  0     </span>";
        summary10.innerHTML = "<span class='summaryText'> Question No.10 : 0     </span>";


    } else if (q5 == undefined) {
        total = q1 + q2 + q3 + q4;

        summary1.innerHTML = "<span class='summaryText'> Question No.01 :        " + q1 + "</span>";
        summary2.innerHTML = "<span class='summaryText'> Question No.02 :        " + q2 + "</span>";
        summary3.innerHTML = "<span class='summaryText'> Question No.03 :        " + q3 + "</span>";
        summary4.innerHTML = "<span class='summaryText'> Question No.04 :        " + q4 + "</span>";

        summary5.innerHTML = "<span class='summaryText'> Question No.05 :  0     </span>";
        summary6.innerHTML = "<span class='summaryText'> Question No.06 :  0     </span>";
        summary7.innerHTML = "<span class='summaryText'> Question No.07 :  0     </span>";
        summary8.innerHTML = "<span class='summaryText'> Question No.08 :  0     </span>";
        summary9.innerHTML = "<span class='summaryText'> Question No.09 :  0     </span>";
        summary10.innerHTML = "<span class='summaryText'> Question No.10 : 0     </span>";


    } else if (q6 == undefined) {
        total = q1 + q2 + q3 + q4 + q5;

        summary1.innerHTML = "<span class='summaryText'> Question No.01 :        " + q1 + "</span>";
        summary2.innerHTML = "<span class='summaryText'> Question No.02 :        " + q2 + "</span>";
        summary3.innerHTML = "<span class='summaryText'> Question No.03 :        " + q3 + "</span>";
        summary4.innerHTML = "<span class='summaryText'> Question No.04 :        " + q4 + "</span>";
        summary5.innerHTML = "<span class='summaryText'> Question No.05 :        " + q5 + "</span>";

        summary6.innerHTML = "<span class='summaryText'> Question No.06 :  0     </span>";
        summary7.innerHTML = "<span class='summaryText'> Question No.07 :  0     </span>";
        summary8.innerHTML = "<span class='summaryText'> Question No.08 :  0     </span>";
        summary9.innerHTML = "<span class='summaryText'> Question No.09 :  0     </span>";
        summary10.innerHTML = "<span class='summaryText'> Question No.10 : 0     </span>";


    } else if (q7 == undefined) {
        total = q1 + q2 + q3 + q4 + q5 + q6;

        summary1.innerHTML = "<span class='summaryText'> Question No.01 :        " + q1 + "</span>";
        summary2.innerHTML = "<span class='summaryText'> Question No.02 :        " + q2 + "</span>";
        summary3.innerHTML = "<span class='summaryText'> Question No.03 :        " + q3 + "</span>";
        summary4.innerHTML = "<span class='summaryText'> Question No.04 :        " + q4 + "</span>";
        summary5.innerHTML = "<span class='summaryText'> Question No.05 :        " + q5 + "</span>";
        summary6.innerHTML = "<span class='summaryText'> Question No.06 :        " + q6 + "</span>";

        summary7.innerHTML = "<span class='summaryText'> Question No.07 :  0     </span>";
        summary8.innerHTML = "<span class='summaryText'> Question No.08 :  0     </span>";
        summary9.innerHTML = "<span class='summaryText'> Question No.09 :  0     </span>";
        summary10.innerHTML = "<span class='summaryText'> Question No.10 : 0     </span>";


    } else if (q8 == undefined) {
        total = q1 + q2 + q3 + q4 + q5 + q6 + q7;

        summary1.innerHTML = "<span class='summaryText'> Question No.01 :        " + q1 + "</span>";
        summary2.innerHTML = "<span class='summaryText'> Question No.02 :        " + q2 + "</span>";
        summary3.innerHTML = "<span class='summaryText'> Question No.03 :        " + q3 + "</span>";
        summary4.innerHTML = "<span class='summaryText'> Question No.04 :        " + q4 + "</span>";
        summary5.innerHTML = "<span class='summaryText'> Question No.05 :        " + q5 + "</span>";
        summary6.innerHTML = "<span class='summaryText'> Question No.06 :        " + q6 + "</span>";
        summary7.innerHTML = "<span class='summaryText'> Question No.07 :        " + q7 + "</span>";

        summary8.innerHTML = "<span class='summaryText'> Question No.08 :  0     </span>";
        summary9.innerHTML = "<span class='summaryText'> Question No.09 :  0     </span>";
        summary10.innerHTML = "<span class='summaryText'> Question No.10 : 0     </span>";


    } else if (q9 == undefined) {
        total = q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8;

        summary1.innerHTML = "<span class='summaryText'> Question No.01 :        " + q1 + "</span>";
        summary2.innerHTML = "<span class='summaryText'> Question No.02 :        " + q2 + "</span>";
        summary3.innerHTML = "<span class='summaryText'> Question No.03 :        " + q3 + "</span>";
        summary4.innerHTML = "<span class='summaryText'> Question No.04 :        " + q4 + "</span>";
        summary5.innerHTML = "<span class='summaryText'> Question No.05 :        " + q5 + "</span>";
        summary6.innerHTML = "<span class='summaryText'> Question No.06 :        " + q6 + "</span>";
        summary7.innerHTML = "<span class='summaryText'> Question No.07 :        " + q7 + "</span>";
        summary8.innerHTML = "<span class='summaryText'> Question No.08 :        " + q8 + "</span>";

        summary9.innerHTML = "<span class='summaryText'> Question No.09 :  0     </span>";
        summary10.innerHTML = "<span class='summaryText'> Question No.10 : 0     </span>";


    } else if (q10 == undefined) {
        total = q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9;

        summary1.innerHTML = "<span class='summaryText'> Question No.01 :        " + q1 + "</span>";
        summary2.innerHTML = "<span class='summaryText'> Question No.02 :        " + q2 + "</span>";
        summary3.innerHTML = "<span class='summaryText'> Question No.03 :        " + q3 + "</span>";
        summary4.innerHTML = "<span class='summaryText'> Question No.04 :        " + q4 + "</span>";
        summary5.innerHTML = "<span class='summaryText'> Question No.05 :        " + q5 + "</span>";
        summary6.innerHTML = "<span class='summaryText'> Question No.06 :        " + q6 + "</span>";
        summary7.innerHTML = "<span class='summaryText'> Question No.07 :        " + q7 + "</span>";
        summary8.innerHTML = "<span class='summaryText'> Question No.08 :        " + q8 + "</span>";
        summary9.innerHTML = "<span class='summaryText'> Question No.09 :        " + q9 + "</span>";

        summary10.innerHTML = "<span class='summaryText'> Question No.10 : 0     </span>";


    } else {
        total = q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 + q10;

        summary1.innerHTML = "<span class='summaryText'> Question No.01 :        " + q1 + "</span>";
        summary2.innerHTML = "<span class='summaryText'> Question No.02 :        " + q2 + "</span>";
        summary3.innerHTML = "<span class='summaryText'> Question No.03 :        " + q3 + "</span>";
        summary4.innerHTML = "<span class='summaryText'> Question No.04 :        " + q4 + "</span>";
        summary5.innerHTML = "<span class='summaryText'> Question No.05 :        " + q5 + "</span>";
        summary6.innerHTML = "<span class='summaryText'> Question No.06 :        " + q6 + "</span>";
        summary7.innerHTML = "<span class='summaryText'> Question No.07 :        " + q7 + "</span>";
        summary8.innerHTML = "<span class='summaryText'> Question No.08 :        " + q8 + "</span>";
        summary9.innerHTML = "<span class='summaryText'> Question No.09 :        " + q9 + "</span>";
        summary10.innerHTML = "<span class='summaryText'> Question No.10 :       " + q10 + "</span>";



    }

    /* End of the quiz and summary */

    timer.innerHTML = " ";
    text1.innerHTML = "End of Quiz";
    text2.innerHTML = "";
    text3.innerHTML = "";
    text4.innerHTML = "Your score is: " + total;
    text6.innerHTML = "Question No   | | |     Marks";
    summary0.innerHTML = "<span class='summaryText'> -- SUMMARY -- </span>";

    click.innerHTML = "<button class='startBtn' onclick=repeatQuiz()>Go to Home</button>";

    if (total >= 15) {
        /*document.body.style.backgroundColor = " rgb(4, 83, 88)";*/
        document.getElementById("center001").style.backgroundColor = "rgb(7, 115, 82, 0.3)";
    }
    if (total < 15) {
        /* document.body.style.backgroundColor = "   rgb(25, 11, 94)";*/
        document.getElementById("center001").style.backgroundColor = "rgb(255, 251, 0, 0.2)"
    }
}
//rgb(4, 83, 88) 
/* Updating the windows */

update = setInterval("timerCountDown()", 1000)

/* repeat the quiz */

function repeatQuiz() {
    location.reload();
}