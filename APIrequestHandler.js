
function getWeatherForecast(form)
{
  var zipcode = form.zipcode.value;
  console.log("welcome");
  console.log(zipcode);
  
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    //document.getElementById("demo").innerHTML = this.responseText;
  const obj = JSON.parse(this.responseText);
  
document.getElementById("demo").innerHTML = obj.timezone + ", " + obj.weather[0].main+
", " +
obj.weather[0].icon+","+
obj.name + 
","+ 
obj.id;
  }
  
  //json["address"].city  json.address.streetAddress
  xhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?zip=81549,DE&appid=5ad761e2beb630fe822fee4fcd952cf4");
  xhttp.send();
}


  