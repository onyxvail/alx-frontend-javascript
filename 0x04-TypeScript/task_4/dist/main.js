/// <reference path="subjects/Teacher.ts"/>
/// <reference path="subjects/Subject.ts"/>
/// <reference path="subjects/Cpp.ts"/>
/// <reference path="subjects/Java.ts"/>
/// <reference path="subjects/React.ts"/>
export var cpp = new Subjects.Cpp();
export var java = new Subjects.Java();
export var react = new Subjects.React();
export var cTeacher = {
    firstName: "Olumide",
    lastName: "Micheal",
    experienceTeachingC: 10
};
console.log('C++');
cpp.teacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
console.log('Java');
java.teacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
console.log('React');
react.teacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
//# sourceMappingURL=main.js.map