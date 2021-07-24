const playBoard = function (){
    const _fields = [[,,],[,,],[,,]];
    var _rounds = [];

    return {
        moves: function (move) {
                let x = move.charAt(0)
                let y = move.charAt(1)
                let lastItem = Object.keys(_rounds).length - 1;
                                
                if (_fields[x][y] == undefined){
                    if(Object.values(_rounds)[lastItem] == "X" || Object.values(_rounds)[lastItem] == []){
                        document.getElementById(move).innerHTML = "O";
                        _fields[x][y] = "O";
                        _rounds.push("O");
                        playBoard.winner();                    

                    } else {
                        document.getElementById(move).innerHTML = "X";
                        _fields[x][y] = "X";
                        _rounds.push("X");
                        playBoard.winner();

                    }
                }    
            },
        
        winner: function () {
                    for (var i = 0; i < _fields.length; i++){
                        for (var j = 0; j < _fields[i].length; j++){
                            if(_fields[i][j] == _fields[i+1][j] && _fields[i+1][j] == _fields[i+2][j] && _fields[i][j] != undefined){
                                console.log("The winner is: "+_fields[i][j])
                            } 
                            if(_fields[i][j] == _fields[i][j+1] && _fields[i][j+1] == _fields[i][j+2] && _fields[i][j] != undefined){
                                console.log("The winner is: "+_fields[i][j])
                            }
                            if(_fields[0][2] == _fields[1][1] && _fields[1][1] == _fields[2][0] && _fields[0][2] != undefined){
                                console.log("The winner is: "+_fields[0][2])
                            }
                            if(_fields[0][0] == _fields[1][1] && _fields[1][1] == _fields[2][2] && _fields[0][0] != undefined){ 
                                console.log("The winner is: "+_fields[0][0])
                            }
                        }
                    }              
            },

        AI: function AIplayer () {

                var minDecisionTree = [];
                var maxDecisionTree = [];
                var playerMin = [];
                var playerMax = [];
                var currentBoard = _fields;
                var treeDepth = 0
                for (var i = 0; i < _fields.length; i++){
                    for (var j = 0; j < _fields[i].length; j++){
                        if(_fields[i][j] === undefined) {
                            treeDepth++
                        }}}




            
            function AI_min(board, depth){
                if(depth !== 0){
                depth--
                var freeFields = [];
                var newBoard = _fields;

                for (var i = 0; i < _fields.length; i++){
                    for (var j = 0; j < _fields[i].length; j++){
                        if(_fields[i][j] === undefined) {
                            freeFields.push(String(i)+String(j));
                    }
                for (var k = 0; k < freeFields.length; k++){
                    newBoard[freeFields[k].charAt(0)][freeFields[k].charAt(1)] = "X";
                    AI_max(newBoard, depth);
                    heuristicValue(newBoard);
                }
                
            };    
            }    

            function AI_max(board, depth){
                if(depth !== 0){
                depth--
                var freeFields = [];
                var newBoard = _fields;

                for (var i = 0; i < _fields.length; i++){
                    for (var j = 0; j < _fields[i].length; j++){
                        if(_fields[i][j] === undefined) {
                            freeFields.push(String(i)+String(j));
                    }
                for (var k = 0; k < freeFields.length; k++){
                    newBoard[freeFields[k].charAt(0)][freeFields[k].charAt(1)] = "O";
                    AI_min(newBoard, depth);
                    heuristicValue(newBoard)
                } 
                
            };
            };

            function heuristicValue (board){
                    for (var i = 0; i < board.length; i++){
                        for (var j = 0; j < board[i].length; j++){
                            if(board[i][j] == board[i+1][j] && board[i+1][j] == board[i+2][j] && board[i][j] != undefined){
                                console.log(board[i][j]);
                                if(board[i][j] == "X"){
                                    playerMin = -10
                                }
                            } 
                            if(board[i][j] == board[i][j+1] && board[i][j+1] == board[i][j+2] && board[i][j] != undefined){
                                console.log(board[i][j]);
                                if(board[i][j] == "X"){
                                    playerMin = -10
                                }
                            }
                            if(board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != undefined){
                                console.log(board[i][j]);
                                if(board[0][2] == "X"){
                                    playerMin = -10
                                }
                            }
                            if(board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != undefined){ 
                                console.log(board[i][j]);
                                if(board[0][0] == "X"){
                                    playerMin = -10
                                }
                }
            }
            function terminalNode (){

            }
           
        },


        } 
}();    

const display = function (){
    let fields = document.querySelectorAll(".field");
    fields.forEach(field => {
        field.addEventListener("click", f = (e) => {playBoard.moves(e.currentTarget.id)})
    })
}();