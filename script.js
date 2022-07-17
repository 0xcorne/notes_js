/* 
Created with passion by Corné Adema / 0xcorne
GitHub: https://github.com/0xcorne
*/

// Grabbing add Note button from element from the DOM
const addButton = document.querySelector('.add_note')

addButton.addEventListener('click', () => {
  addNewNote();
});

function addNewNote() {
  const note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = `
        <div class="note_header">
        <button class="pencil"><img src="pencil.png"></button> 
        <button class="bin"><img src="bin.png"></button>
        </div>
        <div class="main hidden">
        </div>
        <textarea></textarea>
    </div>`;

  const pencilButton = note.querySelector('.pencil');
  const binButton = note.querySelector('.bin');
  const main = note.querySelector('.main');
  const textArea = note.querySelector('textarea');

  pencilButton.addEventListener('click', () => {
    main.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
  });

  binButton.addEventListener('click', () => {
    note.remove();
  });

  textArea.addEventListener('input', (e) => {
    const { value } = e.target;

    main.innerHTML = marked(value);
  });

  document.body.appendChild(note);
}
