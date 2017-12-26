// ボタンがクリックされたときの処理
$('#check').on('click', function () {
    'use strict';
    // 以下に解答を記述する
    var str = 'str';
    var str1 = new String('str');
    var str2 = new String('str');
    var str3 = '1';
    var num = 1;
    var num1 = new Number(1);
    var num2 = new Number(1);
    var num3 = new Number(str3);
    var num4 = Number.parseInt(str3);

    // == 演算子を使用して下記を比較する
    console.log('==');
    // str と str1
    console.log(str == str1);
    // str1 と str2
    console.log(str1 == str2);
    // num と num1
    console.log(num == num1);
    // num1 と num2
    console.log(num1 == num2);
    // num と num3
    console.log(num == num3);
    // num1 と num3
    console.log(num1 == num3);
    // num と num4
    console.log(num == num4);
    // num1 と num4
    console.log(num1 == num4);


    // === 演算子を使用して下記を比較する
    console.log('===');
    // str と str1
    console.log(str === str1);
    // str1 と str2
    console.log(str1 === str2);
    // num と num1
    console.log(num === num1);
    // num1 と num2
    console.log(num1 === num2);
    // num と num3
    console.log(num === num3);
    // num1 と num3
    console.log(num1 === num3);
    // num と num4
    console.log(num === num4);
    // num1 と num4
    console.log(num1 === num4);
});
