const addForm = document.querySelector('.add');
const unorderedList = document.querySelector('.todos');

function generateTemplate(todo) {
    const html = `
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>${todo}</span>
          <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    unorderedList.innerHTML += html;
}

addForm.addEventListener('submit', (e)=> {
    e.preventDefault();

    const todo = addForm.add.value.trim();
    generateTemplate(todo);
    addForm.reset();

    localStorage.setItem('todo', todo);
})

if (localStorage.getItem('todo')) {
    generateTemplate(localStorage.getItem('todo'))
}

unorderedList.addEventListener('click', (e)=> {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
        localStorage.removeItem('todo', e.target)
    }

})

const lists = document.querySelectorAll('ul');
lists.forEach(list => {
    list.addEventListener('click', (e) => {
        if (e.target.tagName === 'SPAN') {
            e.target.classList.toggle('checked')
        }
    })
});