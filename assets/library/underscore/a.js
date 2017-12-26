// ボタンがクリックされたときの処理
$('#check').on('click', function () {
    'use strict';
    // 以下に解答を記述する

    // 配列の操作をしてみよう
    var array = [1, 2, 3, 4, 5];

    // _.mapを利用し、配列の値を2倍した配列を取得
    var twiceArray = _.map(array, function (element) {
        return element * 2;
    });
    console.log(twiceArray);

    // _.isEqualを利用し、期待した配列になっているか確認
    var expectTwiceArray = [2, 4, 6, 8, 10];
    console.log(twiceArray === expectTwiceArray); // false
    console.log(_.isEqual(twiceArray, expectTwiceArray)); // true

    // _.filterを利用し、2の倍数の要素だけを抽出した配列を取得
    var result = _.filter(array, function (number) {
        return number % 2 === 0;
    });
    console.log(result);

    // オブジェクトの操作をしてみよう
    var object = {
        name: 'tanaka',
        age: 27,
        address: 'makuhari'
    };

    // _.keysを利用し、オブジェクトのキーを配列で取得
    var keys = _.keys(object);
    console.log(keys);

    // _.valuesを利用し、オブジェクトの値を配列で取得
    var values = _.values(object);
    console.log(values);

    // _.isEqualを利用し、object と tanaka を比較し、完全に一致することを確認
    var tanaka = {
        name: 'tanaka',
        age: 27,
        address: 'makuhari'
    };
    console.log(object === tanaka); // false
    console.log(_.isEqual(object, tanaka)); // true

    // _.isEqualを利用し、suzuki と tanaka を比較し、異なることを確認
    var suzuki = {
        name: 'suzuki',
        age: 30,
        address: 'makuhari'
    };
    console.log(_.isEqual(suzuki, tanaka)); // false

    // _.isMatchを利用し、オブジェクトが特定のkeyとvalueの組み合わせを持っているかを確認
    console.log(_.isMatch(suzuki, {
        age: 30
    })); // true
    console.log(_.isMatch(suzuki, {
        address: 'sinagawa'
    })); // false

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
    var names = _.pluck(persons, 'name');
    console.log(names);

    // _.maxを利用し、最年長者を取得
    var maxPerson = _.max(persons, function (person) {
        return person.age;
    });
    console.log(maxPerson);
});