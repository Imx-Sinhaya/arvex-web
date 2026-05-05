import https from 'https';

https.get('https://aurex.lk/', (resp) => {
  let data = '';
  resp.on('data', (chunk) => { data += chunk; });
  resp.on('end', () => {
    // Try to find the exact order of elements in the nav bar.
    const navText = data.replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ').substring(0, 1000);
    console.log(navText);
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
