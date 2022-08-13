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
const answers = ['春','夏','秋','冬'];
const correct = '秋';

const setupQuiz = () => {
  //質問文
  document.getElementById('js-question').textContent = question;
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex ++;
  }
}
//以下のコードと同等のコードを上に関数として記述
//質問の中身(HTMLの値を取ってくる場合は頭に＄をつけるのが一般的)
// $button[0].textContent = answers[0];
// $button[1].textContent = answers[1];
// $button[2].textContent = answers[2];
// $button[3].textContent = answers[3];
const $button = document.getElementsByTagName('button');



//ボタンをクリックしたら正誤判定
//答え１
$button[0].addEventListener('click', () => {
  if (correct === $button[0].textContent){
    window.alert('正解');
  } else{
    window.alert('不正解');
  }
});
//答え２
$button[1].addEventListener('click', () => {
  if (correct === $button[1].textContent){
    window.alert('正解');
  } else{
    window.alert('不正解');
  }
});
//答え３
$button[2].addEventListener('click', () => {
  if (correct === $button[2].textContent){
    window.alert('正解');
  } else{
    window.alert('不正解');
  }
});
//答え４
$button[3].addEventListener('click', () => {
  if (correct === $button[3].textContent){
    window.alert('正解');
  } else{
    window.alert('不正解');
  }
});