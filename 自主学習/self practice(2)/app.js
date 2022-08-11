// 変数
// let greeting = 'Hello World';
// 定数(上書き×)
// const
//配列
// let -- = ['','',''];
//ループ文、繰り返し処理
// let index = 0;
//オブジェクト複数もてる　プロパティ、キー

const question = '好きな季節は？';
const answers = ['春','夏',"秋","冬"];
const correct = '秋';

//質問文
document.getElementById('js-question').textContent = question;
//質問の中身
document.getElementsByTagName('button')[0].textContent = answers[0];
document.getElementsByTagName('button')[1].textContent = answers[1];
document.getElementsByTagName('button')[2].textContent = answers[2];
document.getElementsByTagName('button')[3].textContent = answers[3];
