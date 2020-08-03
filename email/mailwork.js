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

            if (targetid == "email0") {
                subject.innerHTML = "LAST WARNING: NOTICE OF IMMEDIATE SEIZURE";
                from.innerHTML = "From: Department of Homeland Security";
                time.innerHTML = "11:03 AM 8/3";
                content.innerHTML = `
                TO WHOM IT MAY CONCERN, <br>
                <br>
                THIS IS YOUR SECOND AND LAST REMINDER <br>
                <br>
                THE UNITED STATES DEPARTMENT OF HOMELAND SECURITY HAS OFFICIALLY ISSUED A NOTICE OF IMMEDIATE SEIZURE CONCERNING DOCUMENTS MADE BY DR. ALEX CHEN AND ASSOCIATES, OF AND FOR A CURE FOR COVID-19. IF
                NO RESPONSE IS GIVEN, FEDERAL AGENTS WILL BE DEPLOYED TO SECURE SAID DOCUMENTS TOMORROW.  OBSTRUCTING FEDERAL AGENTS IS A FELONY PUNISHABLE BY A MINIMUM 6 YEARS IN PRISON; ALL OFFENDERS
                WILL BE PERSECUTED TO THE FURTHEST EXTENT OF THE LAW.<br>
                <br>
                US DEPARTMENT OF HOMELAND SECURITY
                `
            } else if (targetid == "email1") {
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
                Office of Dr. Morgan Chen,<br>
                <br>
                The Center for Disease Control, to control the spread of coronavirus, now officially requests documents from the office of one Dr. Morgan Chen related to a cure.  This is a suggestion, but 
                if we do not receive a response within the next 3 days, we will give this information to a more powerful government agency.  Please send all information that you have that might be relevant.<br>
                <br>
                Center for Disease Control
                `
            } else if (targetid == "email3") {
                subject.innerHTML = "IMPORTANT! Send your research";
                from.innerHTML = "From: Dr. Roberts";
                time.innerHTML = "8:45 PM 7/26";
                content.innerHTML = `
                Morgan, <br>
                <br>
                This is a disaster!  The world's going to be in deep deep trouble if you don't send me--or anyone--our research ASAP!!!  I don't know where you are but I'm going to call the CDC on this soon if you don't
                respond.<br>
                <br>
                Alex`;
            } else if (targetid == "email4") {
                subject.innerHTML = "We need your research!";
                from.innerHTML = "From: Lauren Clyburn";
                time.innerHTML = "3:34 PM 7/25";
                content.innerHTML = `
                Dear Dr. Chen,<br>
                <br>
                This is your last warning from me to return to work and release your research before you are fired and relevant authorities are told about the information you have leading to the cure.  
                Refusing to make public your research, as the country is on the brink of collapse is CRIMINAL!<br>
                <br>
                Lauren Clyburn<br>
                Manager and director, Seattle Children's Hospital<br>
                <br>
                Puzzle of the week: ENILA<br>
                Clue: From outer space<br>
                <br>
                ___ ___ ___ ___ ___<br>
                &emsp;&emsp;&emsp;&ensp;1
                `;
            } else if (targetid == "email5") {
                subject.innerHTML = "BREAKING: US Federal Government Takes Desperate Measures to Fight Coronavirus Zombie Apocalypse";
                from.innerHTML = "From: CNN";
                time.innerHTML = "9:00 AM 7/15";
                content.innerHTML = `
                Leaks from the white house suggest very bad news: The US government is taking desperate measures to fight the coronavirus, which just weeks ago mutated to cause zombie-like symptoms.  The most recent 
                declarations will allow them to search and take any documents or items that citizens have that may lead to a cure or treatment.  If you have any such documents or items, please report these to the Center 
                for Disease Control (CDC) as soon as possible.<br><br>
                <img src="cdc.jpg" style="width: 850px;"><br>
                CNN
                `;
            } else if (targetid == "email6") {
                subject.innerHTML = "Checking in";
                from.innerHTML = "Dr. Dyson";
                time.innerHTML = "10:43 PM 7/12";
                content.innerHTML = `
                Hey Chen,<br>
                <br>
                I'm sending this email to check in.  I haven't seen you at the hospital for a week or so, and I'm worried that you might've gotten sick.  I hope you're alright somewhere.  Send me an email back letting me know how
                things are going, okay? <br>
                <br>
                Dr. Michael Dyson<br>
                Seattle Children's Hospital
                `
            } else if (targetid == "email7") {
                subject.innerHTML = "Research and attendance";
                from.innerHTML = "Lauren Clyburn";
                time.innerHTML = "6:22 PM 7/11";
                content.innerHTML = `
                Dear Dr. Chen,<br>
                <br>
                I have noticed you have not been showing up for work this past week.  I am willing to be forgiving, given the circumstances, but I need you to communicate with me and your fellow coworkers.  Many of them are worried
                about your safety.  One researcher you recently worked with recently, Dr. Alex Roberts, brought up in a meeting that the two of you had possibly found a life-saving cure?  If this is true, we will need to have immediate
                access to your computer and information to view the details of your work.  This could be world-saving information!  Get back to me ASAP.<br>
                <br>
                Lauren Clyburn<br>
                Manager and director, Seattle Children's Hospital<br>
                <br>
                Puzzle of the week: TPNAL<br>
                Clue: In a pot<br>
                <br>
                ___ ___ ___ ___ ___<br>
                &nbsp;6
                `
            } else if (targetid == "email8") {
                subject.innerHTML = "BREAKING: US Federal Government Sends Army To Defeat Zombie Pandemic";
                from.innerHTML = "From: CNN";
                time.innerHTML = "9:00 AM 7/1";
                content.innerHTML = `
                Reports show the US government preparing to send the military into cities around the country to fight the growing coronavirus zombie pandemic.  More information to come.<br><br>
                <img src="martiallaw.jpg" style="width: 750px;"><br>
                <br>
                CNN
                `;
            } else if (targetid == "email9") {
                subject.innerHTML = "Working on weekends";
                from.innerHTML = "From: Lauren Clyburn";
                time.innerHTML = "4:30 PM 6/28";
                content.innerHTML = `
                Dear Dr. Chen,<br>
                <br>
                I really appreciate all the great work you have been doing recently at the hospital.  You are an irreplaceable doctor.  However, in light of new information, the hospital is in dire need of more hands.  
                I am offering you work on the weekends full-time with extra pay.  Let me know if that sounds like something you would be interested in.<br>
                <br>
                Lauren Clyburn<br>
                Manager and director, Seattle Children's Hospital<br>
                <br>
                Puzzle of the week: TRAWE<br>
                Clue: 8 cups a day<br>
                <br>
                ___ ___ ___ ___ ___<br>
                &emsp;&emsp;&emsp;&emsp;&emsp;5
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
            } else if (targetid == "email11") {
                subject.innerHTML = "Interesting results...";
                from.innerHTML = "From: Dr. Roberts";
                time.innerHTML = "11:32 PM 6/27";
                content.innerHTML = `
                Morgan,<br>
                <br>
                We got back the results from last weeks' testing... The info is uploaded on your computer, so I can't access it anymore.  Should we tell the CDC about it?<br>
                <br>
                Regards,<br>
                Alex
                `;
            } else if (targetid == "email12") {
                subject.innerHTML = "IMMEDIATE SHELTER-IN-PLACE ORDER";
                from.innerHTML = "From: The Office of The Governor";
                time.innerHTML = "10:00 AM 6/25";
                content.innerHTML = `
                Residents of Washington State,<br>
                <br>
                In order to control the coronavirus, the Office of The Governor of Washington State has issued an order forcing residents to stay inside at all times, except to get food, water, or medical attention.  All jobs,
                besides hospital and grocery store work, are suspended.  Any information related to a cure or treatment should be sent to the Center for Disease Control (CDC).<br>
                <br>
                We thank you for your compliance,<br>
                Governor Jay Inslee
                `
            } else if (targetid == "email13") {
                subject.innerHTML = "Emergency Meeting!";
                from.innerHTML = "From: Lauren Clyburn";
                time.innerHTML = "6:30 6/25";
                content.innerHTML = `
                All Doctors and Staff Members,<br>
                <br>
                It seems just as we were getting the virus under control, we have a new crisis on our hands.  The coronavirus is now a zombie virus: we need an emergency meeting to decide next steps ASAP.  I will see you all
                today in the meeting room first thing in the morning.<br>
                <br>
                Lauren Clyburn<br>
                Manager and director, Seattle Children's Hospital<br>
                <br>
                Puzzle of the week: PRANLEAI<br>
                Clue: Sky bus<br>
                <br>
                ___ ___ ___ ___ ___ ___ ___<br>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;2
                `
            } else if (targetid == "email14") {
                subject.innerHTML = "BREAKING: CORONAVIRUS MUTATES TO CAUSE ZOMBIE-LIKE SYMPTOMS";
                from.innerHTML = "From: CNN";
                time.innerHTML = "9:00 AM 6/24";
                content.innerHTML = `
                In a shocking turn of events the coronavirus has shown signs of mutating symptoms.  Reports from around the world show patients turning violent against other humans.  As hysteria spreads at the idea of a zombie
                apocalypse, governments are yet to respond to this crisis' most recent evolution.<br>
                <br>
                <img src="covid.jpg" style="width:850px">
                <br>
                CNN
                `;
            } else if (targetid == "email15") {
                subject.innerHTML = "Thank you all for your hard work";
                from.innerHTML = "From: Lauren Clyburn";
                time.innerHTML = "10:06 PM 6/22";
                content.innerHTML = `
                All Doctors and Staff Members,<br>
                <br>
                I want to thank you all for the hard work you have put into caring for and treating patients these past few months.  I know it has been stressful, but I am sure Seattle is grateful for all the long hours you have
                put in.  The good news is it looks like the worst of the virus is over, and we will be returning to normal within a month or two.  You should all give yourself a pat on the back, and take a well deserved break.<br>
                <br>
                Lauren Clyburn<br>
                Manager and director, Seattle Children's Hospital<br>
                <br>
                Puzzle of the week: LOGLABFL<br>
                Clue: Round & Bumpy<br>
                <br>
                ___ ___ ___ ___ ___ ___ ___ ___<br>
                &nbsp;3&emsp;4
                `;
            } else if (targetid == "email16") {
                subject.innerHTML = "Chess tournament this weekend";
                from.innerHTML = "From: Dr. Dyson";
                time.innerHTML = "9:30 PM 6/22";
                content.innerHTML = `
                Chen,<br>
                <br>
                We've all been working super hard, and I think we should take this weekend to relax and have some fun.  Alex and I want to organize a chess tournament this weekend with all the staff.  Let me know if you 
                want to join!  We'd love to have you.<br>
                <br>
                Dr. Michael Dyson<br>
                Seattle Children's Hospital
                `
            } else if (targetid == "email17") {
                subject.innerHTML = "Did you figure out this weeks puzzle?";
                from.innerHTML = "From: Avery Abrams";
                time.innerHTML = "8:12 PM 6/21";
                content.innerHTML =    `
                Hey Morgan,<br>
                <br>
                Did you figure out Lauren's puzzle this week? I couldn't do it, but here's what I got so far:<br>
                LOGLABFL could be FLOBGALL, LABFLLOG, BLOGLLAF<br>
                but none of those are real words... let me know if you come up with anything.  What kind of things are round and bumpy...?<br>
                <br>
                Avery Abrams<br>
                Assistant Director of Human Resources, Seattle Children's Hospital
                `
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
