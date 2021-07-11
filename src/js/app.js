const button = document.querySelector('.toggle-button');

const popover = document.createElement('div');
popover.classList = 'popover hidden';
popover.innerHTML = `
  <h1 class="popover-title">Popover title</h1>
  <p class="popover-content">And here's some amazing content. It's very engaging. Right?</p>`;
button.offsetParent.appendChild(popover);

popover.style.right = `${button.offsetLeft - (popover.offsetWidth - button.offsetWidth) / 2}px`;
popover.style.bottom = `${button.offsetTop + popover.offsetHeight + button.offsetHeight}px`;

button.addEventListener('click', () => {
  popover.classList.toggle('hidden');
});
