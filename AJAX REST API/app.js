import { Brain } from "./skeleton.js";
const surl = "https://localhost:9000/api";
let getbtn = document.querySelector("#get-btn");
getbtn.addEventListener("click",()={
    alert("clicked");
    //fetchemp();
})
let fetchemp = ()=>{
    let http = new Brain();
    let url = `${surl}/employees`
    http.get(url,(jobj)=>{
        console.log(jobj);
    })
};