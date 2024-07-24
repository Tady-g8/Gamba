const ARR_SIZE = 14;
function spinWheel() {
    const rouletteNumbers = Array.from({ length: ARR_SIZE }, (_, i) => i); // 0 to 13
    const multiplier = 3.9176470588235294;

    // apply weights to all numbers, giving 7 a low weight because we want 7 = 1% -> green (13x multiplier)
    const weights = rouletteNumbers.map(num => (num === 7 ? 1 : 99 / (ARR_SIZE-1)));
    
    const sequence = [];
    for (let i = 0; i < 30; i++) {
        const weightedRandomIndex = getWeightedRandomIndex(weights);
        sequence.push(rouletteNumbers[weightedRandomIndex]);
    }
    
    const winningNumber = sequence[Math.floor(Math.random() * sequence.length)];
    return { sequence, winningNumber };
}

function getWeightedRandomIndex(weights) {
    const totalWeight = weights.reduce((acc, weight) => acc + weight, 0);
    const randomNum = Math.random() * totalWeight;
    let cumulativeWeight = 0;

    for (let i = 0; i < weights.length; i++) {
        cumulativeWeight += weights[i];
        if (randomNum < cumulativeWeight) {
            return i;
        }
    }
}

// temp, for testing
const result = spinWheel();

console.log('Spinning sequence:', result.sequence);
console.log('Winning number:', result.winningNumber);
