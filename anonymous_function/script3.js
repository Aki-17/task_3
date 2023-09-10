let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let prime = function (n) {
    let sortArray = [];
    n.forEach((num) => {
    let factor=0
    for (let i = 0; i < n; i++) {
      if (n%i === 0) {
          factor++
      }
    }
}if (factor === 2) {
      sortArray.push(n)
  }
});
console.log(sortArray);
