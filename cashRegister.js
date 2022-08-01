function checkCashRegister(price, cash, cid) {
  let usd = {
    "ONE HUNDRED": 100,
    TWENTY: 20,
    TEN: 10,
    FIVE: 5,
    ONE: 1,
    QUARTER: 0.25,
    DIME: 0.1,
    NICKEL: 0.05,
    PENNY: 0.01,
  };
  let inv = [...cid];
  let myMoney = {};
  for (const i of inv) {
    myMoney[i[0]] = i[1];
  }
  let result = { status: "", change: [] };
  let change = cash - price;
  let sum = inv
    .reduce((finalSum, x) => {
      finalSum += x[1];
      return finalSum;
    }, 0)
    .toFixed(2);
  console.log(sum - change);
  if (sum - change < 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (sum - change > 0) {
    result["status"] = "OPEN";
  } else if (sum - change == 0) {
    return { status: "CLOSED", change: inv };
  }
  let tempChange = change;
  for (const x in usd) {
    if (tempChange > usd[x]) {
      let tempVal = Math.floor(tempChange / usd[x]) * usd[x];
      if (tempVal > myMoney[x]) {
        tempChange = (tempChange - myMoney[x]).toFixed(2);
        result["change"].push([x, myMoney[x]]);
        myMoney[x] = 0;
      } else {
        tempChange = (tempChange - tempVal).toFixed(2);
        myMoney[x] -= tempVal.toFixed(2);
        result["change"].push([x, tempVal]);
      }
    }
  }
  if (tempChange != 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  console.log(result);
  return result;
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
