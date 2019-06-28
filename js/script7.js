document.write('задание 7<br/>');
var arr=[];
while(true){
var a = prompt("введите число");
if(a === '' || a === null){
break;
}
	arr.push(Number(a));
}
document.write(arr+"<br/>");
//сортировка
function funcSort(a,b){
	return a-b;
}
arr.sort(funcSort);
document.write(arr+"<br/>");