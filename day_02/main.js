import fs from 'node:fs';

const main = () => {
    const res = solve();
    console.log(res[0], res[1]);
}

const solve = () => {
    let stringInput = fs.readFileSync('input.txt').toString();
    let lines = stringInput.split('\n');
    const lineInts = lines.map((line) => {
        return line.split(' ').map(Number);
    });
    let part1Count = 0;
    let part2Count = 0;
    lineInts.forEach((line) => {
        if (checkNumber(line)) {
            part1Count++;
            part2Count++;
            return;
        }
        for (let i = 0; i < line.length; i++) {
        const partialLine = [...line];
        partialLine.splice(i, 1);
        if (checkNumber(partialLine)) {
            part2Count++;
            break;
        }
    }
    });

    return [part1Count, part2Count];
}

const checkNumber = (line) => {
    let sorted = [...line]
    sorted.sort((a, b) => a - b);
    let reversed = [...sorted];
    reversed.reverse();
    if (line.toString() !== sorted.toString() && line.toString() !== reversed.toString()) {
        return false;
    }
    const set = new Set(line);
    if (set.size !== line.length) {
        return false;
    }

    for (let i = 0; i < line.length - 1; i++) {
        const diff = line[i] - line[i + 1];
        if (Math.abs(diff) > 3) {
            return false;
        }
    }
    return true;
}

main();