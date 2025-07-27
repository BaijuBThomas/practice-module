const button = document.querySelector('button');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.closed-icon')

button.addEventListener('click', () => {
    popup.classList.add('open');
});

closePopup.addEventListener('click', () => {
    popup.classList.remove('open');
});

