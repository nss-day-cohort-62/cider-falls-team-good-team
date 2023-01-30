//wireframe link: https://www.figma.com/file/AEVT8bq0grZMh2MpWVz4nk/Cider-Falls-Wireframe?node-id=0%3A1&t=FvZLnGYjX4AczMmz-0

import { ParkAreas } from "./ParkAreas.js"
import { Guests } from "./Guests.js"
import { Services } from "./Services.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `

<article class="services">
    <h2>Park Services</h2>
    ${Services()}
</article>

<article class="parkAreas">
    <section class="detail--column list details__parkAreas">
        ${ParkAreas()}
    </section>
</article>

<article class="guestList">
    <h2>Current Guest List</h2>
    ${Guests()}
</article>
`

mainContainer.innerHTML = applicationHTML

