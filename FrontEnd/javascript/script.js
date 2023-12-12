//json data
fetch('index.json')
    .then(response => response.json())
    .then(data => console.log(data))

//calendar
// Get the current date
let today = new Date();

// Get the year, month and day
let year = today.getFullYear();
let month = today.getMonth();
let day = today.getDate();

// Get the name of the month
let monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
let monthName = monthNames[month];

// Get the name of the day
let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayName = dayNames[today.getDay()];

// Display the date and day in the header
document.getElementById("date").innerHTML = monthName + " " + day + ", " + year;
document.getElementById("day").innerHTML = dayName;

// Get the number of days in the month
let daysInMonth = new Date(year, month + 1, 0).getDate();

// Get the first day of the month
let firstDay = new Date(year, month, 1).getDay();

// Get the grid element
let grid = document.getElementById("grid");

// Create a variable to keep track of the current date
let currentDate = 1;

// Loop through the rows of the grid
for (let i = 0; i < 6; i++) {
  // Loop through the columns of the grid
  for (let j = 0; j < 7; j++) {
    // Create a cell element
    let cell = document.createElement("div");
    cell.className = "cell";

    // If the current date is within the month and after the first day
    if (currentDate <= daysInMonth && (i > 0 || j >= firstDay)) {
      // Set the cell text to the current date
      cell.innerHTML = currentDate;

      // If the current date is the same as today
      if (currentDate === day) {
        // Add the today class to the cell
        cell.className += " today";
      }

      // Increment the current date
      currentDate++;
    }

    // Append the cell to the grid
    grid.appendChild(cell);
  }
}

//to do list
const newTaskInput = document.getElementById('new-task');
const taskPriority = document.getElementById('task-priority');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const deleteButton = document.getElementsByClassName('.delete');

//function to save data to local storage. This is called during event listener for addTaskButton
const saveData = () => {
  localStorage.setItem("data", taskList.innerHTML);
};

//this retrieves data from storage 
const showTask = () => {
  taskList.innerHTML = localStorage.getItem("data");
};

//this ensures that any previous tasks remain on the list even upon refresh
showTask();

addTaskButton.addEventListener('click', () => {
  const taskText = newTaskInput.value.trim();
  const taskPriorityRating = taskPriority.value.trim();
  if (taskText) {
    let taskItem = document.createElement('li');
    taskItem.className = 'task';
    taskItem.innerHTML = `
    <input type="checkbox" class="complete-box">
      <span style="width: 90%">${taskText}</span>
      <select style="width: 10%" class="task-priority" type="text" selected="${taskPriorityRating}" data-priority>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>
      <button class="delete">Delete</button>
      `;
    taskList.appendChild(taskItem);
    newTaskInput.value = '';
    saveData();
  } else {
      return;
    }});

taskList.addEventListener('click', (event) => {
  if (event.target.matches('.delete')) {
    event.target.closest('.task').remove();
    localStorage.clear();
  } else if (event.target.matches('.completed')) {
  }});
