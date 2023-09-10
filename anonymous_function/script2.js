let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let sum = 0;
let add = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log(sum);
};
add(arr);
