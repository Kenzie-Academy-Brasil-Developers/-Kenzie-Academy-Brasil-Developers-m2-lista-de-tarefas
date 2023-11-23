const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];

function createTaskItem(task) {

  const list = document.createElement("li");
  const inforList = document.createElement("div");
  const urgencyLevel = document.createElement("span");
  const taskTitle = document.createElement("p");
  const button = document.createElement('button')
  const img = document.createElement('img')

  list.classList.add("task__item");
  inforList.classList.add('task-info__container');
  urgencyLevel.classList.add("task-type");
  taskTitle.innerText = task.title;
  button.classList.add('task__button--remove-task');

  if (task.type === 'Urgente') {
    urgencyLevel.classList.add('span-urgent')
  }
  if (task.type === 'Importante') {
    urgencyLevel.classList.add('span-important')
  }
  if (task.type === 'Normal') {
    urgencyLevel.classList.add('span-normal')
  }

  img.src = "./assets/trash-icon.svg"
  img.alt = "Lixeira"

  inforList.appendChild(urgencyLevel);
  inforList.appendChild(taskTitle);
  list.appendChild(inforList);
  list.appendChild(button);
  button.appendChild(img)

  return list;
}

function renderElements(array) {
  const taskUl = document.querySelector('.tasks__list');
  taskUl.innerHTML = ''
  for (let i = 0; i < array.length; i++) {
    const allTasks = array[i];
    const tasksItem = createTaskItem(allTasks);
    taskUl.appendChild(tasksItem)
  }
}
renderElements(tasks)