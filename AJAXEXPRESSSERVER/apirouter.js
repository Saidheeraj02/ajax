const express = require("express");
const router = express.Router();
let employee = [
  {
    id: 1,
    first_name: "Goldia",
    last_name: "Arens",
    email: "garens0@alexa.com",
    gender: "Female",
    ip_address: "76.112.254.211",
  },
  {
    id: 2,
    first_name: "Darell",
    last_name: "Paule",
    email: "dpaule1@twitpic.com",
    gender: "Female",
    ip_address: "18.5.111.133",
  },
  {
    id: 3,
    first_name: "Brigid",
    last_name: "Guitte",
    email: "bguitte2@prweb.com",
    gender: "Female",
    ip_address: "34.127.191.180",
  },
  {
    id: 4,
    first_name: "Humphrey",
    last_name: "Ierland",
    email: "hierland3@w3.org",
    gender: "Male",
    ip_address: "10.204.224.11",
  },
  {
    id: 5,
    first_name: "Anders",
    last_name: "Satterthwaite",
    email: "asatterthwaite4@ftc.gov",
    gender: "Male",
    ip_address: "131.221.49.49",
  },
  {
    id: 6,
    first_name: "Olenolin",
    last_name: "L' Estrange",
    email: "olestrange5@google.com.hk",
    gender: "Male",
    ip_address: "233.66.7.56",
  },
  {
    id: 7,
    first_name: "Eran",
    last_name: "Toulson",
    email: "etoulson6@last.fm",
    gender: "Female",
    ip_address: "183.107.169.155",
  },
  {
    id: 8,
    first_name: "Anabelle",
    last_name: "Mintoft",
    email: "amintoft7@xing.com",
    gender: "Female",
    ip_address: "135.129.50.44",
  },
  {
    id: 9,
    first_name: "Kathleen",
    last_name: "Ditter",
    email: "kditter8@fastcompany.com",
    gender: "Female",
    ip_address: "103.193.165.136",
  },
  {
    id: 10,
    first_name: "Iver",
    last_name: "Tomek",
    email: "itomek9@pagesperso-orange.fr",
    gender: "Male",
    ip_address: "73.98.204.218",
  },
];
let getid = () => {
  return employee.length + 1;
};
router.get("/employees", (req, res) => {
  res.send(employee);
});
router.post("/employees", (req, res) => {
  let newemployee = {
    id: getid(),
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    gender: req.body.gender,
    ip_address: req.body.ip_address,
  };
  employee.push(newemployee);
  res.send("post successfull");
});
router.put("/employees/:id", (req, res) => {
  let em_id = parseInt(req.params.id);
  let updateemployee = {
    id: em_id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    gender: req.body.gender,
    ip_address: req.body.ip_address,
  };
  let exist_employee = employee.find((emp) => {
    return emp.id === em_id;
  });
  employee.splice(employee.indexOf(exist_employee), 1, updateemployee);
  console.log(employee);
  res.send("update successfull");
});
router.delete("/employees/:id", (req, res) => {
  let em_id = parseInt(req.params.id);
  employee = employee.filter((emp) => {
    return emp.id !== em_id;
  });
  res.send("deleted successfully");
});
module.exports = router;
