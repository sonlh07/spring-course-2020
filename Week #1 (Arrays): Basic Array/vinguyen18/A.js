var a = readline();
var s1 = readline().split(' ');
var arr = new Array(parseInt(a));
var i;
for (i = 0; i<a; i++){
  arr[i] = parseInt(s1[i]);
}
var j=0;
var k= parseInt(a) - 1;
var tmp;
while (true) {
  tmp = arr[j];
  arr[j] = arr[k];
  arr[k] = tmp;
  j++;
  k--;
  if(j>k){
    break;
  }
}
print(" " + arr.join(" "));
