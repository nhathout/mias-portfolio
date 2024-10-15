// Get all artwork elements
const artworks = document.querySelectorAll('.artwork');

artworks.forEach((artwork) => {
  artwork.addEventListener('click', () => {
    const inner = artwork.querySelector(
      '.artwork-inner, .artwork-inner1, .artwork-inner2, .artwork-inner3, .artwork-inner4, .artwork-inner5, .artwork-inner6, .artwork-inner7, .artwork-inner8'
    );
    inner.classList.toggle('flipped');
  });
});
