import { productData } from "./ProductData/data.js";


const cartItems = JSON.parse(localStorage.getItem('cart'))   || []
document.addEventListener('DOMContentLoaded', () => {
        
    const productList = document.getElementById('productList')


    // rendering of products
    productData.forEach((item) => {
        const li = document.createElement('li')
        li.innerHTML = `
        <div class= "productDetails">
        <img class= "product-image" src = "${item.src}">
        <p class= "product-name">${item.name}</p>
        <p class= "product-type">${item.type}</p>
        <p class= "product-price">₹${item.price.toFixed(2)}</p></div>
        <div class= "cartBtn">
        <button class= "addToCartBtn" data-id= "${item.id}">Add to cart</button>
        <button class= "buyNowBtn">Buy Now</button>
        </div>
        `
        productList.appendChild(li)
    })

    // extracting out product clicked and adding that product to cart
    const cartBtn = document.getElementsByClassName('addToCartBtn')
    for(const eachCartBtn of cartBtn){
        eachCartBtn.addEventListener('click', (e) => {
            const productId = parseInt(eachCartBtn.getAttribute('data-id'));
            const product = productData.find((p) => p.id === productId)
            cartItems.push(product)
            saveToLocal();
        })
    }

    function saveToLocal(){
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }
})
export {cartItems}
