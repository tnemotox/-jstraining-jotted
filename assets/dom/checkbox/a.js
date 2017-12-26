// ボタンがクリックされたときの処理
$('#check').on('click', function () {
    'use strict';
    // 以下に解答を記述する
    // nameがtargetであるチェックボックスを取得する
    var elements = $('input[name="target"]');
    console.log(elements); // JSオブジェクトとなっていることを開発者ツールで確認する

    // 取得したチェックボックスから、チェックされた要素のみを取得し、その数をコンソールに出力する
    var checked = $(elements).filter(':checked');
    console.log($(checked).size());

    // チェックされた要素のvalueをコンソールに出力する
    $.each(checked, function(idx) {
        console.log(idx + ':' + $(this).val());
    });

    // 全てのチェックボックスを非チェック状態にする
    $(elements).prop('checked', false);
});