// ボタンがクリックされたときの処理
$('#check').on('click', function () {
    'use strict';
    // 以下を実行し、動作を確認する

    // オブジェクトを初期化していない場合、undefined
    var person;
    console.log('7:' + person);

    person = {
        name: 'tanaka',
        age: 27
    };
    // 存在しないプロパティにアクセスした場合、undefined
    console.log('13:' + person.address);

    var ref = sayHello('suzuki');
    // 戻り値が存在しない関数の戻り値を格納しようとした場合、undefined
    console.log('16:' + ref);
    sayHello();

    // undefinedとnullを比較
    console.log(ref == null);
    console.log(ref === null);
});

// sayHelloを呼び出したとき、引数を渡さなければundefined
function sayHello(arg1) {
    'use strict';
    console.log('22:' + arg1 + ', Hello!');
}