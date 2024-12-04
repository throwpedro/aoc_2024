const main = async () => {
    const res = await solve();
    console.log(res);
}

const getInput = async () => {
  const resp = await fetch('https://adventofcode.com/2024/day/4/input', {
    headers: {
      cookie: process.env.AUTH_TOKEN
    }
  });
  const text = await resp.text();
  return text;
}

const solve = async () => {
  const input = await getInput();
  const rows = input.split('\n');
  console.log(rows.length);
}

await main();