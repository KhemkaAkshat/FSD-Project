import { cartItems } from "./productScript.js";

document.addEventListener("DOMContentLoaded", () => {
  const cartList = document.getElementById("cart-list");
  const priceSummary = document.getElementById("price-summary");

  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  // rendering cart element

  cartItems.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <div class="items-details">
                
                        <img class = "cartItem-Img" src = "${item.src}">
                    
                    <div class= "details">
                        <p class="detail-name">${item.name}</p>
                        <p class="detail-type">${item.type}</p>
                        <p class="detail-deliveryBy">Delivery by <span class="detail-date">30 Nov 2024</span></p>
                    </div>
                    </div>
                    <div class="priceDetails">
                        <i id="close-icon" class = "fa-regular fa-circle-xmark"></i>
                        <p class="price">₹${item.price}</p>
                    </div>
        `;
    cartList.appendChild(li);
  });

  priceSummary.innerHTML = `
                    <div class="priceSummaryHeading">
                        <p >Price Summary</p>
                    </div>
                    <div class="total-mrp">
                        <p class = "total-mrp-text">Total MRP (Incl. of taxes)</p>
                        <p class = "total-mrp-price">₹ PRICE</p>
                    </div>
                    <div class="discount">
                        <p class = "discount-text">Bag Discount</p>
                        <p class = "discount-price">₹ DISCOUNT-PRICE</p>
                    </div>
                    <div class="delivery-fee">
                        <p class = "delivery-fee-text">Delivery Fee</p>
                        <p class = "delivery-fee-price">₹ DELIVERY-FEE</p>
                    </div>
                    <hr>
                    <div class="subtotal">
                        <p class = "subtotal-text">Subtotal</p>
                        <p class = "subtotal-price">₹ SUBTOTAL</p>
                    </div>
                    <button class="checkout-btn">PLACE ORDER</button>
    `;
});
