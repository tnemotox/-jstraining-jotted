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
});