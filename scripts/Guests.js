import { getGuests, getParkAreas } from "./database.js";

const guests = getGuests()
const parkAreas = getParkAreas()

export const Guests = () => {
    let html = `<ul>`
    for (const guest of guests) {
        html += `<li id="guest--${guest.id}">${guest.firstName} ${guest.lastName}</li>`
    }
    html += `</ul>`
    return html
}

const filteredParkAreaByGuest = (selectedGuest) => {
    let filteredParkArea = null
    for (const parkArea of parkAreas) {
        if (selectedGuest.parkAreaid === parkArea.id)
        filteredParkArea = parkArea
    }
    return filteredParkArea
}

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target
    if (itemClicked.id.startsWith("guest")) {
        const [, guestPrimaryKey] = itemClicked.id.split("--")
        for (const guest of guests) {
            if (guest.id === parseInt(guestPrimaryKey)) {
                const guestLocated = filteredParkAreaByGuest(guest)
                window.alert(`${guest.firstName} ${guest.lastName} is located in ${guestLocated.name}`)
            }
        }
    }
})