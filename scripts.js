const link =
	'https://api.openweathermap.org/data/2.5/weather?q=Gennep&units=metric&apikey=bcbe4acaf519f859739d43a16c7eae96';
const tempElement = document.getElementById('temp');
const request = new XMLHttpRequest();
request.open('GET', link, true);
request.onload = function() {
	const obj = JSON.parse(this.response);
	if (request.status >= 200 && request.status < 400) {
		const temp = obj.main.temp;
		console.log(temp);
		tempElement.innerHTML = 'De temperatuur in Gennep is ' + temp + ' &#8451';
	} else {
		console.log('Deze plaats is onbekend');
	}
};
request.send();


/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
	document.getElementById("mySidebar").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
	document.getElementById("mySidebar").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
  }