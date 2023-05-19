let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
   searchForm.classList.toggle('search-form__active');
   
}

let cart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () =>{
   cart.classList.toggle('shopping-cart__active');
   
}

let loginForm = document.querySelector('.login-form');
document.querySelector('#user-btn').onclick = () =>{
   loginForm.classList.toggle('login-form__active');
   
}

