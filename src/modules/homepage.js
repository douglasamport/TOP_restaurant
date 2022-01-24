import { createAndClass } from "./helper";
import copy from '../content/copy.json'

function homepage() {
    let container = createAndClass('div', ['homepage-container'], 'homepageWrapper')

    let textContainer = createAndClass('div', ['text-container'], 'homepageWrapper')

    let header = createAndClass('h1', ['hp-heading'])
    header.textContent = copy.homepageHeader

    let description = createAndClass('p', ['hp-copy'])
    description.textContent = copy.homepageCopy

    let resButton = createAndClass('button', ['button', 'homepageButton'], 'reservationButton')
    resButton.textContent = "Reservation"

    textContainer.appendChild(header)
    textContainer.appendChild(description)

    container.appendChild(resButton)
    container.appendChild(textContainer)



    return container
}

export { homepage }

//createAndClass('div', [])