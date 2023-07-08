document.addEventListener('DOMContentLoaded', function() {
    const amount = document.getElementById('amount');
    console.log(amount, 'amount');
    const currency = document.getElementById('Currency'); // Corrected ID
    const convert = document.getElementById('convert');
    const result = document.getElementById('result');
    const API_KEY = "RBVjzndRvLuWsok+MykhTw==hFECyIdKKwXMuxv0";
    const apiurl = "https://api.api-ninjas.com/v1/exchangerate?pair=USD_";
    
    convert.addEventListener('click', () => {
      const amounttotal = amount.value;
      console.log('total', amounttotal);
      const currencytotal = currency.value;
      const url = apiurl + currencytotal;
      
      fetch(url, {
        headers: {
          'X-API-Key': API_KEY // Corrected header key name
        }
      })
        .then(response => response.json())
        .then(data => {
          const rate = data.exchange_rate;
          console.log('rate', rate);
          const resultprice = amounttotal * rate;
          console.log('result', resultprice);
          result.innerHTML = `${amounttotal} ${currencytotal} = ${resultprice.toFixed(2)} USD`;
        })
        .catch(error => {
          console.error('Request failed:', error);
          result.innerHTML = 'An error occurred. Please try again later.';
        });
    });
  });
  