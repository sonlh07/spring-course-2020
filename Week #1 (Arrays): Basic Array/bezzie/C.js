function sumOdd(array) {
	var sum = 0;
	for (var i = 0; i < array.length; i++)
		if (array[i] % 2 !== 0) sum += array[i];
	return sum;
}
 
function findMax(array) {
	var max = array[0];
	for (var i = 1; i < array.length; i++)
		if (array[i] > max) max = array[i];
	return max;
}
 
function findMaxNeg(array) {
	var max = -Number.MAX_VALUE;
	for (var i = 0; i < array.length; i++)
		if (array[i] < 0 && array[i] > max) max = array[i];
	if (max === -Number.MAX_VALUE) return 0;
	return max;
}
 
function countMax(array) {
	var max = array[0], count = 1;
	for (var i = 1; i < array.length; i++) {
		if (max === array[i]) count++;
		if (array[i] > max) {
			max = array[i];
			count = 1
		}
	}
	return count;
}
 
function countEqualToAvg(array) {
	var sum = 0, count = 0;
	for (var i = 0; i < array.length; i++) sum += array[i];
	for (var j = 0; j < array.length; j++)
		if (array.length * array[j] >= sum) count++;
	return count;
}
 
var n = readline();
var array = readline().split(' ').map(x => parseInt(x))
print(sumOdd(array))
print(findMax(array))
print(findMaxNeg(array))
print(countMax(array))
print(countEqualToAvg(array))
