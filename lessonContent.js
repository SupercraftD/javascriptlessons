let unitNames = ["Basic JS and Console Interaction","Conditionals","Looping and Functions","Strings and Data Structures","Graphics","Animations and Games","Projects"]
let units = [
    ["Printing to the Console", "Variables","User Input","Math and String Operators","Comments"],
    ["Booleans and Operators","If/Else Statements","Switch Statements"],
    ["While Loops","For Loops","Basic Functions","Functions with Parameters","Return Values","Variable Scope","Challenge: Number Guessing Game"],
    ["String Operations and Methods","Arrays","Objects", "For Loops with Arrays and Objects","Challenge: Playlist Rater"],
    ["Intro to Drawing Shapes","Positioning Shapes","Colors","More Shapes","Challenge: Draw Something"],
    ["Timers","Stopping Timers","Random Numbers","Collisions and Bouncing","Challenge: Colliding Balls","Mouse Clicks","Keyboard Inputs","Challenge: Putting It All Together"],

    [
  "Smiley Face",
  "Traffic Light",
  "Bar Graph",
  "Target Practice",
  "French Flag",
  "Robot",
  "Ice Cream Cone",
  "Lucky Sevens",
  "Radiating Lines",
  "Nested Triangles",
  "Snowman",
  "Starry Sky",
  "Fruit Bowl",
  "City Skyline",
  "Pet Finder",
  "Kite",
  "Shape Changer",
  "Music Bars",
  "Shooting Stars",
  "Project: Connect Four"
]


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

    "Intro to Drawing Shapes": {
        header: `Welcome to the graphics canvas!<br><br>
    You can create shapes like rectangles and circles using special classes. Once you make a shape, use the <code>add()</code> function to display it on the screen.<br><br>

    Try making shapes with these classes:
    <ul>
        <li><code>new Rectangle(width, height)</code> — makes a rectangle</li>
        <li><code>new Circle(radius)</code> — makes a circle</li>
    </ul>

    Then, use <code>add()</code> to draw the shape.<br>
    Read the example code to see how it works.`,
        
        task: `Make two different shapes and add them to the canvas. Try a rectangle and a circle!`,
        
        code: `let r = new Rectangle(100, 50);
add(r);

let c = new Circle(40);
add(c);`,
        
        format: "graphics"
    },

    "Positioning Shapes":{
        header: `Every shape has an x and y position that tells it where to appear on the canvas. The x value controls how far across the shape is (left to right), and the y value controls how far down it is (top to bottom).<br><br>
You can set these values when you create the shape. For example, a Circle at (100, 150) will be drawn 100 pixels from the left and 150 pixels from the top. The canvas is 400 pixels by 400 pixels.<br><br>
Use <code>.setPosition(x,y)</code> to change a shape's position. See it in use below.`,
        task: `Make one Circle and one Rectangle appear in different positions by changing their x and y values.`,
        code: `let c = new Circle(50);
c.setPosition(100,150);
add(c);

let r = new Rectangle(100,100);
r.setPosition(10,10);
add(r);`,
        format: "graphics"
    },

    "Colors":{
        header: `You can change the color of a shape by calling its <code>setColor()</code> method before adding it to the canvas.<br><br>
You can use common color names like <code>"red"</code>, <code>"blue"</code>, or <code>"green"</code>, or even hex codes like <code>"#FF00FF"</code>.<br><br>
Call <code>setColor(color)</code> on your shape before <code>add()</code>.`,
    
        task: `Make two shapes, each with a different color.`,
    
        code: `let r = new Rectangle(100, 60);
r.setColor("blue");
add(r);

let c = new Circle(40);
c.setColor("red");
add(c);`,
    
        format: "graphics"
    },

    "More Shapes":{
        header: `Besides rectangles and circles, you can also draw lines and text!<br><br>

Here are two more shape types you can use:

<ul>
  <li><code>new Line(x1, y1, x2, y2)</code> — draws a line from point 1 to point 2</li>
  <li><code>new Text(message, size, font)</code> — displays a text label</li>
</ul>

You can use <code>setColor()</code> and <code>setPosition</code> just like other shapes.<br>
Line also has a <code>.setWidth()</code> method to change the width of the line.`,
    
        task: `Draw one line and one piece of text on the canvas.`,
        
        code: `let l = new Line(50, 50, 200, 150);
l.setColor("black");
add(l);

let t = new Text("Hello, canvas!",30,"Arial");
t.setPosition(100,100)
add(t);`,
        
        format: "graphics"

    },

    "Challenge: Draw Something":{
        header:`Use your new knowledge of shapes and the canvas to draw something!`,
        task:`Draw anything you want. use at least three shapes.`,
        code:``,
        format:"graphics"
    },


    "Timers":{
        header: `In games and animations, timers let you control <em>when</em> things happen.<br><br>

Instead of everything happening instantly, you can make actions occur after a delay or repeatedly at a set pace.<br><br>

JavaScript has two main timer functions:
<ul>
  <li><code>setTimeout(functionName, delay)</code> — runs a function once after <code>delay</code> milliseconds.</li>
  <li><code>setInterval(functionName, delay)</code> — runs a function over and over, waiting <code>delay</code> milliseconds between runs.</li>
</ul>

Why use timers?  
<ul>
  <li>To spawn enemies every few seconds</li>
  <li>To make something blink or flash on a schedule</li>
  <li>To delay an event, like showing "Game Over" after 2 seconds</li>
</ul>

Remember: 1000 milliseconds = 1 second.`,
    
    task: `Make a circle switch between red and blue every second using setInterval. Then, make a rectangle appear 3 seconds after the program starts using setTimeout.`,
    
    code: `// Example 1: Runs once after 2 seconds
function drawSquare() {
    let s = new Rectangle(50, 50);
    s.setPosition(100, 100);
    s.setColor("green");
    add(s);
}
setTimeout(drawSquare, 2000);

// Example 2: Runs repeatedly every 1 second
function toggleCircle() {
    let c = new Circle(20);
    c.setPosition(200, 100);
    c.setColor("purple");
    add(c);
}
setInterval(toggleCircle, 1000);`,
    
    format: "graphics",
    img:"imgs/flsahgif.gif"
},

    "Stopping Timers":{
        header: `Timers are useful, but sometimes you don't want them to run forever.<br><br>

For example:
<ul>
  <li><code>setTimeout()</code> runs code once after a delay.</li>
  <li><code>setInterval()</code> runs code over and over until you stop it.</li>
</ul>

To stop a timer:
<ul>
  <li><code>clearTimeout(timerName)</code> — stops a timeout before it happens.</li>
  <li><code>clearInterval(timerName)</code> — stops an interval so it doesn't keep going.</li>
</ul>

When you start a timer, it returns an ID number. You save that ID in a variable, and then use that variable to clear it.`,
    
    task: `Make a circle move down the screen using setInterval(). When the circle reaches the bottom of the canvas, stop the timer so it doesn’t move off screen.`,
    
    code: `let circle = new Circle(30);
circle.setPosition(100,50);
circle.setColor("blue");
add(circle);

let timerId = setInterval(changeColor, 1000);

function changeColor(){
    circle.setColor("red");
}

clearInterval(timerId);`,
    
    format: "graphics",
    img:"imgs/dropgif.gif"
},

    "Random Numbers":{
  header: `Sometimes programs need to do something different every time they run, like picking a random color or position. JavaScript has a built-in function called <code>Math.random()</code> that gives you a random decimal number between 0 (inclusive) and 1 (exclusive).<br><br>
  
  You can use this to create random numbers in different ranges by multiplying and rounding.<br><br>
  
  Example:<br>
  - <code>Math.random()</code> gives a number like 0.23 or 0.87<br>
  - <code>Math.random() * 10</code> gives a number between 0 and 10 (not including 10)<br>
  - <code>Math.floor(Math.random() * 10)</code> gives a whole number between 0 and 9<br>
  `,
  task: `Use Math.random() to create a rectangle that has a random size and that appears at a random position on the canvas each time you run the code. Use numbers between 0 and 400 for x and y.`,
  code: `// Create a circle with random position and color

let x = Math.floor(Math.random() * 400);
let y = Math.floor(Math.random() * 400);

let circle = new Circle(50);
circle.setPosition(x, y);
add(circle);`,
  format: "graphics",
  img:"imgs/randomfig.gif"
},

"Collisions and Bouncing": {
  header: `
  When a circle moves, it has a position (x, y) and a size (radius).<br><br>

  To detect a collision with the canvas walls:<br>
  - Check if the left edge (x - radius) goes past 0 (left wall)<br>
  - Check if the right edge (x + radius) goes past the canvas width (right wall)<br>
  - Check if the top edge (y - radius) goes past 0 (top wall)<br>
  - Check if the bottom edge (y + radius) goes past the canvas height (bottom wall)<br><br>


  If any of these happen, the circle is hitting a wall.<br>
  To make it bounce, reverse the direction of movement by flipping the speed sign.<br><br>

This works with any shape, except instead of radius it is width or height, respectively.<br>

  we use <code>setInterval()</code> to update the position repeatedly over time.
  `,
  
  task: `Make a rectangle bounce move constantly and bounce off the walls. Look at the example code below for a circle for help.`,
  
  code: `// Starting position and speed
let x = 200;
let y = 200;
let speedX = 3;
let speedY = 2;

let circle = new Circle(40);
circle.setPosition(x, y);
circle.setColor("blue");
add(circle);

function update() {
  x += speedX;
  y += speedY;

  // Bounce off left or right walls
  if (x - circle.radius < 0 || x + circle.radius > 400) {
    speedX = -speedX;
  }

  // Bounce off top or bottom walls
  if (y - circle.radius < 0 || y + circle.radius > 400) {
    speedY = -speedY;
  }

  circle.setPosition(x, y);
}

// Update 60 times per second
setInterval(update, 1000 / 60);`,
  
  format: "graphics",
  img:"imgs/bouncegif.gif"
},

"Challenge: Colliding Balls":{

    header:`Use what you learned in the previous lessons to solve this challenge. <br>
    <b>Hint:</b> keep track of the edges of both circles, and treat their collisions when they touch the same way as hitting a wall.`,
    task:`Create two balls moving towards each other constantly. When they hit each other or a wall, they should bounce in the opposite direction.`,
    code:``,
    format:`graphics`,
    img:"imgs/collidegif.gif"
},
"Mouse Clicks":{
    header: `
  Sometimes, we want the program to respond when the user clicks on the canvas.<br><br>

  We can do this with <code>mouseClickMethod()</code>. This function takes the name of another function — called a <b>callback</b> — that will automatically run whenever the mouse is clicked inside the canvas.<br><br>

  That callback function should have <b>one parameter</b>, which is an object that gives information about the click:<br>
  - <code>x</code>: The horizontal position of the mouse click in pixels from the left<br>
  - <code>y</code>: The vertical position of the mouse click in pixels from the top<br>
  - <code>button</code>: Which mouse button was pressed (<code>'left'</code>, <code>'right'</code>, or <code>'center'</code>)<br><br>

  By using these properties, you can move shapes, change colors, or trigger actions where the user clicks.<br><br>

  For example, if you define a function like this:
  <pre>function mouseClicked(event){
  
}</pre>
  You can then call mouseClickMethod like this: <code>mouseClickMethod(mouseClicked)</code><br><br>
  Now that you've passed in the name of the function <code>mouseClicked</code> into the <code>mouseClickMethod()</code> function, whenever a user clicks their mouse, then <code>mouseClicked</code> will be called, with the event data.
  `,

  task: `Make a shape that moves to wherever you click on the canvas. Use the click position (\`x\` and \`y\`) from the event parameter to set its new position.`,

  code: `
// This function runs whenever the canvas is clicked
function handleClick(e) {
    let circle = new Circle(50);
    circle.setPosition(e.x, e.y);
    circle.setColor("blue");
    add(circle);
}

// Tell the program to call handleClick when the mouse is clicked
mouseClickMethod(handleClick);`,

  format: "graphics",
  img: "imgs/mouseclickgif.gif"
},

"Keyboard Inputs":{
      header: `
  Keyboards are one way for your program to get input from the player.<br><br>

  In our graphics system, you can detect when keys are pressed or released by using:<br>
  - <code>keyDownMethod(functionName)</code> — runs your function when a key is pressed down.<br>
  - <code>keyUpMethod(functionName)</code> — runs your function when a key is released.<br><br>

  These functions take a <b>callback</b>, which is a function you define.<br>
  The callback function is given one <b>event object</b> parameter with properties:<br>
  - <code>key</code>: the actual character (like "a", "A", "1", "ArrowUp")<br>
  - <code>code</code>: the physical key's code (like "KeyA", "Digit1", "ArrowUp")<br><br>

  This allows you to check exactly which key was pressed, no matter the case or symbol.<br>
  `,
  
  task: `Make a circle move left, right, up, or down depending on the arrow keys pressed. The example below just prints which key is pressed and released. <b>Hint:</b>Start moving in whenKeyDown, and stop moving in whenKeyUp.`,

  code: `let text = new Text("key events will show here",24,"Arial");
text.setPosition(10,20);
add(text)

function whenKeyDown(e) {
  text.setText("Key down: " + e.key);
}

function whenKeyUp(e) {
  text.setText("Key up: " + e.key);
}

keyDownMethod(whenKeyDown);
keyUpMethod(whenKeyUp);`,

  format: "graphics",
  img: "imgs/keyboardeventsgif.gif"

},

"Challenge: Putting It All Together":{
    header:`Use what you learned in this unit to use many new concepts at once.`,
    task:`Create a game that does this: A new rectangle with a random size is made wherever you click. Each rectangle should continuously move and collide/bounce off the walls as well as other rectangles.<br>
    <b>Hint</b>: Use objects to hold the data for each rectangle, including <code>x,y,speedX,speedY,width,height</code>, and store all those objects in an array. Loop over the array to change positions and check for collisions.`,
    format:"graphics",
    code:``,
    img:"imgs/challengetogether.gif"
},
 "Smiley Face": {
    "header": "Use what you've learned to draw the image",
    "task": "Draw a smiley face with eyes, a mouth, and a circle for the head.",
    "format": "graphics",
    "code": "",
    "img": "imgs/smile.png"
  },
  "Traffic Light": {
    "header": "Use what you've learned to draw the image",
    "task": "Draw a traffic light with red, yellow, and green circles inside a rectangle.",
    "format": "graphics",
    "code": "",
    "img": "imgs/trafficlight.png"
  },
  "Bar Graph": {
    "header": "Use what you've learned to draw the image",
    "task": "Draw a bar graph with at least 4 bars of different heights and colors.",
    "format": "graphics",
    "code": "",
    "img": "imgs/barchart.png"
  },
  "Target Practice": {
    "header": "Use what you've learned to draw the image",
    "task": "Draw a target made of concentric circles with alternating red and white colors.",
    "format": "graphics",
    "code": "",
    "img": "imgs/target.png"
  },
  "French Flag": {
    "header": "Use what you've learned to draw the image",
    "task": "Draw the flag of France with vertical stripes of blue, white, and red.",
    "format": "graphics",
    "code": "",
    "img": "imgs/french.png"
  },
  "Robot": {
    "header": "Use what you've learned to draw the image",
    "task": "Draw a simple robot using rectangles and circles for the body, head, and arms.",
    "format": "graphics",
    "code": "",
    "img": "imgs/robot.png"
  },
  "Ice Cream Cone": {
    "header": "Use what you've learned to draw the image",
    "task": "Draw an ice cream cone with at least 2 scoops of different colors on top.",
    "format": "graphics",
    "code": "",
    "img": "imgs/icecreamcone.png"
  },
  "Lucky Sevens": {
    "header": "Use what you've learned to code the project",
    "task": "Roll two six-sided dice until their total is 7. Output each roll and display the total rolls it took to reach 7.",
    "format": "text",
    "code": ""
},
  "Radiating Lines": {
    "header": "Use what you've learned to draw the image",
    "task": "Draw straight lines radiating out from the center of the canvas like sun rays.",
    "format": "graphics",
    "code": "",
    "img": "imgs/rays.png"
  },
  "Nested Triangles": {
    "header": "Use what you've learned to draw the image",
    "task": "Draw multiple triangles inside each other, each smaller than the last.",
    "format": "graphics",
    "code": "",
    "img": "imgs/triangles.png"
  },
  "Snowman": {
    "header": "Use what you've learned to draw the image",
    "task": "Draw a snowman with three circles stacked on top of each other, plus eyes, a carrot nose, and a hat.",
    "format": "graphics",
    "code": "",
    "img": "imgs/snowman.png"
  },
  "Starry Sky": {
    "header": "Use what you've learned to draw the image",
    "task": "Draw a night sky with many randomly placed stars of different sizes.",
    "format": "graphics",
    "code": "",
    "img": "imgs/nightsky.png"
  },
  "Fruit Bowl": {
    "header": "Use what you've learned to draw the image",
    "task": "Draw a bowl with at least 3 different fruits inside, each a different color.",
    "format": "graphics",
    "code": "",
    "img": "imgs/fruitbowl.png"
  },
  "City Skyline": {
    "header": "Use what you've learned to draw the image",
    "task": "Draw a city skyline with rectangles for buildings. Include windows that light up at night.",
    "format": "graphics",
    "code": "",
    "img": "imgs/cityskyline.png"
  },
  "Pet Finder": {
    "header": "Use what you've learned to code the project",
    "task": "Make a program that helps a user choose a pet. Ask if they want a small, medium, or large pet, and if they prefer low or high energy. Suggest an animal that fits their choice.",
    "format": "text",
    "code": "",
  },
  "Kite": {
    "header": "Use what you've learned to draw the image",
    "task": "Draw a kite with a diamond shape and a string with bows tied along it.",
    "format": "graphics",
    "code": "",
    "img": "imgs/kite.png"
  },
  "Shape Changer": {
    "header": "Use what you've learned to code the program",
    "task": "Fill the canvas with shapes. When the user clicks on a shape, it should switch to a different shape (circle → square → triangle → circle).",
    "format": "graphics",
    "code": "",
    "img": "imgs/shapechanger.png"
  },
  "Music Bars": {
    "header": "Use what you've learned to code the program",
    "task": "Ask the user for a number between 5 and 20. Draw that many vertical rectangles with random heights to look like music bars.",
    "format": "graphics",
    "code": "",
    "img": "imgs/musicbars.png"
  },
  "Shooting Stars": {
    "header": "Use what you've learned to code the program",
    "task": "Draw a night sky and animate stars that streak across the screen like shooting stars.",
    "format": "graphics",
    "code": "",
    "img": "imgs/shootingstars.png"
  },
  "Project: Connect Four": {
    "header": "Use what you've learned to code the program",
    "task": "Create the game of Connect Four. Draw a 7x6 grid. Players take turns dropping red or yellow circles into the columns until one player gets four in a row.",
    "format": "graphics",
    "code": "",
    "img": "imgs/connectfour.png"
  }

}

