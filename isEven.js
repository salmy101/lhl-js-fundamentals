const isEven = function(num){
  return num % 2 === 0;
} 


// const tenIsEven = isEven(10)
// console.log(tenIsEven)

// const fiveIsEven = isEven(5)
// console.log(fiveIsEven)

//refactor We can simplify our above code a little by learning that we don't need to set our function return values to new variables

console.log(isEven(10))
console.log(isEven(11))