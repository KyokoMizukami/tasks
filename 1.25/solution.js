const btn = document.querySelector('#add-btn');

btn.addEventListener('click',function(e){
    e.preventDefault();
    const input = document.querySelector('#add-input');
    const newListText = input.value;
    const list = document.createElement('li');
    const newList = `
        <p>${newListText}</p>
        <p>
        <i class="fa fa-pencil"></i>
        <i class="fa fa-times"></i>
        </p>
    `
    list.innerHTML = newList;
    const ul = document.querySelector('#list');
    ul.appendChild(list);
});