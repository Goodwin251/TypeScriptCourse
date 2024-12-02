# Pr 7 - TypeScript UniversityManagementSystem with Enums

Branch of 7 practice work for TypeScript course.

This repository demonstrates a University Management System with Enums built using TypeScript. Below is a detailed list of all functions and methods split by files with short comments describing their functionality.

[Return to main branch](https://github.com/Goodwin251/TypeScriptCourse/tree/main)

## Created by Solodkyi Yaroslav, student PD-42

___

## **main.ts**

```typescript
// Import necessary modules
import { UniversityManagementSystem } from "./components/UniversityManagementSystem.js";
import { Faculty, Semester, StudentStatus, CourseType, GradeEnum } from "./components/enums.js";

// Initialize the system
const universitySystem = new UniversityManagementSystem();
```

```typescript
// Enroll students
const student1 = universitySystem.enrollStudent({
    fullName: "Alice Johnson",
    faculty: Faculty.Computer_Science,
    year: 2,
    status: StudentStatus.Active,
    enrollmentDate: new Date("2022-09-01"),
    groupNumber: "CS-201"
});

```

```typescript
// Create courses and simulate adding them
const course1 = {
    id: 1,
    name: "Algorithms and Data Structures",
    type: CourseType.Mandatory,
    credits: 5,
    semester: Semester.First,
    faculty: Faculty.Computer_Science,
    maxStudents: 30
};
universitySystem["courses"].push(course1);
```

```typescript
// Register a student for a course
universitySystem.registerForCourse(student1.id, course1.id);
```

```typescript
// Set a grade for a student
universitySystem.setGrade(student1.id, course1.id, GradeEnum.Excellent);
```

```typescript
// Get students by faculty
console.log(universitySystem.getStudentsByFaculty(Faculty.Computer_Science));
```

## **enums.ts**

```typescript
// Enum representing student statuses
export enum StudentStatus {
    Active = "Active",
    Academic_Leave = "Academic_Leave",
    Graduated = "Graduated",
    Expelled = "Expelled"
}
```

```typescript
// Enum for course types
export enum CourseType {
    Mandatory = "Mandatory",
    Optional = "Optional",
    Special = "Special"
}
```

```typescript
// Enum for semester representation
export enum Semester {
    First = "First",
    Second = "Second"
}
```

## **interfaces.ts**

```typescript
// Interface for Student
export interface Student {
    id: number;
    fullName: string;
    faculty: Faculty;
    year: number;
    status: StudentStatus;
    enrollmentDate: Date;
    groupNumber: string;
}
```

```typescript
// Interface for Course
export interface Course {
    id: number;
    name: string;
    type: CourseType;
    credits: number;
    semester: Semester;
    faculty: Faculty;
    maxStudents: number;
}
```

```typescript
// Interface for Grade
export interface Grade {
    studentId: number;
    courseId: number;
    grade: GradeEnum;
    date: Date;
    semester: Semester;
}
```

## **UniversityManagementSystem.ts**

```typescript
// Method to enroll a new student
enrollStudent(student: Omit<Student, "id">): Student {
    const newStudent: Student = { id: this.studentIdCounter++, ...student };
    this.students.push(newStudent);
    return newStudent;
}
```

```typescript
// Method to register a student for a course
registerForCourse(studentId: number, courseId: number): void {
    const student = this.students.find(s => s.id === studentId);
    const course = this.courses.find(c => c.id === courseId);

    if (!student) throw new Error("Student not found");
    if (!course) throw new Error("Course not found");
    this.registrations.push({ studentId, courseId });
}
```

```typescript
// Method to set a grade for a student in a course
setGrade(studentId: number, courseId: number, grade: GradeEnum): void {
    const isRegistered = this.registrations.some(r => r.studentId === studentId && r.courseId === courseId);
    if (!isRegistered) throw new Error("Student not registered for this course");

    this.grades.push({
        studentId,
        courseId,
        grade,
        date: new Date(),
        semester: course.semester
    });
}
```
