// Get DOM elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  // Create list item (li)
  const li = document.createElement('li');
  li.textContent = taskText;

  // Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  // Mark as completed on click
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Append delete button to list item
  li.appendChild(deleteBtn);

  // Append the new task to the task list
  taskList.appendChild(li);

  // Clear input field
  taskInput.value = '';
}

// Event listener for the "Add Task" button
addTaskBtn.addEventListener('click', addTask);

// Allow adding tasks by pressing the Enter key
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});
