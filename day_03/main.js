const main = async () => {
  const res = await solve();
  console.log(res);
}

const getInput = async () => {
  const resp = await fetch('https://adventofcode.com/2024/day/3/input', {
    headers: {
      cookie: process.env.AUTH_TOKEN
    }
  }
  );
  const text = await resp.text();
  return text;
}

const solve = async () => {
  const inputStr = await getInput();
  const reg = /mul\((\d+),(\d+)\)/g;

  // part 2
  let active = true;
  let sections = inputStr.split(/(do\(\)|don't\(\))/);
  let sum2 = 0;

  sections.forEach((section) => {
    if (section === "do()") {
      active = true;
    } else if (section === "don't()") {
      active = false;
    } else if (active) {
      let match;
      while ((match = reg.exec(section)) !== null) {
        console.log(match[1], match[2]);
        const x = parseInt(match[1], 10);
        const y = parseInt(match[2], 10);
        sum2 += x * y;
      }
    }
  });
  return sum2;

  // part 1
  const matches = inputStr.match(reg);
  let sum = 0;
  matches.forEach((entry) => {
    const comma = entry.indexOf(',');
    const start = entry.indexOf('(') + 1;
    const end = entry.indexOf(')');
    const firstNum = Number(entry.slice(start, comma));
    const lastNum = Number(entry.slice(comma + 1, end));
    sum += firstNum * lastNum;
  })
  return sum;
}

main();
