// 'use strict'

// let i = 1;

// if (i === 1){
//     console.log("神です");

// }

// ==  の場合は、左右を比較して、データ型が違っても一致するデータ型に変換した後に比
//     較する。
// === の場合は、左右を比較して、データ型が違った時は等しくないという判断をする。


// let testscore = 650;

// if(testscore >= 80){
//     document.write("合格です！おめでとうございます！")
// } else if (testscore >= 70){
//     document.write("おしい、あと少し")
// } else {
//     document.write("不合格です。もう少し勉強しましょう")
// }

////   nameList番号    0       1      2 
// const nameList = ["田中", "山田", "林"];

// for (let i = 0 ; i < nameList.length; i++){
//     console.log(nameList[i])
// }

// 初期値0から、nameListにはっている数まで(nameList.Length)、1ずつ足して(i++)、表示する(nameList[i])

//下記のループ分を表示する。
// 1.田中
// 2.山田
// 3.林
// 4.佐藤

// 正解

// const nameList = ["田中","山田","林","佐藤"]

//  for (let i = 0; i < nameList.length; i++){
//      console.log(`${i+1}.${nameList[i]}`);
//  }

// 誤答

// // const nameList = ["1.田中","2.山田","3.林","4.佐藤"]

// // for (let i = 0; i < nameList.length; ++i){
// //     console.log(nameList[i])
// // }

function scorecheck(){
    let testscore = document.getElementById('score').value
    if(testscore >= 80){
        document.write("合格です！おめでとうございます！")
    } else if (testscore >= 70){
        document.write("おしい、あと少し")
    } else {
        document.write("不合格です。もう少し勉強しましょう")
    }
}

