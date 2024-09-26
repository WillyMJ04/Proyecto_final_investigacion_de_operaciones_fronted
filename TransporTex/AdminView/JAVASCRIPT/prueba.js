function editData(element) {
    let listItem = element.parentElement;
    let currentText = listItem.firstChild.textContent.trim();
    let inputField = document.createElement("input");
    inputField.type = "text";
    inputField.value = currentText;

    let saveButton = document.createElement("button");
    saveButton.textContent = "Guardar";
    saveButton.onclick = function() {
        saveData(listItem, inputField.value);
    };

    listItem.innerHTML = "";
    listItem.appendChild(inputField);
    listItem.appendChild(saveButton);
}

function saveData(listItem, newText) {
    listItem.innerHTML = newText + ' <span class="edit-btn" onclick="editData(this)">Editar</span>';
}
