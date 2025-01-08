// const allLinks = document.querySelectorAll('a');

// console.log(allLinks);

// for(const  link of allLinks){
//     link.style.color = 'blue';
// }


// const h1 = document.querySelector('h1');
// const container = document.querySelector(".container")
// const card = document.querySelector('.card')

// for(let i = 2; i <=100;i++){
//     const newCard = card.cloneNode();
//     newCard.innerText = i;
//     container.appendChild(newCard);
// }

// const paragraph = document.createElement('p');
// paragraph.innerText = 'Hello';
// paragraph.classList.add('my-para');
// paragraph.id = 'h'
// container.append(paragraph);

const h1 = document.querySelector('h1');
const container = document.querySelector(".container")

for(let i = 1;i <= 100;i++){

    const containerNew = document.createElement('div');
    containerNew.classList.add('container-New');

    const newImage = document.createElement('img');
    newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    
    const paragraph = document.createElement('p');
    paragraph.innerText = i
    containerNew.append(newImage,paragraph)
    container.append(containerNew);
}


