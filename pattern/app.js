(function main() {
  patten5(5)
})()

function patten5 (n) {
    const totalRows = n * 2 - 1;
    for (let row = 0; row <= totalRows; row++) {
      let str = "";
      const totalCols = row <= n ? row: totalRows - row+1;
      for (let col = 1; col <= totalCols; col++) {
        str +="*";
      }
      console.log(str);
    }
}

function patten4 (n) {
    for (let row = 1; row <= n; row++) {
      let str = "";
      for (let cul = 1; cul <= row; cul++) {
        str += cul.toString()+" ";
      }
      console.log(str);
    }
}

function patten3 (n) {
    for (let row = 0; row < n; row++) {
      let str = "";
      for (let cul = 0; cul < (n-row); cul++) {
        str +="*"
      }
      console.log(str);
    }
}

function patten2 (n) {
    for (let row = 0; row <= n; row++) {
       let str = "";
       for (let cul = 0; cul < row; cul++) {
            str +="*"
        }
        console.log(str);
    }
}

function patten1 (n) {
    for (let row = 0; row <= n; row++) {
        let str = "";
       for (let cul = 0; cul < n; cul++) {
            str +="*"
       }
       console.log(str);
    }
}