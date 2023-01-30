import { getParkAreas, getGuests } from "./database.js";

const parkAreas = getParkAreas();
const guests = getGuests();

//click event to count guests in any given park area
document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  //if id created in HTML matches "parkArea" when clicked
  if (itemClicked.id.startsWith("parkArea")) {
    const [, parkAreaId] = itemClicked.id.split("--");
//iterate through parkAreas
    for (const area of parkAreas) {
        //if PK matches integer from HTML
      if (area.id === parseInt(parkAreaId)) {
        //create constant to hold value created by invoking function to count guests
        const guestsPresent = guestsInArea(area);
        window.alert(
            //string that tells how many guests are in any given area.
          `${area.name} currently welcomes ${guestsPresent} guests.`
        );
      }
    }
  }
});


//create function to iterate through park areas and return string
export const ParkAreas = () => {
  //set empty HTML string
  let parkAreaHTML = "";
  // iterate through parkAreas variable
  for (const area of parkAreas) {
    parkAreaHTML += `<h2 class="headline--areas" id="parkArea--${area.id}">${area.name}</h2>`;
  }
  return parkAreaHTML;
};


//create function to match parkArea.id and fk on guests and return the count of all guests in an area.
const guestsInArea = (parkArea) => {
  //create variable set to 0
  let guestsPresent = 0;

  for (const guest of guests) {
    if (guest.parkAreaId === parkArea.id) {
      guestsPresent++;
    }
  }
  return guestsPresent;
};
