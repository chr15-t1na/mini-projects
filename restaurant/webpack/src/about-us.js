import AboutUs from './images/about-us.png'

export const aboutUs = (function () {
    
    let content = document.querySelector("#content");

    content.innerHTML = "";

    let contentDiv = document.createElement("div");
    contentDiv.innerText = "Trudi & Sepp";
    contentDiv.setAttribute("class","title");
    content.appendChild(contentDiv);

    const myIcon = new Image();
    myIcon.src = AboutUs;
    myIcon.setAttribute("class", "image");
    content.appendChild(myIcon);
    
    let people = document.createElement("div");
    let p = document.createElement("p");
    p.innerText = `Welcome to Restaurant Säntis, we are Sepp and Trudi Meier.
    Since 1988 we welcome our guests from all over the world.
    Our core values stand for tradition and quality which is why
    we only serve selected cheese our satisfying standards.\n`
    people.appendChild(p);
    content.appendChild(people);         

});