// let mypromise = new Promise(function(myResolve, myReject) {
//     let sucess = true;
//     if (sucess) {
//         myResolve("Promise is resolved successfully."); 
//     } else {
//         myReject("Promise is rejected.");
//     }   
// });

// mypromise.then(
//     function(value) {console.log(value);},
//     function(error) {console.log(error);}
// );


// function fetchUser() {
//     return new Promise((resolve, reject) => {
//        setTimeout(()=>{
//         resolve({name:"John", age:30 , role:"full stack developer"});
//        },1000);
// })
// }

// fetchUser().then(user => console.log("user:", user))
// .catch(err => console.log("Error message :", err));

const proBtn = document.querySelector('.promise');
const rejBtn = document.querySelector('.reject');
 
const pro = new Promise((resolve, reject)=>{
      proBtn.addEventListener('click',()=>{
        resolve("Promise is resolved successfully.");
    })
      rejBtn.addEventListener('click',()=>{
        reject("Promise is Rejected.");
    })

})

pro.then((data)=>{
    console.log(data);
    return 20;
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
    return 'promise rejected';
}).then((data)=>{
    console.log(data);
})