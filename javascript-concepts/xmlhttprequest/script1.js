const xhr = new XMLHttpRequest();
xhr.open("Get","https://dummyjson.com/users/1");
console.log(xhr);

xhr.addEventListener("load", ()=>{
    if(xhr.status === 200){
        const user = JSON.parse(xhr.responseURL);
        console.log(user);
    }
})

xhr.send();

// const jsonString = '{"name":"Baiju","role":"Frontend Developer"}';
// console.log(jsonString);

//  console.log (JSON.parse(jsonString));

