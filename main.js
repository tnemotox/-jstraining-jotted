'use strict';

var jst = {};

/**
 * 問題種別の和名
 */
jst.types = {
    'basic': '基礎',
    'dom': 'jQueryとDOM操作',
    'library': 'ライブラリ',
    'advanced': '応用'
};

/**
 * 画面表示時に最初に呼び出される初期化処理
 */
jst.initialize = function () {
    
    // イベントのバインド
    $('#prev').on('click', function () {
        jst.prev();
    });
    $('#next').on('click', function () {
        jst.next();
    });
    $('#list').on('click', function () {
        jst.list();
    });
    $('#refresh').on('click', function () {
        jst.refresh();
    });
    $('#answer').on('click', function () {
        jst.answer();
    });
    $('#list-modal-data').on('click', '.list-select-parent .list-select', function (e) {
        jst.modalSelect(e);
    });
    $('input[name="pane"]').on('change', function (e) {
        jst.togglePane(e);
    });

    // 問題一覧を読み込む
    $.getJSON('./list.json', function (data) {
        jst.data = data;
    }).done(function () {
 
        // テーブルを作成するための変数
        var index = 0;
        var dataEl = '';
 
        // 問題種別ごとに問題一覧のテーブルを作成する
        $.each(_.keys(jst.data), function (idx, type) {
            // 種別ごとのリスト
            var dataAry = jst.data[type];

            // DOMを生成
            dataEl += '<h4>' + jst.types[type] + '</h4>' +
                '<table id="' + type + '" class="table table-bordered table-hover">' +
                '<thead><tr><th style="width:10%;">項番</th><th style="width:60%;">概要</th><th style="width:20%;">使用ペイン</th><th style="width:10%;">選択</th></tr></thead><tbody>';
            $.each(dataAry, function () {
                index++;
                dataEl += '<tr><td style="text-align:center;">問題' + index + '</td><td>' + this.desc + '</td><td>';
                $.each(this.panes, function () {
                    dataEl += this + '　';
                });
                dataEl += '</td><td style="text-align:center;" class="list-select-parent"><button class="btn btn-default list-select" value="' + index + '">選択</button></td></tr>';
            });
            dataEl += '</tbody></table>';
        });
        // 全ての問題一覧を作成したらDOMに追加
        $('#list-modal-data').append(dataEl);

        // 画面を開く前、最後に表示していた問題を表示する
        jst.show(parseInt(localStorage.getItem('jst.idx')));
    }).fail(function () {
        jst.emptyMessage();
        jst.addMessage('list.jsonが正しいJSON形式ではありません。管理者に確認してください。', 'danger');
        $('nav').remove();
    });
};

/**
 * 画面メッセージを削除
 */
jst.emptyMessage = function () {
    $('#message').empty();
};

/**
 * 画面メッセージを追加
 * @param {string} message 表示するメッセージ
 * @param {string} level   表示レベル
 */
jst.addMessage = function (message, level) {
    // デフォルトはwarning（黄色）
    if (level === undefined) {
        level = 'warning';
    }
    // メッセージを追加
    var elm = '<div class="alert alert-' + level + ' alert-dismissible" role="alert">' +
        '<button type="button" class="close" data-dismiss="alert" aria-label="閉じる"><span aria-hidden="true">×</span></button>' +
        '<span class="message"><span class="glyphicon glyphicon-info-sign"/>　' + message + '</span>' +
        '</div>';
    $('#message').append(elm);
};

/**
 * 選択した問題番号に対応する資材を表示する
 * @param {number} number 問題番号
 * @param {string} type   問題か解答か
 */
jst.show = function (number, qa) {
    // 初回アクセス時は、localStrageに値が格納されていないためNaNへの対応が必要
    if (Number.isNaN(number)) {
        number = 0;
        localStorage.setItem('jst.idx', number);
    }
    // デフォルトは問題
    if (qa === undefined) {
        qa = 'q';
    }
    // エディタを初期化
    $('#editor').removeClass().empty();

    // 問題リストの配列サイズから、問題種別を判定
    var type = '';
    if (number < jst.data.basic.length) {
        type = 'basic';
    } else if (number < jst.data.dom.length + jst.data.basic.length ) {
        type = 'dom';
    } else if (number < jst.data.library.length + jst.data.dom.length + jst.data.basic.length ) {
        type = 'library';
    } else {
        type = 'advanced';
    }

    // 全てのリストを結合し、問題番号に対応した問題を取得する
    // この順番を変えると、問題の順番も変わるため安易に変更しないこと
    var item = _.union(jst.data.basic, jst.data.dom, jst.data.library, jst.data.advanced)[number];
    if (item === undefined) {
        return;
    }

    // jottedでエディタを出力
    jst.jotted = new Jotted(document.querySelector('#editor'), {
        files: [
            {
                type: 'js',
                url: './assets/' + type + '/' + item.name + '/' + qa + '.js'
            }, {
                type: 'css',
                url: './assets/' + type + '/' + item.name + '/' + qa + '.css'
            }, {
                type: 'html',
                url: './assets/' + type + '/' + item.name + '/' + qa + '.html'
            
            }
        ],
        plugins: [
            'console', {
                name: 'codemirror',
                options: {
                    lineNumbers: true,
                    autoCloseTags: true,
                    autoCloseBrackets: true,
                    viewportMargin: Infinity,
                    lineWrapping: true,
                    indentUnit: 4
                }
            }
        ]
    });

    // 問題番号、問題概要を出力
    $('#idx').text(number + 1);
    $('#desc').text(item.desc);

    // 表示するペインを選択
    $.each($('input[name="pane"]'), function () {
        if (_.contains(item.panes, $(this).val()) || $(this).val() === 'result') {
            $(this).prop('checked', true).change();
        } else {
            $(this).prop('checked', false).change();
        }
    });

    // ペインを横並びに設定
    $('#editor').addClass('jotted-theme-bin');
};

/**
 * ペインの表示/非表示を設定
 */
jst.togglePane = function (e) {
    var target = e.currentTarget;
    var toggle = $(target).prop('checked');
    var pane = $(target).val();

    // ペインの表示/非表示、表示幅をcss/classを付与して変更する
    // 表示
    if (toggle) {
        if (pane === 'console') {
            $('#editor').addClass('jotted-plugin-' + pane);
        } else {
            $('#editor').addClass('jotted-pane-active-' + pane);
        }
        $(target).closest('div').addClass('checked');
        $('#editor').addClass('jotted-has-' + pane);
        $('.jotted-nav-item-' + pane).css('display', 'table-cell');
    }
    // 非表示 
    else {
        if (pane === 'console') {
            $('#editor').removeClass('jotted-plugin-' + pane);
        } else {
            $('#editor').removeClass('jotted-pane-active-' + pane);
        }
        $(target).closest('div').removeClass('checked');
        $('#editor').removeClass('jotted-has-' + pane);
        $('.jotted-nav-item-' + pane).css('display', 'none');
    }
};

/**
 * 前の問題を表示する
 */
jst.prev = function () {
    jst.emptyMessage();
    // 一番最初の問題の場合は、メッセージを表示して処理を終了する
    if (parseInt(localStorage.getItem('jst.idx')) < 1) {
        jst.addMessage('問題1より前の問題はありません。');
        return;
    }
    localStorage.setItem('jst.idx', localStorage.getItem('jst.idx') - 1);
    jst.show(parseInt(localStorage.getItem('jst.idx')));
};

/**
 * 次の問題を表示する
 */
jst.next = function () {
    jst.emptyMessage();
    var max = _.union(jst.data.basic, jst.data.dom, jst.data.advanced, jst.data.library).length;
    if (parseInt(localStorage.getItem('jst.idx')) >= max - 1) {
        jst.addMessage('問題' + max + 'より次の問題はありません。');
        return;
    }
    jst.number++;
    localStorage.setItem('jst.idx', parseInt(localStorage.getItem('jst.idx')) + 1);
    jst.show(parseInt(localStorage.getItem('jst.idx')));
};

/**
 * 問題の一覧を表示する
 */
jst.list = function () {
    $('#list-modal').modal();
};

/**
 * 問題を再読み込みする
 */
jst.refresh = function () {
    jst.emptyMessage();
    jst.show(parseInt(localStorage.getItem('jst.idx')));
};

/**
 * 問題の解答を表示する
 */
jst.answer = function () {
    jst.emptyMessage();
    jst.show(parseInt(localStorage.getItem('jst.idx')), 'a');
};

/**
 * 問題の一覧から選択された問題を表示する
 */
jst.modalSelect = function (e) {
    localStorage.setItem('jst.idx', parseInt($(e.currentTarget).val()) - 1);
    jst.show(parseInt(localStorage.getItem('jst.idx')));
    $('#list-modal').modal('hide');
};

$(function () {
    jst.initialize();
});
