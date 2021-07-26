const playBoard = function (){
    let _fields = [[,,],[,,],[,,]];
    let _rounds = [];
    let _radioChoice = document.getElementById("AI").checked;


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
 
                    } if( _radioChoice == true){
                        playBoard.AI();

                    } else {
                        document.getElementById(move).innerHTML = "X";
                        _fields[x][y] = "X";
                        _rounds.push("X");
                        playBoard.winner();

                        };
                    };    
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

        AI: function AIplayer (){
                var playerMin = [];
                var moves = [];
                var currentBoard = _fields;
                var treeDepth = 0;

            function findMove(){
                for (var i = 0; i < _fields.length; i++){
                    for (var j = 0; j < _fields[i].length; j++){    // calculating tree depth
                        if(_fields[i][j] === undefined) {
                            treeDepth += 1
                            };
                        };
                    };
                AI_min(currentBoard);
                };

            function AI_min(board){
                if(treeDepth !== 0){
                treeDepth--
                var freeFields = [];
                var newBoard = board;

                for (var i = 0; i < board.length; i++){
                    for (var j = 0; j < board[i].length; j++){
                        if(board[i][j] === undefined) {           //get all free field positions
                            freeFields.push(String(i)+String(j));
                            }
                        for (var k = 0; k < freeFields.length; k++){
                            newBoard[freeFields[k].charAt(0)][freeFields[k].charAt(1)] = "O";
                            depth == 0
                            AI_max(newBoard);                // run through all the free fields and mark them
                            heuristicValue(newBoard);
                            };
                        };    
                    }; 
                    
                if (moves.length != freeFields.length){     // record played moves
                    moves = freeFields;
                }    
                };
            };

            function AI_max(board){
                var freeFields = [];
                var newBoard = board;

                    for (var i = 0; i < board.length; i++){
                        for (var j = 0; j < board[i].length; j++){
                            if(board[i][j] === undefined) {
                                freeFields.push(String(i)+String(j));
                            };
                    for (var k = 0; k < freeFields.length; k++){
                        newBoard[freeFields[k].charAt(0)][freeFields[k].charAt(1)] = "X";
                        AI_min(newBoard, depth);
                        heuristicValue(newBoard);
                            }; 
                        };
                    };
                };

            function heuristicValue (board){
                    for (var i = 0; i < board.length; i++){
                        for (var j = 0; j < board[i].length; j++){
                            if(board[i][j] == board[i+1][j] && board[i+1][j] == board[i+2][j] && board[i][j] != undefined){
                                console.log(board[i][j]);
                                if(board[i][j] == "O"){
                                    playerMin = -10;
                                    } if(board[i][j] == "X"){
                                    playerMin = 10;
                                    }
                                } 
                            if(board[i][j] == board[i][j+1] && board[i][j+1] == board[i][j+2] && board[i][j] != undefined){
                                console.log(board[i][j]);
                                if(board[i][j] == "O"){
                                    playerMin = -10;
                                    } if(board[i][j] == "X"){
                                      playerMin = 10;
                                      }
                                }
                            if(board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != undefined){
                                console.log(board[i][j]);
                                if(board[0][2] == "O"){
                                    playerMin = -10;
                                    } if(board[i][j] == "X"){
                                      playerMin = 10;
                                      }
                                }
                            if(board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != undefined){ 
                                console.log(board[i][j]);
                                if(board[0][0] == "O"){
                                    playerMin = -10;
                                    } if(board[i][j] == "X"){
                                    playerMin = 10;
                                      }
                                    };
                            if(treeDepth === 0){
                                playerMin = 0;
                                    }        
                                };
    
                            };                     
                        };
            function playMove (){

            }            
                    };    
            }    
        }           
}();    




const display = function (){
    let fields = document.querySelectorAll(".field");
    fields.forEach(field => {
        field.addEventListener("click", f = (e) => {playBoard.moves(e.currentTarget.id)})
    })
}()