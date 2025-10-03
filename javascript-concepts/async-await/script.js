async function makeFunction() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

console.log(makeFunction().then(data => console.log(data)));

