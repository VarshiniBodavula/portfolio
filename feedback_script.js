let username, usermail, userFeedback, finalData;

let inputName=document.getElementById("user");
inputName.setAttribute("oninput", "getName()" );
let inputMail=document.getElementById("mail");
inputMail.setAttribute("oninput","getMail()");
let feedbackData=document.querySelector("textarea");
feedbackData.setAttribute("oninput","getFeed()");

function getName(){
   username=inputName.value;
}
function getMail()
{
    usermail=inputMail.value;
}
function getFeed(){
    userFeedback=feedbackData.value;
}

function displayInfo(){
    addContent();
    finalData=""
    finalData+="Your name: "+username+"\n";
    finalData+="Your mail: "+usermail+"\n";
    finalData+="Your feedback:\n"+userFeedback;
    return finalData;
}

let submitButton=document.querySelector(".btn");
submitButton.setAttribute("onclick","display()");
 function display(event){
    window.alert(displayInfo());
    inputName.value="";
    inputMail.value="";
    feedbackData.value="";
 }

 function addContent(){
 let newDivOne=document.createElement("div");
 let newPara=document.createElement("p");
 newPara.textContent="Thank you for your valuable feedback. Glad to receive your feedback and I'll make sure that I  make a note of your feedback. And looking forward to work with you.";
 newPara.style.fontSize="20px";
 newPara.style.padding="1% 15%";
 newDivOne.appendChild(newPara);
 document.body.appendChild(newDivOne);
 newDivTwo=document.createElement("div");
 newImg=document.createElement("img");
 newImg.setAttribute("src","/assets/images/smily.png");
 newImg.classList.add("smily");
 newDivTwo.appendChild(newImg);
 document.body.appendChild(newDivTwo);

 }
