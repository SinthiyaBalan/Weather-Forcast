
document.querySelector("#weatherForm").addEventListener("submit", function (event) {
  // stop form submission
  event.preventDefault();
  
  const zip = document.getElementById("weatherForm").zipcode.value;
  if(isNaN(zip)) {
    alert("Zip code is not a valid Number!");
    return;
  }
  const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
      if(xhttp.readyState === 4) {
        if(xhttp.status === 200) {
          console.log("response:", this.responseText);
          const obj = JSON.parse(this.responseText);
          
          
           const responseElement = document.getElementById("displayResponse");
           responseElement.innerHTML="";
           responseElement.style.display= "block";
           const cityElement = document.createElement("h2");
           cityElement.innerHTML = obj.name;
           responseElement.appendChild(cityElement);

           const descElement = document.createElement("h3") ;
           descElement.innerHTML = obj.weather[0].description;
           responseElement.appendChild(descElement);
           console.log(descElement);
        
           const imgElement = document.createElement("img");
          
           imgElement.src ="http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png";
           imgElement.width = 100;
           //imgElement.height = 100;
           responseElement.appendChild(imgElement);
           
           

           const temp = Math.round(obj.main.temp -273.15);
           const tempElement = document.createElement("h3") ;
           
           tempElement.innerHTML = temp + "&#8451;";
           responseElement.appendChild(tempElement);

           
           const realFeel = Math.round(obj.main.feels_like -273.15);
           const realFeelElement = document.createElement("h3") ;
           
           realFeelElement.innerHTML = "RealFeel  "+realFeel + "&#8451;";
           responseElement.appendChild(realFeelElement);
          
        }
        else {
          const responseElement = document.getElementById("displayResponse");
          responseElement.innerHTML="";
          const errorElement = document.createElement("h4");
          errorElement.innerHTML = "Error. City not found!";
          responseElement.appendChild(errorElement);
        }
      }
        
    }
    xhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?zip="+zip+",DE&appid=5ad761e2beb630fe822fee4fcd952cf4");
    xhttp.send();
    
});
