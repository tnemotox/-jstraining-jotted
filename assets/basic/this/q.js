'use strict';
// グローバルオブジェクトにdogを定義
window.animal = {
    Dog: function (voice) {
        console.log('5:' + this.voice); // undefined
        this.voice = voice;
        this.bark = function() {
            console.log('8:' + this.voice);
        };
    },
    voice: 'woooooooo!',
    bark: function () {
        console.log('13:' + this.voice);
    }
};

// グローバル領域でのthisは、グローバルオブジェクト（window）を参照する
console.log(this.animal);

// ボタンがクリックされたときの処理
$('#check').on('click', function () {
    // 普通に呼び出した場合、thisはレシーバオブジェクトを指す
    // レシーバオブジェクトとは、ドット演算子の左側（今回はanimal）を指す
    window.animal.bark();
    
    // 恣意的に、レシーバオブジェクトなしで関数を呼び出してみる
    var bark = window.animal.bark;
    // レシーバオブジェクトが存在しないため、thisはグローバルオブジェクトを参照する
    bark(); // this.voiceは未設定のため、undefined
    // グローバルオブジェクトに、値を設定し、参照していることを確認する
    window.voice = 'ogya!ogya!';
    bark(); // ogya!ogya!

    // apply もしくは call を使用した場合、thisの参照先はその引数になる
    var cat = {
        voice: 'mew mew!'
    };
    // apply を使用するため、thisの参照先がcatに差し替わる
    window.animal.bark.apply(cat); // mew mew! と出力
    // apply の引数がない場合は、thisはグローバルオブジェクトを参照する
    window.animal.bark.apply(); // this.voiceは先ほど定義したため、ogya!ogya!

    // コンストラクタを呼び出した場合、thisは生成するオブジェクト自身を指す
    var dog = new window.animal.Dog('bow wow!');
    dog.bark();
});
