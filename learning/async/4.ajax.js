const xhr = new XMLHttpRequest(); // ajax

// HTTP REQUEST => suatu cara untuk melakukan proses ke server / API
// POST => create data (C => create)
// GET => mendapatkan data (R => read)
// PATCH / PUT => update data (U => update)
// DELETE => delete data (D => delete)

// menggunakan MOCK API dengan npoint.io
xhr.open("GET", "https://api.npoint.io/e320fa70a61a3c02310b", true);

xhr.onerror = () => {
  console.log("Network error!");
};

xhr.onload = () => {
  console.log(xhr.responseText);
};

xhr.send();
