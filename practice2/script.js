
// function sayHi() {
//     console.log('hello world!!');
// }

// sayHi();


const container = document.querySelector('.container');
const card = document.querySelector('.card');


let count = 1;
card.addEventListener('click', () => {
    const newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.innerText = count;
    count++;
    container.append(newCard);
});
