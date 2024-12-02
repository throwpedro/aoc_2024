import fs from 'node:fs';

const main = () => {
    const res = solve();
    console.log(res);
}

const solve = () => {
    let stringInput = fs.readFileSync('input.txt').toString();
    let lines = stringInput.split('\n');
    const lineInts = lines.map((line) => {
        return line.split(' ').map(Number);
    });
    let count = 0;
    lineInts.forEach((line) => {
        if (isIncreasing(line) || isDecreasing(line)) {
            count++;
        }
    });
    return count;
}

const isIncreasing = (line) => {
    for (let i = 0; i < line.length; i++) {
        if (line[i] >= line[i + 1]) {
            return false;
        }
        if (line[i + 1] - line[i] > 3) {
            return false;
        }
    }
    return true;
}

const isDecreasing = (line) => {
    for (let i = 0; i < line.length; i++) {
        if (line[i] <= line[i + 1]) {
            return false
        }
        if (line[i] - line[i + 1] > 3) {
            return false;
        }
    }
    return true;
}

main();