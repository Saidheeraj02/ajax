export class Brain {
  static get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json().then((data) => resolve(data)))
        .catch((err) => reject(err));
    });
  }
  static post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.text().then((data) => resolve(data)))
        .catch((err) => reject(err));
    });
  }
  static put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.text().then((data) => resolve(data)))
        .catch((err) => reject(err));
    });
  }
  static delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, { method: "DELETE" })
        .then((res) => res.text().then((data) => resolve(data)))
        .catch((err) => reject(err));
    });
  }
}
