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
            SCREEN.innerText = numberStorage[-1];
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
                            result = eval(numberStorage[0]+operatorStorage[0]+numberStorage[1]);
                            numberStorage = [];
                            operatorStorage = [];
                            console.log(result)
                            addNumb(result);
                            break;
                        case "dele":
                            numberStorage.pop(numberStorage[-1])
                        case "clr":
                            numberStorage = [];
                            operatorStorage = [];
                            SCREEN.innerText = 0;
                            break;
                        case "perc":
                            console.log(SCREEN.innerText)
                            percentage = SCREEN.innerText/100;
                            numberStorage.splice(-1, 1, percentage);
                            SCREEN.innerText = percentage;
                            break;
                        case "swtch":

                            break;
                        }
                    },
                }         
    })();
