import * as myHome from './home.js';
import * as myMenu from './menu.js';
import * as myAbout from './about-us.js';
import './style.css';
import Logo from './images/logo.png';

 

(function menuButtons (){
    let logoDiv = document.querySelector(".logo");
    const logo = new Image();
    logo.src = Logo;
    logo.setAttribute("id", "logo");
    logoDiv.appendChild(logo);


    let parentDiv = document.querySelector(".container");
    let div = document.createElement("div");
    parentDiv.appendChild(div);

    let menuBar = ["Home", "Menu", "About Us"];

    for (var i = 0; i < 3; i++){
        let btn = document.createElement("button");
        btn.setAttribute("class", "myButton");
        btn.setAttribute("id", menuBar[i]);
        btn.innerText = menuBar[i];
        div.appendChild(btn);
    };

})();

document.addEventListener("click", (e) => {
    if(e.target.id === "Home"){
        myHome.home();
    }
    if(e.target.id === "Menu"){
        myMenu.menu();
    }
    if(e.target.id === "About Us"){
        myAbout.aboutUs();
    }
})

myHome.home();