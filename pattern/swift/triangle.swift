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
