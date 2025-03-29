// let text = document.getElementById("text");

// text.style.color = "greenyellow";
// text.style.backgroundColor = "black";

// text.innerHTML = "New<br>text";

// let spans = document.getElementsByTagName('span');

// let spans = document.getElementsByClassName('simple_text');

// for(let i = 0; i < spans.length; i++) {
//     console.log(spans[i].innerHTML);
// }

document.getElementById('main-form').addEventListener('submit', checkForm);

function checkForm(event) {

    event.preventDefault();

    let el = document.getElementById('main-form');


  let name = el.name.value;
  let pass = el.pass.value;
  let repass = el.repass.value;
  let state = el.state.value;

  let fail = "";

  if (name == "" || pass == "" || repass == "" || state == "")
    fail = "Заполните все поля";
  else if (name.length <= 1 || name.length > 50)
    fail = "Введите корректное имя";
  else if (pass != repass) fail = "Пароли не совпадают! Введите еще раз.";
  else if (pass.split("&").length > 1) fail = "Некорректный пароль";

  if (fail != "") {
    document.getElementById("error").innerHTML = fail;
    return false;
  } else {
    alert("ВСе данные введены корректно!");
    window.location = "https://www.google.kz/";
  };
};
