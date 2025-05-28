(function main() {
  patten12(5)
})()


function patten12 (n) {
    const totalRow = n*2;
   for (let row = 0; row < totalRow; row++) {
      let str ="";
      const space = row >= n ? totalRow - row-1 : row
      const start= row >= n ? row-n+1 : n-row
      
      for (let s = 0; s < space; s++) {
        str+=" "
      }
       for (let s = 0; s < start; s++) {
        str+="* "
      }
      console.log(str);
   }
}

function patten11 (n) {
    for (let row = 0; row <= n; row++) {
      let str = "";
      for (let s = 0; s < row; s++) {
        str+=" "
      }
      for (let col = 0; col < n-row; col++) {
        str +="* ";
      }
      console.log(str);
    }
}


function patten10 (n) {
    for (let row = 0; row <= n; row++) {
      let str = "";
      for (let s = 0; s < (n-row); s++) {
        str+=" "
      }
      for (let col = 0; col < row; col++) {
        str +="* ";
      }
      console.log(str);
    }
}


function patten9 (n) {
    for (let row = 0; row <= n; row++) {
      let str = "";
      for (let s = 0; s < row; s++) {
        str+=" "
      }
      for (let col = 0; col < (n-row)*2-1; col++) {
        str +="*";
      }
      console.log(str);
    }
}

function patten8 (n) {
    for (let row = 0; row <= n; row++) {
      let str = "";
      for (let s = 0; s < n-row; s++) {
        str+=" "
      }
      for (let col = 1; col <= (row*2)-1; col++) {
        str +="*";
      }
      console.log(str);
    }
}
function patten7 (n) {
    for (let row = 0; row <= n; row++) {
      let str = "";
      for (let s = 0; s < row; s++) {
        str+=" "
      }
      for (let col = 1; col <= n-row; col++) {
        str +="*";
      }
      console.log(str);
    }
}


function patten6 (n) {
    for (let row = 0; row <= n; row++) {
      let str = "";
      for (let s = 0; s < (n-row); s++) {
        str+=" "
      }
      for (let col = 1; col <= row; col++) {
        str +="*";
      }
      console.log(str);
    }
}

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
