const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuhamicon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu')
const carritoCompras = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')

carritoCompras.addEventListener('click', toggleproductDetail)

menuhamicon.addEventListener('click', toggleMobileMenu);

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleproductDetail() {

    const isMobileMenuOpen = mobileMenu.classList.contains('inactive')
    const isDesktopMenuOpen = desktopMenu.classList.contains('inactive')

    if (!isMobileMenuOpen) {
        mobileMenu.classList.add('inactive')
    }

    if (!isDesktopMenuOpen) {
        desktopMenu.classList.add('inactive')
    }
    
    productDetail.classList.toggle('inactive')
}

function toggleDesktopMenu() {

    const isProductDetailOpen = productDetail.classList.contains('inactive')

    if (!isProductDetailOpen) {
        productDetail.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {

    const isProductDetailOpen = productDetail.classList.contains('inactive')

    if (!isProductDetailOpen) {
        productDetail.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive');
}

const productList = [];

productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'pc',
    price: 650,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'control',
    price: 380,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

// for (product of productList) {
//     const htmlCards = `<div class="product-card">
//     <img src= "${product.img}" >
//     <div class="product-info">
//     <div>
//     <p>${product.price}</p>
//     <p>${product.name}</p>
//     </div>
//     <figure>
//     <img src="./icons/bt_add_to_cart.svg" alt="">
//     </figure>
//     </div>`

// // // // //     const cardsContainer = document.querySelector('.cards-container');
// // // // //     cardsContainer.innerHTML += htmlCards
// // // // }

function renderProducts(arr) {
for (products of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', products.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + products.price;
    const productName = document.createElement('p')
    productName.innerText = products.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');

    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart)

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}
}

renderProducts(productList);
