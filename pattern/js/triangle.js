const n = +process.argv[2]

// way 01
console.time()
const star = new Array(n).fill(' ');
for (let index = 0; index < n; index++) {
    star[n-index] = "*"
    star[n+index] = "*"
    console.log(star.join(""));
}
console.timeEnd()

// way 02
console.time()
for (let i = 0; i < n; i++) {
    const str = " ".repeat(n-i) + "*".repeat(i*2+1) + " ".repeat(n-i)
    console.log(str);
}
console.timeEnd()

