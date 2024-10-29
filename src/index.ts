import { TaskManager } from './components/TaskManager.js'
import { Priority } from './components/Task.js'

// Some usage to show how it can work:
const taskManager = new TaskManager();

if (typeof window == "undefined") { //NodeJS or browser?
    // Some usage to show how it can work:
    const taskManager = new TaskManager();
    taskManager.addTask('Buy groceries', 'Milk, Eggs, Bread', 'high');
    taskManager.addTask('Walk the dog', 'Evening walk', 'normal');
    taskManager.addTask('Study TypeScript', 'Complete the module on types', 'high');

    taskManager.listTasks();

    taskManager.markTaskAsCompleted('Buy groceries');
    taskManager.listCompletedTasks();
    taskManager.listPendingTasks();

    taskManager.updateTaskPriority('Walk the dog', 'low');
    taskManager.listTasks();

    taskManager.clearAllTasks();
    taskManager.listTasks();;
}
else {
    const windowRef = typeof window !== 'undefined' ? window : new Window();

    const documentRef = typeof document !== 'undefined' ? document : new Document();
    // DOM elements
    const taskTitleInput = documentRef.getElementById('task-title') as HTMLInputElement;
    const taskDescInput = documentRef.getElementById('task-desc') as HTMLInputElement;
    const taskPrioritySelect = documentRef.getElementById('task-priority') as HTMLSelectElement;
    const addTaskBtn = documentRef.getElementById('add-task-btn') as HTMLButtonElement;
    const taskTableBody = documentRef.getElementById('task-table-body') as HTMLTableSectionElement;
    const clearCompletedBtn = document.getElementById('clear-completed-btn');


    //Add row in task table
    function addTaskRow(name: string, description: string, priority: Priority, createdAt: string, completed: string) {

        const row = documentRef.createElement('tr');

        const nameCell = documentRef.createElement('td');
        nameCell.textContent = name;
        const descriptionCell = documentRef.createElement('td');
        descriptionCell.textContent = description;

        const priorityCell = documentRef.createElement('td');
        priorityCell.textContent = priority;

        const dateCell = documentRef.createElement('td');
        dateCell.textContent = createdAt;

        const completionCell = documentRef.createElement('td');
        completionCell.textContent = completed;


        // Append cells to the row
        row.appendChild(nameCell);
        row.appendChild(descriptionCell);
        row.appendChild(priorityCell);
        row.appendChild(dateCell);
        row.appendChild(completionCell);

        // Append the row to the table body
        taskTableBody.appendChild(row);

        switch (priority) {
            case "low":
                row.className = "table-info";
                break;
            case "normal":
                row.className = "table-warning";
                break; 
            case "high":
                row.className = "table-danger";
                break;
            default:
                break;
        }

        if(completed == "Completed"){
            row.className = "table-success";
        }
        return row;
    }


    // Helper function to render tasks in the DOM
    function renderTasks(): void {
        taskTableBody.replaceChildren();
        taskManager.tasks.forEach(task => {
            const row = addTaskRow(task.title, task.description, task.priority, task.createdAt, task.completed ? 'Completed' : 'Pending');
            row.children[4]?.addEventListener('click', () => {
                taskManager.markTaskAsCompleted(task.title);
                renderTasks();
            });
        });
    }

    // Event listener for adding a task
    addTaskBtn.addEventListener('click', () => {
        const title = taskTitleInput.value;
        const description = taskDescInput.value;
        const priority = taskPrioritySelect.value as 'low' | 'normal' | 'high';

        if (title && description) {
            taskManager.addTask(title, description, priority);
            renderTasks();
            taskTitleInput.value = '';
            taskDescInput.value = '';
        }
        else {
            windowRef.alert('Please enter both a title and description.');
        }
    });

    clearCompletedBtn?.addEventListener('click', () => {
        clearCompletedTasks();
        renderTasks();
    });

    function clearCompletedTasks(): void {
        const rows = Array.from(taskTableBody.rows); // Get all rows from the table body
        rows.forEach((row) => {
            const taskStatusCell = row.cells[4]; // Assuming the "Completed" status is in the 4th column
            const isCompleted = taskStatusCell.textContent === 'Completed'; // Adjust if using a different indicator
            if (isCompleted && row.cells[0].textContent !== null) {
                taskManager.removeTask(row.cells[0].textContent);
                taskTableBody.removeChild(row); // Remove the row if the task is completed
            }
        });
    }

    // Initial render
    renderTasks();
}