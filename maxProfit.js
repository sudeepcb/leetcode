var prices = [7,6,4,3,1];

console.log(maxProfit(prices));

function maxProfit(prices){

    console.log(prices);
    var maxProfit = 0;

    var currentMin = prices[0];

    for (let index = 1; index < prices.length; index++) {

        if(currentMin >  prices[index])
        {
            currentMin = prices[index];
        }

        maxProfit = Math.max(prices[index] - currentMin, maxProfit);
    }

    return maxProfit;
}

