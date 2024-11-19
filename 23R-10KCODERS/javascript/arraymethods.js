const products = [
    { id: 101, name: "Smartphone", price: 699.99, category: "Electronics", inStock: true, ratings: 4.5 },
    { id: 102, name: "Laptop", price: 1199.99, category: "Computers", inStock: false, ratings: 4.7 },
    { id: 103, name: "Wireless Headphones", price: 199.99, category: "Accessories", inStock: true, ratings: 4.3 },
    { id: 104, name: "Smartwatch", price: 149.99, category: "Wearables", inStock: true, ratings: 4.2 },
    { id: 105, name: "Gaming Console", price: 499.99, category: "Gaming", inStock: true, ratings: 4.8 }
  ];
  let y=products.map((a)=>{
    return a.name.toUpperCase();
  })
  console.log(y);
// //2.Write a function that logs each product's name and price to the console.
// let x = products.forEach((a) => {
//   console.log(`Name:${a.name},Price:${a.price}`);
// });

// //3.Write a function that returns an array of products that are in stock.
// function inStockOfProducts(products) {
//   let x1 = products.filter((a) => {
//     return a.inStock;
//   });
//   return x1;
// }
// //   const products = [
// //     { id: 101, name: "Smartphone", price: 699.99, category: "Electronics", inStock: true, ratings: 4.5 },
// //     { id: 102, name: "Laptop", price: 1199.99, category: "Computers", inStock: false, ratings: 4.7 },
// //     { id: 103, name: "Wireless Headphones", price: 199.99, category: "Accessories", inStock: true, ratings: 4.3 },
// //     { id: 104, name: "Smartwatch", price: 149.99, category: "Wearables", inStock: true, ratings: 4.2 },
// //     { id: 105, name: "Gaming Console", price: 499.99, category: "Gaming", inStock: true, ratings: 4.8 }
// //   ];
// console.log(inStockOfProducts(products));
// //4.Write a function that finds the first product with a rating higher than 4.5
// function findsFirstProduct(products) {
//   let x2 = products.find((a) => a.ratings > 4.5);
//   return x2;
// }

// //  const products = [
// //     { id: 101, name: "Smartphone", price: 699.99, category: "Electronics", inStock: true, ratings: 4.5 },
// //     { id: 102, name: "Laptop", price: 1199.99, category: "Computers", inStock: false, ratings: 4.7 },
// //     { id: 103, name: "Wireless Headphones", price: 199.99, category: "Accessories", inStock: true, ratings: 4.3 },
// //     { id: 104, name: "Smartwatch", price: 149.99, category: "Wearables", inStock: true, ratings: 4.2 },
// //     { id: 105, name: "Gaming Console", price: 499.99, category: "Gaming", inStock: true, ratings: 4.8 }
// //   ];
// console.log(findsFirstProduct(products));

// //Write a function that returns the index of the first product in the "Gaming"

// function indexOfFirstProduct(products) {
//   debugger;
//   let x11 = products.findIndex((a) => a.category === "Gaming");
//   return x11;
// }
// //   const products = [
// //     { id: 101, name: "Smartphone", price: 699.99, category: "Electronics", inStock: true, ratings: 4.5 },
// //     { id: 102, name: "Laptop", price: 1199.99, category: "Computers", inStock: false, ratings: 4.7 },
// //     { id: 103, name: "Wireless Headphones", price: 199.99, category: "Accessories", inStock: true, ratings: 4.3 },
// //     { id: 104, name: "Smartwatch", price: 149.99, category: "Wearables", inStock: true, ratings: 4.2 },
// //     { id: 105, name: "Gaming Console", price: 499.99, category: "Gaming", inStock: true, ratings: 4.8 }
// //   ];
// console.log(indexOfFirstProduct(products));

// // // Write a function that checks if all products are in stock.
// function allProductsInStock(products) {
//   let x12 = products.every((a) => a.inStock);
//   return x12;
// }
// // const products = [
// //   {
// //     id: 101,
// //     name: "Smartphone",
// //     price: 699.99,
// //     category: "Electronics",
// //     inStock: true,
// //     ratings: 4.5,
// //   },
// //   {
// //     id: 102,
// //     name: "Laptop",
// //     price: 1199.99,
// //     category: "Computers",
// //     inStock: false,
// //     ratings: 4.7,
// //   },
// //   {
// //     id: 103,
// //     name: "Wireless Headphones",
// //     price: 199.99,
// //     category: "Accessories",
// //     inStock: true,
// //     ratings: 4.3,
// //   },
// //   {
// //     id: 104,
// //     name: "Smartwatch",
// //     price: 149.99,
// //     category: "Wearables",
// //     inStock: true,
// //     ratings: 4.2,
// //   },
// //   {
// //     id: 105,
// //     name: "Gaming Console",
// //     price: 499.99,
// //     category: "Gaming",
// //     inStock: true,
// //     ratings: 4.8,
// //   },
// // ];
// console.log(allProductsInStock(products));

// //Write a function that checks if any product has a price lower than $200.
// function priceOfProduct(products) {
//   let x21 = products.some((a) => a.price < 200);
//   return x21;
// }
// const products = [
//   {
//     id: 101,
//     name: "Smartphone",
//     price: 699.99,
//     category: "Electronics",
//     inStock: true,
//     ratings: 4.5,
//   },
//   {
//     id: 102,
//     name: "Laptop",
//     price: 1199.99,
//     category: "Computers",
//     inStock: false,
//     ratings: 4.7,
//   },
//   {
//     id: 103,
//     name: "Wireless Headphones",
//     price: 199.99,
//     category: "Accessories",
//     inStock: true,
//     ratings: 4.3,
//   },
//   {
//     id: 104,
//     name: "Smartwatch",
//     price: 149.99,
//     category: "Wearables",
//     inStock: true,
//     ratings: 4.2,
//   },
//   {
//     id: 105,
//     name: "Gaming Console",
//     price: 499.99,
//     category: "Gaming",
//     inStock: true,
//     ratings: 4.8,
//   },
// ];
// console.log(priceOfProduct(products));
