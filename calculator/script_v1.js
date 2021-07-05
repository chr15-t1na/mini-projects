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
"dot" : "."}
const OPERATOR_BUTTONS = { 
"sum" : "+",
"sub" : "-",
"multi" : "*",
"divi" : "/"
};





var btns = document.querySelectorAll('button'); //get all buttons
    btns.forEach( btn => {
        btn.addEventListener('click', f = (e) => {disp.numbers(e.currentTarget.id); disp.others_bts(e.currentTarget.id)});
    });

 

var disp = (function display () {
    var numberStorage = [];
    var operatorStorage = [];
    var numbs = "";

    function addNumb(val){
            numberStorage.push(val);
            console.log(numberStorage)
            SCREEN.innerText = numberStorage[numberStorage.length-1];
    }
    function addOperators(val){
            operatorStorage += String(val); 
            SCREEN.innerText = operatorStorage;
    }   
    return {
        numbers : function (id) {
                if (id in NUMBER_BUTTONS == true) {
                    numbs += String(NUMBER_BUTTONS[id]); 
                    SCREEN.innerText = numbs;
                } else { 
                    addNumb(numbs);
                    numbs = "";  
                    var oprts = OPERATOR_BUTTONS[id];
                    return addOperators(oprts);}
                },         
        others_bts : function (id) {
                        switch (id) {
                        case "enter":
                            result = eval(numberStorage[0]+operatorStorage[0]+numberStorage[numberStorage.length-1]);
                            numberStorage = [];
                            operatorStorage = [];
                            addNumb(result);
                            break;
                        case "dele":
                            numberStorage.pop(numberStorage[numberStorage.length-1]);
                            break;
                        case "clr":
                            numberStorage = [];
                            operatorStorage = [];
                            SCREEN.innerText = 0;
                            break;
                        case "perc":
                            numbs = Number(numberStorage[numberStorage.length-1])/100;
                            numberStorage.pop(numberStorage[numberStorage.length-1]);
                            console.log(numberStorage);
                            SCREEN.innerText = numbs;
                            break;
                        case "swtch":

                            break;
                        }
                    },
                }         
    })();
