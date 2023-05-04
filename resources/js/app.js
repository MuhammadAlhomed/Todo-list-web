addTaskBtn = document.getElementById("addTaskBtn");
taskList = document.getElementById("taskList");
addTaskBtn.addEventListener("click", addTaskBtnPress);

let id = 1;
function addTask(taskName) {
    // Remove "No Items" text
    if (id == 1) {
        taskList.children[0].remove();
    }

    // Create List Item
    let newTask = document.createElement('li');
    taskList.appendChild(newTask);

    let div = document.createElement('div');
    newTask.appendChild(div);
    div.innerHTML = `
    <div class="hstack mb-2 mt-2 ms-4 me-4 justify-content-between">
        <div>
            <span class="font-monospace" id="taskIndex${id}">${id}- </span>
            <label class="form-check-label" for="c${id}" id="taskName${id}">${taskName}</label>
        </div>
        <input class="form-check-input" type="checkbox" id="c${id}">
    </div>`;
    newTask.appendChild(document.createElement('hr'));

    // Subscribe the inputfield "Task name" event listener
    //let inputField = document.getElementById(`task${id}`);
    //inputField.addEventListener("focusout", e => {setTask(e, id);});


    // Increment the id
    id++;
}

function addTaskBtnPress() {
    newTaskTextBox = document.getElementById("newTaskName");

    addTask(newTaskTextBox.value)
    
    newTaskTextBox.value = ""
}