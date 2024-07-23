function solution(board, moves) {

    function pickup(number){
        for(let i = 0; i < board.length; i++){
            if(board[i][number-1] !== 0){
                let pick = board[i][number-1]
                board[i][number-1] = 0
                return pick
            }
        }
    }
    var answer = 0;
    let stack = []
    for(let i =0; i < moves.length; i++){
        let cur = pickup(moves[i])
        
        if(!cur){
            continue
        }
        if(cur === stack[stack.length -1] ){
            stack.pop()                
                answer += 2
            }else{
                stack.push(cur)
            }
        
    }
    return answer;

}



console.log(solution( [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]],	[1,5,3,5,1,2,1,4]))