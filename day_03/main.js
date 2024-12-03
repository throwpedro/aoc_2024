const main = async () => {
    const res = await solve();
    // console.log(res);
}

const solve = async () => {
    const file = Bun.file("input.txt")
    const inputStr = await file.text();
    const reg = /mul\(\d{1,3},\d{1,3}\)/g;
    const regdont = /don\'t/g;
    const regdo = /do/;
    // first pass find chunks of dos and don'ts
    // const arr = inputStr.split(/[dont't, do]+/)
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