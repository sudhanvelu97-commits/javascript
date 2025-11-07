//first
let a = [1, 2, 3, 4, 5];
for (let i = 4; i >= 0; i--) {
  let temp = a[i];
  console.log(temp);
}
//second
let b = ["a", "b", "c"];
let c = b.reverse();
console.log(c);

//third using map to double the each term

let d = [1, 2, 3, 4];
d = d.map((item, index) => {
  return item * 2;
});
console.log(d);

// forth for loop for >10 in an array
let e = [23, 45, 1, 67, 0, 2];
let f = 0;
for (let i = 0; i <= e.length; i++) {
  if (e[i] > 10) {
    f++;
  }
}
console.log(f);

//fifth map to upper case
let g = ["one", "two", "three"];
g = g.map((word) => word.toUpperCase());
console.log(g);

// six for loop and if else for odd or even

let h = [23, 45, 76, 88, 90, 12, 34, 65];
for (let i = 0; i < h.length; i++) {
  if (h[i] / 2 === 0) {
    console.log("even number", h[i]);
  } else {
    console.log("odd number", h[i]);
  }
}
