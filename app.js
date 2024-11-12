// Deklaratsiya
function greeting(name) {
    return "Assalomu alaykum " + name;
  }
  
  // Expression
  const greeting = function(name) {
    return "Assalomu alaykum " + name;
  };
  
  // Arrow
  const greeting = (name) => "Assalomu alaykum" + name;


  // Deklaratsiya
  function range(a, b) {
    let arr = [];
    for (let i = a; i <= b; i++) {
      arr.push(i);
    }
    return arr;
  }
  
  // Expression
  const range = function(a, b) {
    let arr = [];
    for (let i = a; i <= b; i++) {
      arr.push(i);
    }
    return arr;
  };
  
  // Arrow
  const range = (a, b) => {
    let arr = [];
    for (let i = a; i <= b; i++) {
      arr.push(i);
    }
    return arr;
  };
  
  
  // Deklaratsiya
  function toNumber(bool) {
    return bool ? 1 : 0;
  }
  
  // Expression
  const toNumber = function(bool) {
    return bool ? 1 : 0;
  };
  
  // Arrow
  const toNumber = (bool) => (bool ? 1 : 0);
  
  
  // Deklaratsiya
  function firstLetter(name) {
    return name.charAt(0);
  }
  
  // Expression
  const firstLetter = function(name) {
    return name.charAt(0);
  };
  
  // Arrow
  const firstLetter = (name) => name.charAt(0);
  
  
  // Deklaratsiya
  function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  
  // Expression
  const sum = function(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  };
  
  // Arrow
  const sum = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0);