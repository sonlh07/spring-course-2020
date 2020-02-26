var n = readline()
var a = readline().split(' ')
for (var i = 0; i < n / 2; i++) {
  var tmp = a[i]
  a[i] = a[n - i - 1]
  a[n - i - 1] = tmp
}
print(a.join(" "))
