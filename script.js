let quizInput = 0;


$("button").click(function() {
    let desireInput = $("#desire").val();
    let numberInput = $("#Number").val();
    $("#answer").show();

    if (numberInput >= 20 && desireInput === "More Kind") {
        $(".images").hide();
        $(".naruto").show();
    } else if (numberInput >= 20 && desireInput === "More Harsh") {
        $(".images").hide();
        $(".sasuke").show();
    } else if (numberInput < 20 && desireInput === "More Kind") {
        $(".images").hide();
        $(".sakura").show();
    } else if (numberInput < 20 && desireInput === "More Harsh") {
        $(".images").hide();
        $(".sai").show();
    }

    quizInput = quizInput + 1;
    $("#quizTimes").text("Amount of times you've taken the quiz: " + quizInput);
});