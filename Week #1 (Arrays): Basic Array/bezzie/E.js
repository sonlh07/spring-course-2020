var n = readline()
var array = readline().split(' ').map(x => parseInt(x))
var max = -Number.MAX_VALUE, second, third
for (var i = 0; i < array.length; i++) {
	if (array[i] > max) {
		third = second
		second = max
		max = array[i]
	} else if (array[i] > second) {
		third = second;
		second = array[i]
	} else if (array[i] > third) {
		third = array[i]
	}
}
print(max, second, third)
