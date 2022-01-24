function createAndClass(type='div', cls=null, id=null) { 
    let element = document.createElement(type)
    if (typeof cls == 'string') {
        element.classList.add(cls)
    }
    // console.log(Array.isArray(cls), 'this one')
    if (Array.isArray(cls)) {
        cls.forEach(itm => element.classList.add(itm))
    }
    if (typeof id == 'string') {
        element.id = id
    }
    return element
}


export { createAndClass }