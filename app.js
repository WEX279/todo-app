const input = document.getElementById("input-tarea")
const btn = document.getElementById("btn-añadir")
const list = document.getElementById("lista-tareas")

btn.addEventListener("click", (btn) => {
    const li = document.createElement("li"); 
    list.appendChild(li);

    const span = document.createElement("span");
    li.appendChild(span)
    span.textContent = input.value;
    

    const button = document.createElement("button");
    li.appendChild(button)
    button.textContent = "❌";
    button.classList.add("eliminar");
    button.addEventListener("click", () => li.remove());  
    input.value = '';  
});

//me cago en mi puta vida