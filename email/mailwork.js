window.onload = function() {
    var emails = document.getElementsByClassName("email");

    for (var i = 0; i < emails.length; i++) {
        emails[i].addEventListener("click", function() {
            console.log("passed");
            var showcontent = document.getElementById("showemail");

            showcontent.classList.toggle("show");
        });
    }
}
