// ボタンがクリックされたときの処理
$('#check').on('click', function () {
    'use strict';
    // 以下に解答を記述する
    // JSON文字列
    var json = '{ "age": 27, "name": "tanaka" }';

    // JSON文字列をオブジェクトに変換する
    var person = JSON.parse(json);
    console.log(person);
});