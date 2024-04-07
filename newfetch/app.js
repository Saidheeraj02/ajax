import { Brain } from "./skeleton.js";
const surl = "https://r4dfcz-9000.csb.app/api";
window.addEventListener("DOMContentLoaded", () => {
  fetchemp();
});
let fetchemp = () => {
  let url = `${surl}/employees`;
  Brain.get(url)
    .then((data) => {
      let jobj = data;
      let c = ``;
      for (let item of jobj) {
        c += `<tr>
        <td>${item.id}</td>
        <td>${item.first_name}</td>
        <td>${item.last_name}</td>
        <td>${item.email}</td>
        <td>${item.gender}</td>
        <td>${item.ip_address}</td>
        <td>
        <button class = 'btn btn-warning mt-0 btn-sm update'>Update</button>
        <button class = 'btn btn-danger mt-0 btn-sm delete'>Delete</button>
        </td>
      </tr>`;
      }
      document.querySelector("#table-id").innerHTML = c;
      console.log(jobj);
    })
    .catch((err) => {
      console.error(err);
    });
};
let addemp = document.querySelector("#add-emp");
addemp.addEventListener("submit", (e) => {
  e.preventDefault();
  $("#add-emp-id").modal("hide");
  let url = `${surl}/employees`;
  let emp = {
    first_name: document.querySelector("#add-first-name").value,
    last_name: document.querySelector("#add-last-name").value,
    email: document.querySelector("#add-email").value,
    gender: document.querySelector("#add-gender").value,
    ip_address: document.querySelector("#add-ip-address").value,
  };
  Brain.post(url, emp)
    .then((data) => {
      //console.log(data);
      fetchemp();
      cleardata();
    })
    .catch((err) => {
      console.error(err);
    });
});
let cleardata = () => {
  document.querySelector("#add-first-name").value = "";
  document.querySelector("#add-last-name").value = "";
  document.querySelector("#add-email").value = "";
  document.querySelector("#add-gender").value = "";
  document.querySelector("#add-ip-address").value = "";
};
let tbld = document.querySelector("#table-id");
tbld.addEventListener("click", (e) => {
  let te = e.target;
  if (te.classList.contains("delete")) {
    let empid = te.parentElement.parentElement.firstElementChild.innerHTML;
    console.log(empid);
    let url = `${surl}/employees/${empid}`;
    Brain.delete(url)
      .then((data) => {
        console.log(data);
        fetchemp();
      })
      .catch((err) => console.error(err));
  }
  if (te.classList.contains("update")) {
    let empid = te.parentElement.parentElement.firstElementChild.innerHTML;
    let url = `${surl}/employees`;
    Brain.get(url)
      .then((data) => {
        let jobj = data;
        let updateemp = jobj.find((item) => {
          return item.id === parseInt(empid.trim());
        });
        popupModal(updateemp);
      })
      .catch((err) => {
        console.error(err);
      });
  }
});
let popupModal = (updateemp) => {
  document.querySelector("#update-id").value = updateemp.id;
  document.querySelector("#update-first-name").value = updateemp.first_name;
  document.querySelector("#update-last-name").value = updateemp.last_name;
  document.querySelector("#update-email").value = updateemp.email;
  document.querySelector("#update-gender").value = updateemp.gender;
  document.querySelector("#update-ip-address").value = updateemp.ip_address;
  $("#update-emp-id").modal("show");
};
let formsubmit = document.querySelector("#update-emp");
formsubmit.addEventListener("submit", (e) => {
  let empid = document.querySelector("#update-id").value.trim();
  e.preventDefault();
  $("#update-emp-id").modal("hide");
  let url = `${surl}/employees/${empid}`;
  let emp = {
    first_name: document.querySelector("#update-first-name").value,
    last_name: document.querySelector("#update-last-name").value,
    email: document.querySelector("#update-email").value,
    gender: document.querySelector("#update-gender").value,
    ip_address: document.querySelector("#update-ip-address").value,
  };
  Brain.put(url, emp)
    .then((data) => {
      //console.log(data);
      fetchemp();
    })
    .catch((err) => {
      console.error(err);
    });
});
