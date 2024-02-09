function foo(param) { 
  console.log("Foo does something")
  return () => { 
    console.log(`That is a closure that reads the param from his parent ${param}`)
  }
}

const fn = foo("PARAMETER");

fn();