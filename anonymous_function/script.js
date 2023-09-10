let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let odd = function (n) {
  for (let i = 0; i < n.length; i++) {
    if (n[i] % 2 != 0) {
      console.log(n[i]);
    }
  }
};
odd(n);
