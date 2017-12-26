// ボタンがクリックされたときの処理
$('#check').on('click', function () {
    'use strict';
    // 以下に解答を記述する
    // 1から10までの配列を定義
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // 繰り返し構文を使用して、1から10までを加算
    // 繰り返し構文には、forを使用する
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }

    // 合計値をコンソールに出力する
    console.log(sum);
});
