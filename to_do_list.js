function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    // Create a new list item with the input value
    var li = document.createElement("li");
    var taskText = document.createTextNode(taskInput.value);
    li.appendChild(taskText);

    // Add delete button to the list item
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "❌";
    
    deleteButton.onclick = function() {
        li.remove();
    };
    li.appendChild(deleteButton);

    // Append the new list item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
}
