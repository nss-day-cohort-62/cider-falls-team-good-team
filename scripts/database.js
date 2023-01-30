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
        {id: 1, name: "Retaurant", parkAreaId: 1},
        {id: 2, name: "Hotel", parkAreaId: 1},
        {id: 3, name: "Lodging", parkAreaId: 1},
        {id: 4, name: "Parking", parkAreaId: 1},
        {id: 5, name: "Parking", parkAreaId: 5},
        {id: 6, name: "Info", parkAreaId: 1},
        {id: 7, name: "Info", parkAreaId: 5},
        {id: 8, name: "Picnic Grounds", parkAreaId: 1},
        {id: 9, name: "Picnic Grounds", parkAreaId: 2},
        {id: 10, name: "Picnic Grounds", parkAreaId: 5},
        {id: 11, name: "Hiking", parkAreaId: 2},
        {id: 12, name: "Hiking", parkAreaId: 4},
        {id: 13, name: "Hiking", parkAreaId: 6},
        {id: 14, name: "Rock Climbing", parkAreaId: 2},
        {id: 15, name: "Fishing", parkAreaId: 3},
        {id: 16, name: "Fishing", parkAreaId: 4},
        {id: 17, name: "Rafting", parkAreaId: 3},
        {id: 18, name: "Canoeing", parkAreaId: 3},
        {id: 19, name: "Office Park", parkAreaId: 5},
        {id: 20, name: "Playgrounds", parkAreaId: 5},
        {id: 21, name: "Food Vendors", parkAreaId: 5},
        {id: 22, name: "Zip Lines", parkAreaId: 6},
        {id: 23, name: "Lodging", parkAreaId: 5},

    ],
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
