let dic = [
    // Reserved Words (ES5/ES6/ESNext)
    "abstract", "arguments", "await", "boolean", "break", "byte", "case", "catch", "char", "class", "const", "continue",
    "debugger", "default", "delete", "do", "double", "else", "enum", "eval", "export", "extends", "false", "final", "finally",
    "float", "for", "function", "goto", "if", "implements", "import", "in", "instanceof", "int", "interface", "let", "long",
    "native", "new", "null", "package", "private", "protected", "public", "return", "short", "static", "super", "switch",
    "synchronized", "this", "throw", "throws", "transient", "true", "try", "typeof", "var", "void", "volatile", "while", "with", "yield",

    // Primitive Data Types
    "undefined", "null", "boolean", "number", "bigint", "string", "symbol",

    // Object Types
    "Object", "Function", "Array", "Date", "RegExp", "Math", "JSON", "Promise", "Set", "Map", "WeakSet", "WeakMap", "Error",
    "EvalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError",

    // Global Functions
    "eval()", "parseInt()", "parseFloat()", "isNaN()", "isFinite()", "decodeURI()", "decodeURIComponent()", "encodeURI()",
    "encodeURIComponent()", "setTimeout()", "setInterval()", "clearTimeout()", "clearInterval()", "console.log()", "alert()",
    "confirm()", "prompt()", "fetch()", "requestAnimationFrame()", "cancelAnimationFrame()", "requestIdleCallback()",
    "cancelIdleCallback()", "setImmediate()", "clearImmediate()", "queueMicrotask()", "structuredClone()",

    // Object Methods
    "Object.create()", "Object.assign()", "Object.keys()", "Object.values()", "Object.entries()", "Object.freeze()",
    "Object.seal()", "Object.defineProperty()", "Object.defineProperties()", "Object.getOwnPropertyDescriptor()",
    "Object.getOwnPropertyDescriptors()", "Object.getOwnPropertyNames()", "Object.getOwnPropertySymbols()",
    "Object.getPrototypeOf()", "Object.setPrototypeOf()", "Object.is()", "Object.isExtensible()", "Object.isFrozen()",
    "Object.isSealed()", "Object.preventExtensions()", "Object.prototype.toString()", "Object.prototype.hasOwnProperty()",
    "Object.prototype.isPrototypeOf()", "Object.prototype.propertyIsEnumerable()", "Object.prototype.valueOf()",

    // Array Methods
    "Array.isArray()", "Array.from()", "Array.of()", "Array.prototype.push()", "Array.prototype.pop()", "Array.prototype.shift()",
    "Array.prototype.unshift()", "Array.prototype.concat()", "Array.prototype.slice()", "Array.prototype.splice()",
    "Array.prototype.forEach()", "Array.prototype.map()", "Array.prototype.filter()", "Array.prototype.reduce()",
    "Array.prototype.reduceRight()", "Array.prototype.find()", "Array.prototype.findIndex()", "Array.prototype.includes()",
    "Array.prototype.indexOf()", "Array.prototype.lastIndexOf()", "Array.prototype.some()", "Array.prototype.every()",
    "Array.prototype.sort()", "Array.prototype.reverse()", "Array.prototype.join()", "Array.prototype.copyWithin()",
    "Array.prototype.fill()", "Array.prototype.findLast()", "Array.prototype.findLastIndex()", "Array.prototype.flat()",
    "Array.prototype.flatMap()", "Array.prototype.keys()", "Array.prototype.values()", "Array.prototype.entries()",
    "Array.prototype.at()", "Array.prototype.concatAll()", "Array.prototype.copyWithin()", "Array.prototype.entries()",
    "Array.prototype.every()", "Array.prototype.fill()", "Array.prototype.filter()", "Array.prototype.find()",
    "Array.prototype.findIndex()", "Array.prototype.flat()", "Array.prototype.flatMap()", "Array.prototype.forEach()",
    "Array.prototype.includes()", "Array.prototype.indexOf()", "Array.prototype.join()", "Array.prototype.keys()",
    "Array.prototype.lastIndexOf()", "Array.prototype.map()", "Array.prototype.pop()", "Array.prototype.push()",
    "Array.prototype.reduce()", "Array.prototype.reduceRight()", "Array.prototype.reverse()", "Array.prototype.shift()",
    "Array.prototype.slice()", "Array.prototype.some()", "Array.prototype.sort()", "Array.prototype.splice()",
    "Array.prototype.toLocaleString()", "Array.prototype.toString()", "Array.prototype.unshift()", "Array.prototype.values()",

    // String Methods
    "String.prototype.charAt()", "String.prototype.charCodeAt()", "String.prototype.codePointAt()", "String.prototype.concat()",
    "String.prototype.endsWith()", "String.prototype.includes()", "String.prototype.indexOf()", "String.prototype.lastIndexOf()",
    "String.prototype.localeCompare()", "String.prototype.match()", "String.prototype.matchAll()", "String.prototype.normalize()",
    "String.prototype.padEnd()", "String.prototype.padStart()", "String.prototype.repeat()", "String.prototype.replace()",
    "String.prototype.replaceAll()", "String.prototype.search()", "String.prototype.slice()", "String.prototype.split()",
    "String.prototype.startsWith()", "String.prototype.substring()", "String.prototype.toLocaleLowerCase()",
    "String.prototype.toLocaleUpperCase()", "String.prototype.toLowerCase()", "String.prototype.toString()",
    "String.prototype.toUpperCase()", "String.prototype.trim()", "String.prototype.trimEnd()", "String.prototype.trimStart()",

    // Number Methods
    "Number.isFinite()", "Number.isInteger()", "Number.isNaN()", "Number.isSafeInteger()", "Number.parseFloat()",
    "Number.parseInt()", "Number.prototype.toExponential()", "Number.prototype.toFixed()", "Number.prototype.toPrecision()",
    "Number.prototype.toString()", "Number.prototype.valueOf()", "Number.MAX_SAFE_INTEGER", "Number.MIN_SAFE_INTEGER",
    "Number.POSITIVE_INFINITY", "Number.NEGATIVE_INFINITY", "Number.NaN", "Number.EPSILON", "Number.MAX_VALUE", "Number.MIN_VALUE",

    // Math Methods
    "Math.abs()", "Math.acos()", "Math.acosh()", "Math.asin()", "Math.asinh()", "Math.atan()", "Math.atan2()", "Math.atanh()",
    "Math.cbrt()", "Math.ceil()", "Math.clz32()", "Math.cos()", "Math.cosh()", "Math.exp()", "Math.expm1()", "Math.floor()",
    "Math.fround()", "Math.hypot()", "Math.imul()", "Math.log()", "Math.log10()", "Math.log1p()", "Math.log2()", "Math.max()",
    "Math.min()", "Math.pow()", "Math.random()", "Math.round()", "Math.sign()", "Math.sin()", "Math.sinh()", "Math.sqrt()",
    "Math.tan()", "Math.tanh()", "Math.trunc()", "Math.PI", "Math.E", "Math.LN2"]



let heighest = dic.length;
let score = 0;
let word = "";
let chances = 7;


function main() {

    //random no.
    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let random_01 = random(0, heighest - 1);


    //declarations
    word = String(dic[random_01]).toUpperCase();
    console.log(word)
    let div = "";
    let word_space = document.querySelector(".the_word");
    let letter_id;
    let letter;
    chances = 7;

    //word display divs
    for (let i = 0; i < word.length; i++) {
        div += "<div></div>";
    }
    word_space.innerHTML = div;

    //main code
    {
        let keyboard_lines = document.querySelectorAll(".keyboard_line");

        for (let i = 0; i < keyboard_lines.length; i++) {

            let keyboard_line = keyboard_lines[i];
            let letters_array = keyboard_line.children;

            for (let index = 0; index < letters_array.length; index++) {

                let keyboard_letter = letters_array[index];

                keyboard_letter.addEventListener("click", () => {
                    let single_occurence = true;
                    letter_id = String(keyboard_letter.innerHTML);

                    letter = keyboard_letter.innerHTML;
                    keyboard_letter.style = "background-color: rgb(255, 181, 181); color:#000;";
                    chances--;

                    for (let index = 0; index < word.length; index++) {

                        let e = String(word[index]);

                        if (e === letter_id) {
                            word_space.children[index].innerHTML = letter;
                            if (single_occurence) {
                                chances++;
                            }
                            single_occurence = false;
                            keyboard_letter.removeAttribute("style");
                            keyboard_letter.style = " background-color: rgb(181, 255, 181); color:#000;";


                        }
                        document.querySelector(".chances_in_no").innerHTML = String(chances);


                    }
                    if (chances <= 0) {

                        document.querySelector(".loose_report").removeAttribute("style");
                        document.querySelector(".main_body_div").style = "display: none;"
                        document.querySelector(".finish").style = "display: none;"
                    }


                })
            }


        }
    }

    //loose reload
    document.querySelector(".restart_btn").addEventListener("click", () => {
        location.reload();
    });

    //answer varification
    {
        let words = document.querySelector(".the_word").children;

        document.querySelector(".finish").addEventListener("click", () => {

            let answer = "";

            for (let index = 0; index < words.length; index++) {
                const element = words[index].innerHTML;
                answer += element

            }
            if (answer === word) {

                document.querySelector(".win_report").removeAttribute("style");
                document.querySelector(".main_body_div").style = "display: none;"
                document.querySelector(".finish").style = "display: none;"
            }
        })



    }


}

main();

{//next reload
    document.querySelector(".next_btn").addEventListener("click", () => {

        location.reload();

    });
}

{//score
function getStoredScore() {
    let storedScore = localStorage.getItem("score");
    if (storedScore === null) {
        storedScore = 0;
        localStorage.setItem("score", storedScore);
    }
    return parseInt(storedScore);
}

function incrementScore() {
    let score = getStoredScore();
    score++;
    localStorage.setItem("score", score);
    document.getElementById("score").textContent = score;
    updateHighScore(score);
}
document.querySelector(".next_btn").addEventListener("click", incrementScore);

function scorezero() {
    let score = getStoredScore();
    score = 0;
    localStorage.setItem("score", score);
    document.getElementById("score").textContent = score;
}

document.querySelector(".restart_btn").addEventListener("click", scorezero);

function getHighScore() {
    let highScore = localStorage.getItem("highScore");
    if (highScore === null) {
        localStorage.setItem("highScore", "0");
        return 0;
    }
    return parseInt(highScore, 10);
}

function updateHighScore(score) {
    let highScore = getHighScore();
    if (score > highScore) {
        localStorage.setItem("highScore", score);
        document.getElementById("high_score").textContent = score;
    }
}

function updateHighScoreDisplay() {
    document.getElementById("high_score").textContent = getHighScore();
}


window.onload = function () {
    let score = getStoredScore();
    document.getElementById("score").textContent = score;
    updateHighScoreDisplay();
};
}

