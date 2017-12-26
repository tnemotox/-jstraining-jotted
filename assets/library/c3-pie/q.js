$('#check').on('click', function () {
    'use strict';
    // 解答を以下に記述する

    // AjaxでJSONを取得し、テーブルを描画する

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
