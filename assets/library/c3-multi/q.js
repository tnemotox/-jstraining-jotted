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
        dateList: [
            {
                date: '2016-02-28',
                type: 'holiday'
            },
            {
                date: '2016-02-29',
                type: 'weekday'
            },
            {
                date: '2016-03-01',
                type: 'weekday'
            },
            {
                date: '2016-03-02',
                type: 'weekday'
            },
            {
                date: '2016-03-03',
                type: 'weekday'
            },
            {
                date: '2016-03-04',
                type: 'weekday'
            },
            {
                date: '2016-03-05',
                type: 'saturday'
            },
            {
                date: '2016-03-06',
                type: 'holiday'
            },
            {
                date: '2016-03-07',
                type: 'weekday'
            },
            {
                date: '2016-03-08',
                type: 'weekday'
            }
        ],
        histgram: {
            ownTasks: [2, 4, 5, 5, 3, 2, 2, 2, 2, 1],
            otherTasks: [1, 1, 1, 1, 0, 0, 4, 4, 5, 5],
            completedTasks: [1, 1, 1, 1, 1, 2, 2, 2, 2, 2],
            actualTasks: [2, 3, 3, 3, 3, 4, 5]
        }
    }

});