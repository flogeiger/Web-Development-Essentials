document.query
document.addEventListener('DOMContentLoaded', (event) => {
    const thirdListItem = document.querySelectorAll('.list')[2];
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.value = 'Florian ist so geil!';
    thirdListItem.innerHTML = '';
    thirdListItem.appendChild(newInput);
  });
  