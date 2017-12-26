$('#check').on('click', function () {
    'use strict';
    // AjaxでJSONを取得する
    $.ajax({
        url: '/getData',
        type: 'GET'
    }).done(function (result) {
        // c3.jsを利用して円グラフを描画する
        c3.generate({
            bindto: '#multi-graph',
            // JSONに対応してデータを取得、設定
            data: {
                x: 'dates',
                columns: [
                    $.merge(['ownTasks'], result.histgram.ownTasks),
                    $.merge(['otherTasks'], result.histgram.otherTasks),
                    $.merge(['completedTasks'], result.histgram.completedTasks),
                    $.merge(['actualTasks'], result.histgram.actualTasks),
                    $.merge(['dates'], _.pluck(result.dateList, 'date'))
                ],
                type: 'bar',
                types: {
                    actualTasks: 'line'
                },
                names: {
                    ownTasks: '自PJタスク',
                    otherTasks: '他PJタスク',
                    completedTasks: '完了タスク',
                    actualTasks: '実績タスク'
                },
                groups: [
                    ['ownTasks', 'otherTasks']
                ],
                keys: {
                    value: ['ownTasks', 'otherTasks', 'completedTasks', 'actualTasks']
                }
            },
            // 系列の表示箇所の整形
            legend: {
                position: 'inset',
                inset: {
                    step: 1,
                }
            },
            // 軸の設定
            axis: {
                x: {
                    type: 'timeseries'
                },
                y: {
                    label: {
                        text: 'タスク数',
                        position: 'outer-middle'
                    }
                }
            }
        });
    }).fail(function () {
        // 何もしない
    });
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
