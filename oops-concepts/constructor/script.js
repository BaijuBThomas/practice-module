function createUser(firstName, lastName, age) {
  const user = {
    firstName,
    lastName,
    age,
    getAgeYear() {
      return new Date().getFullYear() - user.age;
    },
  };
  return user;
}

const user1 = createUser('Aman', 'Mishra', 32);
const user2 = createUser('Anurag', 'Singh', 72);

const arr1 = [1, 2];
const arr2 = [3, 4];

// 🆕 Added function to merge arrays and log user info
function showUserDetailsAndMergeArrays(u1, u2, a1, a2) {
  console.log(`${u1.firstName} ${u1.lastName} was born in ${u1.getAgeYear()}`);
  console.log(`${u2.firstName} ${u2.lastName} was born in ${u2.getAgeYear()}`);
  
  const mergedArray = [...a1, ...a2];
  console.log('Merged Array:', mergedArray);
  return mergedArray;
}

showUserDetailsAndMergeArrays(user1, user2, arr1, arr2);
