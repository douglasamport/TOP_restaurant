import './style.css'
import { navagation } from './modules/navagation'
import { homepage } from './modules/homepage'
import { cusinepage } from './modules/cusine'
import { contactpage } from './modules/contact'



let content = document.createElement('div')
content.id = 'content'
document.querySelector('body').appendChild(content)

let nav = navagation()
content.appendChild(navagation(nav))

let home = homepage()
content.appendChild(homepage())

let cusine = cusinepage()
content.appendChild(cusinepage())

let contact = contactpage()
content.appendChild(contactpage())



// Links and Event listeners below this line -----

let homeLink = document.getElementById('homeLink')
let cusineLink = document.getElementById('cusineLink')
let contactLink = document.getElementById('contactLink')

home = document.getElementById('homepageWrapper')
cusine = document.getElementById('cusinepageWrapper')
contact = document.getElementById('contactpageWrapper')

homeLink.addEventListener('click', () => {
    home.classList.remove('hidden')
    cusine.classList.add('hidden')
    contact.classList.add('hidden')
    console.log('clicked')
});

cusineLink.addEventListener('click', () => {
    home.classList.add('hidden')
    cusine.classList.remove('hidden')
    contact.classList.add('hidden')
    console.log('clicked')
});

contactLink.addEventListener('click', () => {
    home.classList.add('hidden')
    cusine.classList.add('hidden')
    contact.classList.remove('hidden')
    console.log('clicked')
});






