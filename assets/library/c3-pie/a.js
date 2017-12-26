$('#check').on('click', function () {
    'use strict';
    // AjaxでJSONを取得する
    $.ajax({
        url: '/getData',
        type: 'GET'
    }).done(function(result) {
        // c3.jsを利用して円グラフを描画する
        c3.generate({
            bindto: '#pie-graph',
            data: {
                columns: result.browserShare,
                type: 'pie'
            }
        });
    }).fail(function() {
        // 何もしない
    });
});

// Ajaxによる/getDataへのアクセスに対し、モックとして値を返却する
$.mockjax({
    url: '/getData',
    type: 'GET',
    responseText: {
        browserShare: [
            ['InternetExplorer', 15],
            ['Firefox', 15],
            ['GoogleChrome', 60],
            ['Safari', 8],
            ['その他', 2]
        ]
    }
});
