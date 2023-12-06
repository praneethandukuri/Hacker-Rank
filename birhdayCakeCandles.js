const candles = [3, 2, 3, 1, 3];
const birthdayCakeCandles = function (candles) {
  const max = Math.max(...candles);
  const maxCandles = candles.filter(candle => candle === max);
  return maxCandles.length;
}
console.log(birthdayCakeCandles(candles));