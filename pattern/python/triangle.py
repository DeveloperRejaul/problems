import  sys;
n = int(sys.argv[1])


# using string
for i in  range(n) : 
    print((" " * (n - i)) + ("*" * (i * 2 + 1)))


# using array 
list = [" "] * (n*2)
for i in range(n):
    list[n-i] = "*"
    list[n+i] = "*"
    print("".join(list))

