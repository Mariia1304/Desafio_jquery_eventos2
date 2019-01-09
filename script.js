$(function() {
    $("#submit").on("click", function() {
        console.log($("#myTweet").val());
        $("#myTweet").focus();
    });
    $(".likeable").on("click", function() {
        $(this).addClass("liked");
        counter = $(this).next().text();
        counter = parseInt(counter);
        console.log(counter + 1);
        counter = $(this).next().text(counter + 1);
        $(this).next().val(counter).toString();
    });
    $(".button_cruz").on("click", function() {
        console.log($(this).parent().parent().remove());
    });
});