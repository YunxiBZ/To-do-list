/**
 * Todolist
 */
const app = {

  todo : document.getElementById('todo'),
  lists : [
    "Faire une to do list en JS", 
    "Faire une to do list en React",
    'Coder Facebook '
  ],

  init: () => {

    app.drawPage();
    app.addListenerToAction();

  },

  addListenerToAction: ()=>{
    
    const form = document.querySelector('form');
    form.addEventListener('submit', app.handleAddList);

  },

  handleAddList: (event) => {

    event.preventDefault();
    const form = event.target;
    const value = form.querySelector('#inputWindow').value
    app.lists.push(value);

    //rewrite the lists
    let ul = document.querySelector('ul');
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
    app.writeLists();
  },

  drawPage : () => {
    //prepare elements
    const form = document.createElement('form');

    const input = document.createElement('input');
    input.setAttribute('placeholder','Ajouter une tâche');
    input.setAttribute('id', 'inputWindow');
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'inputlist');
    input.setAttribute('value', '');

    const p = document.createElement('p');
    p.textContent= '2 tâches en cours'

    const ul = document.createElement('ul');

    //put elements in DOM
    app.todo.appendChild(form);
    form.appendChild(input);
    form.appendChild(p);
    form.appendChild(ul);
    
    app.writeLists()
    
  },
  
  writeLists : () => {

    app.lists.forEach((list, index) => {
      let ul = document.querySelector('ul')
      const li = document.createElement('li');
      ul.appendChild(li);
      //li.classList.add('done');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('id', `checkbox${index + 1}`);
      checkbox.setAttribute('name', `checkbox${index + 1}`);
      checkbox.addEventListener('click', app.handleClassList);
      const label = document.createElement('label');
      label.setAttribute('for', `checkbox${index + 1}`)
      label.textContent = list;
      li.appendChild(checkbox);
      li.appendChild(label);
      
    })

  },

  handleClassList: (event) => {
    const li = event.target.closest('li')
    console.log(li)
    li.classList.toggle('done');
  }
};


// Chargement du DOM
document.addEventListener('DOMContentLoaded', app.init);
