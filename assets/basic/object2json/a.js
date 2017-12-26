// ボタンがクリックされたときの処理
$('#check').on('click', function () {
    'use strict';
    // 以下に解答を記述する
    // 問5と同様のpersonオブジェクトを宣言する
    var person = {
        age: 27,
        name: 'tanaka'
    };

    // オブジェクトをJSON文字列に変換し、コンソールに出力する
    // 第一引数にオブジェクトを、第三引数にインデントを渡す
    var json = JSON.stringify(person, null, '  ');
    console.log(json);
});
