async function nebulaCalculation(n) {
  if (n <= 1) {
      return 1;
  }
  return n * await nebulaCalculation(n - 1);
}

async function echoFibonacci(num) {
  if (num <= 1) {
      return num;
  }
  return await echoFibonacci(num - 1) + await echoFibonacci(num - 2);
}

async function generateCosmicData(length, min, max) {
  let data = [];
  for (let i = 0; i < length; i++) {
      data.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return data;
}

async function stellarCombine(arr1, arr2) {
  let combined = [];
  let i = 0, j = 0;
  while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
          combined.push(arr1[i]);
          i++;
      } else {
          combined.push(arr2[j]);
          j++;
      }
  }
  return combined.concat(arr1.slice(i), arr2.slice(j));
}

async function deepSpaceMaxString(arr) {
  let maxStr = '';
  arr.forEach(str => {
      if (str.length > maxStr.length) {
          maxStr = str;
      }
  });
  return maxStr;
}

async function wormholeCollapse(arr) {
  return arr.reduce((flat, item) => {
      return flat.concat(Array.isArray(item) ? wormholeCollapse(item) : item);
  }, []);
}

async function spaceTimeInvert(str) {
  return str.split(' ').reverse().join(' ');
}

function spaceDebounce(func, delay) {
  let timeout;
  return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

function lightSpeedThrottle(func, delay) {
  let lastExecutionTime = 0;
  return function(...args) {
      const currentTime = Date.now();
      if (currentTime - lastExecutionTime >= delay) {
          func.apply(this, args);
          lastExecutionTime = currentTime;
      }
  };
}

async function universalMatrixTotal(matrix) {
  let total = 0;
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
          total += matrix[i][j];
      }
  }
  return total;
}

async function quantumCloneData(obj) {
  return JSON.parse(JSON.stringify(obj));
}

async function fetchFromAPI(url) {
  try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('API fetch error:', error);
      return null;
  }
}

async function fetchWeatherInfo(city) {
  const apiKey = 'YOUR_API_KEY';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  try {
      const response = await fetch(url);
      const weatherData = await response.json();
      return weatherData;
  } catch (error) {
      console.error('Weather API error:', error);
      return null;
  }
}

async function fetchCryptoInfo() {
  const url = 'https://api.coingecko.com/api/v3/coins/bitcoin';
  try {
      const response = await fetch(url);
      const cryptoData = await response.json();
      return cryptoData;
  } catch (error) {
      console.error('Crypto API error:', error);
      return null;
  }
}

async function fetchGithubUserInfo(username) {
  const url = `https://api.github.com/users/${username}`;
  try {
      const response = await fetch(url);
      const githubData = await response.json();
      return githubData;
  } catch (error) {
      console.error('GitHub API error:', error);
      return null;
  }
}

async function fetchStockMarketInfo() {
  const url = 'https://api.twelvedata.com/time_series?symbol=AAPL&interval=1min&apikey=YOUR_API_KEY';
  try {
      const response = await fetch(url);
      const stockData = await response.json();
      return stockData;
  } catch (error) {
      console.error('Stock Market API error:', error);
      return null;
  }
}

async function runAllCalculations() {
  const factorialResult = await nebulaCalculation(6);
  console.log(`Nebula calculation of 6: ${factorialResult}`);

  const fibonacciResult = await echoFibonacci(10);
  console.log(`Echo Fibonacci of 10: ${fibonacciResult}`);

  const cosmicData = await generateCosmicData(8, 1, 100);
  console.log(`Generated cosmic data: ${cosmicData}`);

  const mergedArray = await stellarCombine([1, 3, 5], [2, 4, 6]);
  console.log(`Merged stellar arrays: ${mergedArray}`);

  const maxString = await deepSpaceMaxString(['apple', 'banana', 'kiwi']);
  console.log(`Max string from array: ${maxString}`);

  const collapsedArray = await wormholeCollapse([1, [2, 3], [4, [5, 6]]]);
  console.log(`Wormhole collapsed array: ${collapsedArray}`);

  const reversedString = await spaceTimeInvert('the quick brown fox');
  console.log(`Reversed string: ${reversedString}`);

  const debouncedFunction = spaceDebounce(() => console.log('Space debounced'), 1500);
  debouncedFunction();

  const throttledFunction = lightSpeedThrottle(() => console.log('Light speed throttled'), 1500);
  throttledFunction();
  throttledFunction();

  const matrixSum = await universalMatrixTotal([[1, 2], [3, 4]]);
  console.log(`Matrix total: ${matrixSum}`);

  const clonedObject = await quantumCloneData({ name: 'Alice', age: 25 });
  console.log(`Cloned object: ${JSON.stringify(clonedObject)}`);

  const apiData = await fetchFromAPI('https://jsonplaceholder.typicode.com/posts');
  console.log(`Fetched API data: ${JSON.stringify(apiData)}`);

  const weatherData = await fetchWeatherInfo('London');
  console.log(`Weather info for London: ${JSON.stringify(weatherData)}`);

  const cryptoData = await fetchCryptoInfo();
  console.log(`Crypto data: ${JSON.stringify(cryptoData)}`);

  const githubData = await fetchGithubUserInfo('octocat');
  console.log(`GitHub user data: ${JSON.stringify(githubData)}`);

  const stockData = await fetchStockMarketInfo();
  console.log(`Stock market data: ${JSON.stringify(stockData)}`);
}
