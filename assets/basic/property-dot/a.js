// ボタンがクリックされたときの処理
$('#check').on('click', function () {
    'use strict';
    // 以下に解答を記述する
    // 空のオブジェクトpersonを宣言する
    var person = {};

    // personのプロパティname、ageに任意の値を格納する
    person.age = 27;
    person.name = 'nemoto';

    // personのプロパティname、ageをコンソールに出力する
    console.log(person.age);
    console.log(person.name);
});
