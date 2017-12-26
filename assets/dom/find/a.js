// ボタンがクリックされたときの処理
$('#check').on('click', function () {
    'use strict';
    // 以下に解答を記述する
    // 磯野家全員のDOM要素を取得する
    // セレクタとして、.nameを利用する
    var isono = $('#target').find('.name');

    // 磯野家全員の名前をコンソールに出力する
    $.each(isono, function() {
        console.log($(this).text());
    });
});