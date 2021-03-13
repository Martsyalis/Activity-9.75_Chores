You Will spend most of your time designing the server and its routes, and testing it using postman. You will have some tome to design a front-end for this aplication, but not enough time to make it look good or even decent.

Aplication design and requirments are perposefully vague. It will be up to you to make most of the desicions pertaining to the design and capabilities of the app.

The Aplication will help roommates organize chores. At a minimum it should be able to create, read, update, and delete chores. The particular shape of the chores model is up to you, but think it though and draw/write it out before begginig work on aplication. Shape of your data will inform and guide every other design choice you will make. example of a chore could look like this:

chores {
location: 'patio',
description: 'iron the dishes',
dateDue: 'first light on the equanox',
delegate: 'Dave2',
DrugsAllowed: true,
completed: false
}

But think carefully about how to insure your database will have the most usefull, secure, clean and informative data. use different data types, enums, custom validators and anything else you will find in the docs. Remember "garbage in, garbage out" (and the "out" part is your app);

You are not limited to one collection/schema, and are free and welcome to design additional schemas such as residents. But make sure there is an actuall reason to add a seperate schema.

Some examples of the routes you might want to build:

GET
/api/chores
/api/chores/123531  
/api/chores?type='water'
/api/chores/Dave2

POST
/api/chores
/api/resident

UPDATE
/api/chores/123531

DELETE
/api/chores/123531

You should test all routes and make sure they work by making requests to them through POSTMAN https://www.postman.com/

BONUS: 
  Create a rudamentary web interface that will allow user to see chores and add new ones through the website. (only do this once you have completed all your routes!!)