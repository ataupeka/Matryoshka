let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
   searchForm.classList.toggle('search-form__active');
   cart.classList.remove('shopping-cart__active');
   loginForm.classList.remove('login-form__active');
   navbar.classList.remove('navbar__active');

}


let cart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () =>{
   cart.classList.toggle('shopping-cart__active');
   searchForm.classList.remove('search-form__active');
   loginForm.classList.remove('login-form__active');
   navbar.classList.remove('navbar__active');
   
}

let loginForm = document.querySelector('.login-form');
document.querySelector('#user-btn').onclick = () =>{
   loginForm.classList.toggle('login-form__active');
   searchForm.classList.remove('search-form__active');
   cart.classList.remove('shopping-cart__active');
   navbar.classList.remove('navbar__active');
   
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('navbar__active');
   searchForm.classList.remove('search-form__active');
   cart.classList.remove('shopping-cart__active');
   loginForm.classList.remove('login-form__active');
  
   
}


window.onscroll= () =>{
    searchForm.classList.remove('search-form__active');
    cart.classList.remove('shopping-cart__active');
    loginForm.classList.remove('login-form__active');
    navbar.classList.remove('navbar__active');
}



