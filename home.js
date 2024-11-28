document.addEventListener('DOMContentLoaded', () => {
    //Accessing DOM---
    const carousel = document.querySelector('.carousel');
    const pickImages = document.querySelectorAll('.bestbuy');
    const brandsImages = document.querySelectorAll('.brands')
    const shopbanner=document.querySelectorAll('.shop-category');

    //adding click Event Listeners---
    carousel.addEventListener('click', openProductPage)

    pickImages.forEach(((eachImage) => {
        eachImage.addEventListener('click', openProductPage)
    }))

    brandsImages.forEach((eachBrandImage => {
        for(const eachBrandImageChildren of eachBrandImage.children){
            eachBrandImageChildren.addEventListener('click', openProductPage)
        }
    }))
    shopbanner.forEach((eachBanner=>{
        eachBanner.addEventListener('click', openProductPage)
    }))

    //functions---
    function openProductPage(){
        window.location.href = "product.html"
    }

})