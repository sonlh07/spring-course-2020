var n = readline()
var array = readline().split(' ')
var vector = []
for (var i = 0; i < array.length - 1; i++) {
  for (var j = i + 1; j < array.length; j++) {
    vector.push(array[i] * array[j])
  }
}
var max = vector[0]
for (var i = 1; i < vector.length; i++)
  if (vector[i] > max) max = vector[i]
print(max)
