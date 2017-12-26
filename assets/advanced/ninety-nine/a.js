// "解答する" がクリックされたときの処理を記述する
$('#answerBtn').on('click', function () {
    'use strict';
    // テキストボックスの入力値を数値で取得する
    var answer = Number.parseInt($('#answerMulti').val());
    // 選択されたマスを取得する。
    var selected = $('.selected');

    // 横軸の数値を取得する
    var x = $(selected).index() - 1;

    // 縦軸の数値を取得する
    var y = Number.parseInt($(selected).siblings().first().text());

    // 入力した解答と正答を比較する
    if(answer === x * y) {
        // 正解であれば、緑色で正解！と表示し、選択されたマスを解答済みにする
        $('#answerResult').addClass('alert-success').removeClass('alert-danger').text('正解！');
        $('#answerNum').text(Number.parseInt($('#answerNum').text()) + 1);
        $('.selected').removeClass('selected').addClass('answered').text(x * y);
    } else {
        // 不正解であれば、赤色ではずれ！と表示する
        $('#answerResult').removeClass('alert-success').addClass('alert-danger').text('はずれ！');
    }
});

// マスが選択されたときの動作を記述する
$('.ninety-nine div').on('click', function () {
    'use strict';
    // ヘッダー、もしくは解答済みのマスの場合、何もしない
    if($(this).hasClass('answered') || $(this).hasClass('header')) {
        return;
    }
    // そうでなければ、選択状態を移動する
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
});