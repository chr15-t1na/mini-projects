let num1 = "";
let num2 = "";
let result ="";
let operator = "";
let output = 0;
let screen = document.querySelector("#screen");

let buttons = { "one" : 1,
"two" : 2,
"three" : 3,
"four" : 4,
"five" : 5,
"six" : 6,
"seven" : 7,
"eight" : 8,
"nine" : 9,
"zero" : 0,
"sum" : "+",
"sub" : "-",
"multi" : "*",
"divi" : "/",
"del" : "",
"clr" : "",
"dot" : ".",
"swtch" : "*-1",
"perc" : "%",
"dele" : "",
"clr" : "",
"enter" : "ent",
};

let btns = document.querySelectorAll('button'); //get all buttons
btns.forEach( btn => {
    btn.addEventListener('click', keyButtons);
});

function keyButtons (e) {
    let id = e.currentTarget.id;    //get the clicked div's id
    switch (id){
        case "dele":                        // not fixed yet
            console.log(screen.innerText)       
            console.log("working")
            break;
        case "clr":
            num1="";
            num2="";
            result="";
            operator="";
            screen.innerText = 0;
            break;
        case "perc":
            screen.innerText =+ screen.innerText/100;   // not fixed yet
            break;   
        default:    
            if(result != ""){
                num1=result
                operator = "";
                num2 = "";
            } else if (id == "sum" || id =="sub" || id =="multi"|| id =="divi") {
                operator = String(id);
            } else if (id =="enter") {
                return calculation(num1, num2, operator);
            } else if (operator != "") {
                console.log(num2);
                num2 =+ String(num2)+String(buttons[id]);
                screen.innerText = num2; 
            } else {
                num1 =+ String(num1)+String(buttons[id]);
                screen.innerText = num1;
            }  
            break;
    }              
}


function calculation(num1, num2, operator){
switch (operator) {
    case "sum":
        result = parseInt(num1)+parseInt(num2);
        screen.innerText=result;
        break;
    case "sub":
        var result = parseInt(num1)-parseInt(num2);
        operator = "";
        num2 = "";
        screen.innerText=result
        break;
    case "multi":
        var result = parseInt(num1)*parseInt(num2);
        operator = "";
        num2 = "";
        screen.innerText=result
        break;
    case "divi":
        var result = parseInt(num1)/parseInt(num2);
        operator = "";
        num2 = "";
        screen.innerText=result
        break;          
    }
}