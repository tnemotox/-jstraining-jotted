// ボタンがクリックされたときの処理
$('#check').on('click', function () {
    'use strict';
    // 以下に解答を記述する
    // オブジェクトを1つ格納した配列employeeを宣言する。
    // オブジェクトの形式は、{ name: 'name', age: 1 } とする
    var employee = [{
        name: 'tanaka',
        age: 27
    }];
    console.log(employee);　 // 1:tanaka
    
    // personと同じ構造のオブジェクトを2つ宣言する
    var suzuki = {
        name: 'suzuki',
        age: 40
    };
    var sato = {
        name: 'sato',
        age: 35
    };
    
    // 配列の操作を行う
    // 上で宣言した2つのオブジェクトを、順に配列の末尾に追加する
    employee.push(suzuki);
    employee.push(sato);
    console.log(employee);　 // 1:tanaka, 2:suzuki, 3:sato

    // 配列宣言時に格納した、一番先頭のオブジェクトを配列から削除する
    employee.shift();
    console.log(employee); // 1:suzuki, 2:sato
});