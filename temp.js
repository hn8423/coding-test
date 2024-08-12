function solution(bandage, health, attacks) {
  let maxTime = Math.max(...attacks.map(attack => attack[0]));
  let currentHealth = health;
  let currentTime = 0;
  let combo = 0;
  var answer = 0;
  for (let i = 0; i <= maxTime; i++) {
    if (attacks.some(attack => attack[0] === i)) {
      currentHealth -= attacks.find(attack => attack[0] === i)[1];
      combo = 0;
      if (currentHealth <= 0) {
        return -1;
      }
    }else{

      if (combo % bandage[0] === 0 && combo !== 0 && currentHealth < health) {
        currentHealth += bandage[2];
        combo++;
      }else if(combo % bandage[0] !== 0  && currentHealth < health){
        currentHealth += bandage[1];
        combo++;
      }
    }

    currentTime++;
  }
  return currentHealth;
}


console.log(
    solution(
      [5, 1, 5],	30,	[[2, 10], [9, 15], [10, 5], [11, 5]]
    )
)