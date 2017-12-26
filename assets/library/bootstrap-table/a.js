$('#check').on('click', function () {
    'use strict';
    // 解答を以下に記述する

    // AjaxでJSONを取得する
    $.ajax({
        url: '/getData',
        type: 'GET'
    }).done(function(result) {
        // bootstrapTableを利用して表を描画する
        $('#table').bootstrapTable({
            // 初期のページ数
            pageSize: 5,
            // ページングの数を持つリスト
            pageList: [5, 10, 15],
            // ページングを使用するかどうか
            pagination: true,
            // ページングのボタンを表示するかどうか
            showPaginationSwitch: true,
            // 絞込みをするかどうか
            search: true,
            // カード形式の表示切替をするかどうか
            showToggle: true,
            // カラムの絞込みをするかどうか
            showColumns: true,
            // 行をクリックしたときに選択するかどうか
            clickToSelect: true,
            // 取得したJSONデータ
            data: result,
            // dataに対応するカラム
            columns: [
                {
                    // JSONの左辺に対応するカラムの物理名
                    field: 'name',
                    // 画面に表示されるカラムの論理名
                    title: '名前',
                    // ソートを許可するかどうか
                    sortable: true
                },
                {
                    field: 'age',
                    title: '年齢'
                },
                {
                    field: 'address',
                    title: '住所'
                }
            ]
        });
    }).fail(function() {
        // 何もしない
    });
});

// Ajaxによる/getDataへのアクセスに対し、モックとして値を返却する
$.mockjax({
    url: '/getData',
    type: 'GET',
    responseText: [
        {
            name: 'tanaka',
            age: 27,
            address: 'makuahri'
        },
        {
            name: 'suzuki',
            age: 30,
            address: 'makuahri'
        },
        {
            name: 'sato',
            age: 30,
            address: 'sinagawa'
        },
        {
            name: 'kato',
            age: 21,
            address: 'hunabashi'
        },
        {
            name: 'moritani',
            age: 35,
            address: 'tsudanuma'
        },
        {
            name: 'hasegawa',
            age: 31,
            address: 'hunabashi'
        },
        {
            name: 'onishi',
            age: 25,
            address: 'tamachi'
        },
        {
            name: 'yamada',
            age: 39,
            address: 'kasukabe'
        },
        {
            name: 'kimura',
            age: 24,
            address: 'gotanda'
        },
        {
            name: 'kameda',
            age: 21,
            address: 'matsudo'
        },
        {
            name: 'ogawa',
            age: 18,
            address: 'kaneko'
        },
        {
            name: 'higuchi',
            age: 41,
            address: 'maihama'
        }
    ]
});
