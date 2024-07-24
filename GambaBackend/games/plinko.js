function plinkoGame(){
    const plinkoNumbers = Array.from({ length: 14 }, (_, i) => i);
    const multiplier = 3.9176470588235294;

    const sequence = [];
    for (let i = 0; i < 30; i++) {
        const randomFactor = Math.random() * multiplier;
        const adjustedIndex = Math.floor(randomFactor) % plinkoNumbers.length;
        sequence.push(plinkoNumbers[adjustedIndex]);
    }

    const results = sequence.map(num => (num >= 7 ? 'R' : 'L'));
    return results;
}


const result = plinkoGame();

console.log('Plinko sequence:', result.results);
