// ボタンがクリックされたときの処理
$('#check').on('click', function () {
    'use strict';
    // 以下に解答を記述する
    // 空のオブジェクトpersonを宣言する
    var person = {};

    // personのプロパティname、ageに任意の値を格納する
    var key = 'name';
    person['age'] = 27;
    person[key] = 'nemoto'; // 変数をキーにできる

    // personのプロパティname、ageをコンソールに出力する
    // 変数keyを使用すること
    console.log(person['age']);
    console.log(person[key]);
});