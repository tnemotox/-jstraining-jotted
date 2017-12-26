// ボタンがクリックされたときの処理
$('#check').on('click', function () {
    'use strict';
    // 以下に解答を記述する
    // テキストボックスの値をそれぞれ取得する
    var before = $('input[name="before"]').val();
    var after = $('input[name="after"]').val();

    // idがtargetの要素の前後に、li要素を追加する
    $('#target').after('<li>' + after + '</li>');
    $('#target').before('<li>' + before + '</li>');
});