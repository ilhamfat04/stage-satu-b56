function isPayDebt(isPay) {
  return new Promise((resolve, reject) => {
    if (!isPay) return reject("Failed to pay debt!");

    resolve("Success pay debt!");
  });
}

// function isPayDebt2(isPay) {
//   return new Promise((resolve, reject) => {
//     if (!isPay) return reject("Gagal bayar");

//     resolve("Berhasil bayar");
//   });
// }

async function payDebt() {
  try {
    // console.log(await isPayDebt2(true));
    console.log(await isPayDebt(false));
  } catch (error) {
    console.log(error);
  }
}

payDebt();
