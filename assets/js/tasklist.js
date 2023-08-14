class Task {
    constructor(id, title, status) {
        this.id = id;
        this.title = title;
        this.status = status;
    }
}

class TaskList {
    constructor() {
        this.tasks = [];
    }


    addTask(param) {
        this.tasks.push(param);
    }

    removeTask(id) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
    }

    markTask(id) {
        this.tasks.forEach(task => {
            if (task.id == id) {
                task.status = !task.status;
            }
        });
        document.getElementById(id + "-button").classList.toggle("taskDone");
    }
}

const veryBigList = new TaskList();

function createTask() {
    const taskTitle = document.getElementById("inp").value;

    const task = new Task(generateId(), taskTitle, false);

    veryBigList.addTask(task);

    console.log(veryBigList);
    renderTasks();
}

function generateId() {
    return Math.floor(Math.random() * 9999);
}

function renderTasks() {
    let element = "";

    veryBigList.tasks.forEach(task => {
        element += ` <li id="${task.id}">
        <span id="${task.id}--title">${task.title}</span>
        <div>
        <button id="${task.id}--button" class="action"
            onclick="doneTask(${task.id})"><i class="fa-solid fa-check" style="color: #000000;"></i></i>
            </button>
            <button class="action edit" onclick="deleteTask(${task.id})"><i class="fa-solid fa-trash" style="color: #000000;"></i></button>
            </div>
            </li>`
    });

    document.getElementById("add").innerHTML = element;
}

function deleteTask(id) {
    veryBigList.removeTask(id);
    renderTasks();
}

function doneTask(id) {
    veryBigList.markTask(id);
}

