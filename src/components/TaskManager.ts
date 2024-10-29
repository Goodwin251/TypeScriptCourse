import { Task, Priority } from './Task.js'

export class TaskManager {
    tasks: Task[]; // array type

    constructor() {
        this.tasks = [];
    }

    addTask(title: string, description: string, priority: Priority): void {
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

    updateTaskPriority(title: string, newPriority: Priority): void {
        const task = this.tasks.find(task => task.title === title);
        if (task) {
            try {
                task.updatePriority(newPriority);
            } catch (error) {
                console.log(error);
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


