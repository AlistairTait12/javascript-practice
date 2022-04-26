// Get the elements to be worked with
let removeButtons = Array.from(document.querySelectorAll('.removeButton'));

let tagsContainer = document.getElementById('tagsContainer')

// Add event listener to 'add' button
// We may also need to add event listeners to all 'removeButtons'
// AND update the let removeButtons variable

// Function() that will put the tag in the box
function addTagToContainer(textString) {
  let button = document.createElement('button');
  button.classList.add('removeButton');
  button.innerHTML = 'x';

  let span = document.createElement('span');
  span.classList.add('tagElement');

  span.innerHTML = `#${textString} `;

  span.appendChild(button);

  tagsContainer.appendChild(span);
}

// Should there be a helper method to create and return a tag element?
// Maybe even a js class?

// Function() that will remove a tag from a box if said tag's removeButton is clicked