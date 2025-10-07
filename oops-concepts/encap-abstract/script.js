// const user = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 31,
//     getUserInfo : function () {
//     return new Date().getFullYear() - user.age;
// }

// }

function createUser(firstName, lastName, age) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        getUserInfo: function () {
            return new Date().getFullYear() - this.age;
        }
    };
}


    const user1 = createUser("John", "Doe", 31); 
    console.log(user1);
    console.log(user1.getUserInfo());
    const user2 = createUser("black", "yoo", 22); 
    console.log(user2);
    console.log(user2.getUserInfo());