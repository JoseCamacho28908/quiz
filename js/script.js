/* global $ */
var name = $("#name").val();
var Pokemon = "TBD";
var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";




$("button").click(function() {
    var totalScore = 0;
   
    var q1Result = $("#question1").val();
    totalScore = question1(q1Result, totalScore);


    var q2Result = $("#question2").val();
    totalScore = question2(q2Result, totalScore);


    var q3Result = $("#question3").val();
    totalScore = question3(q3Result, totalScore);
    scores(totalScore);
});



function question1(season, totalScore) {
    if (season === "Fall") {
        return totalScore + 1;
    }
    else if (season === "Spring") {
        return totalScore + 3;
    }
    else if (season === "Winter") {
        return totalScore + 5;
    }
    else if (season === "Summer") {
        return totalScore + 7;
    }
    else {
        return totalScore;
    }
}



function question2(color, totalScore) {
    if (color === "Blue") {
        return totalScore + 5;
    }
    else if (color === "Pink") {
        return totalScore + 1;
    }
    else if (color === "Red") {
        return totalScore + 3;

    }
    else if (color === "Orange") {
        return totalScore + 7;

    }
    else{
        return totalScore;
    }

}

function question3(subject, totalScore) {
    if (subject === "Math") {
        return totalScore + 7;
    }
    else if (subject === "ELA") {
        return totalScore + 3;
    }
    else if (subject === "Science") {
        return totalScore + 1;
    }
    else if (subject === "Social Studies") {
        return totalScore + 5;

    }
    else {
        return totalScore + 0;
    }
}

function scores(totalScore) {
    if (totalScore > 0 && totalScore <= 6) {
        return $(".answer").html("You are a weedle");
    }
    else if (totalScore > 7 && totalScore <= 13) {
        return $(".answer").html("You are a pichu");
    }
    else if (totalScore > 14 && totalScore <= 18) {
       return $(".answer").html("You are a Gyrados");
    }
    else if (totalScore > 19 && totalScore <= 21) {
       return $(".answer").html("You are Greninja");
    }
    else{
         return $(".answer").html("You are pikachu");
    }
}
