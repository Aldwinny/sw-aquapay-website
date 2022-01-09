$(window).scroll(function () {

    if($("body").scrollTop() > 40 || $(document.documentElement).scrollTop() > 40) {
        $("#nav").css({
            "box-shadow": "0 0 10px #212121",
            "transition": "0.4s"
        });
    } else {
        $("#nav").css({
            "box-shadow": "none",
            "transition": "0.4s"
        });
    }
});