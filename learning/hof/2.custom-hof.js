// function greeting(helloFn) {
//     console.log(`Halo : `)
//     helloFn()
// }

// greeting(() => {
//     for(let x = 0; x < 10; x++){
//         console.log(`Bro!`)
//     }
// })

// function sum(a) {
//     return function(b) {
//         return a + b
//     }
// }

// const number1 = sum(10)
// console.log(number1(5))

// products

// function filterProductAbovePrice(price) {
//   return (product) => {
//     return product.price > price;
//   };
// }

// function filterProductByName(name) {
//     return (product) => {
//         return product.name == name
//     }
// }

// const products = [
//   {
//     name: "Product 1",
//     price: 1000,
//   },
//   {
//     name: "Product 2",
//     price: 150,
//   },
//   {
//     name: "Product 3",
//     price: 300,
//   },
// ];

// const productByPrice = products.filter(filterProductAbovePrice(200));
// const productByName = products.filter(filterProductByName("Product 1"))

// console.log(productByName);
