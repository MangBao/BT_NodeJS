var readlineSync = require('readline-sync');
var fs = require('fs');
var students = [];

function loadData() {
    var fileContent = fs.readFileSync('./data.json');
    students = JSON.parse(fileContent);
}

function showMenu() {
    console.log('---------------------------------');
    console.log('1. Hiển thị tất cả học sinh: ');
    console.log('2. Thêm học sinh mới: ');
    console.log('3. Lưu và thoát: ');
    console.log('---------------------------------');
}

function showStudent() {
    for (var student of students) {
        console.log(student.name, student.age);
    }
}

function showCreateStudent() {
    var name = readlineSync.question('Name: ');
    var age = readlineSync.question('Age: ');
    var student = {
        name: name,
        age: age
    };
    students.push(student);
}

function saveAndExit() {
    var content = JSON.stringify(students);
    fs.writeFileSync('./data.json', content, { encoding: 'utf-8' })
}

function Main() {
    loadData();
    while (true) {
        showMenu();
        var options = readlineSync.question('Chọn thao tác bạn muốn: ');
        console.log('---------------------------------');
        switch (options) {
            case '1':
                showStudent();
                console.log('---------------------------------');
                break;
            case '2':
                showCreateStudent();
                break;
            case '3':
                saveAndExit();
                break;
            default:
                break;
        }
    }

}
Main();