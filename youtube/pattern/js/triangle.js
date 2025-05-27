const num = +process.argv[2];


for (let i = 0; i < num; i++) {
  const str = " ".repeat(num-i) + "*".repeat(i*2+1)
  console.log(str);
}