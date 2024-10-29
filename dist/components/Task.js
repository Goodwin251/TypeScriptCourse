export class Task {
    title;
    description;
    priority;
    completed;
    createdAt;
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
        const validPriorities = ['low', 'normal', 'high'];
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
