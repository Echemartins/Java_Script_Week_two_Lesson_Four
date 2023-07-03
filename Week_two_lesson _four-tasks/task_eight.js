function outerFunction() {
    let outVar = "Returned from outer function";
  
    function innerFunction() {
      console.log(outVar);
    }
  
    return innerFunction;
  }
  
  let returnedFunction = outerFunction();
  
  returnedFunction(); 