// document.write("Hello world!");
// alert("Hello world!");

// console.log("Hello world!"+"田中さん");
// console.log(10+10);
// console.log("10"+"10")

// let x = 1;
// let y = 1;
//  x++;  //x = x+1
// console.log(x);
//  y--;  //y = y-1
// console.log(y);

// let x = 7;
// let y = x++; //xがｙに変換されてからインクリメント
// let x2 = 7;
// let y2 = ++x2;　//x2のインクリメント後にy2に代入

// console.log(x);
// console.log(y);
// console.log(x2);
// console.log(y2);
// console.log(x++);
// console.log(x--);

//変数とは　値を代入するための箱
//定数とは　値を別名で定義したもの



let age = 30;　//変数
const name = "田中太郎"; //定数

age = age + 2;

console.log(`${name}さんの年齢は${age}です。`)


'use strict';  //初めに記述しておくと、厳密にチェックを行うという文書になる。
　　　　　　　　 //エラーチェックが詳細になる。

// var 変数名/定数　←使わない。2015年以前に使われていたやり方。

// constを優先して使うこと。