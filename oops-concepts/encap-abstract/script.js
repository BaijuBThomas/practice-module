const user = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
}

function ageOfPerson(params) {
    return new Date().getFullYear() - params;
}
console.log(ageOfPerson(user.age));

