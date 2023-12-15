# Organiser
Organiser for day to day tasks. This is built speciically for pension puposes. The home page includes
a list of definitions, though this is generated using a `C#` web api. Requires `dotnet` install to run the definition.
The list only shows up on server once `dotnet run` is triggered. 

# Calculator
The javaScript file uses a class as a template for the instance of Calculator seen on the HTML page.

# To Do List
This list uses `localStorage` to store tasks input by the user. The user can then add a priority between 1 - 4, and change tasks after they have been added to the list.
The user can also click a cell within the calendar to add a date to the specified task.

# Contact form 
You will need to run the command `npm install express body-parser mysql`. You will also need
to replace 'localhost', 'root', 'password', and 'contact_form_db' with your actual database host,
user, password, and database name. Also, make sure to handle errors and edge cases appropriately
in your actual application.
