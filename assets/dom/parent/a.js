// ボタンがクリックされたときの処理
$('#check').on('click', function () {
    'use strict';
    // 以下に解答を記述する
    // タラオを取得する
    var me = $('#target');

    // 波平を取得する
    var namihei = $(me).parent().parent().parent().parent();
    
    // 波平の文字の色をCSSで青・太字に変更する
    $(namihei).children().first().css('color', 'blue').css('font-weight', 'bold');
});