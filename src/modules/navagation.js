import{ createAndClass } from './helper'


function navagation() {
    let header = createAndClass('div', 'Nav-container')
    let ul = createAndClass('ul', ['nav-links', 'flex-row'])
    let links = [['Home', 'homeLink'], ['Cusine', 'cusineLink'], ['Contact', 'contactLink'] ]
    createAndAppendLi(ul, links)
    header.appendChild(ul)
    return header
}

function createAndAppendLi(parent, items){
    items.forEach( (itm) => {
        let li = document.createElement('li')
        li.textContent = itm[0]
        li.id = itm[1]
        li.classList.add('link', 'navlink')
        parent.appendChild(li)
    })
}

export { navagation }