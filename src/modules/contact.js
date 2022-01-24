import { createAndClass } from "./helper";
import copy from '../content/copy.json'

function contactpage() {
    let container = createAndClass('div', ['contactpage-container', 'hidden'], 'contactpageWrapper')

    let textContainer = createAndClass('div', ['text-container'], 'contacttextWrapper')

    let header = createAndClass('h1', ['hp-heading'])
    header.textContent = copy.contactpageHeader

    let description = createAndClass('p', ['hp-copy'])
    description.textContent = copy.contactpageCopy

    
    textContainer.appendChild(header)
    textContainer.appendChild(description)

    container.appendChild(textContainer)



    return container
}

export { contactpage }

