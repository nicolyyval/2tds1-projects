class Task {
    constructor(id, title, status){
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
}
 const veryBigTaskList = new TaskList();
 function createTask(){
    const taskTitle = document.getElementById("newTask").value;
    const task = new Task(1, taskTitle, false);
    veryBigTaskList.addTask(task);
 }