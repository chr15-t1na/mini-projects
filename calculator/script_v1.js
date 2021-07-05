const SCREEN = document.querySelector("#screen");
const NUMBER_BUTTONS = { "one" : 1,
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
"dot" : "."
};





var btns = document.querySelectorAll('button'); //get all buttons
    btns.forEach( btn => {
        btn.addEventListener('click', f = (e) => disp.numbers(e.currentTarget.id));
    });

 

var disp = (function display () {
    var numberStorage1 = "";
    var numberStorage2 = "";
    function addNumb(val){
        if(/[+\-\*\/]/.test(numberStorage1) == false){    //safes numbers in other storage after operation sign
            numberStorage1 += String(val); 
            SCREEN.innerText = numberStorage1;
        } else {
            numberStorage2 += String(val); 
            SCREEN.innerText = numberStorage2;
        }
    }   
    return {
        numbers : function (id) {
                if (id in NUMBER_BUTTONS == true) {
                    var number1 = NUMBER_BUTTONS[id];
                    return addNumb(number1);            //passing on clicked button to storage function
                } else {switch (id) {
                        case "enter":
                            result = eval(numberStorage1+numberStorage2);
                            numberStorage1 = "";
                            addNumb(result);
                            break;
                        case "dele":
                            if (SCREEN.innerText === numberStorage1) {
                                numberStorage1 = "";
                                addNumb(numberStorage1);
                            } else {
                                numberStorage2 = "";
                                addNumb(numberStorage2);
                            }
                            break;
                        case "clr":
                            numberStorage1 = "";
                            numberStorage2 = "";
                            SCREEN.innerText = 0;
                            break;
                        case "perc":
                            if (SCREEN.innerText === numberStorage1) {
                                numberStorage1 = "";
                                result = SCREEN.innerText/100;
                                addNumb(result);
                            } else {
                                numberStorage2 = "";
                                result = SCREEN.innerText/100;
                                addNumb(result);
                            }
                            break;
                        case "swtch":

                            console.log('true')
                            break;
                        }
                    };
                },
            };         
    })();
