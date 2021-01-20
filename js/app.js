/**
 * Todolist
 */
const app = {

  todo : document.getElementById('todo'),
  init: () => {
    app.drawList();

  },

  drawList : () => {
    //prepare elements
    const form = document.createElement('form');

    const input = document.createElement('input');
    input.setAttribute('placeholder','Ajouter une tâche');
    input.setAttribute('id', 'inputWindow');


    const p = document.createElement('p');
    p.textContent= '2 tâches en cours'

    const ul = document.createElement('ul');

    const li = document.createElement('li');
    li.classList.add('done');

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', 'checkbox');
    checkbox.setAttribute('name', 'checkbox');
    const label = document.createElement('label');
    label.setAttribute('for', 'checkbox')
    label.textContent = 'Faire une to do list en JS ';


    const li2 = document.createElement('li');
    //li2.classList.add('done');

    const checkbox2 = document.createElement('input');
    checkbox2.setAttribute('type', 'checkbox');
    checkbox2.setAttribute('id', 'checkbox2');
    checkbox2.setAttribute('name', 'checkbox2');
    const label2 = document.createElement('label');
    label2.setAttribute('for', 'checkbox2')
    label2.textContent = 'Faire une to do list en React';


    const li3 = document.createElement('li');
    //li3.classList.add('done');

    const checkbox3 = document.createElement('input');
    checkbox3.setAttribute('type', 'checkbox');
    checkbox3.setAttribute('id', 'checkbox');
    checkbox3.setAttribute('name', 'checkbox');
    const label3 = document.createElement('label');
    label3.setAttribute('for', 'checkbox')
    label3.textContent = 'Coder Facebook ';

    //put elements in DOM
    todo.appendChild(form);
    form.appendChild(input);
    form.appendChild(p);
    form.appendChild(ul);
    ul.appendChild(li);
    li.appendChild(checkbox);
    li.appendChild(label);
    ul.appendChild(li2);
    li2.appendChild(checkbox2);
    li2.appendChild(label2);
    ul.appendChild(li3);
    li3.appendChild(checkbox3);
    li3.appendChild(label3);

  }
};


// Chargement du DOM
document.addEventListener('DOMContentLoaded', app.init);
