$(document).ready(function () {
    $(".about").click(function () {
        $("#aboutDiv").toggle();
    });

    $(".howToPlay").click(function () {
        $("#howToPlayDiv").toggle();
    });

    $(".closeAbout").click(function () {
        $("#aboutDiv").hide();
        $("#gameIframe")[0].contentWindow.focus();
    });

    $(".closeHowToPlay").click(function () {
        $("#howToPlayDiv").hide();
        $("#gameIframe")[0].contentWindow.focus();
    });

    $(".Copyright").click(function () {
        $("#copyrightDiv").toggle();
    });

    $(".closeCopyright").click(function () {
        $("#copyrightDiv").hide();
        $("#gameIframe")[0].contentWindow.focus();
    });

    });