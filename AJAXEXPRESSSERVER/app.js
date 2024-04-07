const exp = require("express");
const app = exp();
const port = 9000;
const bd = require("body-parser");
const cors = require("cors");
const api = require("./apirouter");

const jsonparser = bd.json();
const url = bd.urlencoded({ extended: false });
app.use(jsonparser);
app.use(url);
app.use(cors());
app.use("/api", api);
app.get("/", (req, res) => {
  res.send("WELCOME TO EMPLOYEE API APPLICATION PORTAL");
});
app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
