let _fields = [[,,],[,,],[,,]];
let decisionTree = [];
let freeFields = [];
let treeDepth = 0;

function moves(){
    for (var i = 0; i < _fields.length; i++){
        for (var j = 0; j < _fields[i].length; j++){    // calculating tree depth
            if(_fields[i][j] === undefined) {
                treeDepth += 1;
                };
            };
        };

    for (var i = 0; i < board.length; i++){
        for (var j = 0; j < board[i].length; j++){
            if(board[i][j] === undefined) {           //get all free field positions of board
                freeFields.push(String(i)+String(j));
                }
            };    
        }; 

    for (var i = 0; i < freeFields.length; i++){    // create factory objects
        decisionTree[i] = minMax(freeFields[i], _fields, decisionTree, 0, 0, i);
    };                
};

function minMax(playableField, mBoard, depth, countMoves, score, arrayDecisTree){
    var nBoard = mBoard[playableField.charAt(0)][playableField.charAt(1)] = "O";
    minMax.min();

    return { 
            min: function (){
                    for (var i = 0; i < nBoard.length; i++){
                        for (var j = 0; j < nBoard[i].length; j++){
                            if(nBoard[i][j] === undefined){
                                nBoard[i][j] = "X";
                                depth--
                                countMoves++
                                minMax.evaluate(nBoard, countMoves, depth, arrayDecisTree);
                            }
                        }
                    }
                },

            max: function (){
                for (var i = 0; i < nBoard.length; i++){
                    for (var j = 0; j < nBoard[i].length; j++){
                        if(nBoard[i][j] === undefined){
                            nBoard[i][j] = "O";
                            depth--
                            countMoves++
                            minMax.evaluate(nBoard, countMoves, depth, arrayDecisTree);
                        }
                    }
                }
            },
            
            evaluate: function (newBoard, movesCount, depthCount, arr){
                for (var i = 0; i < newBoard.length; i++){
                    for (var j = 0; j < newBoard[i].length; j++){   
                        if(newBoard[i][j] == newBoard[i+1][j] && newBoard[i+1][j] == newBoard[i+2][j] && newBoard[i][j] != undefined){
                            console.log(newBoard[i][j]);
                            if(newBoard[i][j] == "X"){          // vertical win
                            decicionTree[arr][4] = -10;
                            } if(newBoard[i][j] == "O"){
                            score = 10;
                            }
                        } 
                        if(newBoard[i][j] == newBoard[i][j+1] && newBoard[i][j+1] == newBoard[i][j+2] && newBoard[i][j] != undefined){
                            console.log(newBoard[i][j]);
                            if(newBoard[i][j] == "X"){          // horizontal win
                            score = -10;
                            } if(newBoard[i][j] == "O"){
                            score = 10;
                            }
                        }
                        if(newBoard[0][2] == newBoard[1][1] && newBoard[1][1] == newBoard[2][0] && newBoard[0][2] != undefined){
                            console.log(newBoard[i][j]);
                            if(newBoard[0][2] == "X"){          // diagonal win
                            score = -10;
                            } if(newBoard[i][j] == "O"){
                            score = 10;
                            }
                        }
                        if(newBoard[0][0] == newBoard[1][1] && newBoard[1][1] == newBoard[2][2] && newBoard[0][0] != undefined){ 
                            console.log(newBoard[i][j]);
                            if(newBoard[0][0] == "X"){          // diagonal win
                            score = -10;
                            } if(newBoard[i][j] == "O"){
                            score = 10;
                            }
                        }
                        else {
                            depthCount === 0 ? score = 0 : movesCount%2 === 0 ?
                            playBoard.min(newBoard) : playBoard.max(newBoard)
                            }
                    }
                }
            }
    };                              
};

function playMove(){
    // determine min(value, step count)>max(value, step count)
    // pass on move to board
}
