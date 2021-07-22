// Sorry for background music, but without it this project is not full

 window.onload = function () {
        var button = $(".controls");
        var play = $(".play");
        var pause = $(".pause");

        button.on("click", function () {
            $(".controls i").toggleClass("hide show");
            if (play.hasClass("show")) {
                $("audio")[0].pause();
            } else {
                $("audio")[0].play();
            }
        });
}