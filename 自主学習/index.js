//コメント
const form = document.getElementById("form");//HTMLをとってくるidでform設定している
const input = document.getElementById("input");
const ul = document.getElementById("ul")//ulアクセスできるようにする

const todos = JSON.parse(localStorage.getItem("todos"))//todosはキー名、文字列で扱いづらいためJSONに変換
;

if (todos){
  todos.forEach(todo => {
    add (todo); //liタグを呼び出す、空の時はこの処理されない
  })
}

form.addEventListener("submit", function (event){
  event.preventDefault();//preventdefaultでdefaultのイベントを中断できる
  add();
});

function add(todo){
  let todoText =  input.value;

  if(todo){//todoがあったときはtodoの値入れる
    todoText = todo.text;
  }

  if (todoText){
    const li = document.createElement("li");
    li.innerText = todoText;
    li.classList.add("list-group-item");

    if (todo && todo.completed){ //todoがあってtodoがcompletedだったときに実行
      li.classList.add("text-decoration-line-through");
    }

    li.addEventListener("contextmenu", function
    (event) {  //右クリックというイベント＝contextmenu
      event.preventDefault(); //デフォの右クリック出せないようにする
      li.remove();
      saveData();
    });

    li.addEventListener("click", function (){
      li.classList.toggle//toggleは切り替えるクリックしたら線もう一回おしたら線消える
      ("text-decoration-line-through");
      saveData();
    });

    ul.appendChild(li);
    input.value = "";//入力フォームを空に
    saveData();
  }
}

function saveData(){
  const lists = document.querySelectorAll("li");
  let todos = [];//空配列でまとめる

  lists.forEach(list => {
    let todo = {
      text: list.innerText,
      completed: list.classList.contains
      ("text-decoration-line-through")
    };
    todos.push(todo);//pushで要素を追加
    console.log(list.innerText);
  })
  localStorage.setItem("todos", JSON.stringify(todos));
}
