/*
    - Import the getServices & getParkAreas functions from the database
    - Declare a variable, services & parkAreas, set equal to functions to invoke them
    - Create & export a function, Services, that:
        > Declares servicesHTMl variable set equal to a string with <ul>
        > Iterates the mapped services array and places each service in an HTML <li>
        > Closes </ul>
        > Returns the HTML string
    -Create a funciton that iterates the parkAreas array and matches
        the parkArea.id to the service.parkAreaId
    - Create a click Event Listener that when a service is clicked,
        a window alert appears with a list of all of the areas that support the service
*/

import { getServices, getParkAreas, getServicedParks } from "./database.js"

const services = getServices()
const parkAreas = getParkAreas()
const servicedParks = getServicedParks()

export const Services = () => {
    let servicesHTML = `<ul>`

    for (const service of services) {
        servicesHTML += `<li id="service--${service.id}">${service.name}</li>`
    }

    servicesHTML += `</ul>`
    return servicesHTML
}

const findParkArea = (matchingService) => {
    let matchingPark = ``

        for (const servicedPark of servicedParks) {
        if (matchingService.id === servicedPark.serviceId) {
            for (const park of parkAreas) {
                if (park.id === servicedPark.parkAreaId) {
                    matchingPark += `${park.name}\n`
                }
            }
        }
    }
    return matchingPark
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("service")) {
            const [, serviceId] = itemClicked.id.split("--")

            let matchingService = null
            for (const service of services) {
                if (parseInt(serviceId) === service.id) {
                    matchingService = service
                }
            }
            const matchingPark = findParkArea(matchingService)
            window.alert(`${matchingPark}`)
        }
    }
)

/*if (matchingPark) {
    matchingPark += `\n${park.name}`
} else {
    matchingPark = park.name
}*/