const tasks = [
  { title: "Comprar comida para o gato", type: "Urgente" },
  { title: "Consertar Computador", type: "Importante" },
  { title: "Beber água", type: "Normal" },
  { title: "Enviar relatório trimestral", type: "Importante" },
  { title: "Fazer exercícios físicos", type: "Normal" },
  { title: "Agendar consulta médica", type: "Urgente" },
  { title: "Ler pelo menos um capítulo de um livro", type: "Normal" },
  { title: "Limpar a despensa", type: "Importante" },
  { title: "Pagar a conta de energia", type: "Urgente" },
  { title: "Assistir a um documentário interessante", type: "Normal" },
];

function createTaskItem(task, index) {
  const list = document.createElement("li");
  const div = document.createElement("div");
  const urgencyLevel = document.createElement("span");
  const taskTitle = document.createElement("p");
  const button = document.createElement('button');
  const img = document.createElement('img');

  list.classList.add("task__item");
  div.classList.add('task-info__container');
  urgencyLevel.classList.add("task-type");
  taskTitle.innerText = task.title;
  button.classList.add('task__button--remove-task');

  if (task.type.toLowerCase() === 'urgente') {
    urgencyLevel.classList.add('span-urgent')
  };
  if (task.type.toLowerCase() === 'importante') {
    urgencyLevel.classList.add('span-important')
  };
  if (task.type.toLowerCase() === 'normal') {
    urgencyLevel.classList.add('span-normal')
  };

  img.src = "./assets/trash-icon.svg";
  img.alt = "Lixeira";

  list.append(div, button);
  div.append(urgencyLevel, taskTitle);
  button.appendChild(img);
  button.addEventListener('click', function () {
    tasks.splice(index, 1)
    renderElements(tasks)
  })
  return list;
}

function renderElements(array) {
  const taskUl = document.querySelector('.tasks__list');
  taskUl.innerHTML = '';
  for (let i = 0; i < array.length; i++) {
    const tasks = array[i];
    const tasksItem = createTaskItem(tasks, i);
    taskUl.appendChild(tasksItem);
  }
}

renderElements(tasks)

function addNewTask() {
  const buttonAddTask = document.querySelector('.form__button--add-task');

  buttonAddTask.addEventListener('click', function (event) {
    event.preventDefault();

    const titleTask = document.querySelector('.form__input--text');
    const urgency = document.querySelector('.form__input--priority');

    const newTask = {
      title: titleTask.value,
      type: urgency.value
    };

    if (titleTask.value.length == 0 || urgency.value.length == 0) {
      alert('Algum campo ficou vazio.')
    } else {
      tasks.push(newTask);
      renderElements(tasks)
    };
  });
};

addNewTask()
