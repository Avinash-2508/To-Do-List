        function addTask() {
            let taskInput = document.getElementById("taskInput");
            let taskText = taskInput.value.trim();
            if (taskText === " ") return;
            
            let li = document.createElement("li");
            li.innerHTML = `${taskText} 
                <button class="edit-btn" onclick="editTask(this)">Edit</button> 
                <button class="delete-btn" onclick="deleteTask(this)">Delete</button>`;
            document.getElementById("taskList").appendChild(li);
            taskInput.value = "";
        }

        function editTask(button) {
            let newTask = prompt("Edit your task:", button.parentElement.firstChild.nodeValue.trim());
            if (newTask) button.parentElement.firstChild.nodeValue = newTask;
        }

        function deleteTask(button) {
            button.parentElement.remove();
        }
