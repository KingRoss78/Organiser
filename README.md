# Organiser

Organiser for day to day tasks. This is built speciically for pension puposes. The home page includes
a list of definitions, though this is generated using a `C#` web api. Requires `dotnet` install to run the definition.
The list only shows up on server once `dotnet run` is triggered. 

### Calculator
The javaScript file uses a class as a template for the instance of Calculator seen on the HTML page. 
Note: Sometimes, the divide symbol results in an `Ã·` and this appears to be due to a character encoding issue.

### To Do List
This list uses `localStorage` to store tasks input by the user. The user can then add a priority between 1 - 4, and change tasks after they have been added to the list.
The user can also click a cell within the calendar to add a date to the specified task.

### Contact form 
Makes use of Node.js and SQL to push data input into HTML page and ad it to a SQL database. 

### Additional Files
You can see examples of SQL in here that I have covered during the course, as well as basic use of JEST that we covered. 

