function compareTriplets(alice, bob) {
  let aliceScore = 0;
  let bobScore = 0
  for (let index = 0; index < alice.length; index++) {
    if (alice[index] > bob[index]) {
      aliceScore++;
    } else if (bob[index] > alice[index]) {
      bobScore++;
    }
  }
  return [aliceScore, bobScore];
}
console.log(compareTriplets([5, 6, 7], [3, 6, 10]));