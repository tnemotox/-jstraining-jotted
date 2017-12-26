$('#check').on('click', function () {
    'use strict';
    // 解答を以下に記述する
    
    // AjaxでJSONを取得し、テーブルを描画する
    
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
