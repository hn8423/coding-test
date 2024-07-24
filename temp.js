function solution(numbers, hand) {
    var answer = '';
    let arr = {
        1: [0,0],
        2: [0,1],
        3: [0,2],
        4: [1,0],
        5: [1,1],
        6: [1,2],
        7: [2,0],
        8: [2,1],
        9: [2,2],
        '*': [3,0],
        '0': [3,1],
        '#': [3,2],
    }
    let curL =  '*'
    let curR =  '#'
    let check = Array.from(Array(3), () => Array(3).fill(0));
    for(let i = 0; i < numbers.length; i++){
        let cur = numbers[i]
        if(cur === 1 || cur === 4 || cur === 7){
            curL = cur
            answer += 'L'
        }else if(cur === 3 || cur === 6 || cur === 9){
            curR = cur
            answer += 'R'
        }else{
            let curLDis = Math.abs(arr[cur][0] - arr[curL][0]) + Math.abs(arr[cur][1] - arr[curL][1])
            let curRDis = Math.abs(arr[cur][0] - arr[curR][0]) + Math.abs(arr[cur][1] - arr[curR][1])
            if(curLDis < curRDis){
                curL = cur
                answer += 'L'
            }else if(curLDis > curRDis){
                curR = cur
                answer += 'R'
            }else{
                if(hand === 'left'){
                    curL = cur
                    answer += 'L'
                }else{
                    curR = cur
                    answer += 'R'
                }
            }
        }
    }

    return answer;
}



//console.log(solution( [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]	,"right"))