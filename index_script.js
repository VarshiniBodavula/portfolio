let newIntro=document.querySelector(".intro");

let newPara=document.createElement("p");

newPara.textContent="Through this internship programme I would like to acquire new skills and pave a right path in my career."

newIntro.appendChild(newPara);

newIntro.classList.add("home-intro");

let newDivOne=document.createElement("div");

newDivOne.classList.add("grid-container");

let imgOne=document.createElement("img");

imgOne.setAttribute("src","/assets/images/img1.jpg");

imgOne.classList.add("img-1");

imgOne.style.borderRadius="50%";

newDivOne.appendChild(imgOne);

let imgTwo=document.createElement("img");

imgTwo.setAttribute("src","/assets/images/img2.jpg");

imgTwo.classList.add("img-1");

imgTwo.style.borderRadius="50%";

newDivOne.appendChild(imgTwo);

let imgThree=document.createElement("img");

imgThree.setAttribute("src","/assets/images/img3.jpg");

imgThree.classList.add("img-1");

imgThree.style.borderRadius="50%";

newDivOne.appendChild(imgThree);

document.body.appendChild(newDivOne);
