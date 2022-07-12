window.console.log();//水色＝プロパティ、黄色＝メソッド　windowの中のコンソールの中のlogメソッドを呼び出している

window.alert();

window.document.getElementById(); //window.は省略可能

const foo = document.getElementById("foo"); //変数宣言
const fooWeight = foo.offsetWidth;
const fooHeight = foo.offsetHeight; //長いコードの時は変数でおいて省略
const fooArea = fooWeight * fooHeight