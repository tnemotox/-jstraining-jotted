// ボタンがクリックされたときの処理
$('#check').on('click', function () {
    'use strict';
    // 以下に解答を記述する
    // idをセレクタとしてDOM要素を取得
    var element = $('#target');
    // 取得したDOM要素のテキストを出力
    console.log($(element).text());
});