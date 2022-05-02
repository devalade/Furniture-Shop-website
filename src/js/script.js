import Alpine from 'alpinejs';

window.addEventListener('loadeddata', () => {
  const allImages = document.querySelectorAll('[data-preview-image]');
  console.log(allImages);
});
