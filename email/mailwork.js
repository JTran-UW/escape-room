window.email = "";

window.onload = function() {
    //alert("You have 40 new emails.")
    var emails = document.getElementsByClassName("email");

    for (var i = 0; i < emails.length; i++) {
        emails[i].addEventListener("click", function(e) {
            console.log("passed");
            var showcontent = document.getElementById("showemail");
            var subject = document.getElementById("subject");
            var from = document.getElementById("from");
            var time = document.getElementById("time");
            var content = document.getElementById("content");
            var target = e.currentTarget;
            var targetid = target.id;
            var emailimg = target.querySelector("#emailimg");

            if (targetid == "email1") {
                subject.innerHTML = "NOTICE OF IMMEDIATE SEIZURE";
                from.innerHTML = "From: Department of Homeland Security";
                time.innerHTML = "10:12 AM 8/1";
                content.innerHTML = `
                TO WHOM IT MAY CONCERN, <br>
                <br>
                THE UNITED STATES DEPARTMENT OF HOMELAND SECURITY HAS OFFICIALLY ISSUED A NOTICE OF IMMEDIATE SEIZURE CONCERNING DOCUMENTS MADE BY DR. ALEX CHEN AND ASSOCIATES, OF AND FOR A CURE FOR COVID-19. IF
                NO RESPONSE IS GIVEN, FEDERAL AGENTS WILL BE DEPLOYED TO SECURE SAID DOCUMENTS WITHIN THE NEXT 3 DAYS.  OBSTRUCTING FEDERAL AGENTS IS A FELONY PUNISHABLE BY A MINIMUM 6 YEARS IN PRISON; ALL OFFENDERS
                WILL BE PERSECUTED TO THE FURTHEST EXTENT OF THE LAW.<br>
                <br>
                US DEPARTMENT OF HOMELAND SECURITY
                `
            } else if (targetid == "email2") {
                subject.innerHTML = "Official Request of Documents";
                from.innerHTML = "From: Center for Disease Control";
                time.innerHTML = "10:00 AM 7/30";
                content.innerHTML = `
                
                `
            } else if (targetid == "email3") {
                subject.innerHTML = "URGENT: SEND THE KEYS";
                from.innerHTML = "From: Dr. Roberts";
                time.innerHTML = "8:45 PM 7/26";
                content.innerHTML = "Chen, we need the security keys to the cure IMMEDIATELY. Respond ASAP! ";
            } else if (targetid == "email4") {
                subject.innerHTML = "YOUR RESEARCH MUST BE RELEASED";
                from.innerHTML = "From: Lauren Clyburn";
                time.innerHTML = "3:34 PM 7/25";
                content.innerHTML = `
                `
            } else if (targetid == "email10") {
                subject.innerHTML = "Password Recovery";
                from.innerHTML = "From: Microsoft Support Team";
                time.innerHTML = "9:33 AM 4/23";
                content.innerHTML = `
                Mr. Chen,<br>
                <br>
                We would like to help you get back to using your PC, but without most necessary password recovery information, we cannot allow you back into your computer.  We are sorry that we could not fix your issue.<br>
                <br>
                Apologies,<br>
                Microsoft Support Team, Derek<br>
                <br>
                P.S. Between you and me, I suggest you check your computer's terminal.  If you're saavy, you could figure out how to get in.
                `;
            } else {
                subject.innerHTML = "";
                from.innerHTML = "";
                time.innerHTML = "";
                content.innerHTML = "";
            }

            infoimg.src = emailimg.src;

            if (document.getElementsByClassName("show").length == 0) {
                showcontent.classList.toggle("show");
            } else {
                if (window.email == targetid) {
                    showcontent.classList.toggle("show");
                }
            }
            window.email = targetid;
        });
    }
}
