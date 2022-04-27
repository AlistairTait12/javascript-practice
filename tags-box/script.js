// Get the elements to be worked with
let tagsContainer = document.getElementById('tagsContainer');
let tagInputContainer = document.getElementById('tagInputContainer');
let addButton = document.getElementById('addButton');
let tagInput = document.getElementById('tagInput');

addButton.addEventListener('click', addTagOnClick);

function addTagOnClick() {
  addTagToContainer(tagInput.value);
}

function removeTag(event) {
  event.target.parentElement.remove();
}

function addTagToContainer(textString) {
  let button = document.createElement('button');
  button.classList.add('removeButton');
  button.innerHTML = 'x';

  let div = document.createElement('div');
  div.classList.add('tagElement');

  div.innerHTML = `#${textString} `;

  div.appendChild(button);
  button.addEventListener('click', removeTag);

  tagsContainer.appendChild(div);
}
