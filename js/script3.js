console.log('задание 3');
var arr = [],
    sum = 0;
arr[0] = 23;
for(i=1;i<35;i++){
	arr[i]=arr[i-1]+1;
}
console.log(arr);
for(i=0;i<arr.length;i++){
	sum = sum + arr[i];
}
console.log("Сумма элементов = " + sum);

