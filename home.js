document.addEventListener('DOMContentLoaded', () => {
    //Accessing DOM---
    const carousel = document.querySelector('.carousel');
    const pickImages = document.querySelectorAll('.bestbuy');
    const brandsImages = document.querySelectorAll('.brands')
    


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

    //functions---
    function openProductPage(){
        console.log('reaching')
    }
})