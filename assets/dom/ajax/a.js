// Ajaxの処理を記述
$('#get').on('change', function () {
    'use strict';
    // 選択されたドロップダウンから、ユーザIDを取得し、パラメータに設定する
    var data = {
        id: $(this).val()
    };

    // 作成したパラメータを引数とし、/getに対してGETでアクセスし、Todoリストを取得する
    $.ajax({
        data: data,
        url: '/get',
        type: 'GET'
    }).done(function (result) {
        // 取得に成功した場合、Todoリストを書き換える
        // 構成するDOM要素をテキストで結合し、まとめて追加する
        var html = '';
        $.each(result, function () {
            var checked = '';
            if(this.check) {
                checked = 'checked';
            }
            html += '<li><button class="remove">削除</button>　<label class="' + checked + '"><input type="checkbox" ' + checked + '/>　' + this.title + '</label></li>';
        });
        $('#todos').empty().append(html);

        // 完了、合計の数、完了を表示/非表示を更新する
        $('#all').text($('#todos').children().size());
        $('#completed').text($('#todos').find('input').filter(':checked').size());
        $('#show').change();
    }).fail(function (result) {
        // 取得に失敗した場合、エラーメッセージをダイアログで出力する。
        alert(result.status + '：' + result.responseJSON.message);
    });
});

// Ajaxのモック（定義済）
$.mockjax(function (settings) {
    'use strict';

    // 与えられたパラメータによって、返却する値を振り分ける
    var result = {};
    var status = 200;

    // ユーザIDが1（田中）の場合
    if (settings.data.id === '1') {
        result = [
            {
                title: '飲み屋を探す',
                check: true
            },
            {
                title: '飲み屋を仮押さえする',
                check: true
            },
            {
                title: '参加人数を確定する',
                check: true
            },
            {
                title: '飲み屋を予約する',
                check: false
            }
        ];
    }
    // ユーザIDが2（鈴木）の場合
    else if (settings.data.id === '2') {
        result = [
            {
                title: '当日の段取りを考える',
                check: true
            },
            {
                title: '主賓に挨拶をお願いする',
                check: false
            },
            {
                title: '会費を集める',
                check: false
            }
        ];
    }
    // それ以外の場合、ステータスコード404を返却する
    else {
        status = 404;
        result = {
            message: '該当のTodoリストが見つかりませんでした。'
        };
    }

    // Ajaxによる/getへのアクセスに対し、モックとして値を返却する
    return {
        url: '/get',
        type: 'GET',
        responseText: result,
        status: status
    };

});

// 完了を表示、をクリックしたときの処理
$('#show').on('change', function () {
    'use strict';
    // 完了を表示、のチェック状態
    var isChecked = $(this).prop('checked');
    // 完了したTodo一覧を取得
    var checked = $('#todos').find('input:checked').closest('li');

    // 表示/非表示の制御
    if (isChecked) {
        $(checked).show();
    } else {
        $(checked).hide();
    }
});

// 全削除、をクリックしたときの処理
$('#removeAll').on('click', function () {
    'use strict';
    $('#todos').empty();
    $('#all').text(0);
    $('#completed').text(0);
});

// 削除、をクリックしたときの処理
$('#todos').on('click', '.remove', function () {
    'use strict';
    $(this).closest('li').remove();
    // 合計、完了を更新する
    $('#all').text($('#todos').children().size());
    $('#completed').text($('#todos').find('input').filter(':checked').size());
});

// 追加、をクリックしたときの処理
$('#add').on('click', function () {
    'use strict';
    // DOMを追加する
    $('#todos').append('<li><button class="remove">削除</button>　<label><input type="checkbox" />　' + $('#todo').val() + '</label></li>');
    // 合計を更新する
    $('#all').text($('#todos').children().size());
});

// チェックボックスをクリックしたとき、完了の数を更新する処理
$('#todos').on('change', 'input', function () {
    'use strict';
    // 完了を表示、が変更されたイベントを発火
    $('#show').change();

    // 取り消し線を付与
    if ($(this).prop('checked') === true) {
        $(this).closest('label').addClass('checked');
    } else {
        $(this).closest('label').removeClass('checked');
    }
    $('#completed').text($('#todos').find('input').filter(':checked').size());
});
