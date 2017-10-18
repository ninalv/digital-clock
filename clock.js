setInterval(clock, 1000 * 60);
clock();

function clock()
{
	var weeks = new Array("Sun", "Mon", "Thu", "Wed", "Thr", "Fri", "Sat");
	var now = new Date();
	var y = now.getFullYear();
	var mo = now.getMonth() + 1;
	var d = now.getDate();
	var w = weeks[now.getDay()];
	var h = now.getHours();
	var mi = now.getMinutes();
	//var s = now.getSeconds();

	if (mo < 10) mo = "0" + mo;
	if (d < 10) d = "0" + d;
	if (mi < 10) mi = "0" + mi;
	//if (s < 10) s = "0" + s;

	document.getElementById("clock_date").innerHTML = y + "/" + mo + "/" + d + " " + w;
	document.getElementById("clock_time").innerHTML = (h % 12) + ":" + mi + " " + (h < 12 ? "am" : "pm") /*+ "\ntest\n12:34 am"*/;
		//now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
	document.getElementById("clock_frame").style.fontSize = window.innerWidth / 8 + "px";
}
