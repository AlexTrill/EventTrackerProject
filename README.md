# EventTrackerProject
## Project Description
This is a work in progress REST application with basic CRUD functionality. The database behind this project is different chess openings and their attributes.  Implements JavaScript, and through a single page allows the user to search, update, delete, or or create an opening. 

## Rest Route URI's
-  GET http://localhost:8082/api/index (returns a all of the current chess openings in the database)

- POST http://localhost:8082/api/openings (allows you to create a new opening and add it to the database)

- PUT http://localhost:8082/api/opening/1 (allows you to update an existing opening in the database via the openings ID)

- DELETE http://localhost:8082/api/openings/1 (allow you to delete an existing opening in the database via the openings ID )
