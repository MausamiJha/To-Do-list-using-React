document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskInput = document.getElementById('taskInput');
    const prioritySelect = document.getElementById('prioritySelect');
    const taskList = document.getElementById('taskList');
    const completedList = document.getElementById('completedList');

    // Add task
    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        const priority = prioritySelect.value;

        if (taskText === '') return;

        // Create task element
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <div>
                <input type="checkbox">
                <span>${taskText}</span>
                <span class="priority ${priority}">${priority}</span>
            </div>
            <button class="delete-btn">Delete</button>
        `;

        // Add functionality to checkbox and delete button
        const checkbox = taskItem.querySelector('input[type="checkbox"]');
        const deleteBtn = taskItem.querySelector('.delete-btn');

        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                moveToCompleted(taskItem);
            }
        });

        deleteBtn.addEventListener('click', () => {
            taskItem.remove();
        });

        taskList.appendChild(taskItem);
        taskInput.value = ''; // Clear input
    });

    // Move task to completed
    function moveToCompleted(taskItem) {
        taskItem.querySelector('input[type="checkbox"]').disabled = true;
        completedList.appendChild(taskItem);
    }
});
