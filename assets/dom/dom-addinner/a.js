// ボタンがクリックされたときの処理
$('#check').on('click', function () {
    'use strict';
    // 以下に解答を記述する
    // テキストボックスの値をそれぞれ取得する
    var before = $('input[name="before"]').val();
    var after = $('input[name="after"]').val();

    // idがtargetの要素の中（先頭、末尾）に、li要素を追加する
    $('#target').append('<li>' + after + '</li>');
    $('#target').prepend('<li>' + before + '</li>');
});