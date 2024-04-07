let text_btn = document.querySelector("#text-btn");
text_btn.addEventListener("click", function () {
  alert("clicked");
  let xhr = new XMLHttpRequest();
  xhr.open("Get", "./data/message.txt", true);
  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 200) {
      let data = xhr.responseText;
      console.log(data);
      displaytextmessage(data);
    }
  };
});
displaytextmessage = (data) => {
  document.querySelector("#text-card").innerHTML = `<h3>${data}</h3>`;
};
let json_btn = document.querySelector("#json-btn");
json_btn.addEventListener("click", function () {
  let xhr = new XMLHttpRequest();
  xhr.open("Get", "./data/mobile.json", true);
  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 200) {
      let data = xhr.responseText;
      let obj = JSON.parse(data);
      displayjsonmessage(obj);
    }
  };
});
displayjsonmessage = (data) => {
  let c = `<ul class="list-group mt-1">
  <li class="list-group-item">ID :${data.id}</li>
  <li class="list-group-item">BRAND :${data.brand}</li>
  <li class="list-group-item">COLOUR :${data.Colour}</li>
  <li class="list-group-item">PRICE :${data.Price}</li>
  </ul>`;
  document.querySelector("#JSON-card").innerHTML = c;
};
let api_btn = document.querySelector("#api-btn");
api_btn.addEventListener("click", function () {
  let xhr = new XMLHttpRequest();
  xhr.open("Get", "https://jsonplaceholder.typicode.com/users", true);
  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 200) {
      let data = xhr.responseText;
      let obj = JSON.parse(data);
      displayapimessage(obj);
    }
  };
});
displayapimessage = (data) => {
  let c = ``;
  for (i of data) {
    c += `<ul class="list-group mt-1">
    <li class="list-group-item">ID :${i.id}</li>
    <li class="list-group-item">NAME :${i.name}</li>
    <li class="list-group-item">USENAME :${i.username}</li>
    <li class="list-group-item">STREET :${i.address.street}</li>
    <li class="list-group-item">CITY :${i.address.city}</li>
    <li class="list-group-item">PINCODE :${i.address.zipcode}</li>
    </ul>`;
  }
  document.querySelector("#api-card").innerHTML = c;
};
