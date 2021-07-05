let NUM1 = "";
let NUM2 = "";
let RESULT ="";
let OPERATOR = "";
let SCREEN = document.querySelector("#screen");

let BUTTONS = { "one" : 1,
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
            console.log(SCREEN.innerText)       
            console.log("working")
            break;
        case "clr":
            NUM1="";
            NUM2="";
            RESULT="";
            OPERATOR="";
            SCREEN.innerText = 0;
            break;
        case "perc":
            SCREEN.innerText =+ SCREEN.innerText/100;   // not fixed yet
            break;   
        default:    
            if(RESULT != ""){
                NUM1=RESULT
                OPERATOR = "";
                NUM2 = "";
            } else if (id == "sum" || id =="sub" || id =="multi"|| id =="divi") {
                OPERATOR = String(id);
            } else if (id =="enter") {
                return calculation(NUM1, NUM2, OPERATOR);
            } else if (OPERATOR != "") {
                console.log(NUM2);
                NUM2 += String(BUTTONS[id]);
                SCREEN.innerText = NUM2; 
            } else {
                NUM1 += String(BUTTONS[id]);
                SCREEN.innerText = NUM1;
            }  
            break;
    }              
}


function calculation(val1, val2, p_operator){
switch (p_operator) {
    case "sum":
        RESULT = parseInt(val1)+parseInt(val2);
        OPERATOR = "";
        NUM2 = "";
        SCREEN.innerText=RESULT;
        break;
    case "sub":
        var RESULT = parseInt(val1)-parseInt(val2);
        OPERATOR = "";
        NUM2 = "";
        SCREEN.innerText=RESULT
        break;
    case "multi":
        var RESULT = parseInt(val1)*parseInt(val2);
        OPERATOR = "";
        NUM2 = "";
        SCREEN.innerText=RESULT
        break;
    case "divi":
        var RESULT = parseInt(val1)/parseInt(val2);
        OPERATOR = "";
        NUM2 = "";
        SCREEN.innerText=RESULT
        break;          
    }
}