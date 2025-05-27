import Foundation

let n = Int(CommandLine.arguments[1]) ?? 0;


// way 01 : using array
var arrayOfStr = Array(repeating: " ", count: (n+1)*2)

for i in 0...n {
    arrayOfStr[n-i] = "*"
    arrayOfStr[n+i] = "*"
    print(arrayOfStr.joined())
}


// way 02 : using string
for index in 0...n {
 let str =  String(repeating: " ", count: n-index) + String(repeating: "*", count: (index*2+1)) +  String(repeating: " ", count: n-index);
  print(str);
}