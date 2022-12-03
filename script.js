document.addEventListener("DOMContentLoaded", () => {
 const message = document.getElementById("message");
 const icon = document.getElementById("icon");
 const reciever = document.getElementById("reciever");
 const date = document.getElementById("date");
 const dateOutput = document.getElementById("dateOutput");
 const content = document.getElementById("content");
 const sender = document.getElementById("sender");
 const reason = document.getElementById("reason");
 const submit = document.getElementById("submit");
 const reset = document.getElementById("reset");

 reset.addEventListener("click", () => {
   document.getElementById("reciever").value = "";
   document.getElementById("date").value = "";
   document.getElementById("sender").value = "";
 });

 submit.addEventListener("click", () => {
   dateOutput.innerText = date.value;
   document.getElementById(
     "recieverOutput"
   ).innerText = `Dear ${reciever.value},`;
   document.getElementById("senderOutput").innerText = `Love ${sender.value},`;

   switch (reason.value) {
     case "Birthday":
       message.innerHTML = "<b style='color: crimson'>✨H</b><b style='color:#fea735;'>a</b><b style='color: #ffea00;'>p</b><b style='color:limegreen;'>p</b><b style='color: blue;'>y</b> <b style='color:crimson;'>B<b style='color:orangered;'>i</b><b style='color:#fea735;'>r</b><b style='color:#ffea00;'>t</b><b style='color:#00A36C;'>h</b><b style='color:limegreen;'>d</b><b style='color:blue;'>a</b><b style='color:darkviolet;'>y!✨</b>";
       icon.innerHTML = "<img class='cake' src='cake.png'>";
       content.innerHTML = "“Hope all your birthday wishes come true & have a great day filled with special moments!”";
       document.getElementById("wrapper").style.backgroundColor = "lightyellow";
       document.getElementById("recieverOutput").style.color = "#ffea00"; 
       document.getElementById("senderOutput").style.color = "#ffea00"; 
       document.getElementById("dateOutput").style.color = "deepskyblue"; 
       document.getElementById("content").style.color = "#00A36C"; 
       document.getElementById("wrapper").style.border = "5px dashed #ffea00";
       
       break;
     case "Death":
       message.innerHTML = "🪦<b style='color: limegreen;'>Sorry</b> <b style='color: #f9f9f9;'>for</b> <b style='color: limegreen;'>your</b> <b style='color: #f9f9f9;'>Loss</b>🪦";
       icon.innerHTML = "<img class='fune' src='wreath.png'>";
       content.innerText =
         "I see dead people. I dont have special powers, just stating the obvious.";
       document.getElementById("wrapper").style.backgroundColor = "#FFBF00"; 
       document.getElementById("recieverOutput").style.color = "#262626"; 
       document.getElementById("senderOutput").style.color = "#262626"; 
       document.getElementById("dateOutput").style.color = "#ffffff"; 
       document.getElementById("content").style.color = "#ffffff"; 
       document.getElementById("wrapper").style.border = "5px double limegreen"; 
       
       break;
     case "Graduation":
       message.innerHTML = "🎓<b style='color: #fff;'>Congrats</b> <b style='color: #FFC300;'>Grad!</b>🎓";
       icon.innerHTML = "<img class='grad' src='graduation.png'>";
       content.innerText = "May your graduation be the beginning of many more wonderful achievements in your life!";
       document.getElementById("wrapper").style.backgroundColor = "rgb(106, 90, 205)";
       document.getElementById("recieverOutput").style.color = "navy"; 
       document.getElementById("senderOutput").style.color = "navy"; 
       document.getElementById("content").style.color = "#ffffff"; 
       document.getElementById("dateOutput").style.color = "#ffffff"; 
       document.getElementById("wrapper").style.border = "5px double #ffc300"; 
       
       break;
     case "Christmas":
       message.innerHTML = "❄<b style='color: #fff;'>Merry</b> <b style='color: #fff;'>Christmas!</b>❄️";
       icon.innerHTML = "<img class='tree' src='christmas-tree.png'>";
       content.innerText = "May the Christmas Season bring only happiness and joy to you and your family!";
       document.getElementById("wrapper").style.backgroundColor = "crimson";  
       document.getElementById("recieverOutput").style.color = "#ffea50"; 
       document.getElementById("senderOutput").style.color = "#ffea50"; 
       document.getElementById("dateOutput").style.color = "#ffffff"; 
       document.getElementById("content").style.color = "#ffffff"; 
       document.getElementById("wrapper").style.border = "5px double #ffea50"; 
       
       break;
       case "Eid":
       message.innerHTML = "✨<b style='color: #fff;'>Eid Mubarak</b>✨";
       icon.innerHTML = "<img class='tree' src='ramadan.png'>";
       content.innerText = "May the blessings of Allah be with you and your family forever and always!";
       document.getElementById("wrapper").style.backgroundColor = "#00A36C";  
       document.getElementById("recieverOutput").style.color = "#ffea00"; 
       document.getElementById("senderOutput").style.color = "#ffea00"; 
       document.getElementById("dateOutput").style.color = "#ffffff"; 
       document.getElementById("content").style.color = "#ffffff"; 
       document.getElementById("wrapper").style.border = "5px double #ffea00"; 
       break;
       
       case "Diwali":
       message.innerHTML = "🪔<b style='color: #fff;'>Happy</b> <b style='color: #fff;'>Diwali</b>🪔️<b style='color:#4d3a99;'>festvials of light!</b>";
       icon.innerHTML = "<img class='tree' src='diya.png'>";
       content.innerText = "May this festival of joy brings more happiness in your life!";
       document.getElementById("wrapper").style.backgroundColor = "orangered";  
       document.getElementById("recieverOutput").style.color = "#ffea50"; 
       document.getElementById("senderOutput").style.color = "#ffea50"; 
       document.getElementById("dateOutput").style.color = "#ffffff"; 
       document.getElementById("content").style.color = "#ffffff"; 
       document.getElementById("wrapper").style.border = "5px double #ffea50"; 
       break;
   }
 });
});


function bor1() {
    document.getElementById("recieverOutput").style.color = ""; 
    }

function bor2() {
  /* Code for Safari 5 */
       }

function bor3() {
    /* Code for Safari 5 */
      document.getElementById("recieverOutput").style.color = ""; 
  }

function bor4() {
 /* Code for Safari 5 */
  
  }