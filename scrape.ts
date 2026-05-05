async function scrape() {
  const routes = ['games', 'cloud', 'dedicated', 'discord-bot', 'web-hosting'];
  for (const route of routes) {
    try {
      const res = await fetch(`https://aurex.lk/${route}`);
      const text = await res.text();
      // NextJS dumps its state in a script tag id="__NEXT_DATA__" or within self.__next_f
      const match = text.match(/self\.__next_f\.push\(\[1,"(.*?)\]\)/g);
      if (match) {
        console.log(`\n\n--- Route: ${route} ---\n`);
        const str = match.join('\n').substring(0, 500); // just checking
        console.log("matches found for " + route);
        
        // Let's just find anything with 'price' or 'USD' or 'LKR' in the raw html
        const prices = text.match(/.{0,30}\$\d+(\.\d{2})?.{0,30}|.{0,30}LKR \d+(,\d{3})?(\.\d{2})?.{0,30}/g);
        if (prices) {
            console.log("PRICES:", [...new Set(prices)]);
        }
      }
    } catch (e) {
      console.log(e);
    }
  }
}
scrape();
