var classes = [
    { id: 0, name: '1A', teacher: 0 },
    { id: 1, name: '2A', teacher: 1 },
    { id: 2, name: '3A', teacher: 2 },
    { id: 3, name: '4A', teacher: 3 },
    { id: 4, name: '5A', teacher: 4 }
];

var students = [
    { name: 'Bao', height: 170, class: 0 },
    { name: 'Long', height: 170, class: 0 },
    { name: 'Tri', height: 170, class: 0 },
    { name: 'Trong', height: 170, class: 1 },
    { name: 'Sang', height: 170, class: 1 },
    { name: 'Son', height: 170, class: 2 }
];

var teachers = [
    { name: 'Quynh', age: 25 },
    { name: 'Mai', age: 30 },
    { name: 'Yen', age: 28 },
    { name: 'Tien', age: 31 },
    { name: 'Tuyen', age: 29 },
];

function getStudentInClass(className) {
    var classObj = classes.find((x) => x.name === className);
    var studentInclass = students.filter((student) => student.class === classObj.id);
    return studentInclass;
};

var studentInClass = getStudentInClass('3A');

console.log(studentInClass);