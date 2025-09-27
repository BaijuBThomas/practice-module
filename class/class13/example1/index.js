//1.on submit get the location name
//2.make apli calls to the server to get the weather details
//3. get information from response json, display the data into respective DOM/element.

//Api - Application programming interface

//api call - http://api.weatherapi.com/v1/current.json?key=e7e37a11af6d4f89a6c190537242410&q=London&aqi=no

const inputRef = document.querySelector(' .searchField');
const buttonRef = document.querySelector('button[type="submit"]');
const tempRef = document.querySelector(".weather .temp");
const locationRef = document.querySelector('.weather .time_location p');
const timeDateRef = document.querySelector('.weather .time_location span');
const conditionTextRef = document.querySelector(".weather .weather_condition span");
const conditionIconRef = document.querySelector(".weather .weather_condition p img");

//1.on click/ submit get the location name
buttonRef.addEventListener('click',(event) =>{
    event.preventDefault();
    console.log(inputRef.value);
    fetchData(inputRef.value);
})

function fetchData(location) {
    fetch(`http://api.weatherapi.com/v1/current.json?key=e7e37a11af6d4f89a6c190537242410&q=${location}&aqi=no`)
    .then(res => res.json())//res is not a reserved keyword we canwrite anything like data,obj etc.
    .then(data => updateWeatherDetails(data))//data is not a reserved keyword we can write anytjing lik obj, res etc
    .catch(function(e){
        console.log(e);
    })
}
//3. get information from response json, display the data into respective
function updateWeatherDetails(data){
    const tempC = data.current.temp_c;
    const conditionText = data.current.condition.text;
    const conditionIcRef = data.current.condition.icon;
    const locationName = data.location.name;
    const dataTime = data.location.localtime;

    tempRef.innerText = tempC;
    conditionTextRef.innerText = conditionText;
    conditionIconRef.src = conditionIcRef;
    locationRef.innerText = locationName;
    timeDateRef.innerText = dataTime;

}