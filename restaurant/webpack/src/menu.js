import RacletteImg from './images/raclette.jpg';
import FondueImg from './images/fondue.jpg';
import SandwichImg from './images/sandwich.jpg';
import RamequinImg from './images/chaeschueechli.jpg';
import PlatterImg from './images/platter.jpg';
import CheesecakeImg from './images/cheesecake.jpg';


export const menu = (function menu () {

    let content = document.querySelector("#content");
    
    content.innerHTML = "";

    let contentDiv = document.createElement("div");
    contentDiv.setAttribute("class","title");
    contentDiv.innerText = "Our Specialities";
    content.appendChild(contentDiv);       
        
    
    class Dish {
        constructor (dish, pic, descr, price) {
            this.dish = dish;
            this.pic = pic;
            this.descr = descr;
            this.price = price;
            dishCard(this.dish, this.pic, this.descr, this.price);
        };
    }

    function dishCard (cDish, cPic, cDesc, cPrice){
        let food = document.createElement("div");
        food.setAttribute("class", "food");
        content.appendChild(food);

        let myFood = new Image();
        myFood.src = cPic;
        myFood.setAttribute("class", "food-image");
        food.appendChild(myFood);

        let pDish = document.createElement("p");
        pDish.innerText = cDish;
        pDish.setAttribute("class", "food-title")
        food.appendChild(pDish);

        let pDesc = document.createElement("p");
        pDesc.innerText = cDesc;
        food.appendChild(pDesc);

        let pPrice = document.createElement("p");
        pPrice.innerText = cPrice;
        food.appendChild(pPrice);
    }

    let fondue = new Dish("Fondue", FondueImg, "Delicious Moitié-Moitié cheese mix melted in the caquelon to dip in our homemade bread", "$30 p.p.");
    let raclette = new Dish("Raclette", RacletteImg, "Melted cheese and grill in one? How about a delicious raclette?", "$40 p.p.");
    let ramequin = new Dish("Cheese Ramequin", RamequinImg, "Combining several cheese types baked in the ramequin form", "$15");
    let sandwich = new Dish("Grilled Cheese Sandwich", SandwichImg, "Ripe Gruyere cheese and prosciutto grilled between homemade bread served with a seasonal salad bouquet", "$20")
    let cheeseplatter = new Dish("Cheeseplatter", PlatterImg, "A selection of hard and soft cheese, served with artisan bread, dried fruits and nuts", "$25");
    let cheesecake = new Dish("Cheesecake", CheesecakeImg, "A slice of the creamiest cheesecake decorated with seasonal fruits", "$8");

});