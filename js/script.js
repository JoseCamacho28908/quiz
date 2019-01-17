/* global $ */
var Pokemon = "TBD";
var img="https://media.giphy.com/media/22zgHX8aop488/giphy.gif";




    
$("button").click(function() {
    
    var totalScore = 0;
    var name = $("#name").val();
   
 
   
   
    var q1Result = $("#question1").val();
    totalScore = question1(q1Result, totalScore);


    var q2Result = $("#question2").val();
    totalScore = question2(q2Result, totalScore);


    var q3Result = $("#question3").val();
    totalScore = question3(q3Result, totalScore);
    scores(totalScore);
    
    
   displayResult(Pokemon, name, img);
    
});



    function placement(totalScore, name){}

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
    
    
    if (totalScore >= 0 && totalScore <= 6) {
        var name = $("#name").val();
         Pokemon = "weedle";
        displayResult(Pokemon,name,img);
        img="https://media.giphy.com/media/anLxZPExDZZ4I/giphy.gif";
        
    }
    else if (totalScore >= 7 && totalScore <= 13) {
      Pokemon = "pichu";
        displayResult(Pokemon,name,img);
        img="https://media.giphy.com/media/xX9tcQCgPRmDK/giphy.gif";
        
    }
    else if (totalScore >= 14 && totalScore <= 18) {
     
        Pokemon = "Gyrados";
        displayResult(Pokemon,name,img);
        img="https://media1.tenor.com/images/8a065c4fadd0f39457c3803c6beecdca/tenor.gif?itemid=7279879";
        
    }
     
    else if (totalScore >= 19 && totalScore <= 21) {
        
        Pokemon = "Greninja";
        displayResult(Pokemon,name,img);
        img="https://media.giphy.com/media/12BtgqzcTMNrmE/giphy.gif";
        
    }
    else{
         return $(".answer").html("You are pikachu");
    }
}

function displayResult(Pokemon,name, img){
        return $(".result").html("<h2>Congratulations, " + name + " you're  " + Pokemon + "</h2>"+"<img src=" +img+">");

    }

    

    
