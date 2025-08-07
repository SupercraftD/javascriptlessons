let unitNames = ["Basic JS and Console Interaction","Conditionals","Looping and Functions","Strings and Data Structures","Graphics"]
let units = [
    ["Printing to the Console", "Variables","User Input","Math and String Operators","Comments"],
    ["Booleans and Operators","If/Else Statements","Switch Statements"],
    ["While Loops","For Loops","Basic Functions","Functions with Parameters","Return Values","Variable Scope","Challenge: Number Guessing Game"],
    ["String Operations and Methods","Arrays","Objects", "For Loops with Arrays and Objects","Challenge: Playlist Rater"],
    ["Drawing Shapes"]
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
    },

    "Booleans and Operators":{
        header: `Booleans are values that can only be <code>true</code> or <code>false</code>. They are often used to decide what parts of code should run.<br><br>
You can compare values with comparison operators:
<ul>
<li><code>==</code> — equal to</li>
<li><code>!=</code> — not equal to</li>
<li><code>&gt;</code> — greater than</li>
<li><code>&lt;</code> — less than</li>
<li><code>&gt;=</code> — greater than or equal to</li>
<li><code>&lt;=</code> — less than or equal to</li>
</ul>
Logical operators let you combine or change true/false values:
<ul>
<li><code>&&</code> — AND: true only if <i>both</i> sides are true</li>
<li><code>||</code> — OR: true if <i>either</i> side is true</li>
<li><code>!</code> — NOT: flips true to false and false to true</li>
</ul>`,
    
        task: `Ask the user to input their age. Output true if the user is an adult, and false if they are a child.`,
    
        code: `// Comparison examples
console.log(5 > 3);     // true
console.log(10 == 7);   // false
console.log(4 != 4);    // false

// Logical examples
console.log(true && false); // false
console.log(true || false); // true
console.log(!true);         // false`,
    
        format: "text"
    },

    "If/Else Statements":{
        header: `An <code>if</code> statement lets your program make decisions.<br><br>
The syntax looks like this:
<pre>
if (condition) {
    // code runs if the condition is true
} else {
    // code runs if the condition is false
}
</pre>
The condition inside the parentheses must be something that is <code>true</code> or <code>false</code> (a Boolean). If the condition is true, the first block runs; otherwise, the <code>else</code> block runs.<br><br>
You can also add more checks using <code>else if</code> for multiple possibilities.`,
    
        task: `Choose a secret letter, then let the user guess the letter. If they get it right, congratulate them. Otherwise, output what the letter was.`,
        
        code: `let number = 5;

if (number > 0) {
    console.log("The number is positive");
} else if (number < 0) {
    console.log("The number is negative");
} else {
    console.log("The number is zero");
}`,
        
        format: "text"

    },

    "Switch Statements": {
        header: `A <code>switch</code> statement is another way to run different code based on a value. It’s often easier to read than multiple <code>if...else if</code> statements when checking the same variable.<br><br>
The syntax looks like this:
<pre>
switch (value) {
    case option1:
        // code if value === option1
        break;
    case option2:
        // code if value === option2
        break;
    default:
        // code if no cases match
}
</pre>
Each <code>case</code> checks if the value matches. Use <code>break</code> to stop the switch after running that case’s code. The <code>default</code> block runs if none of the cases match.`,
    
        task: `Write a program that asks the user for their favorite color and prints a different message for at least three colors. Include a <code>default</code> case for any other color.`,
    
        code: `let fruit = "apple";

switch (fruit) {
    case "apple":
        console.log("Apples are tasty!");
        break;
    case "banana":
        console.log("Bananas are great for energy!");
        break;
    case "orange":
        console.log("Oranges are full of vitamin C!");
        break;
    default:
        console.log("That's a nice choice!");
}`,
    
        format: "text"
    },

    "For Loops": {
        header: `A <code>for</code> loop repeats code a set number of times. It has three parts inside parentheses:<br>
<code>for (start; condition; step) { ... }</code><br><br>
<ul>
<li><b>start</b> — runs once at the beginning (usually to set a counter variable)</li>
<li><b>condition</b> — checked before each loop; if false, the loop stops</li>
<li><b>step</b> — runs after each loop (usually increases the counter)</li>
</ul>
Example syntax:
<pre>
for (let i = 0; i < 5; i++) {
    console.log(i);
}
</pre>
This starts at <code>i = 0</code>, runs while <code>i &lt; 5</code>, and increases <code>i</code> by 1 each time.`,
    
        task: `Write a for loop that counts from 1 to 10 and prints each number.`,
    
        code: `for (let i = 0; i < 5; i++) {
    console.log("Loop number: " + i);
}`,
    
        format: "text"
    },

    "While Loops": {
        header: `A <code>while</code> loop repeats code as long as a condition is <code>true</code>. The condition is checked <b>before</b> each loop, so if it’s false at the start, the loop never runs.<br><br>
    Syntax:
    <pre>
    while (condition) {
        // code runs if condition is true
    }
    </pre>
    Be careful — if the condition never becomes false, you’ll create an <b>infinite loop</b> that never stops!<br><br>
    Use a counter or some other change inside the loop so it eventually ends.`,
        
        task: `Write a while loop that counts down from 5 to 1 and prints each number.`,
        
        code: `let count = 3;

while (count > 0) {
    console.log("Countdown: " + count);
    count--;
}`,
        
        format: "text"
    },


    "Basic Functions": {
        header: `A function is a reusable block of code that can be called whenever you need it.<br><br>
    The basic syntax looks like this:
    <pre>
    function functionName() {
        // code to run
    }
    </pre>
    To run (or <i>call</i>) the function, just write its name followed by parentheses:
    <pre>
    functionName();
    </pre>
    Whenever you call a function, the code you wrote inside that function will run.<br>
    Functions help keep your code organized and avoid repeating the same code multiple times.`,
        
        task: `Write a function that prints a greeting message to the console, then call it at least twice.`,
        
        code: `function sayHello() {
    console.log("Hello!");
}

sayHello();`,
        
        format: "text"
    },

    "Functions with Parameters": {
        header: `Parameters are variables you define in a function so it can receive information when it’s called.<br><br>
When defining a function, put the parameter names inside the parentheses:
<pre>
function greet(name) {
    console.log("Hello, " + name + "!");
}
</pre>
When calling the function, put the actual values you want to pass in:
<pre>
greet("Alice"); // name will be "Alice"
</pre>
In the above example, the function <code>greet</code> would be able to use <code>name</code> like any other normal variable. Its value would be set to <code>"Alice"</code> because of the function call.<br>
This makes your functions flexible so they can work with different data without rewriting the code.`,
    
        task: `Write a function with one or more parameters, and call it several times with different arguments.`,
    
        code: `function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Alice");
greet("Bob");`,
    
        format: "text"
    },

    "Return Values": {
        header: `A function can send a value back to the code that called it using the <code>return</code> keyword.<br><br>
When a function returns something, you can store it in a variable or use it directly in another expression.<br><br>
Syntax:
<pre>
function add(a, b) {
    return a + b;
}

let sum = add(3, 4); // sum will be 7
</pre>
Once <code>return</code> runs, the function stops immediately, even if there is more code after it.`,
    
        task: `Write a function that returns a calculated value, store it in a variable, and print it with <code>console.log()</code>.`,
    
        code: `function add(a, b) {
    return a + b;
}

let result = add(5, 2);
console.log(result);`,
    
        format: "text"
    },

    "Challenge: Number Guessing Game":{
        header:`Use what you learned from previous lessons to complete this challenge.`,
        task:`Write a program that lets a user guess a secret number. When the user guesses a number, the program should tell them if it is too high or too low. The user should keep guessing until they guess correctly.`,
        code:``,
        format:"text"
    },

    "Variable Scope": {
        header: `Scope determines where a variable can be accessed from in your code.<br><br>

    There are two main types of scope you need to know:<br>
    <ul>
    <li><b>Global scope:</b> A variable declared outside any function can be used anywhere in your code.</li>
    <li><b>Local scope:</b> A variable declared inside a function can only be used inside that function.</li>
    </ul>

    Here's an example:
    <pre>
    let globalVar = "I'm global";

    function testScope() {
        let localVar = "I'm local";
        console.log(globalVar); // works
        console.log(localVar);  // works
    }

    testScope();

    console.log(globalVar); // works
    console.log(localVar);  // ❌ Error: localVar is not defined
    </pre>
    Understanding scope helps you avoid bugs and keeps your code clean.`,
        
        task: `Create a function with a local variable. Try accessing that variable outside the function and observe what happens.`,
        
        code: `let outside = "I am outside the function";

function showScope() {
    let inside = "I am inside the function";
    console.log(outside); // this works
    console.log(inside);  // this works
}

showScope();

console.log(outside); // this works
console.log(inside);  // ❌ this causes an error`,
        
        format: "text"
    },

    "String Operations and Methods": {
        header: `Strings can be combined, changed, and analyzed using operators and built-in methods.<br><br>

    Here are some basic string operations:
    <ul>
    <li><code>+</code> — concatenates (joins) two strings</li>
    <li><code>.length</code> — returns the number of characters in a string</li>
    </ul>

    And here are some useful string methods:<br>
<i>(A method is just a function that strings have built in — it does something to the string.)</i>
    <ul>
    <li><code>toUpperCase()</code> — returns the string in all uppercase</li>
    <li><code>toLowerCase()</code> — returns the string in all lowercase</li>
    <li><code>includes(substring)</code> — checks if the string contains the given substring</li>
    <li><code>slice(start, end)</code> — extracts a section of the string</li>
    </ul>

    You can chain methods too: <code>"hello".toUpperCase()</code> will become <code>"HELLO"</code>.`,
        
        task: `Use at least two string methods to manipulate a string, then print the results.`,
        
        code: `let message = "Hello, JavaScript!";
console.log(message.length);        // 18
console.log(message.toUpperCase()); // "HELLO, JAVASCRIPT!"`,
        
        format: "text"
    },

    "Arrays": {
        header: `An <b>array</b> is a list of multiple values stored in a single variable. You can store numbers, strings, or even other arrays inside it.<br><br>

    Arrays use square brackets <code>[]</code>, and each value inside is called an <b>element</b>. Elements are separated by commas, and each one has a position called an <b>index</b>, starting from 0.

    <pre>
    let fruits = ["apple", "banana", "cherry"];
    console.log(fruits[0]); // "apple"
    </pre>

    You can change elements using their index too:
    <pre>
    fruits[1] = "blueberry";
    </pre>

    Some common array methods:
    <ul>
    <li><code>.push(value)</code> — adds a value to the end of the array</li>
    <li><code>.pop()</code> — removes and returns the last element</li>
    <li><code>.length</code> — gives the number of elements</li>
    </ul>`,
        
        task: `Make an array with at least 3 items. Add a new item using <code>push()</code>, change one of the original items, and then print the full array.`,
        
        code: `let colors = ["red", "green", "blue"];
colors.push("yellow");
colors[0] = "orange";
console.log(colors);`,
        
        format: "text"
    },


    "Objects": {
        header: `An <b>object</b> is a collection of related data stored as <b>key-value pairs</b>. Each key (also called a <i>property</i>) has a value, and you access them using either dot notation or square brackets.<br><br>

    Here’s an example:
    <pre>
    let person = {
        name: "Alex",
        age: 17,
        isStudent: true
    };

    console.log(person.name);       // "Alex"
    console.log(person["age"]);     // 17
    </pre>

    You can also change values or add new ones:
    <pre>
    person.age = 18;
    person.grade = "12th";
    </pre>`,
        
        task: `Create an object to represent a pet, with at least 3 properties like name, type, and age. Then change one of the properties and print the object.`,
        
        code: `let pet = {
    name: "Biscuit",
    type: "dog",
    age: 5
};

pet.age = 6;
console.log(pet);`,
        
        format: "text"
    },



    "For Loops with Arrays and Objects": {
        header: `You can use <b>for loops</b> to go through each item in an array or each key in an object.<br><br>

    To loop through an <b>array</b> using a regular <code>for</code> loop:
    <pre>
    let colors = ["red", "blue", "green"];
    for (let i = 0; i < colors.length; i++) {
        console.log(colors[i]);
    }
    </pre>

    You can also use a <code>for...of</code> loop (a cleaner way for arrays):
    <pre>
    for (let color of colors) {
        console.log(color);
    }
    </pre>

    To loop through the <b>keys</b> in an <b>object</b>, use <code>for...in</code>:
    <pre>
    let person = { name: "Sam", age: 16, city: "Chicago" };
    for (let key in person) {
        console.log(key + ": " + person[key]);
    }
    </pre>`,

        task: `Make an array of at least 3 favorite foods and print each one using a <code>for</code> loop. Then make an object with 3 properties (like hobby, grade, and favoriteColor) and print all its key-value pairs using a <code>for...in</code> loop.`,
        
        code: `let foods = ["pizza", "tacos", "ice cream"];
for (let i = 0; i < foods.length; i++) {
    console.log(foods[i]);
}

let me = {
    hobby: "gaming",
    grade: 11,
    favoriteColor: "blue"
};

for (let key in me) {
    console.log(key + ": " + me[key]);
}`,
    
        format: "text"
    },

    "Challenge: Playlist Rater":{
        header:`Use what you learned from previous lessons to complete this challenge.`,
        task:`Create a program that:
<ul>
<li>Uses an array to store a list of song names (you choose the songs!).</li>

<li>Loops through each song and asks the user to rate it (1–5) using prompt().</li>

<li>Stores the ratings in a second array or in an object.</li>

<li>After all songs are rated, calculates and prints the average score.</li>

<li>Optionally prints out which song got the highest rating.</li>
</ul>`,
        code:``,
        format:`text`
    },

    "Drawing Shapes":{
        header:`Testing graphics mode. no lesson yet.`,
        task:`draw`,
        code:``,
        format:"graphics"
    }





}