document.write('задание 11<br/>');
var h = prompt("введите высоту треугольика");
for(i = 0; i < h; i++){
	for(j = h; j > i; j--){
		document.write('.'); // с пробелом получается прямоугольный

	}
	for(x = 0; x < i + 1; x++){
		document.write('^');
	}
	document.write('<br/>')	
}