import { GradeEnum } from "./enums.js";
export class UniversityManagementSystem {
    students = [];
    courses = [];
    grades = [];
    registrations = [];
    studentIdCounter = 1;
    courseIdCounter = 1;
    enrollStudent(student) {
        const newStudent = { id: this.studentIdCounter++, ...student };
        this.students.push(newStudent);
        return newStudent;
    }
    registerForCourse(studentId, courseId) {
        const student = this.students.find(s => s.id === studentId);
        const course = this.courses.find(c => c.id === courseId);
        if (!student)
            throw new Error("Student not found");
        if (!course)
            throw new Error("Course not found");
        if (student.faculty !== course.faculty)
            throw new Error("Faculty mismatch");
        if (this.registrations.filter(r => r.courseId === courseId).length >= course.maxStudents) {
            throw new Error("Course is full");
        }
        // Log the registration
        this.registrations.push({ studentId, courseId });
    }
    setGrade(studentId, courseId, grade) {
        const student = this.students.find(s => s.id === studentId);
        const course = this.courses.find(c => c.id === courseId);
        if (!student)
            throw new Error("Student not found");
        if (!course)
            throw new Error("Course not found");
        // Verify if the student is registered for the course
        const isRegistered = this.registrations.some(r => r.studentId === studentId && r.courseId === courseId);
        if (!isRegistered)
            throw new Error("Student not registered for this course");
        this.grades.push({
            studentId,
            courseId,
            grade,
            date: new Date(),
            semester: course.semester
        });
    }
    updateStudentStatus(studentId, newStatus) {
        const student = this.students.find(s => s.id === studentId);
        if (!student)
            throw new Error("Student not found");
        student.status = newStatus;
    }
    getStudentsByFaculty(faculty) {
        return this.students.filter(s => s.faculty === faculty);
    }
    getStudentGrades(studentId) {
        return this.grades.filter(g => g.studentId === studentId);
    }
    getAvailableCourses(faculty, semester) {
        return this.courses.filter(c => c.faculty === faculty && c.semester === semester);
    }
    calculateAverageGrade(studentId) {
        const studentGrades = this.getStudentGrades(studentId);
        if (studentGrades.length === 0)
            return 0;
        const totalGrades = studentGrades.reduce((sum, g) => sum + g.grade, 0);
        return totalGrades / studentGrades.length;
    }
    getTopStudentsByFaculty(faculty) {
        const topStudents = this.students.filter(student => this.calculateAverageGrade(student.id) === GradeEnum.Excellent &&
            student.faculty === faculty);
        return topStudents;
    }
}
