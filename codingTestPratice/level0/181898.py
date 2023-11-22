def solution(arr, idx):
    answer = 0
    if(idx == 0 and arr[0] ==1):
        return 0
    
    for i in range(idx, len(arr)):
        
        if arr[i] == 1:
            answer = i
            break
    if answer == 0:
        answer = -1
    return answer