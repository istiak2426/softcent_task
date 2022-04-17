const fetch = require('node-fetch');

module.exports.getCurrency = async (req, res) => {
  // Add code like USD, EUR, GBR
  const code = req.params.id;

 

  if (code === "USD" || code === "EUR") {
    const codeUrl = code.toLowerCase();

    // getting current price

    const currentUrl = `https://api.coindesk.com/v1/bpi/currentprice/${codeUrl}.json`;
    const fetch_current = await fetch(currentUrl);
    const json_current = await fetch_current.json();
    const obj_current = await json_current.bpi[code].rate;

    // getting minimum and maximum value from last 30 days

    const historyUrl = `https://api.coindesk.com/v1/bpi/historical/close.json?start=2022-03-16&end=2022-04-16&currency=${codeUrl}`;
    const fetch_history = await fetch(historyUrl);
    const json_history = await fetch_history.json();
    const obj_history = await json_history.bpi;
    let arr = Object.values(obj_history);
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    return res.status(200).send({
      currentValue: obj_current,
      "maxValue in las 30 days": max,
      "minValue in last 30 days": min,
    });
  } 
  
  // If the currency code provided is not supported by the API, this message should inform the user.

else {
    return res.status(500).send(
      `Sorry, your requested currency ${code} is not supported or is invalid`
    );
  }
};
