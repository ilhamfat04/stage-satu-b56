// pending => menunggu
// resolved => ditepati
// rejected => diingkari

function isPayDebt(isPay) {
  return new Promise((resolve, reject) => {
    if (!isPay) return reject("Failed to pay debt!");

    resolve("Success pay debt!");
  });
}

isPayDebt(false)
  .then((value) => {
    console.log(value);
  })
  .catch((value) => {
    console.log(value);
  });
