class Task {
    title: string;
    description: string;
    priority: 'low' | 'normal' | 'high'; // union type because of program specific, I understand that we didn't use that at lection
    completed: boolean;
    createdAt: string;
 
    //Added types

    constructor(title: string, description: string, priority: 'low' | 'normal' | 'high' = 'normal') {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.completed = false;
        this.createdAt = new Date().toISOString();
    }

    markAsCompleted(): void {
        this.completed = true;
    }

    updatePriority(newPriority: 'low' | 'normal' | 'high'): void {
        const validPriorities: Array<'low' | 'normal' | 'high'> = ['low', 'normal', 'high']; //Also array with union type to not let unknown param inside array
        if (validPriorities.includes(newPriority)) {
            this.priority = newPriority;
        } else {
            throw new Error('Invalid priority level.');
        }
    }

    toString(): string {
        return `${this.title} [${this.priority}] - ${this.completed ? 'Completed' : 'Pending'}`;
    }
}

class TaskManager {
    tasks: Task[]; // array type

    constructor() {
        this.tasks = [];
    }

    addTask(title: string, description: string, priority: 'low' | 'normal' | 'high'): void {
        const task = new Task(title, description, priority);
        this.tasks.push(task);
    }

    removeTask(title: string): void {
        this.tasks = this.tasks.filter(task => task.title !== title);
    }

    markTaskAsCompleted(title: string): void {
        const task = this.tasks.find(task => task.title === title);
        if (task) {
            task.markAsCompleted();
        } else {
            console.log('Task not found.');
        }
    }

    updateTaskPriority(title: string, newPriority: 'low' | 'normal' | 'high'): void {
        const task = this.tasks.find(task => task.title === title);
        if (task) {
            try {
                task.updatePriority(newPriority);
            } catch (error) {
                console.log(error.message);
            }
        } else {
            console.log('Task not found.');
        }
    }

    listTasks(): void {
        if (this.tasks.length === 0) {
            console.log('No tasks available.');
            return;
        }

        console.log('Task List:');
        this.tasks.forEach(task => {
            console.log(task.toString());
        });
    }

    listPendingTasks(): void {
        const pendingTasks = this.tasks.filter(task => !task.completed);
        if (pendingTasks.length === 0) {
            console.log('No pending tasks.');
            return;
        }

        console.log('Pending Tasks:');
        pendingTasks.forEach(task => {
            console.log(task.toString());
        });
    }

    listCompletedTasks(): void {
        const completedTasks = this.tasks.filter(task => task.completed);
        if (completedTasks.length === 0) {
            console.log('No completed tasks.');
            return;
        }

        console.log('Completed Tasks:');
        completedTasks.forEach(task => {
            console.log(task.toString());
        });
    }

    clearAllTasks(): void {
        this.tasks = [];
        console.log('All tasks cleared.');
    }
}

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
taskManager.listTasks();
