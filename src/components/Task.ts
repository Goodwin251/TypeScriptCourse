export type Priority = 'low' | 'normal' | 'high';
export class Task {
    title: string;
    description: string;
    priority: Priority; // union type because of program specific, I understand that we didn't use that at lection
    completed: boolean;
    createdAt: string;
 
    //Added types

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
        const validPriorities: Priority[] = ['low', 'normal', 'high']; //Also array with union type to not let unknown param inside array
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