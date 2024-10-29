import { Priority } from '../types/index.js';

export class Task {
    title: string;
    description: string;
    priority: Priority;
    completed: boolean;
    createdAt: string;

    constructor(newtitle: string, description: string, priority: Priority = 'normal') {
        this.title = newtitle;
        this.description = description;
        this.priority = priority;
        this.completed = false;
        this.createdAt = new Date().toISOString();
    }

    markAsCompleted(): void {
        this.completed = true;
    }

    updatePriority(newPriority: Priority): void {
        const validPriorities: Priority[] = ['low', 'normal', 'high'];
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
