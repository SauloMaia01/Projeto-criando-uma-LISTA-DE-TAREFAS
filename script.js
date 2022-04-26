const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");

const validateInput = () => inputElement.value.trim().length > 0;

    /* if (inputElement.ariaValueMax.trim().length > 0) {
        return true;
    } else {
        return false;
    } - A MESMA COISA QUE ESTA ESCRITO ACIMA
    trim() remove os espaços em branco (whitespaces) do início e/ou fim de um texto */


const handleAddTask = () => {
    const inputIsValid = validateInput();

    if (!inputIsValid) {
        return inputElement.classList.add("error");
    }
};

const handleInputChange = () => {
    const inputIsValid = validateInput();

    if (inputIsValid) {
        return inputElement.classList.remove("error");
    }
}

addTaskButton.addEventListener("click", () => handleAddTask());

inputElement.addEventListener('change', () => handleInputChange());