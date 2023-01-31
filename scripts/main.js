//wireframe link: https://www.figma.com/file/AEVT8bq0grZMh2MpWVz4nk/Cider-Falls-Wireframe?node-id=0%3A1&t=FvZLnGYjX4AczMmz-0

import { ParkAreas } from "./ParkAreas.js"
import { Guests } from "./Guests.js"
import { Services } from "./Services.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `


<article class="services">
    <h2>Park Services</h2>
    <div class="serviceList">${Services()}</div>
</article>

<section class="area-guest-container">
<article class="parkAreas">
    <h2>Park Areas</h2>
    <section class="detail--column">
    ${ParkAreas()}
    </section>
</article>

<article class="guestList">
    <h2>Current Guest List</h2>
    ${Guests()}
</article>
</section>
`

mainContainer.innerHTML = applicationHTML

