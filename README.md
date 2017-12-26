# JavaScript Training Powerd by jotted

インターネットにアクセスできない環境で、WebベースでJavaScript/CSS/HTMLを一問一答形式で学習するための基盤です。  
[Jotted](https://ghinda.net/jotted/)を元に作成しています。

## usage

    > npm install
    > npm start

access:[http://127.0.0.1:3000/](http://127.0.0.1:3000/)

## 問題を追加する手順

* list.jsonに問題の名称と説明文、使用するペインを定義したオブジェクトを追加する
* assets配下にlist.jsonに記述した名称に合わせてフォルダを作成する
* 作成したフォルダ配下に、問題はq.js/css/html、回答はa.js/css/htmlとして問題を配置する
* 不要なファイルであっても、空ファイルで作成しておく
* list.jsonに問題の種別を増やしたい場合は、main.jsを編集する必要する
