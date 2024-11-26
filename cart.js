
let cartItems = JSON.parse(localStorage.getItem('cart')) || []
document.addEventListener('DOMContentLoaded', () => {
    const cartList = document.getElementById('cart-list')
    const priceSummary = document.getElementById('price-summary')
    

    renderCartElements();


    // rendering cart element
    function renderCartElements(){
        cartList.innerHTML = '';
        cartItems.forEach((item) => {
            const li = document.createElement('li');
            li.innerHTML = `
                        <div class= "imgDiv">
                            <img class = "cartItem-Img" src = "${item.src}">
                        </div>
                        <div class= "details">
                            <p class="detail-name">${item.name}</p>
                            <p class="detail-type">${item.type}</p>
                            <p class="detail-deliveryBy">Delivery by <span class="detail-date">30 Nov 2024</span></p>
                        </div>
                        <div class="priceDetails">
                            <i id="close-icon" data-id ="${item.id}" class = "fa-regular fa-circle-xmark"></i>
                            <p class="price">₹ ${item.price}</p>
                        </div>
            `
            cartList.appendChild(li)
        });
    }
    

    function calculatingTotal(){
        let totalprice = 0;
        cartItems.forEach((item) => {
            totalprice += item.price
        })
        return totalprice
    }

    function calculatingDiscount(){
        let total = calculatingTotal();
        let discount = 0;
        discount = total * 0.15
        return discount
    }

    function calculatingSubtotal(){
        let total = calculatingTotal();
        let discount = calculatingDiscount();
        let subtotal = total - discount;
        return subtotal;
    }

    const totalPrice = calculatingTotal();
    const discount = calculatingDiscount();
    const subtotal = calculatingSubtotal();

    // rendering price section of the cart page

    priceSummary.innerHTML = `
                    <div class="priceSummaryHeading">
                        <p >Price Summary</p>
                    </div>
                    <div class="total-mrp">
                        <p class = "total-mrp-text">Total MRP (Incl. of taxes)</p>
                        <p class = "total-mrp-price">₹ ${totalPrice}</p>
                    </div>
                    <div class="discount">
                        <p class = "discount-text">Bag Discount</p>
                        <p class = "discount-price">₹ ${discount.toFixed(2)}</p>
                    </div>
                    <div class="delivery-fee">
                        <p class = "delivery-fee-text">Delivery Fee</p>
                        <p class = "delivery-fee-price"> FREE</p>
                    </div>
                    <hr>
                    <div class="subtotal">
                        <p class = "subtotal-text">Subtotal</p>
                        <p class = "subtotal-price">₹ ${subtotal}</p>
                    </div>
                    <button class="checkout-btn">PLACE ORDER</button>
    `
    
    const closeBtn = document.querySelectorAll('#close-icon')
    for (const closeBtnEach of closeBtn) {
        closeBtnEach.addEventListener('click', () => {
            const productId = parseInt(closeBtnEach.getAttribute('data-id'))
            cartItems = cartItems.filter((p) => p.id !== productId)
            renderCartElements();
            console.log("reaching")
        })
        
    }
})
