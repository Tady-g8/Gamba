function spinWheel() {
    const rouletteNumbers = Array.from({ length: 14 }, (_, i) => i); 
    const multiplier = 3.9176470588235294;

    const sequence = [];
    for (let i = 0; i < 30; i++) {
        const randomFactor = Math.random() * multiplier;
        const adjustedIndex = Math.floor(randomFactor) % rouletteNumbers.length;
        sequence.push(rouletteNumbers[adjustedIndex]);
    }
    
    const winningNumber = sequence[Math.floor(Math.random() * sequence.length)];

    return { sequence, winningNumber };
}

// example out, u want arr?
const result = spinWheel();

console.log('Spinning sequence:', result.sequence);
console.log('Winning number:', result.winningNumber);
