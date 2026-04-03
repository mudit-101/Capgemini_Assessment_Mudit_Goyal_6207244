const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const filterButtons = document.querySelectorAll(".filters button");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

// Generate Unique ID
function generateId() {
    return Date.now().toString();
}

// Render Tasks
function renderTasks() {
    taskList.innerHTML = "";

    const filteredTasks = tasks.filter(task => {
        if (currentFilter === "completed") return task.completed;
        if (currentFilter === "pending") return !task.completed;
        return true;
    });

    filteredTasks.forEach(task => {
        const li = document.createElement("li");
        if (task.completed) li.classList.add("completed");

        const span = document.createElement("span");
        span.textContent = task.text;

        // Toggle complete
        span.addEventListener("click", () => {
            toggleTask(task.id);
        });

        // Edit
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", () => {
            const newText = prompt("Edit task:", task.text);
            if (newText !== null && newText.trim() !== "") {
                updateTask(task.id, newText.trim());
            }
        });

        // Delete
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            deleteTask(task.id);
        });

        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

// Add Task
function addTask() {
    const text = taskInput.value.trim();
    if (!text) return;

    const newTask = {
        id: generateId(),
        text: text,
        completed: false
    };

    tasks.push(newTask);
    taskInput.value = "";
    saveTasks();
}

// Toggle
function toggleTask(id) {
    tasks = tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
    );
    saveTasks();
}

// Update
function updateTask(id, newText) {
    tasks = tasks.map(task =>
        task.id === id ? { ...task, text: newText } : task
    );
    saveTasks();
}

// Delete
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
}

// Save
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

// Events
addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
});

// Filters + Active Highlight
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentFilter = button.dataset.filter;

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        renderTasks();
    });
});

renderTasks();