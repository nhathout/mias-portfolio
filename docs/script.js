// Flip functionality
const artworks = document.querySelectorAll('.artwork');

artworks.forEach((artwork) => {
  artwork.addEventListener('click', () => {
    const inner = artwork.querySelector(
      '.artwork-inner, .artwork-inner1, .artwork-inner2, .artwork-inner3, .artwork-inner4, .artwork-inner5, .artwork-inner6, .artwork-inner7, .artwork-inner8'
    );
    inner.classList.toggle('flipped');
  });
});

// Modal functionality
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-image');
const closeModal = document.getElementsByClassName('close-modal')[0];

// Function to open the modal
function openModal(imageSrc) {
  modal.style.display = 'block';
  modalImg.src = imageSrc;
}

// Event listener for "View Larger" buttons
const viewLargerButtons = document.querySelectorAll('.view-larger-button');

viewLargerButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the flip when clicking the button
    const imageSrc = button.getAttribute('data-image');
    openModal(imageSrc);
  });
});

// Close the modal when the user clicks on (x)
closeModal.onclick = function () {
  modal.style.display = 'none';
};

// Close the modal when the user clicks anywhere outside the image
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
