let unitNames = ["Basic JS and Console Interaction"]
let units = [
    ["Printing to the Console", "Variables","User Input","Math and String Operators","Comments"]
];


let lessonContents={
    "Printing to the Console": {
        header: `Use console.log() to print messages to the console. Remember that words must be enclosed in quotes, like this: "Hello, World!". <br><br>
        Using console.log() multiple times will print each message on a new line`,
        task:`run the example code and then print out at least three messages of your own.`,
        code:`console.log("Hello, World!");
console.log("Welcome to JavaScript!");
console.log("Let's learn to code!");`,
        format: "text"
    },
    "Variables": {
        header: `Variables are used to store data values. In JavaScript, you can create a variable using <code>let</code>, <code>const</code>, or <code>var</code>. For now, we’ll use <code>let</code>. <br><br>
        You can assign a value to a variable using the equals sign (<code>=</code>) like this: <code>let name = "David";</code><br>
        Then you can print it using <code>console.log(name);</code>.<br><br>
        After you create a variable with <code>let</code>, you can keep updating that variable like this: <code>name = "Ben";</code><br><br>
        Variable names are case-sensitive and should start with a letter, <code>_</code>, or <code>$</code>.`,
        task: `Create at least three variables to store your name, favorite color, and favorite number. Print each one using console.log().`,
        code: `let name = "David";
let favoriteColor = "blue";
let favoriteNumber = 42;

console.log(name);
console.log(favoriteColor);
console.log(favoriteNumber);`,
        format: "text"
    },

    "User Input": {
        header: `You can get input from the user using the <code>prompt()</code> function. This opens a popup that asks the user to type something, and returns it as a string (which is text).<br><br>
    Use <code>let</code> to store the result of <code>prompt()</code> in a variable, and <code>console.log()</code> to print it.<br><br>
    Because <code>prompt()</code> will always give you text, if you want the user to input a number, you will have to convert the text into a number.<br>
    To do this use <code>Number()</code>`,
        
        task: `Ask the user for their name and their favorite food. Store the responses in variables and print a message using both.`,
        
        code: `let name = prompt("What's your name?");
    let food = prompt("What's your favorite food?");

    console.log("Nice to meet you, " + name + "!");
    console.log("I also like " + food + "!");

    let number = prompt("What's your favorite number?");
    console.log("Your number + 1 is: ");
    console.log(Number(number) + 1);
    `,
        
        format: "text"
    },

    "Math and String Operators": {
        header: `You can do math with numbers using operators like <code>+</code>, <code>-</code>, <code>*</code> (multiply), <code>/</code> (divide), and <code>%</code> (modulus, or remainder).<br><br>
    You can also use <code>+</code> with strings to combine them — this is called <b>concatenation</b>. Just remember that numbers and strings behave differently when added!<br><br>
    For example, <code>2 + 3</code> gives <code>5</code>, but <code>"2" + "3"</code> gives <code>"23"</code>. If you mix types, JavaScript turns numbers into strings.`,
        
        task: `Try doing some math with different operators, then combine some strings using <code>+</code>. Use <code>console.log()</code> to print your results.`,
        
        code: `// Math examples
console.log(6 + 2);  // addition
console.log(10 - 3); // subtraction
console.log(4 * 5);  // multiplication
console.log(8 / 2);  // division
console.log(7 % 3);  // remainder

// String example
console.log("Hello" + " " + "World!");`,
        
        format: "text"
    },

    "Comments": {
        header: `Comments let you write notes in your code that don’t run. Use <code>//</code> for single-line comments or <code>/* ... */</code> for multi-line comments.<br><br>
    Comments help explain what your code does or temporarily disable code without deleting it.`,
        
        task: `Add a single-line comment and a multi-line comment in the code. Try commenting out one line of code so it doesn’t run.`,
        
        code: `// This is a single-line comment

/*
This is a
multi-line comment
*/

console.log("This line runs!");
// console.log("This line is commented out and won’t run.");`,
    
        format: "text"
    }

}