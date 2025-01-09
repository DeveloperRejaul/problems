let n = 10;
var arrayOfStr = Array(repeating: " ", count: (n+1)*2)

for i in 0...n {
    arrayOfStr[n-i] = "*"
    arrayOfStr[n+i] = "*"
    print(arrayOfStr.joined())
}