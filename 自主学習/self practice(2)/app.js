const question = '好きな季節は？';
const answers = ['春','夏','秋','冬'];
const correct = '秋';

const $button = document.getElementsByTagName('button');
 //質問文
const setupQuiz = () => {
  document.getElementById('js-question').textContent = question;
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();

//関数でif文を定義して使いまわせるように
const clickHandler = (e) => {
  if (correct === e.target.textContent){
    window.alert('正解');
  } else{
    window.alert('不正解');
  }
;}
//ボタンをクリックしたら正誤判定

//答え１
$button[0].addEventListener('click', (e) => {
  clickHandler(e);
});
//答え２
$button[1].addEventListener('click', (e) => {
  clickHandler(e);
});
//答え３
$button[2].addEventListener('click', (e) => {
  clickHandler(e);
});
//答え４
$button[3].addEventListener('click', (e) => {
  clickHandler(e);
});