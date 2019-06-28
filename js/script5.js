document.write("задание 5<br/>");
var arr = ['Monday',
		   'Tuesday',
		   'Wednesday',
		   'Thursday',
		   'Friday',
		   'Saturday',
		   'Sunday'];
for (i = 0; i < arr.length; i++){
	/*while(i < 5){
		console.log(arr[i]);
		i++;
	}
	while(i > 4){
		console.log('<b>' + arr[i] + '</b>');
		i++;
	}*/
	/*if (i < 5){
		console.log(arr[i]);
		i++;
	}*/
	while(i < 5){
		document.write(arr[i]+ "<br/>");
		i++;
	}
	document.write("<b>" +arr[i]+"</b><br/>");
}

