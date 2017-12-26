// ボタンがクリックされたときの処理
$('#check').on('click', function () {
    'use strict';
    // 以下に解答を記述する
    // nameがtargetであるラジオボタンを取得する
    var elements = $('input[name="target"]');

    // 取得したラジオボタンから、チェックされた要素のvalueをコンソールに出力する
    var checked = $(elements).filter(':checked');
    console.log($(checked).val());

    // ラジオボタンの選択状態を、未選択（valueがdefalut）が選択された状態にする
    $(elements).filter(function() {
        return $(this).val() === 'default';
    }).prop('checked', true);
});