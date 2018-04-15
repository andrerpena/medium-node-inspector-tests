import express from 'express'

const app = express()

function getFibonacciSequence (n: number): number[] {
  if (n < 2) {
    return [1]
  }
  if (n < 3) {
    return [1, 1]
  }
  const a = getFibonacciSequence(n - 1)
  a.push(a[n - 2] + a[n - 3])
  return a
}

function isInteger (value: any) {
  return !isNaN(value) && parseInt(Number(value) as any) == value && !isNaN(parseInt(value, 10))
}

app.get('/:n?', (req, res) => {
  const n = req.params.n
  if (n === undefined || !isInteger(n)) {
    res.send('Please pass an integer number in the path to calculate the Fibonacci sequence. Examples: /6 or /10')
  } else {
    const fibSequence = getFibonacciSequence(n as number)
    res.send(fibSequence.join(' '))
  }
})

app.listen(3000, () => console.log('Fibonacci app listening on port 3000!'))
