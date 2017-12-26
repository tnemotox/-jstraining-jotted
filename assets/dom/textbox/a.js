// ボタンがクリックされたときの処理
$('#check').on('click', function () {
    'use strict';
    // 以下に解答を記述する
    // 対象のテキストボックスの入力値を取得出力する
    var val = $('input[name="target"]').val();
 
    // 取得した値を、idがdestinationのDOM要素のテキストに埋め込む
    $('#destination').text(val);
});