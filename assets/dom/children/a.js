// ボタンがクリックされたときの処理
$('#check').on('click', function () {
    'use strict';
    // 以下に解答を記述する
    // 子要素を全て取得する
    var children = $('#target').children();

    // 子要素の人数をコンソールに出力する
    console.log($(children).size());

    // 子要素の名前を全てコンソールに出力する
    $.each(children, function(idx) {
        // console.logは、このように引数を用いる記述をすることもできます
        // 孫要素が存在する場合、$.text()は孫要素のテキストも取得してしまうため、
        // $.first()で子要素の最初のみを指定しています
        console.log('%d : %s', idx, $(this).children().first().text());
    });
});