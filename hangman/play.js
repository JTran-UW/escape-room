window.letters = ["s", "e", "a", "t", "l", "p", "c", "n", "d"];

var guess = function(e) {
    id = e.id;
    var check = window.letters.includes(id);

    if (check === true) {
        // correct animation
        body = document.querySelector("body");
        body.classList.remove("wrong");
        body.classList.remove("correct");
        void body.offsetWidth;
        body.classList.add("correct");

        var guessed = document.getElementsByClassName(id);
        for (var i = 0; i < guessed.length; i++) {
            guessed[i].classList.add("clicked");
        }

        var iindex = window.letters.indexOf(id);
        window.letters.splice(iindex, 1);
        if (window.letters.length == 0) {
            window.location.href = "success.html";
        }
        e.onclick = "";
        e.classList.add("letterclickedright");
    } else {
        // wrong animation
        body = document.querySelector("body");
        body.classList.remove("correct");
        body.classList.remove("wrong");
        void body.offsetWidth;
        body.classList.add("wrong");

        var hangman = document.getElementById("man");
        var src = hangman.src;
        var i = src.indexOf(".png") - 1;
        var char = parseInt(src.charAt(i));
        var newChar = char + 1
        if (char < 6) {
            hangman.src = "h" + newChar + ".png";
        } else {
            window.location.href = "failed.html";
        }
        e.onclick = "";
        e.classList.add("letterclickedwrong");
    }
}

var retry = function() {
    window.location.href = "hangman.html";
}

var home = function() {
    window.location.href = "../home/index.html";
}

var showkey1 = function() {
    document.getElementById("key1").classList.add("show");
}

var closekey1 = function() {
    document.getElementById("key1").classList.remove("show");
}

var showkey2 = function() {
    document.getElementById("key2").classList.add("show");
}

var closekey2 = function() {
    document.getElementById("key2").classList.remove("show");
}
