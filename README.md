# TypeScriptCourse

Overall repository for all projects made for projects made for univercity course from TypeScript

## Developed by Solodkyi Yaroslav, PD-42

### [pr-1](https://github.com/Goodwin251/TypeScriptCourse/tree/feature/pr-1)

1. Створити свій репозиторій, з двома гілками main та develop. Створити коротенький Readme file та коротко описати про що цей репозиторій на англійській мові.
1. Від гілки develop створити гілку feature/js-to-ts.
1. В гілці feature/js-to-ts створити файл index.js та додати туди 200 строк JavaScript коду.
1. Переписати доданий JavaScript код додавши туди типи (number, boolean, string) не встановлюючи TypeScript та не змінюючи розширення файлу index.js.
1. Закомітити усі зміни, зробили pull request у develop та змерджити.
1. Надати посилання на репозиторій.  

---

### [pr-2](https://github.com/Goodwin251/TypeScriptCourse/tree/feature/pr-2)

1. На вже створеному git репозиторїї створити гілку feature/tsconfig
1. Знайти готовий шаблон html/css та додати його у гілку feature/tsconfig
1. Після додавання шаблону встановити у гілку feature/tsconfig typescript (приклад команди є у лекції)
1. Додати у шаблон javascript інтерактивності (відкриття модальних вікон, event listeners такі як scroll або click, анімації, fetch даних та їх відображення з <https://jsonplaceholder.typicode.com/>)
1. Увесь JS код писати у файлі ts та прописувати примітивні типи. Файл ts повинен конвертуватись у js.
1. У шаблон html підключити скомпільований js файл.
1. Після того як ви встановите typescript, налаштуєте tsconfig та додасте інтерактивності, все потрібно запушити на гілку feature/tsconfig.
1. Після додавання роботи у гілку feature/tsconfig з неї треба створити github pages <https://pages.github.com/>
1. У відповідь на завдання скинути посилання на гілку  feature/tsconfig та посилання на сайт котрий відображається у github pages.
1. Описати усю інтерактивність, яку ви додали на сайт у коментарях до завдання.

---

### [pr-3](https://github.com/Goodwin251/TypeScriptCourse/tree/feature/pr-3)

1. Визначення базових типів:
    1. Створіть type alias DayOfWeek для днів тижня ("Monday" | "Tuesday" | ... | "Friday").
    1. Створіть union type TimeSlot для можливих часових слотів занять ("8:30-10:00" | "10:15-11:45" | "12:15-13:45" | "14:00-15:30" | "15:45-17:15").
    1. Визначте type alias CourseType для типів занять ("Lecture" | "Seminar" | "Lab" | "Practice").
1. Створення основних структур:
    1. Створіть type alias Professor з полями: id (number), name (string), department (string).
    1. Визначте type alias Classroom з полями: number (string), capacity (number), hasProjector (boolean).
    1. Створіть type alias Course з полями: id (number), name (string), type (CourseType).
    1. Визначте type alias Lesson з полями: courseId (number), professorId (number), classroomNumber (string), dayOfWeek (DayOfWeek), timeSlot (TimeSlot).
1. Робота з масивами даних:
    1. Створіть масиви professors: Professor[], classrooms: Classroom[], courses: Course[], та schedule: Lesson[].
    1. Напишіть функцію addProfessor(professor: Professor): void для додавання нового професора.
    1. Створіть функцію addLesson(lesson: Lesson): boolean, яка додає заняття до розкладу, якщо немає конфліктів.
1. Функції пошуку та фільтрації:
    1. Реалізуйте функцію findAvailableClassrooms(timeSlot: TimeSlot, dayOfWeek: DayOfWeek): string[], яка повертає номери вільних аудиторій у вказаний час.
    1. Напишіть функцію getProfessorSchedule(professorId: number): Lesson[], яка повертає розклад конкретного професора.
1. Обробка конфліктів та валідація:
    1. Створіть type alias ScheduleConflict з полями: type ("ProfessorConflict" | "ClassroomConflict"), lessonDetails: Lesson.
    1. Напишіть функцію validateLesson(lesson: Lesson): ScheduleConflict | null, яка перевіряє, чи не створює нове заняття конфліктів у розкладі.
1. Аналіз та звіти:
    1. Реалізуйте функцію getClassroomUtilization(classroomNumber: string): number, яка повертає відсоток використання аудиторії.
    1. Створіть функцію getMostPopularCourseType(): CourseType, яка визначає найпопулярніший тип занять.
1. Модифікація даних:
    1. Напишіть функцію reassignClassroom(lessonId: number, newClassroomNumber: string): boolean, яка змінює аудиторію для заняття, якщо це можливо.
    1. Реалізуйте функцію cancelLesson(lessonId: number): void, яка видаляє заняття з розкладу.

---

### [pr-4](https://github.com/Goodwin251/TypeScriptCourse/tree/feature/pr-4)

1. Перенести код з практичної роботи №2 у нову гілку feature/modules
1. Увесь .ts код логічно розбити на модулі. Модулі повинні знаходитись в окремих папках. Типи також треба винести в окремий файл та в окрему папку.
1. Усі модулі підключити в головний main.ts файл. Якщо модуль якимось чином залежить від іншого модуля або типу, то треба імпортувати модуль у модуль або тип у модуль, а потім імпортувати обʼєднані модулі у файлі main.ts.
1. Всі функції у коді повинні бути типізованими.
1. У коментарях до зданої роботи, треба надати посилання саме на папку з вашими файлами .ts, в котрій знаходиться файл main.ts та папки з модулями та типами.

---

### [pr-5](https://github.com/Goodwin251/TypeScriptCourse/tree/feature/pr-5)

1. Створення типів товарів
    1. BaseProduct
    1. Electronics
    1. Clothing 
1. Створення функцій для пошуку товарів
1. Створення кошика
1. Використання функцій для демонстрації роботи програми 
1. Вимоги:
    1. Всі функції повинні бути типобезпечними
    1. Використовуйте лише функції (не класи)
    1. Додайте коментарі до функцій
    1. Перевіряйте коректність вхідних даних

---

### [lab-5](https://github.com/Goodwin251/TypeScriptCourse/tree/feature/lab-5)

1. Спроектуйте базову структуру для різних типів контенту
    1. BaseContent 
    1. Article 
    1. Product 
    1. type ContentOperations<T extends BaseContent>
1. Розробіть систему типів для управління правами доступу
    1. Role
    1. Permission
    1. AccessControl<T extends BaseContent>
1. Створіть систему валідації
1. Реалізуйте систему версіонування контенту

---

### [pr-7](https://github.com/Goodwin251/TypeScriptCourse/tree/feature/pr-7)

1. Набути практичних навичок роботи з TypeScript, зокрема з використанням Enum, через створення системи управління навчальним процесом університету.

2. Додати enums
    1. StudentStatus
    1. CourseType
    1. Semester
    1. Grade
    1. Faculty

4. Додати інтерфейси
    1. Student 
    1. Course 
    1. Grade 

5. Додати функції до UniversityManagmentSystem class
    1. enrollStudent(student: Omit<Student, "id">): Student
    1. registerForCourse(studentId: number, courseId: number): void
    1. setGrade(studentId: number, courseId: number, grade: Grade): void
    1. updateStudentStatus(studentId: number, newStatus: StudentStatus): void
    1. getStudentsByFaculty(faculty: Faculty): Student[]
    1. getStudentGrades(studentId: number): Grade[]
    1. getAvailableCourses(faculty: Faculty, semester: Semester): Course[]
    1. calculateAverageGrade(studentId: number): number

6. Виконати вимоги
    1. Реалізуйте перевірку на можливість реєстрації на курс (перевірка кількості студентів, відповідність факультету)
    1. Додайте валідацію при зміні статусу студента
    1. Реалізуйте перевірку на можливість виставлення оцінки (чи зареєстрований студент на курс)
    1. Створіть метод для отримання списку відмінників по факультету

---
