//votre code ici

function printNumbers(n) {
    let result = '1'
    for (let index = 2 ;index < Number(n) + 1; index++) {
        result += " " + index
    }
    // const body = document.querySelector('body')
    // const numbers = document.createElement('p')
    // numbers.textContent = result
    // body.appendChild(numbers)
    return result
}

export default printNumbers;
