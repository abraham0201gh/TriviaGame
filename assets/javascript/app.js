
//accessing JQUERY  (JavaScript function - wraps around everything)
$("document").ready(function() {

    //hiding div with questions at first start screen 
    $(".pg2Centerbox-container").hide();
    $(".pg3Centerbox-container").hide();
    $(document).scrollTop(0);

    //after start game button, removing start screen container and showing div with questions
    $("#startGameButton").on("click", function() {
        $(".pg1Centerbox-container").remove();
        $(".pg2Centerbox-container").show();
        $("#gameTimer").html(" 45");
        $(document).scrollTop(0);
    });

    //move from quiz questions to total scored points--last screen view
    $("#doneButton").on("click", function() {

        //for-loop function call
        arrayComparison();

        $(".pg2Centerbox-container").remove();
        $(".pg3Centerbox-container").show();
        $(document).scrollTop(0);
        
        //function call to stop timer
        stop();

        $("#correct").html("Correct Answers: " + totalCorrect);
        $("#incorrect").html("Incorrect Answer: " + totalIncorrect);
        $("#noAnswer").html("Not Answered: " + notAnswered);
    });

    function arrayComparison() { 

        //collecting the player's selected answers
        selectedAnswArray[0] = $("input[name=Q1]:checked").val();
        selectedAnswArray[1] = $("input[name=Q2]:checked").val();
        selectedAnswArray[2] = $("input[name=Q3]:checked").val();
        selectedAnswArray[3] = $("input[name=Q4]:checked").val();
        selectedAnswArray[4] = $("input[name=Q5]:checked").val();

        //question comparison and total points assigned   
        for (var i = 0; i < allQuestions.length; i++) {
            if (selectedAnswArray[i] == allQuestions[i].answer) {
                totalCorrect++;}
            else if (selectedAnswArray[i] == undefined) { 
                notAnswered++; 
            }
            else {
                totalIncorrect++;
        }};       
    }

    var totalCorrect = 0;
    var totalIncorrect = 0;
    var notAnswered = 0;

    var selectedAnswArray = []

    var number = 45;
    var intervalId;

    $("#startGameButton").on("click", run);
    function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    }           

    //timer countdown and move to last screen once timer at zero
    function decrement() {
    number--;
    $("#gameTimer").html(" " + number);
    if (number === 0) {

        //for-loop function call
        arrayComparison()  
        $(".pg2Centerbox-container").remove();
        $(".pg3Centerbox-container").show();
        $("#correct").html("Correct Answers: " + totalCorrect);
        $("#incorrect").html("Incorrect Answer: " + totalIncorrect);
        $("#noAnswer").html("Not Answered: " + notAnswered);
        }
    }

    function stop() {
        clearInterval(intervalId);
    }

    //questions and correct answer value assignment
    var allQuestions = [
        { 
        question: "At which university did Isaac Newton teach?",
        options: ["University of Oxford", "University of St Andrews", "University of Cambridge", "Harvard College"], 
        answer: 3,
        },

        {
        question: "Identify one of Newton's influential books?",
        options: ["Origin of Calculus", "Motus Universalis", "Light and Refraction Revisited", "The Principia"],
        answer: 4,
        },

        {
        question: "Which of the following theories is NOT associated with Newton?",
        options: ["Structure of Atoms", "Study of Optics", "Law of Universal Gravitation", "Laws of Motion"],
        answer: 1,
        },
        
        {
        question: "In what year did Newton die?",
        options: ["1727", "1697", "1667", "He's still alive and singing with Elvis"],
        answer: 1,
        },

        {
        question: "Where is Newton buried?",
        options: ["Woolsthorpe, Lincolnshire", "Westminster Abbey,London", "St Paul's Cathedral, London", "Living people aren't buried"],
        answer: 2,
    }];
})

