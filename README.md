<!-- # cider-falls-team-good-team -->
// Wireframe: https://www.figma.com/file/AEVT8bq0grZMh2MpWVz4nk/Cider-Falls-Wireframe?node-id=0%3A1&t=ljxXzWVM8aU8ttlF-0
//ERD: https://dbdiagram.io/d/63d7ea3e296d97641d7d16cb

This project is more complex than either DeShawn's Dog Walking or Brewed Awakenings, and you are not provided with any initial, boilerplate code.

It is crucial, therefore, that you work on designing the algorithm before you write any code.

What are the main resources (i.e. tables)? Design your ERD first.
What are the properties of each resource?
What is the relationship between the resources? If it's many-to-many, what additional data must you design in your ERD?
Which modules should you create?
What is the responsibility of each module?
What functions should be in which modules?
What is the responsibility of each function?
What should each function return?
What is the spcific algorithm for each function? Does the function need parameters? Should it return something?
Do all of this before you write a single line of code, or you could end up wasting hours of time writing code only to find that you need to throw it all away because you didn't design the algorithm first.

a. Create HTML foundation for site
b. Establish database and properties for each object
    - Export functionS that map each needed array

c. Create modules:
    - guests.js
        - Import guest and parkArea maps from database
        - Create constants to pull from maps
        - Build function that populates list of names for HTML string
            a. Iterate through the guest array
            b. For each guest, build HTML ordered list item with first and last name
        - Create listener event that tells what parkArea guest is currently in
            a. Iterate guest array for parkAreaId matching parkArea.id
            b. When there is a match, return parkArea.name
    - parkAreas.js
        - Import parkArea and guest maps from database
        - Create constants to pull from maps
        - Populates parkAreas for HTML string
            a. Iterate through the parkAreas array
            b. For each parkArea, build HTML ordered list item with name as h2
        - Create listener event that shows how many people are currently in the parkArea
            a. Iterate guest array for parkAreaId matching parkArea.id
            b. When there is a match, return count of guest
    - services.js
        - Populate services and parkAreas for HTML string
        - Create constants to pull from maps
            a. Iterate through the services array
            b. For each service, build HTML unordered list item with service name
        - Create listener event that tells what parkArea holds the service
            a. Iterate service array for parkAreaId matching parkArea.id
            b. When there is a match, return HTML string of all matching services 

