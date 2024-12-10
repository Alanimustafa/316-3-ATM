const openButton = document.getElementById('openButton');
const closeButton = document.getElementById('closeButton');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');

// Function to open the modal
function openModal() {
  modal.style.display = 'block';
  overlay.style.display = 'block';
}

// Function to close the modal
function closeModal() {
  modal.style.display = 'none';
  overlay.style.display = 'none';
}

// Add event listeners
openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);