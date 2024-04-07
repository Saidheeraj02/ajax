export class Brain {
  constructor() {
    this.http = new XMLHttpRequest();
  }
  get = (url, callback) => {
    this.http.open("GET", url, true);
    this.http.send();
    this.http.onload = () => {
      if (this.http.status === 200) {
        let data = this.http.responseText;
        let jobj = JSON.parse(data);
        callback(null, jobj);
      } else {
        callback(`error:${this.http.status}`);
      }
    };
  };
  post = (url, employee, callback) => {
    this.http.open("POST", url, true);
    this.http.setRequestHeader("Content-type", "application/json");
    this.http.send(JSON.stringify(employee));
    this.http.onload = () => {
      let data = this.http.responseText;
      callback(data);
    };
  };
  put = (url, employee, callback) => {
    this.http.open("PUT", url, true);
    this.http.setRequestHeader("Content-type", "application/json");
    this.http.send(JSON.stringify(employee));
    this.http.onload = () => {
      let data = this.http.responseText;
      callback(data);
    };
  };
  delete = (url, callback) => {
    this.http.open("DELETE", url, true);
    this.http.send();
    this.http.onload = () => {
      let data = this.http.responseText;
      callback(data);
    };
  };
}
