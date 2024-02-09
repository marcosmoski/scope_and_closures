let globalVar = "Global variable"; 

function fooBar () { 
  let localFooVar = "Bar"

  console.log(`${globalVar} is defined inside of foo${localFooVar}`)
}

function fooBarTwo() {
  let localFooVar = "BarTwo"


  console.log(`${globalVar} is defined inside of foo${localFooVar} too.`)
}

function fooBarThree() {
  console.log(`Not possible to access ${localFooVar}`)
}

fooBar(); // shows the console with both variables 
fooBarTwo(); // shows the console with both variables
fooBarThree(); // runtime error, localFooVar is not defined inside of fooBarThree scope