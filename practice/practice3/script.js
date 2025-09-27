

const usernameInput = document.querySelector('#username');

const nameRef = document.querySelector('h1')



// usernameInput.addEventListener('click', ()=> {
//     console.log('you have clicked the input')
// });

// usernameInput.addEventListener('dblclick', ()=> {
//     console.log('you have double clicked the input')
// });
// usernameInput.addEventListener('keyboard', (e)=> {
//     console.log(e.target.value)
// });

const val = usernameInput.addEventListener('keydown', (e)=> {
    // console.log(e.target.value);
});


console.log(val.value);
