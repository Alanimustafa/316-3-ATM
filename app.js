function getCurrentDate() {
  const now = new Date();
  return now.toLocaleDateString(); // e.g., "MM/DD/YYYY" format
}

// Function to format the time
function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString(); // e.g., "HH:MM:SS AM/PM" format
}

// Inserting date and time into respective divs
document.querySelector('.todayDate').textContent = `${getCurrentDate()}`;
document.querySelector('.currentTime').textContent = `${getCurrentTime()}`;

// Call the function initially to set the date and time


// Update the date and time every second
setInterval(getCurrentTime(), 1000);















// const openButton = document.getElementById('openButton');
// const closeButton = document.getElementById('closeButton');
// const modal = document.getElementById('modal');
// const overlay = document.getElementById('overlay');

// // Function to open the modal
// function openModal() {
//   modal.style.display = 'block';
//   overlay.style.display = 'block';
// }

// // Function to close the modal
// function closeModal() {
//   modal.style.display = 'none';
//   overlay.style.display = 'none';
// }

// // Add event listeners
// openButton.addEventListener('click', openModal);
// closeButton.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);