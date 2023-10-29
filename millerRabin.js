const divideTwo = (n, k) => {
    if (n % 2 === 0) {
        return divideTwo(n / 2, k + 1)
    }
    return [k, n]
}

const selectRand = (n) => {
    return Math.floor(Math.random() * n) + 1;
}


const millerRabin = (n) => {
    const [k, q] = divideTwo(n - 1, 0)
    const a = selectRand(n - 1)

    if (Math.pow(a, q) % n === 1) {
        return 'Inconclusive'
    }

    for (let j = 0; j <= k - 1; j++) {
        if (Math.pow(a, q * Math.pow(2, j)) % n === n - 1) {
            return 'Inconclusive'
        }
    }

    return 'Composite'
}

const n = 97
console.log(`${n} is`, millerRabin(n))

