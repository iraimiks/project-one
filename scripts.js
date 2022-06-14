function addItem() {
    //document.querySelector('#task-text').value.length can validate length of string
    if (document.querySelector('#task-text').value.length === 0) {
        //display alert about empty field text
        alert("Please Enter a Task")
    } else {
        // create new element with text 
        // <span> elements will hold text wich is inputed in text filter
        // button will hold logic to remove this element
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
            <span id="taskname">
                ${document.querySelector('#task-text').value}
            </span>
            <button class="delete">
               Delete
            </button>
        </div>
    `;
        //Select all created elements using querySelectorAll please test it in some example
        //current_tasks hold all object who will have delete class on it
        let current_tasks = document.querySelectorAll(".delete");
        console.log(current_tasks);
        //for loop create for each elements propertie onlick add it to new created element
        // and will give options to remove that element
        for (let i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
                console.log(this.parentNode.remove());
            }
        }
    }
}
