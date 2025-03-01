document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    if (title && description) {
        addTaskToPending(title, description);
        document.getElementById('taskForm').reset();
    }
});

function addTaskToPending(title, description) {
    const pendingTasksTable = document.getElementById('pendingTasks').getElementsByTagName('tbody')[0];
    const newRow = pendingTasksTable.insertRow();

    const titleCell = newRow.insertCell(0);
    const descriptionCell = newRow.insertCell(1);
    const actionsCell = newRow.insertCell(2);

    titleCell.textContent = title;
    descriptionCell.textContent = description;

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', function() {
        moveTaskToCompleted(newRow);
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', function() {
        newRow.remove();
    });

    actionsCell.appendChild(completeButton);
    actionsCell.appendChild(deleteButton);
}

function moveTaskToCompleted(row) {
    const completedTasksTable = document.getElementById('completedTasks').getElementsByTagName('tbody')[0];
    const newRow = completedTasksTable.insertRow();

    const titleCell = newRow.insertCell(0);
    const descriptionCell = newRow.insertCell(1);
    const actionsCell = newRow.insertCell(2);

    titleCell.textContent = row.cells[0].textContent;
    descriptionCell.textContent = row.cells[1].textContent;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', function() {
        newRow.remove();
    });

    actionsCell.appendChild(deleteButton);
    row.remove();
}