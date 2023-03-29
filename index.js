// Write your code here...
let dishPrice = document.querySelector('#dish-price')
let dishDescription = document.querySelector('#dish-description')
let dishName = document.querySelector('#dish-name')
let dishImage = document.querySelector('#dish-image')
let form = document.querySelector('#cart-form')
let cartSize = document.querySelector('#number-in-cart')

let body = document.querySelector('body')
// console.log(body)
document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/menu")
        .then((response) => response.json())
        .then((data) => {
            // console.log(data)
            menuGenerator(data)

            dishImage.src = data[0].image
            dishName.textContent = data[0].name
            dishDescription.textContent = data[0].description
            dishPrice.textContent = data[0].price
        })
    // console.log(data)
    form.addEventListener('submit',(e) => {
        e.preventDefault()
        cartSize.textContent = parseInt(cartSize.textContent) + parseInt(e.target['cart-amount'].value)
    })
})

function menuGenerator(menuItems){
    // console.log('it works')
    let menu = document.querySelector('#menu-items')
    menuItems.forEach(menuItem => {
        // console.log(menuItem)
        let itemName = document.createElement('span')
        itemName.textContent = menuItem.name
        itemName.addEventListener('click', function(){
            dishPrice.textContent = menuItem.price
            dishName.textContent = menuItem.name
            dishDescription.textContent = menuItem.description
            dishImage.src = menuItem.image
        })//if clicked, change bg and main menu item
        menu.append(itemName)
    });
}   