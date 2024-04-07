import { Brain } from "./skeleton.js";
const surl = "https://r4dfcz-9000.csb.app/api";
let getbtn = document.querySelector("#get-btn");
getbtn.addEventListener("click", () => {
  alert("clicked");
  fetchemp();
});
let fetchemp = () => {
  let http = new Brain();
  let url = `${surl}/employees`;
  http.get(url, (err, jobj) => {
    if (err) throw err;
    let c = ``;
    for (let item of jobj) {
      c += `<tr>
      <td>${item.id}</td>
      <td>${item.first_name}</td>
      <td>${item.last_name}</td>
      <td>${item.email}</td>
      <td>${item.gender}</td>
      <td>${item.ip_address}</td>
    </tr>`;
    }
    document.querySelector("#table-id").innerHTML = c;
  });
};
let postbtn = document.querySelector("#post-btn");
postbtn.addEventListener("click", () => {
  alert("clicked");
  let http = new Brain();
  let url = `${surl}/employees`;
  let emp = {
    first_name: "Lin",
    last_name: "Neem",
    email: "lneem0@bloomberg.com",
    gender: "Male",
    ip_address: "58.83.138.189",
  };
  http.post(url, emp, (data) => {
    alert(data);
    fetchemp();
  });
});
let putbtn = document.querySelector("#put-btn");
putbtn.addEventListener("click", () => {
  alert("clicked");
  let http = new Brain();
  let empid = 1;
  let url = `${surl}/employees/${empid}`;
  let emp = {
    id: empid,
    first_name: "Goldia",
    last_name: "Arens",
    email: "garens0@alexa.com",
    gender: "Female",
    ip_address: "76.112.254.222",
  };
  http.put(url, emp, (data) => {
    alert(data);
    console.log(emp);
    fetchemp();
  });
});
let deletebtn = document.querySelector("#delete-btn");
deletebtn.addEventListener("click", () => {
  alert("clicked");
  let http = new Brain();
  let empid = 10;
  let url = `${surl}/employees/${empid}`;
  http.delete(url, (data) => {
    alert(data);
    fetchemp();
  });
});
