export async function swapCoins(cryptoCoin1, cryptoCoin2, amount) {
  // Phele wale coin ka price
  const tickerRes = await fetch(
    `https://api.binance.com/api/v3/ticker/24hr?symbol=${cryptoCoin1}`
  );
  const tickerData = await tickerRes.json();

  const price = parseFloat(tickerData.lastPrice);
  console.log(price, tickerData);

  // dusre wale coin ka price
  const tickerRes2 = await fetch(
    `https://api.binance.com/api/v3/ticker/24hr?symbol=${cryptoCoin2}`
  );
  const tickerData2 = await tickerRes2.json();
  const price2 = parseFloat(tickerData2.lastPrice);
  console.log(price2, tickerData2);
  // kitna swap karna hai bc
  const amountToSwap = amount;
  const amountToSwapInSecondCoin = (amountToSwap * price) / price2;
  return {
    amountToSwap,
    amountToSwapInSecondCoin,
    price,
    price2,
  };
}
