/* global $ */
var name = $("#name").val();
var totalScore = 0;
var Pokemon = "TBD";
var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
var q1Result = $("#question1").val();
var q2Result = $("#question2").val();
var q3Result = $("#question3").val();

$(document).ready(function() {

    $("button").click(function() {
        function question1(season) {
            if (q1Result === "Fall") {
                return totalScore + 1;
            }
            else if (q1Result === "Spring") {
                return totalScore + 3;
            }
            else if (q1Result === "Winter") {
                return totalScore + 5;
            }
            else if (q1Result === "Summer") {
                return totalScore + 7;
            }
            else {
                return totalScore + 0;
            }
        }

        function question2() {
            if (q2Result === "Blue") {
                return totalScore + 5;
            }
            else if (q2Result === "Pink") {
                return totalScore + 1;
            }
            else if (q2Result === "Red") {
                return totalScore + 3;

            }
            else if (q2Result === "Orange") {
                return totalScore + 7;

            }

            function question2() {
                if (q3Result === "Math") {
                    return totalScore + 5;
                }
                else if (q3Result === "ELA") {
                    totalScore + 1;
                }
                else if (q3Result === "Science") {
                    totalScore + 3;
                }
                else if (q3Result === "Social Studies") {
                    totalScore + 7;

                }
                else {
                    totalScore + 0;
                }


            }
        }
    });

});
