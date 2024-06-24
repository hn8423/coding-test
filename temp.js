function solution(my_string, indices) {
    var answer = '';
    for(let i =0; i < my_string.length; i++){
        let char = my_string[i]
        if(indices.includes(i)){
            continue
        }else{
        answer += char   
        }
        
    }
    return answer;
}

// solution("apporoograpemmemprs",	[1, 16, 6, 15, 0, 10, 11, 3])