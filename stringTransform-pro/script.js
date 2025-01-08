const userInput = document.querySelector('.userInput');

const lowerCase = document.querySelector('#lowercase span');
const upperCase = document.querySelector('#uppercase span');
const CamelCase = document.querySelector('#CamelCase span');
const PascalCase = document.querySelector('#PascalCase span');
const SnakeCase = document.querySelector('#SnakeCase span');
const KebabCase = document.querySelector('#KebabCase span');
const Trim = document.querySelector('#Trim span');


function capitalizedString(string) {
    if(!string) return string;
    const firstCharacter = string[0].toLocaleUpperCase();
    return firstCharacter + string.slice(1,string.length);
}

function toCamelCase(str) {
    const lowerCaseStr = str.toLocaleLowerCase();
    const wordsArray = lowerCaseStr.split(" ");
    const finalArray = wordsArray.map((word, i) => {
        if(i === 0)  return word;
         return capitalizedString(word);
    });
    return finalArray.join('');
}
function toPascalCase(str) {
    const lowerCaseStr = str.toLocaleLowerCase();
    const wordsArray = lowerCaseStr.split(" ");
    const finalArray = wordsArray.map((word) => {
         return capitalizedString(word);
    });
    return finalArray.join('');
}
function toSnakeCase(str) {
    const wordsArray = str.split(" ");
    return wordsArray.join('_');
}
function toKebabCase(str) {
    const wordsArray = str.split(" ");
    return wordsArray.join('-');
}
function toTrim(str) {
    const wordsArray = str.split(" ");
    return wordsArray.join("");
}

function updateScreen() {
    lowerCase.innerText = userInput.value.trim().toLocaleLowerCase();
    upperCase.innerText = userInput.value.trim().toLocaleUpperCase();
    CamelCase.innerText = toCamelCase(userInput.value.trim());
    PascalCase.innerText = toPascalCase(userInput.value.trim());
    SnakeCase.innerText = toSnakeCase(userInput.value.trim());
    KebabCase.innerText = toKebabCase(userInput.value.trim());
    Trim.innerText = toTrim(userInput.value.trim());
}

updateScreen();


userInput.addEventListener('input', () => {
updateScreen()
    
})