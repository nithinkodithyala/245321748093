import React, { useState } from 'react';
import './App.css';
const App = () => {
  const [oddNumbers, setOddNumbers] = useState([]);
  const [evenNumbers, setEvenNumbers] = useState([]);
  const [primeNumbers, setPrimeNumbers] = useState([]);
  const [randomNumbers, setRandomNumbers] = useState([]);
  const [error, setError] = useState(null);

  const genOdd = () => {
    const oddNumbersArray = [];
    let num = 1;
    while (oddNumbersArray.length < 10) {
      oddNumbersArray.push(num);
      num += 2;
    }
    setOddNumbers(oddNumbersArray);
    setError(null);
  };

  const genEven = () => {
    const evenNumbersArray = [];
    let num = 2;
    while (evenNumbersArray.length < 10) {
      evenNumbersArray.push(num);
      num += 2;
    }
    setEvenNumbers(evenNumbersArray);
    setError(null);
  };

  const genPrime = () => {
    const primeNumbersArray = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]; // Pre-defined prime numbers
    setPrimeNumbers(primeNumbersArray);
    setError(null);
  };

  const genRandom = () => {
    const randomNumbersArray = [];
    for (let i = 0; i < 10; i++) {
      randomNumbersArray.push(Math.floor(Math.random() * 100) + 1);
    }
    setRandomNumbers(randomNumbersArray);
    setError(null);
  };

  return (
    <div className="App">
      <h1>Number Generator</h1>
      <button onClick={genOdd}>Generate Odd Numbers</button>
      <button onClick={genEven}>Generate Even Numbers</button>
      <button onClick={genPrime}>Generate Prime Numbers</button>
      <button onClick={genRandom}>Generate Random Numbers</button>
      {error && <p>{error}</p>}
      {oddNumbers.length > 0 && (
        <div>
          <h2>Odd Numbers</h2>
          <ul>
            {oddNumbers.map((number, index) => (
              <li key={index}>{number}</li>
            ))}
          </ul>
        </div>
      )}
      {evenNumbers.length > 0 && (
        <div>
          <h2>Even Numbers</h2>
          <ul>
            {evenNumbers.map((number, index) => (
              <li key={index}>{number}</li>
            ))}
          </ul>
        </div>
      )}
      {primeNumbers.length > 0 && (
        <div>
          <h2>Prime Numbers</h2>
          <ul>
            {primeNumbers.map((number, index) => (
              <li key={index}>{number}</li>
            ))}
          </ul>
        </div>
      )}
      {randomNumbers.length > 0 && (
        <div>
          <h2>Random Numbers</h2>
          <ul>
            {randomNumbers.map((number, index) => (
              <li key={index}>{number}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
