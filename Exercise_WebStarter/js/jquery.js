// jquery source code

$(document).ready(function () {
    if (window.location.pathname.includes("First.html")) {
        $('h3').addClass('niceClassFirst');
    } else if (window.location.pathname.includes("Second.html")) {
        $('h3').addClass('niceClassSecond');
    }
});

/*
$(document).ready(function niceClassFirst () {
    $('h3').addClass('niceClassFirst');
});

$(document).ready(function niceClassSecond () {
    $('h3').addClass('niceClassSecond');
});*/
