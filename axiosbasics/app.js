let tb = document.querySelector("#text-btn");
tb.addEventListener("click", () => {
  axios.get("./data/message.txt").then((res) => {
    document.querySelector("#text-card").innerHTML = `<h3>${res.data}</h3>`;
  });
});
let jb = document.querySelector("#json-btn");
jb.addEventListener("click", () => {
  axios.get("./data/mobile.json").then((res) => {
    document.querySelector("#JSON-card").innerHTML =
      `<ul class="list-group mt-1">
    <li class="list-group-item">ID :${res.data.id}</li>
    <li class="list-group-item">BRAND :${res.data.brand}</li>
    <li class="list-group-item">COLOUR :${res.data.Colour}</li>
    <li class="list-group-item">PRICE :${res.data.Price}</li>
    </ul>`;
  });
});
let ab = document.querySelector("#api-btn");
ab.addEventListener("click", () => {
  axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    let data = res.data;
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
  });
});
