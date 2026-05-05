import https from 'https';

https.get('https://aurex.lk/games', (resp) => {
  let data = '';
  resp.on('data', (chunk) => { data += chunk; });
  resp.on('end', () => {
    const lines = data.split('\n');
    const plans = data.match(/\{[^}]*price[^}]*\}/gi);
    if(plans) console.log("PLANS:", plans);
    const contentText = data.replace(/<[^>]*>?/gm, '');
    console.log(contentText.substring(0, 1500));
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
