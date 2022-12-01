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
       message.innerHTML = "<b style='color: rgb(106, 90, 205);'>✨Happy</b> <b style='color:crimson;'>Birthday!✨</b>";
       icon.innerHTML = "<img class='cake' src='cake.png'>";
       content.innerHTML = "<h3 class='txt'>“Hope all your birthday wishes come true!”</h3>";
       break;
     case "Death":
       message.innerHTML = "💐<b style='color: limegreen;'>Sorry</b> <b style='color: #fff;'>for</b> <b style='color: limegreen;'>your</b> <b style='color: #fff;'>Loss</b>💐";
       icon.innerHTML = "<img class='fune' src='wreath.png'>";
       content.innerText =
         "I see dead people. I dont have special powers, just stating the obvious.";
       break;
     case "Graduation":
       message.innerHTML = "🎓Congrats <b style='color: #FFC300;'>Grad!🎓</b>";
       icon.innerHTML = "<img class='grad' src='graduation.png'>";
       content.innerText = "Go get a job you lazy  millenial!";
       break;
     case "Christmas":
       message.innerHTML = "❄<b style='color: crimson;'>️Merry Christmas!</b>❄️";
       icon.innerHTML = "<img class='tree' src='christmas-tree.png'>";
       content.innerText = "Happy Birthday Jesus! Yay Consumerism!";
       break;
   }
 });
});


function bor1() {
 document.getElementById("wrapper").style.borderImage = "url(border.png) 30 round";  /* Code for Safari 5 */
  document.getElementById("wrapper").style.backgroundColor = "lightyellow";  /* Code for Safari 5 */
}

function bor2() {
 document.getElementById("wrapper").style.borderImage = "url(chris.png) 100 round";  /* Code for Safari 5 */
  document.getElementById("wrapper").style.backgroundColor = "#ECFFDC";  /* Code for Safari 5 */
  }

function bor3() {
 document.getElementById("wrapper").style.borderImage = "url(flower.png) 100 round";  /* Code for Safari 5 */
  document.getElementById("wrapper").style.backgroundColor = "bisque";  /* Code for Safari 5 */
  
  }

function bor4() {
 document.getElementById("wrapper").style.borderImage = "url(grad.png) 50 round";  /* Code for Safari 5 */
  document.getElementById("wrapper").style.backgroundColor = "#F0FFFF";  /* Code for Safari 5 */
  
  }