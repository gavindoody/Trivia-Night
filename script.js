var soundCorrect = new Audio("(Sound Effect Link Here)");
var soundIncorrect = new Audio("(Sound Effect Link Here)");

let timer;           
let timeLeft = 15;   

function setup() {
    var googleSheetLink = "(Google Sheets Link Goes Here)";
    trivia.loadGoogleSheet(googleSheetLink).then(displayWelcome);
    trivia.categoriesEnabled = true;
}

function displayWelcome() {
    $(".screen").hide();
    $("#welcome-screen").show();
}

function displayCategories() {
    $(".screen").hide();
    $("#category-screen").show();
    trivia.insertCategoriesInfo();
}

function displayQuestion() {
    $(".screen").hide();
    $("#question-screen").show();
    $("#correctAnswer").removeClass("highlight");
    $("#feedback").hide();
    trivia.insertQuestionInfo();
    trivia.shuffleAnswers();

    startTimer(); 
}

function displayThankyou() {
    $(".screen").hide();
    $("#thankyou-screen").show();
    $("#game-results").html(`You got ${trivia.totalCorrect} of ${trivia.totalAnswered} correct.`);
}

function onClickedAnswer(isCorrect) {
    stopTimer(); 

    trivia.totalAnswered++;

    if (isCorrect) {
        $("#feedback").html(`Way to go!`).show();
        trivia.totalCorrect++;
        soundCorrect.play();
    } else {
        $("#feedback").html(`Better luck next time.`).show();
        soundIncorrect.play();
    }
    
    $("#correctAnswer").addClass("highlight"); 
    setTimeout(trivia.gotoNextQuestion, 1500); 
    $('#score').html(`${trivia.totalCorrect} of ${trivia.totalAnswered} Correct`);
}

function onClickedCategory() {
    displayQuestion();
}

function onClickedStart() {
    displayCategories();
}

function startTimer() {
    timeLeft = 15;  
    document.getElementById('timer').innerHTML = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerHTML = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleTimeUp();  
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function handleTimeUp() {
    onClickedAnswer(false);  
}
