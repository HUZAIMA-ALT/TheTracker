function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;
    taskList.appendChild(li);
    taskInput.value = "";
  }
}

function talkToExa() {
  const input = document.getElementById("exaInput").value.trim();
  const output = document.getElementById("exaOutput");
  if (input !== "") {
    output.innerText = "Exa says: " + generateReply(input);
  }
}

function generateReply(input) {
  return input.includes("motivate") ? "Keep going, you're doing amazing!" : "I'm always here to help!";
}