function getData() {
  let name = document.getElementById("nameInput").value;
  let email = document.getElementById("emailInput").value;
  let position = document.getElementById("position").value;
  let address = document.getElementById("address").value;

  if (name == "") {
    return alert("Tolong diisikan nama kamu");
  } else if (email == "") {
    return alert("Tolong diisikan nama kamu");
  }

  let myEmail = "ilham@gmail.com";
  let subject = "introduction";
  let a = document.createElement("a");
  a.href = `mailto:${myEmail}?subject=${subject}&body=halo bang`;
  a.click();
}
