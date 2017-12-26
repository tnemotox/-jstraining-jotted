// 以下を修正する。
// 全削除、をクリックしたときの処理


// 削除、をクリックしたときの処理


// 追加する、をクリックしたときの処理
$('#add').on('click', function() {
    'use strict';
    // DOMを追加する
    $('#todos').append('<li><button class="remove">削除</button>　<label><input type="checkbox" />　' + $('#todo').val() + '</label></li>');
    // 合計の数を更新する
    $('#all').text($('#todos').children().size());
});

// チェックボックスをクリックしたとき、完了の数を更新する処理
$('#todos').on('change', 'input', function() {
    'use strict';
    // 取り消し線を付与
    if($(this).prop('checked') === true) {
        $(this).closest('label').addClass('checked');
    } else {
        $(this).closest('label').removeClass('checked');
    }
    $('#completed').text($('#todos').find('input').filter(':checked').size());
});