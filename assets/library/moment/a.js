// #dateにdatetimepickerをバインドする処理を記述
$('#date').datetimepicker({
    ignoreReadonly: true,
    keepOpen: true,
    format: 'YYYY-MM-DD',
});

// ボタンがクリックされたときの処理
$('#date').on('dp.change', function () {
    'use strict';
    // 以下に解答を記述する
    var date = moment($('#date').val());
    console.log(date);
    // 日付の比較
    var today = moment();
    console.log(date.isBefore(today));
    // 同じ日付もtrueとする場合は、このような記述ができる
    console.log(today.isSameOrAfter(date));
    // フォーマット
    console.log(date.format('YYYY年MM月DD日'));
    // 値の取得
    console.log('year: %d , month: %d , date: %d , day: %s ', date.year(), date.month(), date.date(), date.day());
    // 値の設定
    console.log(date.day(3).hours(0).minutes(0).seconds(0).milliseconds(0).format('X'));
    // 日付の計算
    console.log(date.add(-1, 'year').format('YY/M/D'));
});