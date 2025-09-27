// function handleSubmit(event){
//     console.log(event);
// }

const btRef = document.querySelector('button');

btRef.addEventListener('click',function(){
    event.preventDefault();
    const userRef = document.getElementById('UserName');
    const passRef = document.getElementById('passWord');

    console.log(userRef.value, passRef.value);
})