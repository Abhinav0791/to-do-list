document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('addTaskButton');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            ${taskText}
            <button class="remove">X</button>
        `;

        li.querySelector('.remove').addEventListener('click', () => {
            taskList.removeChild(li);
        });

        taskList.appendChild(li);
        taskInput.value = '';
    });

    // Allow pressing Enter to add task
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskButton.click();
        }
    });
});
