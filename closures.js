function foo(param) { 
  return () => { 
    console.log(`That is a closure that reads the param from his parent ${param}`)
  }
}

const fn = foo("PARAMETER");

fn();