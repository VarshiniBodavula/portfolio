let links=document.querySelectorAll(".c-links");
console.log(links);
for(let eachLink of links){
    eachLink.addEventListener("click",(e)=>{
        console.log(eachLink.innerHTML);
        window.alert("redirecting to "+eachLink.innerHTML);
    })
}
let feedElement=document.querySelector(".btn");
feedElement.addEventListener("click",(e)=>{
    window.alert("Redirecting to the feedback.. ");
}
)