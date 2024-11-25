document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('productList')




    const productData = [
        {
            id: 1,
            src: "../images/product-images/image1.png",
            name: "Titan Men's Elegance Watch: Black Dial with Sleek Link Strap",
            type: "Men's Watch",
            price: "1,995.00",
        },
    
        {
            id: 2,
            src: "../images/product-images/image2.png",
            name: "Titan Men's Timeless Style Watch: Refined Black Dial and Metal Strap",
            type: "Men's Watch",
            price: "3,995.00",
        },
    
        {
            id: 3,
            src: "../images/product-images/image3.png",
            name: "Titan Neo Splash Quartz Multifunction Black Dial Stainless Steel Strap Watch for Men",
            type: "Men's Watch",
            price: "7,345.00",
        },
        {
            id: 4,
            src: "../images/product-images/image4.png",
            name: "Raga Women's Sundial Gold Elegance: The Timeless Statement Watch",
            type: "Women's Watch",
            price: "5,995.00",
        },
        {
            id: 5,
            src: "../images/product-images/image5.png",
            name: "Titan Smart Watch with 4.97 CM Super AMOLED Display | 410 x 502 Pixel Resolution | AI Voice Assistant | Multiple Menu Styles",
            type: "Unisex Watch",
            price: "4,995.00",
        },
        {
            id: 6,
            src: "../images/product-images/image6.png",
            name: "Reflex Play- Smart Watch Amoled Display, Health Suite, In-Built Games, & Period Tracker",
            type: "Unisex Watch",
            price: "2,999.00",
        },
        {
            id: 7,
            src: "../images/product-images/image7.png",
            name: "Titan Bandhan Champagne Dial Analog Stainless Steel Strap watch for Couple",
            type: "Couple Watch",
            price: "8,995.00",
        },
        {
            id: 8,
            src: "../images/product-images/image8.png",
            name: "Titan Men's Classic Watch: Gradient Dial & Sleek Markings with Leather Strap",
            type: "Men's Watch",
            price: "3,165.00",
        },
        {
            id: 9,
            src: "../images/product-images/image9.png",
            name: "Titan Octane Black Dial Chronograph Watch for Men",
            type: "Men's Watch",
            price: "11,765.00",
        },
        {
            id: 10,
            src: "../images/product-images/image10.png",
            name: "Titan Women's Lagan Chic: Studded Brown Dial watch with & Elegant Hands",
            type: "Women's Watch",
            price: "1,995.00",
        },
        {
            id: 11,
            src: "../images/product-images/image11.png",
            name: "Titan Modern Bandhan Blue Dial Quartz Multifunction Stainless Steel Strap watch for Couple",
            type: "Couple Watch",
            price: "14,315.00",
        },
        {
            id: 12,
            src: "../images/product-images/image12.png",
            name: "Titan Neo Curve Quartz Analog with Date Anthracite Dial Black Stainless Steel Strap Watch for Men",
            type: "Men's Watch",
            price: "5,345.00",
        },
        {
            id: 13,
            src: "../images/product-images/image13.png",
            name: "Titan Smart Pink Dial Smart Silicone Strap watch for Unisex",
            type: "Unisex Watch",
            price: "8,995.00",
        },
        {
            id: 14,
            src: "../images/product-images/image14.png",
            name: "an Quartz Analog with Date White Dial Leather Strap Watch for Men",
            type: "Men's Watch",
            price: "5,295.00",
        },
        {
            id: 15,
            src: "../images/product-images/image15.png",
            name: "Titan Bandhan Blue Dial Quartz Multifunction Stainless Steel Strap watch for Couple",
            type: "Couple Watch",
            price: "12,415.00",
        },
        {
            id: 16,
            src: "../images/product-images/image16.png",
            name: "Titan Avant Garde Quartz Multifunction Silver Dial Leather Strap watch for Men",
            type: "Men's Watch",
            price: "9,955.00",
        },
        {
            id: 17,
            src: "../images/product-images/image17.png",
            name: "Fastrack Phantom with 4.69 CM Super HD Display Functional Crown BT Calling Premium Black Solar Metal Smartwatch for Unisex",
            type: "Unisex Watch",
            price: "3,995.00",
        },
        {
            id: 18,
            src: "../images/product-images/image18.png",
            name: "Sonata Poze Quartz Analog Silver Dial Mesh Strap Watch for Women",
            type: "Women's Watch",
            price: "810.00",
        },
        {
            id: 19,
            src: "../images/product-images/image19.png",
            name: "Titan Raga Delight Purple Dial Analog Metal Strap watch for Wome",
            type: "Women's Watch",
            price: "16,265.00",
        },
        {
            id: 20,
            src: "../images/product-images/image20.png",
            name: "Titan Raga Silver Mother Of Pearl Dial Analog Sterling Silver Strap watch for Women",
            type: "Women's Watch",
            price: "23,755.00",
        },
    ];

    productData.forEach((item) => {
        const li = document.createElement('li')
        li.innerHTML = `
        <div class= "productDetails">
        <img class= "product-image" src = "${item.src}">
        <p class= "product-name">${item.name}</p>
        <p class= "product-type">${item.type}</p>
        <p class= "product-price">₹${item.price}</p></div>
        <div class= "cartBtn">
        <button class= "addToCartBtn" data-id= "${item.id}">Add to cart</button>
        <button class= "buyNowBtn">Buy Now</button>
        </div>
        `
        productList.appendChild(li)
    })
    
})