// Get the elements to be worked with
let tagsContainer = document.getElementById('tagsContainer');
let tagInputContainer = document.getElementById('tagInputContainer');
let addButton = document.getElementById('addButton');
let tagElements = Array.from(document.querySelectorAll('.tagElement'));

tagElements.forEach(tag => {
  tag.childNodes[1].addEventListener('click', removeTag);
});

function addTagToContainer(textString) {
  let button = document.createElement('button');
  button.classList.add('removeButton');
  button.innerHTML = 'x';

  let span = document.createElement('span');
  span.classList.add('tagElement');

  span.innerHTML = `#${textString} `;

  span.appendChild(button);
  button.addEventListener('click', removeTag);

  tagsContainer.appendChild(span);
}

function removeTag(event) {
  event.target.parentElement.remove();
}
