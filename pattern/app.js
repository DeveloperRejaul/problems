(function main() {
  patten1(4)
})()


function patten1 (n) {
    for (let row = 0; row <= n; row++) {
        let str = "";
       for (let cul = 0; cul < n; cul++) {
            str +="*"
       }
       console.log(str);
    }
}