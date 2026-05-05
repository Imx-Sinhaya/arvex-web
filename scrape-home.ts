import https from 'https';

https.get('https://aurex.lk/', (resp) => {
  let data = '';
  resp.on('data', (chunk) => { data += chunk; });
  resp.on('end', () => {
    // try to match all prices or plans
    const matches = data.match(/LKR (\d+(?:,\d+)?(?:\.\d+)?)/g);
    if(matches) console.log("LKR MATCHES:", matches);
    const usd = data.match(/\$\d+(?:\.\d+)?/g);
    if(usd) console.log("USD MATCHES:", usd);
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
