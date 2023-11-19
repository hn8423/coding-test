def solution(my_strings, parts):
    answer = ''
    for i in range(len(my_strings)):
        sliced_string = my_strings[i][parts[i][0]:parts[i][1]+1]
        
        answer = answer + sliced_string
    
    return answer