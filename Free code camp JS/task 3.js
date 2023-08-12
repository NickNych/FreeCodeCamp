// 
const s = [5, 6, 7];
s = [1, 2, 3];
s[2] = 45;
console.log(s);
// 
// s = [1, 2, 3] will result in an error. After commenting out that line, the console.log will display the value [5, 6, 45].

// As you can see, you can mutate the object [5, 6, 7] itself and the variable s will still point to the altered array [5, 6, 45]. Like all arrays, the array elements in s are mutable, but because const was used, you cannot use the variable identifier s to point to a different array using the assignment operator.

// An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignments.

const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;

  // Only change code above this line
}
editInPlace();