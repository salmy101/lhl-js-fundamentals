function whatToDoForLunch(hungry, availableTime) {
  // Write your code here

  if (hungry === false) {
    return `I'm NOT hungry and I have ${availableTime} minutes for lunch. Lets just keep coding!`;
  } else if (availableTime < 20) {
    return "I'm hungry and I have less than 20 minutes for lunch. pick up a snack or grab something I have ready at home";
  } else if ((availableTime >= 20) && (availableTime < 30)) {
    return "I'm hungry and I have between 20 - 30 minutes for lunch. I deserve a break and should take time to cook a tasty meal.";
  } else if (availableTime >= 30)  {
    return "I'm hungry and I have between 30 minutes for lunch. his is an intense program after all and I should probably reconsider";
  }
}

console.log(whatToDoForLunch(true, 15));
console.log(whatToDoForLunch(false, 15));
console.log(whatToDoForLunch(true, 30));