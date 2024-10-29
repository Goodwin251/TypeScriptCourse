# TaskManagerTS
Repository for TypeScript course.

You can check functionality on github pages: https://goodwin251.github.io/TaskManagerTS/
### Created by Solodkyi Yaroslav, student PD-42
___
There is simple Task Manager program that can be launced on NodeJS and in browser with realisation of same functions.

**Branches**:
- *main*
- *develop* - for merging features
- *js-to-ts* - added TaskManager base and translate it from JavaScript to TypeScript.
- *feature/tsconfig* - added http-server and NodeJS, confiugred TypeScript compilation, take from index.js export classes and export type.


## Code description

### Task.ts


```typescript
//Mark task completed.
markAsCompleted(): void
```
```typescript
//Update priorty between 'low', 'normal' or 'high'
updatePriority(newPriority: Priority): void
```
```typescript
//To String
toString(): string
```

### TaskManager.ts

```typescript
//Add new task to tasks[] in TaskManager class.
addTask(title: string, description: string, priority: Priority)
```
```typescript
//Remove task from tasks[]
removeTask(title: string): void
```
```typescript
//Search task by title and call markAsCompleted() from Task
markTaskAsCompleted(title: string): void
```
```typescript
//Search and update priorty in task
updateTaskPriority(title: string, newPriority: Priority): void
```
```typescript
//Just print all tasks in console
listTasks(): void
```
```typescript
//List all tasks that still pending
listPendingTasks(): void 
```
```typescript
//List all tasks that completed
listCompletedTasks(): void
```
```typescript
//Clear tasks[]
clearAllTasks(): void
```
### index.ts
Depends on `if` below program change functional. If global variable `window` is `undefined` that means program launched not in the browser. Therefore it will just call functions for console, listed above.
```typescript
//If true = Node.Js | false = launched in browser
if (typeof window == "undefined") 
```
```typescript
//Add task in row to taskTableBody
function addTaskRow(name: string, description: string, priority: Priority, createdAt: string, completed: string)
```
```typescript
//Called every time once we need to render UI on page
function renderTasks(): void
```

```typescript
//Called when user press button to clear all tasks that were completed.
function clearCompletedTasks(): void
```
#### Listeners
```typescript
//Called when user click on Completed cell, marking task completed. 
row.children[4]?.addEventListener('click', () => {...})

//Called to add new Task to table
addTaskBtn.addEventListener('click', () => {...})

//Called to clear all completed tasks
clearCompletedBtn?.addEventListener('click', () => {...})
```