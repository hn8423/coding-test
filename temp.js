function solution(today, terms, privacies) {
    var answer = [];
    let type = {};
    for(let i = 0; i < terms.length; i++){
        let [key, value] = terms[i].split(" ");
        type[key] = value;
    }
    for(let i = 0; i < privacies.length; i++){
      let [date, term] = privacies[i].split(" ");
      // Convert date string to timestamp
      let [year, month, day] = date.split('.').map(Number);
      
      // Calculate expiration date
      let expirationMonths = parseInt(type[term]);
      let expirationDate = new Date(year, month - 1 + expirationMonths, day);
      let expirationTimestamp = expirationDate.getTime();
      
      // Convert today to timestamp for comparison
      let [todayYear, todayMonth, todayDay] = today.split('.').map(Number);
      let todayTimestamp = new Date(todayYear, todayMonth - 1, todayDay).getTime();
      
      // Check if privacy has expired
      if (todayTimestamp >= expirationTimestamp) {
        answer.push(i + 1);
      }
    }
    return answer;
}


console.log(
    solution("2020.01.01",	["Z 3", "D 5"],	["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]
    )
)