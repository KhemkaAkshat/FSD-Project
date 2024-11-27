import { productData } from "./ProductData/data.js";


export const cartItems = JSON.parse(localStorage.getItem('cart'))   || []
document.addEventListener('DOMContentLoaded', () => {
        
    const productList = document.getElementById('productList')
    const goOnCartBtn = document.getElementById('goOnCartPage')
    const popup = document.getElementById("popup");
    const cartItemsNo = document.querySelector('.cartItemsNo')

    renderingProducts()
    cartItemsNoCheck()
    // rendering of products
    function renderingProducts(){
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
    }

    function cartItemsNoCheck(){
        const count = cartItems.length
        cartItemsNo.style.display = count > 0 ? 'flex' : 'none'
        cartItemsNo.textContent = cartItems.length
    }

    // extracting out product clicked and adding that product to cart
    const cartBtn = document.getElementsByClassName('addToCartBtn')
    for(const eachCartBtn of cartBtn){
        eachCartBtn.addEventListener('click', (e) => {
            const productId = parseInt(eachCartBtn.getAttribute('data-id'));
            const product = productData.find((p) => p.id === productId)
            cartItems.push(product)
            saveToLocal();
            cartItemsNoCheck();
        })
    }

    function saveToLocal(){
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }

    goOnCartBtn.addEventListener('click', () => {
        window.location.href = "cart.html"
    })

    function showPopup() {
        popup.classList.remove("hidden");
        popup.classList.add("visible");
      
        // Hide the popup after 3 seconds
        setTimeout(() => {
          popup.classList.remove("visible");
          popup.classList.add("hidden");
        }, 2000);
    }

    
    for(const eachCartBtn of cartBtn){
        eachCartBtn.addEventListener('click', showPopup)
    }

    
})

