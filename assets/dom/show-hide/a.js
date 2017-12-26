// 完了を表示、をクリックしたときの処理
$('#show').on('change', function() {
    'use strict';
    // 完了を表示、のチェック状態
    var isChecked = $(this).prop('checked');
    // 完了したTodo一覧を取得
    var checked = $('#todos').find('input:checked').closest('li');
    
    // 表示/非表示の制御
    if(isChecked) {
        $(checked).show();
    } else {
        $(checked).hide();
    }
});

// 全削除、をクリックしたときの処理
$('#removeAll').on('click', function() {
    'use strict';
    $('#todos').empty();
    $('#all').text(0);
    $('#completed').text(0);
});

// 削除、をクリックしたときの処理
$('#todos').on('click', '.remove', function() {
    'use strict';
    $(this).closest('li').remove();
    // 合計、完了を更新する
    $('#all').text($('#todos').children().size());
    $('#completed').text($('#todos').find('input').filter(':checked').size());
});

// 追加、をクリックしたときの処理
$('#add').on('click', function() {
    'use strict';
    // DOMを追加する
    $('#todos').append('<li><button class="remove">削除</button>　<label><input type="checkbox" />　' + $('#todo').val() + '</label></li>');
    // 合計を更新する
    $('#all').text($('#todos').children().size());
});

// チェックボックスをクリックしたとき、完了の数を更新する処理
$('#todos').on('change', 'input', function() {
    'use strict';
    // 完了を表示、が変更されたイベントを発火
    $('#show').trigger('change', true);
    
    // 取り消し線を付与
    if($(this).prop('checked') === true) {
        $(this).closest('label').addClass('checked');
    } else {
        $(this).closest('label').removeClass('checked');
    }
    $('#completed').text($('#todos').find('input').filter(':checked').size());
});