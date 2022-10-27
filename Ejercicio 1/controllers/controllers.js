const getFibo  =  async (req, res)  => {
    let fibonacciNumbers = []

let cantNumeros = req.query.number

if (!cantNumeros) {
    cantNumeros = 20
}
else if(isNaN(cantNumeros)) {
    res.status(500).send("Solo numeros")
    return -1
}


console.log(cantNumeros)
for (let i = 0; i < cantNumeros; i++) {
    if (i == 0 || i == 1){
        fibonacciNumbers[i] = 1
    }
    else(
        fibonacciNumbers[i] = fibonacciNumbers[i - 2] + fibonacciNumbers[i - 1]
    )
    
}
console.log(fibonacciNumbers)
await res.send(fibonacciNumbers)
}


module.exports = {
    getFibo,
}