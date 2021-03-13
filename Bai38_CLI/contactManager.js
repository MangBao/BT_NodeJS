/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */
var readlineSync = require('readline-sync');
var fs = require('fs');
var contacts = [];


function showMenu() {
    console.log('---------------------------------');
    console.log('1. Nhập contact ');
    console.log('2. Sửa contact');
    console.log('3. Xoá contact');
    console.log('4. Tìm kiếm theo tên hoặc sđt');
    console.log('---------------------------------');
}

function showData(contacts) {
    for (var contact of contacts)
        console.log('id:', contact.id, ', name:', contact.name, ", phone:", contact.phone);
}

function load() {
    contacts = JSON.parse(fs.readFileSync("data.json"));
}

function save() {
    var data = JSON.stringify(contacts);
    fs.writeFileSync('data.json', data, { encoding: 'utf-8' });
}

function insertContact() {
    var name = readlineSync.question('Name: ');
    var phone = readlineSync.question('Phone: ');
    contacts.push({
        id: contacts[contacts.length - 1].id + 1,
        name: name,
        phone: phone
    });
    save();
}

function updateContact() {
    var idUpdate = readlineSync.question('Nhập id cần sửa: ');
    idUpdate = Number(idUpdate);
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].id == idUpdate) {
            var phoneNew = readlineSync.question('Nhập sđt mới: ');
            contacts[i].phone = Number(phoneNew);
            save();
            break;
        }
    }
}

function deleteContact() {
    var idDelete = readlineSync.question('Nhập id cần xóa: ');
    idDelete = Number(idDelete);
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].id == idDelete) {
            contacts.splice(i, 1);
            save();
            break;
        }
    }
}

function searchContact(arr) {
    var arr1 = [];
    var nameOrPhone = readlineSync.question('Nhập sđt hoặc tên muốn tìm: ');
    if (!isNaN(nameOrPhone)) {
        nameOrPhone = Number(nameOrPhone);

        for (var x of arr) {
            if (Number(x.phone).toString().indexOf(Number(nameOrPhone).toString()) >= 0) {

                arr1.push(x);

            }
        }
        showData(arr1);
    } else {
        nameOrPhone = nameOrPhone.toString();
        for (x of arr) {
            if (x.name.toLowerCase().indexOf(nameOrPhone.toLowerCase()) >= 0) {
                arr1.push(x);
            }
        }
        showData(arr1);
    }
}

function Main() {
    while (true) {
        load();
        showMenu();
        var options = readlineSync.question('Chọn thao tác bạn muốn: ');
        console.log('---------------------------------');
        switch (options) {
            case '1':
                insertContact();
                console.log('---------------------------------');
                break;
            case '2':
                updateContact();
                console.log('---------------------------------');
                break;
            case '3':
                deleteContact();
                console.log('---------------------------------');
                break;
            case '4':
                searchContact(contacts);
                console.log('---------------------------------');
                break;
            default:
                break;
        }
    }
}
Main();