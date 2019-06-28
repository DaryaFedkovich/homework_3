console.log("задание 9");
var arr = [5,9,21,,,9,78,,,,6];
var count = 0;
for(i=0;i<arr.length;i++){
	if(arr[i] == null){
		count++;
	}	
}
console.log('Количество нулевых элементов: ' +count);
