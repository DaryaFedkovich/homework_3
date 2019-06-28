console.log('задание 10');
/*var arr=[48,9,0,4,21,2,1,0,8,84,76,8,4,13,2],
	arr2 = [1,8,0,13,76,8,7,0,22,0,2,3,2];
var null1, null2, null3, null4, sum1=0, sum2=0;
for(i=0;i<arr.length;i++){
	if(arr[i] == 0){
		null1=i;
		break;
	}
}
for(i=arr.length;i>null1;i--){
	if(arr[i] == 0){
		null2=i;
		break;
	}
}
console.log(null1);
console.log(null2);
for(i=null1+1;i<null2;i++){
	sum1 +=arr[i];
}
console.log("Сумма = " +sum1);

for(j=0;j<arr2.length;j++){
	if(arr2[j] == 0){
		null3=j;
		break;
	}
}
for(j=arr2.length;j>null3;j--){
	if(arr2[j] == 0){
		null4=j;
		break;
	}
}
console.log(null3);
console.log(null4);
for(j=null3+1;j<null4;j++){
	sum2 +=arr2[j];
}
console.log("Сумма = " +sum2);*/
var arr=[];
while(true){
var a = prompt("введите число");
if(a === '' || a === null){
break;
}
	arr.push(Number(a));
}
console.log(arr);
var null_1,null_2, sum = 0;

for(i=0; i<arr.length;i++){
	if(arr[i] == 0){
		null_1 = i;
		break;
	}
}
for(i=arr.length; i>null_1; i--){
	if(arr[i] == 0){
		null_2 = i;
		break;
	}	
}

if(null_1 == undefined || null_2 == undefined){
	console.log('Сумма = ' +sum);	
}
else{
	console.log(null_1);
	console.log(null_2);
	for(i=null_1; i<null_2; i++){
		sum = sum + arr[i];
	}
	console.log('Сумма = ' +sum);
}