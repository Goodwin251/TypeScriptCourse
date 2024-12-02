import { Faculty, StudentStatus, CourseType, Semester, GradeEnum } from "./enums.js";

export interface Student {
    id: number;
    fullName: string;
    faculty: Faculty;
    year: number;
    status: StudentStatus;
    enrollmentDate: Date;
    groupNumber: string;
}

export interface Course {
    id: number;
    name: string;
    type: CourseType;
    credits: number;
    semester: Semester;
    faculty: Faculty;
    maxStudents: number;
}

export interface Grade {
    studentId: number;
    courseId: number;
    grade: GradeEnum;
    date: Date;
    semester: Semester;
}
