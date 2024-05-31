const listeInput = document.getElementById("liste-input");
const leggTilBtn = document.getElementById("legg-til-btn");
const handeListe = document.getElementById("liste");

// add a task
const leggTil = () => {
  const taskTekst = listeInput.value.trim();

  if (taskTekst !== "") {
    const taskItem = createTaskItem(taskTekst);
    handeListe.appendChild(taskItem);
    listeInput.value = "";
  }
};
const createTaskItem = (taskTekst) => {
  const taskItem = document.createElement("li");
  taskItem.className = "liste-item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");

  const taskTekstSpan = document.createElement("span");
  taskTekstSpan.textContent = taskTekst;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Slett";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", deleteTask);

  taskItem.appendChild(checkbox);
  taskItem.appendChild(taskTekstSpan);
  taskItem.appendChild(deleteBtn);

  return taskItem;
};

const deleteTask = (event) => {
  const taskItem = event.target.parentElement;
  handeListe.removeChild(taskItem);
};

const toggleTask = (event) => {
  const taskItem = event.target.parentElement;
  taskItem.classList.toggle("completed");
};

leggTilBtn.addEventListener("click", leggTil);
listeInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    leggTil();
  }
});

handeListe.addEventListener("change", toggleTask);
