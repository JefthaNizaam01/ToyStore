// Create products and store it on the local storage
let wrapper = document.querySelector('[recentProducts]')
// let products = JSON.parse(localStorage.getItem('products'))? JSON.parse(localStorage.getItem('products')) : localStorage.setItem('products', JSON.stringify(
    let products = JSON.parse(localStorage.getItem('products'))
    ? JSON.parse(localStorage.getItem('products'))
    : localStorage.setItem('products', JSON.stringify([
    {
        id: 1,
        productName: "Need for Speed Underground 2",
        category: "PlayStation 2 Game",
        description: "A racing game that took place in the 2000s",
        amount: 110.89,
        img_url: "https://jefthanizaam01.github.io/favoriteimages/images/Need for speed underground 2.jpg"
    },
    {
        id: 2,
        productName: "Gran Turismo 4",
        category: "PlayStation 2 Game",
        description: "A racing game that took place in the 2000s",
        amount: 110.89,
        img_url: "https://jefthanizaam01.github.io/favoriteimages/images/gran turismo 4.jpg"
    },
    {
        id: 3,
        productName: "Midnight Club 3",
        category: "PlayStation 2 Game",
        description: "A racing game that took place in the 2000s",
        amount: 110.89,
        img_url: "https://jefthanizaam01.github.io/favoriteimages/images/midnight club 3.jpg"
    },
    {
        id: 4,
        productName: "Grand Theft Auto Vice City",
        category: "PlayStation 2 Game",
        description: "A racing game that took place in the 2000s",
        amount: 110.89,
        img_url: "https://jefthanizaam01.github.io/favoriteimages/images/gta vice city.webp"
    },
    {
        id: 5,
        productName: "Dragon Ball Z",
        category: "PlayStation 2 Game",
        description: "A racing game that took place in the 2000s",
        amount: 110.89,
        img_url: "https://jefthanizaam01.github.io/favoriteimages/images/Dbz-budokai-3-ps2.webp"
    }

 ]))

 function recentProducts() {
    let arrSize = products.length
    let latestProducts = products.reverse().slice(0, arrSize >> 1)
    latestProducts.forEach(product => {
        wrapper.innerHTML += `<div class="card"">
  <img src="${product.img_url}" class="card-img-top" alt="${product.productName}" loading ="lazy">
  <div class="card-body">
    <h5 class="card-title">${product.productName}</h5>
    <p class="card-text">${product.description}</p>
  </div>
</div>`
    });
}
recentProducts()

