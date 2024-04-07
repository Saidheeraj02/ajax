let tb = document.querySelector("#text-btn");
tb.addEventListener("click", () => {
  fetch("./data/message.txt").then((res) => {
    if (res.status !== 200) {
      console.log(`something went wrong ${res.status}`);
      return;
    }
    res.text().then((data) => {
      document.querySelector("#text-card").innerHTML = `<h3>${data}</h3>`;
    });
  });
});
let jb = document.querySelector("#json-btn");
jb.addEventListener("click", () => {
  fetch("./data/mobile.json").then((res) => {
    if (res.status !== 200) {
      console.log(`something went wrong ${res.status}`);
      return;
    }
    res.json().then((data) => {
      document.querySelector("#JSON-card").innerHTML =
        `<ul class= "list-group"><li class= "list-group-item">id:${data.id}</li><li class= "list-group-item">Brand:${data.brand}</li><li class= "list-group-item">Color:${data.Colour}</li><li class= "list-group-item">Price:${data.Price}</li></ul>`;
    });
  });
});
let ab = document.querySelector("#api-btn");
ab.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
    if (res.status !== 200) {
      console.log(`something went wrong ${res.status}`);
      return;
    }
    res.json().then((data) => {
      let c = ``;
      for (let i of data) {
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
    });
  });
});
