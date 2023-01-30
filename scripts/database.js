const database = {
    guests: [
        {id: 1, firstName: "Elon", lastName: "Musk", parkAreaId: 1}, 
        {id: 2, firstName: "Jeff", lastName: "Bezos", parkAreaId: 1}, 
        {id: 3, firstName: "Namar", lastName: "da Silva Santos", parkAreaId: 2}, 
        {id: 4, firstName: "Dwayne", lastName: "Johnson", parkAreaId: 2}, 
        {id: 5, firstName: "Taylor", lastName: "Swift", parkAreaId: 3}, 
        {id: 6, firstName: "Bill", lastName: "Gates", parkAreaId: 3}, 
        {id: 7, firstName: "Justin", lastName: "Bieber", parkAreaId: 4}, 
        {id: 8, firstName: "Keanu", lastName: "Reeves", parkAreaId: 4}, 
        {id: 9, firstName: "Beyonce", lastName: "Knowles", parkAreaId: 5}, 
        {id: 10, firstName: "Morgan", lastName: "Freeman", parkAreaId: 5}, 
        {id: 11, firstName: "Snoop", lastName: "Dogg", parkAreaId: 6}, 
        {id: 12, firstName: "Martha", lastName: "Stewart", parkAreaId: 6},
    ],
    parkAreas: [
        {id: 1, name: "Lodge", location: "Northwest"}, 
        {id: 2, name: "Lost Wolf Hiking Trail", location: "North"}, 
        {id: 3, name: "Chamfort River", location: "Northeast"}, 
        {id: 4, name: "Gander River", location: "Southwest"}, 
        {id: 5, name: "Campgrounds", location: "South"}, 
        {id: 6, name: "Pine Bluff Trails", location: "Southeast"}, 
    ],
    services: [
        {id: 1, name: "Retaurant"},
        {id: 2, name: "Hotel"},
        {id: 3, name: "Lodging"},
        {id: 4, name: "Parking"},
        {id: 5, name: "Info"},
        {id: 6, name: "Picnic Grounds"},
        {id: 7, name: "Hiking"},
        {id: 8, name: "Rock Climbing"},
        {id: 9, name: "Fishing"},
        {id: 10, name: "Rafting"},
        {id: 11, name: "Canoeing"},
        {id: 12, name: "Office Park"},
        {id: 13, name: "Playgrounds"},
        {id: 14, name: "Food Vendors"},
        {id: 15, name: "Zip Lines"},
        

    ],
    servicedParks: [
        {id: 1, serviceId: 1, parkAreaId: 1},
        {id: 2, serviceId: 2, parkAreaId: 1},
        {id: 3, serviceId: 3, parkAreaId: 1},
        {id: 4, serviceId: 4, parkAreaId: 1},
        {id: 5, serviceId: 4, parkAreaId: 5},
        {id: 6, serviceId: 5, parkAreaId: 1},
        {id: 7, serviceId: 5, parkAreaId: 5},
        {id: 8, serviceId: 6, parkAreaId: 1},
        {id: 9, serviceId: 6, parkAreaId: 2},
        {id: 10, serviceId: 6, parkAreaId: 5},
        {id: 11, serviceId: 7, parkAreaId: 2},
        {id: 12, serviceId: 7, parkAreaId: 4},
        {id: 13, serviceId: 7, parkAreaId: 6},
        {id: 14, serviceId: 8, parkAreaId: 2},
        {id: 15, serviceId: 9, parkAreaId: 3},
        {id: 16, serviceId: 9, parkAreaId: 4},
        {id: 17, serviceId: 10, parkAreaId: 3},
        {id: 18, serviceId: 11, parkAreaId: 3},
        {id: 19, serviceId: 12, parkAreaId: 5},
        {id: 20, serviceId: 13, parkAreaId: 5},
        {id: 21, serviceId: 14, parkAreaId: 5},
        {id: 22, serviceId: 15, parkAreaId: 6},
        {id: 23, serviceId: 3, parkAreaId: 5}
    ]
}

    export const getGuests = () => {
        return database.guests.map(guest => ({...guest}))
    }

    export const getParkAreas = () => {
        return database.parkAreas.map(parkArea => ({...parkArea}))
    }

    export const getServices = () => {
        return database.services.map(service => ({...service}))
    }

    export const getServicedParks = () => {
        return database.servicedParks.map(servicedPark => ({...servicedPark}))
    }
