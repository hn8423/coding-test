function coinChange(coins, amount) {
  let count = 0;

  for (let i = coins.length - 1; i >= 0; i--) {
    while (amount >= coins[i]) {
      amount -= coins[i];
      count++;
    }
  }

  if (amount > 0) return -1;
  return count;
}
