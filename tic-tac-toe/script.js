const playBoard = function (){
    var _fields=[{}];

    return {
        moves: function (pMove, pSymbol) {
            _fields[0][pMove] = pSymbol;
            console.log(_fields);
        }
    }
}();



const Player = (move, symbol) => {
    const playerMove = () => move;
    const playerSymbol = () => symbol;
    console.log(move, symbol)
    playBoard.moves(move, symbol);
};    

const display = function (){
    let fields = document.querySelectorAll(".field");
    fields.forEach(field => {
        field.addEventListener("click", f = (e) => {Player(e.currentTarget.id, "x");
    e.currentTarget.innerHTML = "X"})
    })
}();

/* 
controlFlow
    turns
    double set of field 
    win/lose 
 */