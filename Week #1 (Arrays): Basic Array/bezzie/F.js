var n = readline()
var a = readline().split(' ').map(x => parseInt(x))
var b = readline().split(' ').map(x => parseInt(x))
var sum = 0
a.map((x, i) => sum += Math.abs(x - b[i]))
print(sum)
