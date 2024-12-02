import { UniversityManagementSystem } from "./components/UniversityManagementSystem.js";
import { Faculty, Semester, StudentStatus, CourseType, GradeEnum } from "./components/enums.js";
// Initialize the system
const universitySystem = new UniversityManagementSystem();
// Enroll students
const student1 = universitySystem.enrollStudent({
    fullName: "Alice Johnson",
    faculty: Faculty.Computer_Science,
    year: 2,
    status: StudentStatus.Active,
    enrollmentDate: new Date("2022-09-01"),
    groupNumber: "CS-201"
});
const student2 = universitySystem.enrollStudent({
    fullName: "Bob Smith",
    faculty: Faculty.Economics,
    year: 1,
    status: StudentStatus.Active,
    enrollmentDate: new Date("2023-09-01"),
    groupNumber: "ECO-101"
});
// Create courses
const course1 = {
    id: 1,
    name: "Algorithms and Data Structures",
    type: CourseType.Mandatory,
    credits: 5,
    semester: Semester.First,
    faculty: Faculty.Computer_Science,
    maxStudents: 30
};
const course2 = {
    id: 2,
    name: "Microeconomics",
    type: CourseType.Mandatory,
    credits: 3,
    semester: Semester.First,
    faculty: Faculty.Economics,
    maxStudents: 25
};
universitySystem["courses"].push(course1, course2); // Simulating adding courses since the method isn't implemented
// Register students for courses
universitySystem.registerForCourse(student1.id, course1.id);
universitySystem.registerForCourse(student2.id, course2.id);
// Set grades for students
universitySystem.setGrade(student1.id, course1.id, GradeEnum.Excellent);
universitySystem.setGrade(student2.id, course2.id, GradeEnum.Good);
// Update student status
universitySystem.updateStudentStatus(student2.id, StudentStatus.Graduated);
// Get students by faculty
console.log("Students in Computer Science faculty:");
console.log(universitySystem.getStudentsByFaculty(Faculty.Computer_Science));
// Get grades of a student
console.log(`Grades for student ${student1.fullName}:`);
console.log(universitySystem.getStudentGrades(student1.id));
// Get available courses for a faculty in a semester
console.log("Available courses for Computer Science in the first semester:");
console.log(universitySystem.getAvailableCourses(Faculty.Computer_Science, Semester.First));
// Calculate the average grade of a student
console.log(`Average grade for student ${student1.fullName}:`);
console.log(universitySystem.calculateAverageGrade(student1.id));
// Get top students by faculty
console.log("Top students in Computer Science faculty:");
console.log(universitySystem.getTopStudentsByFaculty(Faculty.Computer_Science));
