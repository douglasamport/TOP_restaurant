import { createAndClass } from "./helper";
import copy from '../content/copy.json'

function cusinepage() {
    let container = createAndClass('div', ['cusinepage-container', 'hidden'], 'cusinepageWrapper')

    let textContainer = createAndClass('div', ['text-container'], 'cusinetextWrapper')

    let header = createAndClass('h1', ['hp-heading'])
    header.textContent = copy.cusinepageHeader

    let description = createAndClass('p', ['hp-copy'])
    description.textContent = copy.cusinepageCopy

    
    textContainer.appendChild(header)
    textContainer.appendChild(description)

    container.appendChild(textContainer)



    return container
}

export { cusinepage }

