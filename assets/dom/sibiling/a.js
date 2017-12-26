// ボタンがクリックされたときの処理
$('#check').on('click', function () {
    'use strict';
    // 以下に解答を記述する
    // 要素 "カツオ" を取得する
    var me = $('#target');

    // 要素 "サザエ" を取得し、コンソールに出力する
    var sazae = $(me).prev(); // 自分の1つ前のノードを取得
    console.log(sazae.children().first().text());

    // 要素 "ワカメ" を取得、コンソールに出力する
    var wakame = $(me).next(); // 自分の1つ後のノードを取得
    console.log(wakame.children().text());

    // 要素 "マスオ" を取得、コンソールに出力する
    var masuo = $(me).prev().prev(); // 自分の2つ前のノードを取得
    console.log(masuo.children().text());

    // 兄弟ノード全ての数を取得し、コンソールに出力する
    var num = $(me).siblings().size(); // 兄弟ノードを全て取得
    console.log(num);
});