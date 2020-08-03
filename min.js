function run() {
    document.querySelector(".curtain").classList.add("vanish");
}

function clock() {
    var today = new Date();
    var h = hour(today.getHours());
    var m = today.getMinutes();
    var d = today.getDate();
    var day = translate(today.getDay());
    var mo = month(today.getMonth());
    m = checkTime(m);
    document.getElementById("intro").innerHTML = h + ":" + m;
    document.getElementById("calendar").innerHTML = day + ", " + mo + " " + d
    var t = setTimeout(clock, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

function hour(num) {
    if (num > 12) {
        var h = num - 12;
    } else if (num == 0) {
        var h = 12;
    } else {
        var h = num;
    }
    return h
}

function translate(day) {
    if (day == 0) {
        var name = "Sunday";
    } else if (day == 1) {
        var name = "Monday";
    } else if (day == 2) {
        var name = "Tuesday";
    } else if (day == 3) {
        var name = "Wednesday";
    } else if (day == 4) {
        var name = "Thursday";
    } else if (day == 5) {
        var name = "Friday";
    } else {
        var name = "Saturday";
    }
    return name;
}

function month(day) {
    if (day == 0) {
        var name = "January";
    } else if (day == 1) {
        var name = "February";
    } else if (day == 2) {
        var name = "March";
    } else if (day == 3) {
        var name = "April";
    } else if (day == 4) {
        var name = "May";
    } else if (day == 5) {
        var name = "June";
    } else if (day == 6) {
        var name = "July";
    } else if (day == 7) {
        var name = "August";
    } else if (day == 8) {
        var name = "September";
    } else if (day == 9) {
        var name = "October";
    } else if (day == 10) {
        var name = "November";
    } else if (day == 11) {
        var name = "December";
    }
    return name;
}

function drop() {
    document.getElementById("dropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches(".menu")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i]
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
}
