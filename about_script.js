let newAbout=document.querySelector(".new-about");

function displayAbout(){
    let myTable=document.createElement("table");
    myTable.appendChild(tableHeader());
    myTable.append(tableBody());
    newAbout.appendChild(myTable);
    myTable.classList.add("about-table");
    let hobbiesDiv=document.createElement("div");
    let myHobbie=document.createElement("h2");
    myHobbie.textContent="My Hobbies";
    myHobbie.style.textAlign="center";
    hobbiesDiv.appendChild(myHobbie);
    hobbiesDiv.appendChild(hobbiesImages());
    document.body.appendChild(hobbiesDiv);


}

function hobbiesImages(){
    let newDivOne=document.createElement("div");
    newDivOne.classList.add("grid-container");
    let imgOne=document.createElement("img");
    imgOne.setAttribute("src","/assets/images/hobbie1.jpg");
    imgOne.classList.add("img-1");
    imgOne.style.borderRadius="50%";
    newDivOne.appendChild(imgOne);
    let imgTwo=document.createElement("img");
    imgTwo.setAttribute("src","/assets/images/hobbie2.jpg");
    imgTwo.classList.add("img-1");
    imgTwo.style.borderRadius="50%";
    newDivOne.appendChild(imgTwo);
    let imgThree=document.createElement("img");
    imgThree.setAttribute("src","/assets/images/hobbie3.jpg");
    imgThree.classList.add("img-1");
    imgThree.style.borderRadius="50%";
    newDivOne.appendChild(imgThree);
    return newDivOne;
}

function tableHeader(){
    let head=document.createElement("thead");
    let header=document.createElement("tr");
    let edu=document.createElement("th");
    edu.textContent="Education";
    header.appendChild(edu);
    let institute=document.createElement("th");
    institute.textContent="Institute";
    header.appendChild(institute);
    let passYear=document.createElement("th");
    passYear.textContent="Year Of Passing";
    header.appendChild(passYear);
    let percent=document.createElement("th");
    percent.textContent="Percentage";
    header.appendChild(percent);
    head.append(header)
    return head;
}

function newRow(degree,inst,year,per){
    let row=document.createElement("tr");
    let degreeName=document.createElement("td");
    degreeName.textContent=degree;
    row.appendChild(degreeName);
    let degreeInst=document.createElement("td");
    degreeInst.textContent=inst;
    row.appendChild(degreeInst);
    let degreeYear=document.createElement("td");
    degreeYear.textContent=year;
    row.appendChild(degreeYear);
    let degreePer=document.createElement("td");
    degreePer.textContent=per;
    row.appendChild(degreePer);

    return row;
}

function tableBody(){
    let tableRows=document.createElement("tbody");
    tableRows.appendChild(newRow("B-Tech","Vignan's Institute (VIIT)","2023","80%"))
    tableRows.appendChild(newRow("Intermediate","Narayana Jr. College","2019","94%"));
    tableRows.appendChild(newRow("SSC","Vignan's High School","2017","95%"));
    return tableRows;

}

