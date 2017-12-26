// ボタンがクリックされたときの処理
$('#check').on('click', function () {
    'use strict';
    // 以下に解答を記述する

    // 配列の操作をしてみよう
    var array = [1, 2, 3, 4, 5];

    // _.mapを利用し、配列の値を2倍した配列を取得

    // _.isEqualを利用し、_.mapで取得した配列と比較をし、期待した配列になっているか確認
    var expectTwiceArray = [2, 4, 6, 8, 10];

    // _.filterを利用し、2の倍数の要素だけを抽出した配列を取得

    // オブジェクトの操作をしてみよう
    var object = {
        name: 'tanaka',
        age: 27,
        address: 'makuhari'
    };

    // _.keysを利用し、オブジェクトのキーを配列で取得

    // _.valuesを利用し、オブジェクトの値を配列で取得

    // _.isEqualを利用し、object と tanaka を比較し、完全に一致することを確認
    var tanaka = {
        name: 'tanaka',
        age: 27,
        address: 'makuhari'
    };

    // _.isEqualを利用し、suzuki と tanaka を比較し、異なることを確認
    var suzuki = {
        name: 'suzuki',
        age: 30,
        address: 'makuhari'
    };

    // _.isMatchを利用し、オブジェクトが特定のkeyとvalueの組み合わせを持っているかを確認
    // suzuki が { age: 30 } を含んでいるか、確認する

    // オブジェクトの配列を操作してみよう
    var persons = [
        {
            name: 'tanaka',
            age: '27',
            address: 'makuhari'
        },
        {
            name: 'suzuki',
            age: '30',
            address: 'makuhari'
        },
        {
            name: 'sato',
            age: '27',
            address: 'sinagawa'
        }
    ];

    // _.pluckを利用し、nameの値を抽出した配列を取得

    // _.maxを利用し、最年長者を取得

});