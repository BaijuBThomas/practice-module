

// function makeHttpRequest (method, url, callback) {
//     const xhr = new XMLHttpRequest();
//     xhr.responseType = 'json';
//     xhr.addEventListener('load', () => {
//       console.log(xhr.response);
//     })
    
//     xhr.open(method, url);
//     xhr.send();
// }

// makeHttpRequest ('GET', 'https://dummyjson.com/users', (data) => {
//     console.log(data);
// });

const promiseButton = document.querySelector('#pbutton');
const rejectButton = document.querySelector('#rbutton');


const p = new Promise((resolve, reject) => {

    promiseButton.addEventListener('click', () => {
        resolve('accepted');
    })
    rejectButton.addEventListener('click', () => {
        reject('rejected');
    })
});

p.then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})