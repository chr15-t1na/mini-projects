import Icon from './images/saentis.jpg';
import Map from './images/map.png';

export const home = (function home () {
        
        let content = document.querySelector("#content");
        content.innerHTML = "";

        let contentDiv = document.createElement("div");
        contentDiv.innerText = "Welcome";
        contentDiv.setAttribute("class","title");
        content.appendChild(contentDiv);
        
        const myIcon = new Image();
        myIcon.src = Icon;
        myIcon.setAttribute("class", "image");
        content.appendChild(myIcon);

        let openingHours = document.createElement("div");
        openingHours.innerText = "Opening Hours";
        openingHours.setAttribute("class","title");
        let p = document.createElement("p");
        p.innerText = `
        Monday: Closed
        Tuesday: 11am - 9pm
        Wednesday: 11am - 9pm
        Thursday: 11am - 9pm
        Friday: 11am - 11pm
        Saturday: 10am - 11pm
        Sunday: 10am - 10pm`
        openingHours.appendChild(p);
        content.appendChild(openingHours);    
        

        let location = document.createElement("div");
        location.innerText = "Location";
        location.setAttribute("class","title");
        content.appendChild(location);
        
        let locationPic = new Image();
        locationPic.src = Map;
        locationPic.setAttribute("class", "image");
        content.appendChild(locationPic);
});