const buttons = { "one" : 1,
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


function button () {
    let btns = document.querySelectorAll('button'); //get all buttons

    function f (e) {
        let id = e.currentTarget.id;    //get the clicked div's id
        console.log(id)
        return function eventListener () {
            btns.forEach( btn => {
                btn.addEventListener('click', f(e));
            });
        };
    };    
};




function display () {
    var num1 = 0;
    var num2 = 0;
    let screen = document.querySelector("#screen");
 /*    return function screens () {
        screen.innerText=num1 */
            return function f (e) {
            let id = e.currentTarget.id;    //get the clicked div's id
            if (num1 === 0){
                num1+= String(num1)+String(buttons[id]);
                console.log(num1) 
            } else {
                num2+= String(num2)+String(buttons[id]);
            }
            
            }
            
        }
        


/* var display = function () {
    let num1 = 0;
    let num2 = 0;
    let screen = document.querySelector("#screen");
    function screens () {
        screen.innerText=num1
        function numCounter () {
            num1+= num1+String();
            function f (e) {
                let id = e.currentTarget.id;    //get the clicked div's id
                if (num1 === 0){
                    num1 = buttons.keys(id);
                    console.log(num1)
                } else {
                    num2 = buttons.keys(id);
                }
                return
            }
            return num1
        }  
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
};

*/
