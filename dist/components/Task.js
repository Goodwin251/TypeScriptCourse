export class Task {
    title;
    description;
    priority; // union type because of program specific, I understand that we didn't use that at lection
    completed;
    createdAt;
    //Added types
    constructor(newtitle, description, priority = 'normal') {
        this.title = newtitle;
        this.description = description;
        this.priority = priority;
        this.completed = false;
        this.createdAt = new Date().toISOString();
    }
    markAsCompleted() {
        this.completed = true;
    }
    updatePriority(newPriority) {
        const validPriorities = ['low', 'normal', 'high']; //Also array with union type to not let unknown param inside array
        if (validPriorities.includes(newPriority)) {
            this.priority = newPriority;
        }
        else {
            throw new Error('Invalid priority level.');
        }
    }
    toString() {
        return `${this.title} [${this.priority}] - ${this.completed ? 'Completed' : 'Pending'}`;
    }
}
