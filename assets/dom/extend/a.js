// ボタンがクリックされたときの処理
$('#check').on('click', function () {
    'use strict';
    // 以下に解答を記述する
    
    // tanaka と employee を定義
    var tanaka = {
        name: 'tanaka',
        age: '27',
        address: 'hunabashi'
    };
    var employee = {
        company: 'ntt',
        location: 'makuhari'
    };

    // $.extendを利用して、2つのオブジェクトを1つにまとめる。
    // tanaka と employee を結合する
    var person = $.extend(tanaka, employee);
    console.log(tanaka);

    // suzuki を定義
    var suzuki = {
        name: 'suzuki',
        age: 30,
        phone: '043-211-2464'
    };

    // tanaka と employee と suzuki を結合する
    // 引数の後に渡したオブジェクトの値で上書きされることを確認する
    person = $.extend(tanaka, employee, suzuki);
    console.log(person);
});