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
       message.innerHTML = "<b style='color: rgb(106, 90, 205);'>Happy</b> <b style='color:lightblue;'>Birthday!</b> <b class='txt2'>To You</b>";
       icon.innerHTML = "<img class='cake' src='cake.png'>";
       content.innerHTML = "<h3 class='txt'>“Hope all your birthday wishes come true!”</h3>";
       break;
     case "Death":
       message.innerText = "Sorry for your Loss";
       icon.innerText = "👻💀";
       content.innerText =
         "I see dead people. I dont have special powers, just stating the obvious.";
       break;
     case "Graduation":
       message.innerText = "Congrats Grad!";
       icon.innerText = "🎓";
       content.innerText = "Go get a job you lazy  millenial!";
       break;
     case "Christmas":
       message.innerText = "Happy Holidays!";
       icon.innerText = "🎄";
       content.innerText = "Happy Birthday Jesus! Yay Consumerism!";
       break;
   }
 });
});


// Function to GeneratePdf
	function GeneratePdf() {
		var element = document.getElementById('form-print');
		html2pdf(element);
	}


