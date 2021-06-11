// Import stylesheets
import './style.css';

/*
/ Осторожно! порядок создаваемых и удаляемых элементов не соблюден.
/ Код не оптимизирован! (Местами так и запланировано, что бы в случе чего
/ не крашнуть всю полосу (☺ ± местами нехватка знаний )
*/

// в этом уроке необходимо было "запилить" надпись "Я JavaScript!"
// но, имея мелкий бекграунд я немного запарился
// возможно позже я оптимизирую код, что бы не создавать каждый раз
// слушателя под каждую кнопку, но, это не точно
const less1 = document.getElementById('lession1');
let div1 = document.getElementById('div1');
less1.addEventListener('click', seeLess1);
div1.append('stroka');

function seeLess1() {
  const addElement = document.createElement('pre');
  const addDelKey = document.createElement('button');
  const addAlertKey = document.createElement('button');

  addElement.id = 'less1space';
  addDelKey.id = 'delLess1';
  addAlertKey.id = 'alertKey';

  addElement.innerText = 'Я JavaScript!';
  addDelKey.innerText = '"Скрыть"';
  addAlertKey.innerText = 'Показать alert (console log)';

  div1.append(addElement, addDelKey, addAlertKey);

  addDelKey.addEventListener('click', clearLes1);
  addAlertKey.onclick = function() {
    console.log('ne rabotaet alert');
  };
}
function clearLes1() {
  document.getElementById('less1space').remove();
  document.getElementById('delLess1').remove();
  document.getElementById('alertKey').remove();
}

// в этом уроке было необходимо создать переменную admin
// переменну name, в name вписать строку "Джон"
// скопировать значение из переменной name в admin (возможно я тут не справился)
// и вывести admin используя alert, но, я опять обошелся console логом
const less2 = document.getElementById('lession2');
less2.addEventListener('click', seeLess2);

function seeLess2() {
  const seeVariable1 = document.createElement('button');
  const addDelKey2 = document.createElement('button');
  seeVariable1.id = 'variables1';
  seeVariable1.innerText = 'Выкатить переменную в консоль';

  addDelKey2.id = 'delLess2';
  addDelKey2.innerText = '"Скрыть"';
  document.body.append(addDelKey2);
  document.body.append(seeVariable1);
  addDelKey2.addEventListener('click', clearLes2);
  seeVariable1.onclick = function() {
    let admin;
    let name;
    name = 'Джон';
    admin = name;
    console.log(admin);
  };
}
function clearLes2() {
  document.getElementById('variables1').remove();
  document.getElementById('delLess2').remove();
}

//в следующий раз будет норм задача, а тут задача по типам
// поэтому, сложные консоль логи вместо алЁ!_ртов

const less3 = document.getElementById('lession3');
less3.addEventListener('click', consolka);
function consolka() {
  // добавил эту переменную просто от того, что, она была указана
  let name = 'Ilya';

  let consolki = document.createElement('button');
  consolki.id = 'consolki';
  consolki.innerText = 'console.log\\|/';
  document.body.append(consolki);
  consolki.addEventListener('click', consolelogs1);
  function consolelogs1() {
    console.log(`hello ${1}`);
    console.log(`hello ${'name'}`);
    console.log(`hello ${name}`);
  }

  const addDelKey3 = document.createElement('button');
  addDelKey3.id = 'delLess3';
  addDelKey3.innerText = '"Скрыть"';
  addDelKey3.addEventListener('click', clearLes3);
  document.body.append(addDelKey3);
  function clearLes3() {
    document.getElementById('consolki').remove();
    document.getElementById('delLess3').remove();
  }
}
// ну, задача с след текстом:
// "Создайте страницу, которая спрашивает имя у пользователя и выводит его."
// что за страница? Куда выводить? выводить имя пользователя, или что? ☺
// задача расчитывает на то, что, будет использоваться [(promt)]
// но, у меня такого нет)) поэтому, создам форму и поле для отображения что ли
const less4 = document.getElementById('lession4');
less4.addEventListener('click', nameForm);
function nameForm() {
  let inputForm = document.createElement('input');
  let zapros = document.createElement('div');
  let otvet = document.createElement('textArea');
  const delLess4 = document.createElement('button');
  // я тут сделаю "костыль"
  let sumButton = document.createElement('button');
  sumButton.id = 'sumButton';
  sumButton.innerText = 'внос значeния?';
  document.body.append(sumButton);
  sumButton.addEventListener('click', () => {
    otvet.value = inputForm.value;
  });

  delLess4.id = 'delLess4';
  delLess4.innerText = '"Clear area!!!"';
  zapros.id = 'zapros';
  zapros.innerText = 'Введите ваше имя';
  inputForm.id = 'inputForm';
  // inputForm.innerText = 'имя?';
  otvet.id = 'otvet';
  document.body.append(zapros);
  document.body.append(inputForm);
  document.body.append(otvet);
  document.body.append(delLess4);
  delLess4.addEventListener('click', clearLes4);

  function clearLes4() {
    document.getElementById('zapros').remove();
    document.getElementById('inputForm').remove();
    document.getElementById('otvet').remove();
    document.getElementById('delLess4').remove();
    document.getElementById('sumButton').remove();
  }
}
const less5 = document.getElementById('lession5');
less5.addEventListener('click', personaList);
function personaList() {
  let div5 = document.getElementById('div5');
}
