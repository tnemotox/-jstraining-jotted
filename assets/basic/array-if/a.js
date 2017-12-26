// ボタンがクリックされたときの処理
$('#check').on('click', function () {
    'use strict';
    // 以下に解答を記述する
    // 1から10までの配列を定義
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // 繰り返し構文には、forEachを使用する
    array.forEach(function (item) {
        // 3の倍数だけ、コンソールに出力する
        if (item % 3 === 0) {
            console.log(item);
        }
    });

});