$("#header-home").on('click', function () {
    $("#about-me").hide();
    $("#nav-bar").css("padding-top", "200px")
    $("#wave-animation").css("padding-top", "50px")
    $(".waves").css("height", "100px")
});
$("#header-about").on('click', function () {
    $("#about-me").show();
    $("#nav-bar").css("padding-top", "0")
    $("#wave-animation").css("padding-top", "0")
    $(".waves").css("height", "40px")
});
$("#header-education").on('click', function () {
    $("#about-me").hide();
    $("#nav-bar").css("padding-top", "0")
    $("#wave-animation").css("padding-top", "0")
    $(".waves").css("height", "40px")
});
$("#header-experience").on('click', function () {
    $("#about-me").hide();
    $("#nav-bar").css("padding-top", "0")
    $("#wave-animation").css("padding-top", "0")
    $(".waves").css("height", "40px")
});
$("#header-projects").on('click', function () {
    $("#about-me").hide();
    $("#nav-bar").css("padding-top", "0")
    $("#wave-animation").css("padding-top", "0")
    $(".waves").css("height", "40px")
});