$(function() {
    $("#submit").on("click", function() {
        var textTweet = $("#myTweet").val();
        $("#myTweet").val('');
        //$("#myTweet").focus();
        var new_tweet = $(".demo_tweet").clone();
        new_tweet.removeClass("demo_tweet");
        new_tweet.find("p:eq(0)").html(textTweet);
        $(".right_column").prepend(new_tweet);
    });
    $("body").on("click", ".likeable", function() {
        $(this).addClass("liked");
        counter = $(this).next().text();
        counter = parseInt(counter);
        console.log(counter + 1);
        counter = $(this).next().text(counter + 1);
        $(this).next().val(counter).toString();
    });
    $("body").on("click", ".button_cruz", function() {
        console.log($(this).closest(".row").fadeOut());
    });
});