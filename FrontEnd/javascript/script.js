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

    cell.dataset.date = `${currentDate}/${month + 1}/${year}`;
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

// Add a click event listener to each cell in the calendar
let selectedCell = null;

// Add a click event listener to each cell in the calendar
grid.addEventListener('click', (event) => {
  if (event.target.matches('.cell')) {
    let selectedDate = event.target.dataset.date;
    if (selectedDate) {
      // Save the selected date
      localStorage.setItem('selectedDate', selectedDate);

      // Highlight the selected cell
      if (selectedCell) {
        selectedCell.classList.remove('selected');
      }
     event.target.classList.add('selected');
      selectedCell = event.target;
    }
  }
});


//to do list
const newTaskInput = document.getElementById('new-task');
const taskPriority = document.getElementById('task-priority');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

//function to save data to local storage. This is called during event listener for addTaskButton
const saveData = () => {
  let tasks = [];
  for (let i = 0; i < taskList.children.length; i++) {
    let task = taskList.children[i];
    let priority = task.querySelector('.task-priority').value;
    let text = task.querySelector('span').innerText;
    let dueDate = task.querySelector('span:nth-child(2)').innerText;
    tasks.push({text: text, priority: priority, dueDate: dueDate});
  }
  tasks.sort((a, b) => Number(a.priority) - Number(b.priority));
  localStorage.setItem("data", JSON.stringify(tasks));
};

const addTask = (taskText, taskPriorityRating, dueDate) => {
  let taskItem = document.createElement('li');
  taskItem.className = 'task';
    taskItem.innerHTML = `
    <span style="width: 70%">${taskText}</span>
    <span style="width: 10%">${dueDate}</span>
    <select style="width: 10%" class="task-priority" type="text" data-priority>
      <option ${taskPriorityRating === '1' ? 'selected' : ''}>1</option>
      <option ${taskPriorityRating === '2' ? 'selected' : ''}>2</option>
      <option ${taskPriorityRating === '3' ? 'selected' : ''}>3</option>
      <option ${taskPriorityRating === '4' ? 'selected' : ''}>4</option>
    </select>
    <button class="delete">Delete</button>
    <button class="complete">Complete</button>
    `;
  taskList.appendChild(taskItem);
  taskItem.querySelector('.delete').addEventListener('click', () => {
    taskItem.remove();
    saveData();
  });
  taskItem.querySelector('.task-priority').addEventListener('change', () => {
    saveData();
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
    showTask();
  });
    taskItem.querySelector('.complete').addEventListener('click', () => {
  taskItem.querySelector('span').style.textDecoration = "line-through";
  taskItem.querySelector('span').style.color = "grey";
  
  // Find the index of the task in the tasks array
  let tasks = JSON.parse(localStorage.getItem("data"));
  let taskIndex = tasks.findIndex(t => t.text === taskText && t.dueDate === dueDate);
  
  // Remove the task from the tasks array
  if (taskIndex !== -1) {
    tasks[taskIndex].completed = true;
    localStorage.setItem("data", JSON.stringify(tasks));
    taskItem.querySelector('span').style.textDecoration = "line-through";
    taskItem.querySelector('span').style.color = "grey";
    taskItem.remove();
}
    //tasks.splice(taskIndex, 1);
  
  // Update the tasks in local storage
  localStorage.setItem("data", JSON.stringify(tasks));
  
  // Remove the task from the task list
  taskItem.remove();
});


}

addTaskButton.addEventListener('click', () => {
  const taskText = newTaskInput.value.trim();
  const taskPriorityRating = taskPriority.value.trim();
  let dueDate = localStorage.getItem('selectedDate');
  if (taskText && dueDate) {
    addTask(taskText, taskPriorityRating, dueDate);
    newTaskInput.value = '';
    saveData();
  } else {
    return;
  }
});

//this retrieves data from storage 
const showTask = () => {
  let tasks = JSON.parse(localStorage.getItem("data"));
  if (tasks) {
    tasks = tasks.filter(task => !task.completed);  // Filter out the completed tasks
    tasks.forEach(task => {
            addTask(task.text, task.priority, task.dueDate);
    });
  }
};

//this ensures that any previous tasks remain on the list even upon refresh
showTask();