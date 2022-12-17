let inp = document.getElementById("inp");
let vtn = document.getElementById("vtn");
let icon = document.getElementById("icon");
let cName = document.getElementById("cName");
let deg = document.getElementById("deg");
let lead = document.getElementById("lead");

let apiKey = `56d68b3a10b494f98ef2b5109496f010`;

vtn.addEventListener("click", function (event) {
  event.preventDefault();
  let city = inp.value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => weth(data))
    .catch((error) => console.log(error));

  //console.log(inp.value);
});

function weth(data) {
  cName.innerText = data.name;
  deg.innerText = data.main.temp;
  lead.innerText = data.weather[0].main;
  let url = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  icon.setAttribute("src", url);
  console.log(data);
  console.log(data.weather[0].icon);
}
