let unitNames = ["Basic Python and Console Interaction", "Conditionals","Looping","Functions and Exceptions","Strings","Creating and Altering Data Structures","Extending Data Structures", "Project: Hangman", "Project: Fill In The Blank","Project: Quiz Game", "Math Games", "Board Games","String Games"];
let units = [
    ["Printing in Python","Variables and Types","User Input","Math Operators","String Operators","Comments","Putting it Together"],
    ["Booleans", "If Statements", "Comparison Operators", "Logical Operators", "Floating Point Numbers and Rounding"],
    ["While Loops","For Loops","Break and Continue","Nested Control Structures", "Guess the Number"],
    ["Functions", "Functions and Parameters", "Namespaces in Functions","Fix this Program", "Functions and Return Values","Exceptions"],
    ["Indexing","Challenge: Initials","Slicing","Immutability","Strings and For Loops","Challenge: Palindromes","The in Keyword","String Methods","Project: Pig Latin"],
    ["Tuples","Lists","For Loops and Lists","Challenge: Find List Max","List Methods","Project: Shopping List"],
    ["2D Lists", "List Comprehensions", "Challenge: List Comprehension Filtering", "Packing and Unpacking", "Dictionaries", "Equivalence vs Identity", "Project: Contact Book"],
    ["Hangman"],
    ["Fill In The Blank"],
    ["Quiz Game"],
    ["Project: Fractions","Project: Calculator","Project: Fibonacci","Project: Number Systems", "Project: Geometry", "Project: Lock Combinations"],
    ["Project: Tic Tac Toe", "Project: Connect Four", "Project: Rock Paper Scissors", "Project: Battleship"],
    ["Project: Text-Based Adventure Game", "Project: Fraction, Percent, Decimal, Ratio"]

];


let lessonContents={
    "Printing in Python":{
        header:`This is an example python program that prints to the console.<br>Notice how each print statement makes a new line on the console.<br>Experiment with removing parentheses, quotation marks, and adding new lines.<br><br> Your Task: print three fun facts about yourself to the console, each on a different line.`,
        code:`print("hello world!")\nprint("this is a second line!")`
    },
    "Variables and Types": {
        header: `Variables are like labeled boxes that store information.<br>
        Variables have names, types, and values.<br>
        <ul>
            <li><b>Name</b>: a variable's name is what it is called in your code and how it is used</li>
            <li><b>Type</b>: a variable's type is the type of data it stores. Variables can store different types like numbers and words</li>
            <li><b>Value</b>: a variable's value is its data that it represents.</li>
        </ul>

        Some different variable types are:<br>
        <ul>
            <li><code>int</code> is used for whole numbers.</li>
            <li><code>float</code> is used for decimals.</li>
            <li><code>str</code> is used for text (strings).</li>
            <li><code>bool</code> is used for True or False.</li>
        </ul>

        To make or update a variable in python, we use assignment statements. It looks like this:<br>
        <code>variable_name = "any value"</code><br><br>
        Investigate and experiment with the code below.<br><br>
        Your Task: Try making your own variables and modifying existing ones!`,
        code: `# This is a comment. Python ignores comments.\n# Let's create some variables!\n\nname = "Alice"         # a string\nage = 13               # an integer\nheight = 5.3           # a float\nlikes_python = True    # a boolean\n\n# Let's print them!\nprint("Name:", name)\nprint("Age:", age)\nprint("Height:", height)\nprint("Likes Python:", likes_python)`
    },
    
    "User Input":{
        header: `You can ask the user questions using the <code>input()</code> function. It always gives you a <b>string</b>, even if the user types a number.<br><br>
    To do math or comparisons, you’ll need to convert the input to another type like <code>int</code> (for whole numbers) or <code>float</code> (for decimals).<br><br>
    To do this, we use functions like <code>int()</code> or <code>float()</code>. See the code below to see how they work!<br><br>
    Read through the given code below. Try running this code, then experiment by entering your own name and age.<br><br>
    Your Task: change it to ask for your favorite number, convert it to an <code>int</code>, and multiply it!`,

        code: `
# Ask the user for their name and age
name = input("What is your name? ")
age = input("How old are you? ")

print("Hi", name + "! You are", age, "years old.")

# Convert age to an integer so we can do math with it
age_number = int(age)
next_year = age_number + 1
print("Next year, you will be", next_year)

# Ask for a decimal number and convert it to float
height = float(input("How tall are you in feet? "))
print("You are", height, "feet tall!")`
    },

    "Math Operators":{
        header: `Python can do math just like a calculator! You can use numbers directly, or use variables to store them.<br><br>
    <b>Basic Operators:</b><br>
    <ul>
        <li><code>+</code> : Addition</li>
        <li><code>-</code> : Subtraction</li>
        <li><code>*</code> : Multiplication</li>
        <li><code>/</code> : Division (returns a float)</li>
        <li><code>//</code> : Integer Division (drops the decimal)</li>
        <li><code>%</code> : Modulo (remainder)</li>
        <li><code>**</code> : Exponentiation (power)</li>
    </ul>    
    <b>Order of operations</b> follows PEMDAS: parentheses first, then exponents, multiplication/division, and finally addition/subtraction.<br><br>
    Your Task: Try changing the numbers and operators in the examples below. At the end, create your own math expression and see what it evaluates to!`,

        code: `# Basic math operations
a = 10
b = 3

print("Addition:", a + b)
print("Subtraction:", a - b)
print("Multiplication:", a * b)
print("Division (float):", a / b)
print("Exponent:", a ** b)
print("Remainder (modulo):", a % b)
print("Integer division:", a // b)  # Divides and drops the decimal

# Float example
c = 2.5
d = 4

print("Float multiplication:", c * d)
print("Float + int:", c + a)

# Order of operations (PEMDAS)
result = 2 + 3 * 4
print("2 + 3 * 4 =", result)

# Use parentheses to control order
result = (2 + 3) * 4
print("(2 + 3) * 4 =", result)

# Try your own!
my_math = (5 + 2) ** 2 // 3
print("My math expression result:", my_math)`
    },

    "String Operators":{
        header: `Strings are just text in Python, and you can combine or repeat them using operators!<br><br>
    <b>Useful string operators:</b>
    <ul>
        <li><code>+</code> : Concatenates (joins) two strings together. Can only be used with two strings.</li>
        <li><code>*</code> : Repeats a string multiple times. Can only be used with a string and an integer.</li>
    </ul>
    You can’t directly add a number to a string, you’ll need to convert the number using <code>str()</code> first.<br><br>
    Try experimenting with combining strings and numbers and the different operations. Read through the code and investigate if anything confuses you!<br><br>
    Your Task: Ask the user for a string and a number, then print the string repeated that many times!`,

        code: `# Concatenating strings
first = "Hello"
second = "world"
combined = first + " " + second
print(combined)

# Repeating strings
laugh = "ha"
print(laugh * 5)  # prints 'hahahahaha'

# Mixing strings and numbers (will cause an error!)
age = 13
# print("I am " + age + " years old")  # This will error!

# Convert the number to a string
print("I am " + str(age) + " years old")

# You can also build longer strings using variables
name = "Alice"
hobby = "drawing"
sentence = name + " likes " + hobby + "."
print(sentence)

# Try making your own!
emoji = "🐍"
print(emoji * 10)`
    },

    "Comments":{
        header: `Comments are notes in your code that Python ignores. They're super helpful for explaining what your code does.<br><br>
    <b>Types of comments:</b>
    <ul>
        <li><code>#</code> : Single-line comment</li>
        <li>Triple quotes (<code>'''</code> or <code>"""</code>) : Multi-line comment</li>
    </ul>
    Use comments to explain your thinking or remind yourself of what your code is doing. It makes your code easier to understand!<br><br>
    Your Task: Add comments to the code below to explain what each part does. Then, write a short program that prints a message and includes comments about what it does!`,

        code: `# This is a single-line comment
print("Hello")  # This prints a message

# You can also "turn off" code using a comment
# print("This won't run")

"""
This is a multi-line comment.
It's useful for longer notes or explanations.
Python actually sees this as a multi-line string,
but if it's not assigned to anything, it works like a comment.
"""

print("Code with comments is easier to read!")`
    },
    "Putting it Together":{
        img:"imgs/Exclamation-Mark-Emojis.png",
        header:`Now you have learned some basic python! Use everything we've learned in the past lessons and create your own program. Make sure to use printing, variables, user input, math and string operations, and comments!<br><br>
        Some program ideas:
        <ul>
            <li>Ask the user for the side length of a square and calculate its area</li>
            <li>Get the user's name and give them a nickname</li>
        </ul>
        Or, be creative!`,
        code:``
    },






    "Booleans":{
        header: `Booleans are a special type of value in Python that can only be one of two things:<br>
    <ul>
        <li><code>True</code></li>
        <li><code>False</code></li>
    </ul>
    They’re used to represent yes/no, on/off, or true/false ideas in code.<br><br>
    Try changing the values below or making your own!<br><br>
    Your Task: Create two boolean values that describe something about you and print them out!`,

        code: `# Boolean values
is_hungry = True
is_sleepy = False

print("Hungry:", is_hungry)
print("Sleepy:", is_sleepy)

# You can also just print them directly
print(True)
print(False)`
    },
    
    "If Statements":{
        header: `An <code>if</code> statement lets your code make decisions.<br>
    If something is <code>True</code>, Python will run the code inside the <code>if</code> block.<br><br>
    You can also use <code>if/else</code> to run one thing if it's <code>True</code>, and something else if it's <code>False</code>.<br><br>
    In this lesson, we’ll use <code>True</code> and <code>False</code> directly. We’ll learn how to test conditions later!<br><br>
    Your Task: Read the code below. Look at each <code>if</code> statement, and try to find which lines are part of the block and will be run. Try changing the boolean values and see how the output changes.`,

        code: `# Using if
is_raining = True

if is_raining:
    print("Take an umbrella!")

# Using if/else
is_hungry = False

if is_hungry:
    print("Time to eat!")
else:
    print("Not hungry right now.")

# You can test different values by changing True/False
wants_ice_cream = True

if wants_ice_cream:
    print("Here's your ice cream!")
else:
    print("No ice cream for now.")`
    },

    "Comparison Operators":{
        header: `Now that you know how booleans and <code>if</code> statements work, let’s talk about <b>comparison operators</b>.<br><br>
    These let you <b>compare values</b> in Python and get a <code>True</code> or <code>False</code> result.
    <ul>
        <li><code>==</code> : equal to</li>
        <li><code>!=</code> : not equal to</li>
        <li><code>></code> : greater than</li>
        <li><code><</code> : less than</li>
        <li><code>>=</code> : greater than or equal to</li>
        <li><code><=</code> : less than or equal to</li>
    </ul>
    You can use these inside <code>if</code> statements to control your code.<br><br>
    Your task: Try changing the numbers and see how the results change! (Also, investigate how <code>elif</code> works!), Then write your own code to compare two user-inputted numbers`,

        code: `# Basic comparisons
print(5 == 5)    # True
print(3 != 4)    # True
print(10 > 2)    # True
print(7 < 7)     # False
print(6 >= 6)    # True
print(8 <= 3)    # False

# Using comparisons in if statements
score = 85

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
else:
    print("Grade: D or lower")

# Try your own!
age = 13

if age < 13:
    print("You're a kid!")
elif age < 18:
    print("You're a teenager!")
else:
    print("You're an adult!")`
    },

    "Logical Operators":{
        header: `Sometimes you want to check more than one condition at the same time. That’s where <b>logical operators</b> come in.<br><br>
    These operators let you combine or modify boolean values:
    <ul>
        <li><code>and</code> : True only if <i>both</i> sides are True</li>
        <li><code>or</code> : True if <i>at least one</i> side is True</li>
        <li><code>not</code> : Flips True to False, and False to True</li>
    </ul>
    Try changing the values and watching how the output changes!<br><br>
    Your Task: create variables is_hungry and has_snack and use logical operators to print different messages based on their values.`,

        code: `# Logical operators with booleans
is_raining = True
has_umbrella = False

if is_raining and has_umbrella:
    print("You stay dry!")
else:
    print("You might get wet!")

# OR: only one side needs to be True
is_sunny = False
wants_to_go_outside = True

if is_sunny or wants_to_go_outside:
    print("Going outside!")
else:
    print("Staying indoors.")

# NOT: flips the value
is_tired = False

if not is_tired:
    print("You're ready to go!")
else:
    print("Take a nap.")`
    },

    "Floating Point Numbers and Rounding":{
        header: `Floating point numbers are numbers with decimals, like <code>3.14</code> or <code>0.5</code>.<br>
    But because of how computers store these numbers, sometimes math with decimals is a little bit off.<br><br>
    For example, you'd expect <code>0.0037 == 0.37 / 100</code> to be <code>True</code>, but it’s actually <code>False</code> because of tiny rounding errors inside the computer.<br><br>
    To fix this, you can use the <code>round()</code> function to round numbers to a certain number of decimal places before comparing them.<br><br>
    Your Task: Find another example of floating point math that doesn't work as expected, then use <code>round()</code> to fix it!`,

        code: `# Floating point math looks normal at first
a = 0.3
b = 0.1+0.2

print("a:", a)
print("b:", b)
print("Are they equal?", a == b)  # This will print False!

# Let's round both numbers to 5 decimal places
a_rounded = round(a, 5)
b_rounded = round(b, 5)

print("Rounded a:", a_rounded)
print("Rounded b:", b_rounded)
print("Are they equal now?", a_rounded == b_rounded)  # Now True!

# You can round any float
pi = 3.14159265
print("Rounded pi to 2 decimals:", round(pi, 2))`
    },




    "While Loops":{
        header: `The code inside a <code>while</code> loop runs over and over <b>as long as a condition is True</b>.<br>
    It’s great when you don’t know exactly how many times you’ll need to repeat something.<br><br>
    <b>Careful!</b> If the condition never becomes <code>False</code>, the loop will go on forever!<br><br>
    Try running the loop below, then change the condition or the counter to see what happens.<br><br>
    Your Task: write your own while loop that prints all the even numbers from 2 to 20.`,

        code: `# This loop prints numbers from 1 to 5
count = 1

while count <= 5:
    print("Count is:", count)
    count = count + 1  # Make sure to update the counter!

print("Loop is done!")
`
    },

    "For Loops":{
        header: `A <code>for</code> loop runs a block of code a certain number of times. It's perfect when you know how many times you want to repeat something!<br><br>
    <b>range()</b> is used to generate a list of numbers to loop through. You can give it either 1, 2, or 3 numbers. It works like this:
    <ul>
        <li><code>range(stop)</code> — counts from 0 to stop (not including stop)</li>
        <li><code>range(start, stop)</code> — counts from start to stop (not including stop)</li>
        <li><code>range(start, stop, step)</code> — counts with a custom step (like +2 or -1)</li>
    </ul>
    Try out the examples below —<br><br>
    Your Task: challenge yourself by printing numbers 1–10 or asking for 10 numbers from the user and adding them up!`,

        code: `# Basic for loop with range
for i in range(5):
    print("i is:", i)  # Prints 0 to 4

# Custom start and stop
for i in range(1, 6):
    print("Number:", i)  # Prints 1 to 5

# Custom step
for i in range(0, 10, 2):
    print("Even number:", i)  # 0, 2, 4, 6, 8
`
    },

    "Break and Continue":{
        header: `Sometimes you want to <b>stop</b> a loop early, or <b>skip</b> over part of it.<br><br>
    Python gives you two special keywords:
    <ul>
        <li><code>break</code> — completely stops the loop</li>
        <li><code>continue</code> — skips the rest of the loop and moves to the next turn</li>
    </ul>
    Try out the examples below<br><br>
    Your Task: try writing your own loop that skips or stops at certain numbers!`,

        code: `# BREAK: stop the loop early
for i in range(1, 10):
    if i == 5:
        print("Breaking the loop at", i)
        break
    print("i is:", i)

# CONTINUE: skip just one turn
for i in range(1, 6):
    if i == 3:
        print("Skipping 3")
        continue
    print("i is:", i)

# You can use break and continue in while loops too!
count = 0
while count < 10:
    count += 1
    if count % 2 == 0:
        continue  # skip even numbers
    if count == 9:
        break     # stop before 9
    print("Odd count:", count)`
    },

    "Nested Control Structures":{
        header: `You can put one control structure (like a loop or an <code>if</code> statement) <b>inside another</b> — this is called <b>nesting</b>.<br><br>
    For example, you can have an <code>if</code> inside a <code>for</code> loop, or even a loop inside another loop.<br>
    This lets you create more powerful programs, like drawing grids or checking multiple conditions.<br><br>
    Your Task: Try the examples below, and then create your own nested loop!`,

        code: `# if inside a loop
for i in range(1, 6):
    if i % 2 == 0:
        print(i, "is even")
    else:
        print(i, "is odd")

# loop inside a loop (nested for loop)
for row in range(3):
    for col in range(4):
        print("(", row, ",", col, ")", end=" ")
    print()  # new line after each row

# Challenge: Print a number grid
# Example:
# 1 2 3
# 4 5 6
# 7 8 9`
    },

    "Guess the Number":{
        img:"imgs/guessthenumber.png",
        header:`Use what you learned about loops to create a simple Guess the Number game.<br>
        Decide on a certain number, then keep getting user input until they select the correct number.<br><br>
        `,
        code:``
    },







    "Functions":{
        header: `Functions are like mini-programs inside your program. They let you organize your code, avoid repeating yourself, and make your code easier to read.<br><br>
    To create a function, use <code>def</code>, give it a name, and write the code you want it to run.<br>
    To run (or "call") the function, just use its name followed by parentheses.<br><br>
    Everytime you call the function, it runs the code inside it.<br><br>
    Read through the code below and try to understand it<br><br>
    Your Task: try making your own function and calling it multiple times!`,

        code: `# Define a function
def say_hello():
    print("Hello!")
    print("Welcome to the program.")

# Call the function
say_hello()

# You can call it as many times as you want
say_hello()
say_hello()

# Try making your own function!
def cheer():
    print("You got this!")

cheer()`
    },

    "Functions and Parameters":{
        header: `You can give functions <b>parameters</b>, which are like variables the function uses when it runs.<br>
    When you call the function, you pass in <b>arguments</b> — the actual values you want to use.<br><br>
    This lets your functions be flexible and reusable for different situations!<br><br>
    Look at the examples below. Notice how the function uses its parameters in the code. It is used like a normal variable, but it gets its value from the arguments you pass in when you call the function.<br><br>
    Your Task: Try changing the values passed in when calling the function.`,

        code: `# Function with one parameter
def greet(name):
    print("Hello,", name + "!")

greet("Alice")
greet("Bob")

# Function with two parameters
def add_numbers(a, b):
    print("The sum is:", a + b)

add_numbers(3, 5)
add_numbers(10, 20)

# Try your own!
def repeat(word, times):
    print(word * times)

repeat("hi", 3)`
    },

    "Namespaces in Functions":{
        header: `When you create a variable, it exists in a certain <b>scope</b> or <b>namespace</b> — a part of the program where the variable is visible.<br><br>
    <b>Local variables</b> are created inside a function and only exist while that function is running.<br>
    <b>Global variables</b> are created outside of all functions and can be used by the whole program.<br><br>

    If you try to use a local variable outside its function, you’ll get an error.<br><br>

    If a local variable has the same name as a global one, the function will use the local version. The global one stays unchanged.<br><br>
    Your Task: Try editing the variables below to see how Python handles different scopes! Then write your own function that uses both a local and a global variable.`,

        code: `# This is a global variable
message = "Hello from the outside!"

def speak():
    # This is a local variable with the same name
    message = "Hello from inside the function!"
    print(message)

print("Before function call:", message)
speak()
print("After function call:", message)

# Local variables can't be used outside their function
def example():
    x = 42  # local variable
    print("Inside function:", x)

example()
# print(x)  # This will cause an error: x is not defined

# You can read global variables inside a function
name = "Alice"

def say_name():
    print("Your name is", name)

say_name()`
    },

    "Fix this Program":{
        img:"imgs/fixthisprogram.jpg",
        noExample:true,
        header: `There is a bug in the code below. Fix it.<br><br>
        <b>Hint:</b> The variable is used in the wrong namespace<br>`,

        code: `
def print_name():
    name = "Alice"
    print(name)

print(name)`
    },

    "Functions and Return Values":{
        header: `Sometimes you want a function to <b>give back</b> a value when it's done. This is called a <b>return value</b>.<br><br>
    You use the <code>return</code> keyword to send a result back to wherever the function was called.<br>
    You can then <b>store</b> that value in a variable, <b>print</b> it, or even <b>pass it into another function</b>.<br><br>
    When a function returns a value, it stops running and sends that value back immediately.<br><br>
    You can use function calls that return values just like any other value or variable in Python.<br>
    Try playing with the return values below and combining them in different ways!<br><br>
    Your Task: Create a function that returns the negative version of a number.`,

        code: `# A basic return value
def add(a, b):
    return a + b

result = add(3, 4)
print("Result is:", result)

# Return values can be used directly
print("5 + 6 =", add(5, 6))

# You can pass return values into other functions
def square(x):
    return x * x

print("Square of 3 + 2:", square(add(3, 2)))

# Nesting functions
def double(n):
    return n * 2

print("Double the square of 4:", double(square(4)))

# Storing return values in variables
a = add(1, 2)
b = square(a)
c = double(b)
print("Final result:", c)`
    },

    "Exceptions":{
        header: `Sometimes your code can run into problems, like trying to divide by zero or using a variable that doesn't exist.<br>
    When this happens, Python raises an <b>exception</b> — a special error message that tells you something went wrong.<br><br>
    Usually, if an exception happens, your program stops running.
    You can handle exceptions using <code>try</code> and <code>except</code> blocks. This way, your program can continue running even if an error occurs! Your code will try to run the code inside the <code>try</code> block, and if an exception happens, it will jump to the <code>except</code> block instead of crashing.<br><br>
    A common exception is the ValueError, which happens when you try to convert something that isn't a number into a number.<br>
    Try running the code below and see what happens when the user inputs something that isn't a number!<br>
    <br>
    Your Task: Find a different type of exception, and then use a try/except block to handle it!`,
    code: `# Example of handling exceptions
try:
    value = int(input("Enter a number: "))
    print("You entered:", value)
except ValueError:
    print("That's not a valid number!")`
    },


    //lesson on string indexing that talks about how strings are like lists of characters, square brackets, indexes, how to access characters, out of bounds errors, and negative indexes
    "Indexing":{
        header: `In Python, strings are like lists of characters. You can access individual characters using <b>indexing</b>.<br>
        Each character has a number called an <b>index</b> that tells you its position in the string, starting from 0.<br><br>
        You can use square brackets <code>[]</code> to get a character at a specific index.<br>
        The first character is at index 0, the second at index 1, and so on. Put the number inside the square brackets, after the string.<br><br>
        Example string with each index labeled:<br>
        <code>hello</code><br>
        <code>01234</code><br><br>
        If you try to access an index that is too high or too low, you’ll get an <b>IndexError</b>.<br><br>
        Negative indexes count from the end of the string, with -1 being the last character.<br>
        Try running the code below and see how indexing works! Then, try accessing characters at different indexes.<br><br>
        Your Task: Try accessing characters at different indexes, including negative ones!`,
        code: `# Example string
my_string = "Hello, World!"
print(my_string[0])    # H
print(my_string[7])    # W
print(my_string[-1])   # !
print(my_string[-5])   # o
# print(my_string[100]) # IndexError
        `
    },

    "Challenge: Initials":{
        img:"imgs/initials.png",
        noExample:true,
        header: `Write a function that has two parameters, a first name and a last name and returns the initials (like "J.D.").<br>
        Use string indexing to get the first letter of each part of the name.<br>`,
        code: `def get_initials(first_name, last_name):
    #write your own code here!


print(get_initials("John", "Doe"))  # Should return "J.D."
print(get_initials("Alice", "Smith"))  # Should return "A.S."`
    },

    "Slicing":{
        header: `Slicing lets you get a part of a string by specifying a start and end index.<br>
        You can use the syntax <code>string[start:end]</code> to get a substring.<br>
        The <b>start</b> index is included, but the <b>end</b> index is not.<br><br>
        You can also use a third number called <b>step</b> to skip characters. The syntax is <code>string[start:end:step]</code>.<br>
        The <b>step</b> is how many characters to skip each time. It can also be negative.<br><br>
        If you leave out <b>start</b>, it defaults to 0. If you leave out <b>end</b>, it goes to the end of the string. If you leave out <b>step</b>, it defaults to 1.<br><br>
        Try running the code below and see how slicing works!<br> <br>
        Your Task: try slicing the string in different ways.`,
        code: `# Example string
my_string = "Hello, World!"
print(my_string[0:5])    # Hello
print(my_string[7:12])   # World
print(my_string[0:12:2]) # Hlo ol!
print(my_string[::-1])     # !dlroW ,olleH
        `
    },

    "Immutability":{
        header: `Strings in Python are <b>immutable</b>, which means you can’t change them directly.<br>
        If you try to change a character in a string, you’ll get an error.<br><br>
        Instead, you can create a new string based on the old one with the changes you want.<br>
        You can use slicing to get parts of the string and then combine them with new characters.<br><br>
        Try running the code below and see how immutability works!<br><br>
        Your Task: Create your own string and try to change a character. Then, create a new string with the change you want!`,
        code: `# Example string
my_string = "Hello, World!"
# Trying to change a character (this will raise an error)
# my_string[0] = "h"
# Instead, create a new string
new_string = "h" + my_string[1:]
print(new_string)  # hello, World!
        `
    },

    //basic overview of strings and for loops, with normal iteration and using len
    "Strings and For Loops":{
        header: `You can use a <b>for loop</b> to go through each character in a string.<br>
        Doing this lets you easily access each character one by one.<br><br>
        You can also use the <b>len()</b> function to get the length of the string (the number of characters).<br>
        This is useful if you want to loop through the string using indexes.<br><br>
        Try running the code below to see how for loops work with strings!
        <br><br>
        Your Task: Try iterating through the string backwards, and print out each character`,
        code: `# Example string
my_string = "Hello"

# Using a for loop to iterate through each character
# char will be set to each character in the string one by one
for char in my_string:
    print(char)

#using len() and range() to iterate by index
for i in range(len(my_string)):
    print("Character at index", i, "is", my_string[i])
        `
    },

    "Challenge: Palindromes":{
        img:"imgs/palindromes.jpg",
        noExample:true,
        header: `A <b>palindrome</b> is a word or phrase that reads the same forwards and backwards, like "racecar" or "level".<br>
        Write a function that checks if a given string is a palindrome.<br>`,
        code: `def is_palindrome(s):
    #write your own code here!

# Test the function
print(is_palindrome("racecar"))  # Should return True
print(is_palindrome("hello"))    # Should return False
print(is_palindrome("level"))  # Should return True
        `
    },

    "The in Keyword":{
        header: `The <b>in</b> keyword lets you check if a character or substring is inside a string.<br>
        It returns <code>True</code> if the character or substring is found, and <code>False</code> if it’s not.<br><br>
        You can use it in <code>if</code> statements to make decisions based on whether something is in a string.<br><br>
        Try running the code below and see how the <b>in</b> keyword works!<br><br>
        Your Task: Create your own string and let the user input a character or substring to check if it’s in the string.`,
        code: `# Example string
my_string = "Hello, World!"

# Check if a character is in the string
if "H" in my_string:
    print("Found 'H'!")
else:
    print("Did not find 'H'.")

# Check if a substring is in the string
if "World" in my_string:
    print("Found 'World'!")
else:
    print("Did not find 'World'.")`
    },

    //explains methods vs functions, how to use them, and the methods: upper(), lower(), isupper(), islower(), swapcase(),strip(),find(),replace()
    "String Methods":{
        header: `Methods are special functions that belong to a specific type of data, like strings.<br>
        You call them using the dot <code>.</code> notation, like <code>string.method()</code>.<br>
        Methods let you perform actions on the string, like changing its case or finding parts of it.<br><br>
        Here are some common string methods:<br>
        <ul>
            <li><code>upper()</code> : Converts the string to uppercase</li>
            <li><code>lower()</code> : Converts the string to lowercase</li>
            <li><code>isupper()</code> : Checks if the string is in uppercase</li>
            <li><code>islower()</code> : Checks if the string is in lowercase</li>
            <li><code>swapcase()</code> : Swaps the case of each character</li>
            <li><code>strip()</code> : Removes leading and trailing whitespace</li>
            <li><code>find()</code> : Finds the first occurrence of a substring</li>
            <li><code>replace()</code> : Replaces a substring with another substring</li>
        </ul>
        Explore how they are used below:<br><br>
        Your Task: Try using these methods on your own strings!`,
        code: `# Example string
my_string = " Hello, World! "

# upper(): Converts the string to uppercase
print(my_string.upper())  # " HELLO, WORLD! "

# lower(): Converts the string to lowercase
print(my_string.lower())  # " hello, world! "

# isupper(): Checks if the string is in uppercase
print(my_string.isupper())  # False

# islower(): Checks if the string is in lowercase
print(my_string.islower())  # False

# swapcase(): Swaps the case of each character
print(my_string.swapcase())  # " hELLO, wORLD! "

# strip(): Removes leading and trailing whitespace
print(my_string.strip())  # "Hello, World!"

# find(): Finds the first occurrence of a substring and returns the index
print(my_string.find("World"))  # 8

# replace(): Replaces a substring with another substring
print(my_string.replace("World", "Python"))  # " Hello, Python! "
        `
    },

    "Project: Pig Latin":{
        img:"imgs/piglatin.jpg",
        noExample:true,
        header: `Pig Latin is a fun way to play with words! The rules are simple:
        <ul>
            <li>If a word starts with a consonant, move the first letter to the end and add "ay".</li>
            <li>If it starts with a vowel, just add "yay" to the end.</li>
        </ul>
        Write a function that takes a string and converts it to Pig Latin.<br>
        You can use string methods and indexing to help you.<br>`,
        code: `def pig_latin(word):
    #write your own code here!

# Test the function
print(pig_latin("hello"))  # Should return "ellohay"
print(pig_latin("apple"))  # Should return "appleyay"`
    },






    "Tuples":{
        header:`Tuples are a way to hold many values together in just one variable.<br>
        They are created by putting values inside parentheses <code>()</code>, separated by commas.<br>
        Tuples are <b>immutable</b>, which means you can’t change their values after creating them, just like strings<br>
        You can use <code>[]</code> to access individual items in a tuple or use <code>slicing</code>, just like with strings.<br>
        You can also use <code>len()</code> to find out how many items are in a tuple.<br><br>
        Finally, tuples can be concatenated using the <code>+</code> operator, just like strings.<br><br>
        Experiment with tuples below!<br><br>
        Your Task: Use tuples to store a list of your favorite numbers, and then print out the first and last numbers.`,
        code: `# Creating a tuple
my_tuple = (1, 2, 3, "hello", 4.5)
print("My tuple:", my_tuple)

# Accessing items in a tuple
print("First item:", my_tuple[0])  # 1
print("Last item:", my_tuple[-1])  # 4.5
print("Slice of tuple:", my_tuple[1:4])  # (2, 3, 'hello')
print("Length of tuple:", len(my_tuple))  # 5

# Concatenating tuples
another_tuple = (6, 7, 8)
combined_tuple = my_tuple + another_tuple
print("Combined tuple:", combined_tuple)`
    },

    //lesson that introduces lists, how to create them, access items, use len(), and basic operations like concatenation and slicing, their mutability, and also converting to and from strings.
    "Lists":{
        header:`Lists are like tuples, but they are <b>mutable</b>, which means you can change their values after creating them.<br>
        You create a list by putting values inside square brackets <code>[]</code>, separated by commas.<br>
        You can access items in a list using <code>[]</code> just like with tuples and strings.<br>
        You can also use <code>len()</code> to find out how many items are in a list.<br><br>
        Lists can be concatenated using the <code>+</code> operator, and you can slice them just like strings.<br>
        You can also convert lists to strings using the <code>join()</code> method, and convert strings to lists using the <code>split()</code> or <code>list()</code> method.<br><br>
        Try out the examples below!<br><br>
        Your Task: "Create a list of your favorite things, then print the first item, the last item, and a slice of the list."`,
        code: `# Creating a list
my_list = [1, 2, 3, "hello", 4.5]
print("My list:", my_list)

# Accessing items in a list
print("First item:", my_list[0])  # 1
print("Last item:", my_list[-1])  # 4.5
print("Slice of list:", my_list[1:4])  # [2, 3, 'hello']

# Finding the length of a list
print("Length of list:", len(my_list))  # 5

# Concatenating lists
another_list = [6, 7, 8]
combined_list = my_list + another_list
print("Combined list:", combined_list)

# Converting a list to a string
list_string = ", ".join(map(str, my_list))
print("List as string:", list_string)

# Converting a string to a list
string_list = "hello world".split()
print("String as list:", string_list)

# Converting a string to a list using list()
char_list = list("hello")
print("String to list of characters:", char_list)`
    },

    //lesson about how to iterate over lists with for loops, using range and len, and enumerate
    "For Loops and Lists":{
        header:`You can use <b>for loops</b> to go through each item in a list.<br>
        You can use <code>range()</code> and <code>len()</code> to loop through the indexes of the list, like a string. Or, you can use <code>enumerate()</code> to get both the index and the value at the same time.<br><br>
        Experiment with the code below!<br><br>
        Your Task: "Create a list of numbers and iterate over it using 3 different for loops: forwards, backwards, and skipping every other number."`,
        code: `# Using a for loop to iterate over a list
my_list = [1, 2, 3, 4, 5]
for item in my_list:
    print("Item:", item)

# Using range() and len() to iterate over a list
for i in range(len(my_list)):
    print("Index:", i, "Value:", my_list[i])

# Using enumerate() to get both index and value
for index, value in enumerate(my_list):
    print("Index:", index, "Value:", value)`
    },

    "Challenge: Find List Max":{
        img:"imgs/maxresdefault.jpg",
        noExample:true,
        header:`Write a function that takes a list of numbers and returns the maximum value in the list.<br>
        You can use a for loop to go through each item in the list and keep track of the largest number you find.<br>`,
        code: `def find_max(numbers):
    #write your own code here!

# Test the function
print(find_max([1, 2, 3, 4, 5]))  # Should return 5
print(find_max([10, 20, 5, 30, 15]))  # Should return 30
`
    },

    //review on methods and introduce new list methods like append, remove, sort, reverse, count
    "List Methods":{
        header:`Lists have many useful methods that let you change or check the list.<br>
        Here are some common list methods:<br>
        <ul>
            <li><code>append()</code> : Adds an item to the end of the list</li>
            <li><code>remove()</code> : Removes the first occurrence of an item from the list</li>
            <li><code>sort()</code> : Sorts the items in the list in ascending order</li>
            <li><code>reverse()</code> : Reverses the order of items in the list</li>
            <li><code>count()</code> : Counts how many times an item appears in the list</li>
        </ul>
        Try out these methods below!<br><br>
        Your Task: "create an empty list and append numbers to it. Sort it, then print the results."`,
        code: `# Example list
my_list = [3, 1, 4, 1, 5, 9]
print("Original list:", my_list)

# append(): Adds an item to the end of the list
my_list.append(6)
print("After append:", my_list)

# remove(): Removes the first occurrence of an item from the list
my_list.remove(1)
print("After remove:", my_list)

# sort(): Sorts the items in the list in ascending order
my_list.sort()
print("After sort:", my_list)

# reverse(): Reverses the order of items in the list
my_list.reverse()
print("After reverse:", my_list)

# count(): Counts how many times an item appears in the list
count = my_list.count(4)
print("Count of 4:", count)
`
    },

    "Project: Shopping List":{
        img:"imgs/shoppinglist.png",
        noExample:true,
        header:`Create a simple shopping list program that lets the user add, remove, and view items in their list.<br>
        Use list methods like <code>append()</code> and <code>remove()</code> to manage the list.<br><br>
        Some starter code to manage a menu and user input has been provided. Fill in the blank functions:<br>`,
        code: `shopping_list = []

def show_menu():
    print("1. Add item")
    print("2. Remove item")
    print("3. View list")
    print("4. Quit")

# replace these functions with your own code.

def add_item(item):
    # append the item to the shopping list!
    pass

def remove_item(item):
    #remove the item from the shopping list!
    pass

def view_list():
    #print out each item in the shopping list!
    pass

#Starter code to manage the menu and user input. Can you understand it?
while True:
    show_menu()
    choice = input("Enter your choice: ")
    if choice == "1":
        item = input("Enter item to add: ")
        add_item(item)
    elif choice == "2":
        item = input("Enter item to remove: ")
        remove_item(item)
    elif choice == "3":
        view_list()
    elif choice == "4":
        break
    else:
        print("Invalid choice. Please try again.")
`
    },

    "2D Lists":{
        header:`2D lists are lists of lists, which lets you create a grid or table-like structure.<br>
        You can think of it like a matrix, where each item is accessed by two indexes: one for the row and one for the column.<br><br>
        You can create a 2D list by nesting lists inside another list. You can access items using <code>list[row][column]</code>.<br>
        You can also use loops to go through each row and column in the 2D list.<br><br>
        Hint: if you are ever confused, just remember it is a list of lists, so you can access the inner lists just like you would with a normal list and do all the same things.<br><br>
        Try out the examples below!<br><br>
        Your Task: "Ask the user to input a row number and a column number, then create a 2D list with that many rows and columns."`,
        code: `# Creating a 2D list (a grid)
grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Accessing items
print("Item at (0, 0):", grid[0][0])
print("Item at (1, 1):", grid[1][1])
print("Item at (2, 2):", grid[2][2])

# Looping through the whole grid
for row in grid:
    for col in row:
        print(col)
`
    },

    "List Comprehensions":{
        header:`List comprehensions let you create lists in a more compact way using a single line.<br>
        They are a powerful way to generate lists based on existing lists or ranges.<br><br>
        The syntax is <code>[expression for item in iterable if condition]</code>, where:
        <ul>
            <li><b>expression</b> is what you want to put in the new list</li>
            <li><b>item</b> is the current item from the iterable (like a list or range)</li>
            <li><b>iterable</b> is the collection you are looping through</li>
            <li><b>condition</b> is optional and filters which items to include</li>
        </ul>
        List comprehensions can make your code shorter and easier to read.<br>
        Try out the examples below and see how they work!<br><br>
        Your Task: "Create a list comprehension that generates the squares of numbers from 0 to 9."`,
        code: `# Basic list comprehension
squares = [x**2 for x in range(10)]
print("Squares:", squares)

# List comprehension with a condition
evens = [x for x in range(10) if x % 2 == 0]
print("Evens:", evens)
`
    },

    "Challenge: List Comprehension Filtering":{
        img:"imgs/list-comprehension-1.png",
        noExample:true,
        header:`Write a list comprehension that creates a new list containing only the even numbers from the original list.<br>`,
        code: `original = [1,2,3,4,5,6,7,8,9,10,16,18,23,20]
evens = [] #fill in your list comprehension line!`
    },

    "Packing and Unpacking":{
        header:`Packing and unpacking lets you easily work with multiple values at once.<br>
        Packing means putting multiple values into a single variable, like a tuple or list.<br>
        Unpacking means taking those values out and assigning them to separate variables.<br><br>
        You can use packing and unpacking with tuples, lists, and even function arguments.<br><br>

        Assigning multiple variables at once to a list or tuple is called unpacking.<br>
        You can also use the <code>*</code> operator to unpack a list or tuple into multiple variables.<br><br>
        Try out the examples below to see how packing and unpacking works!<br><br>
        Your Task: "Create a tuple with three numbers, then unpack them into separate variables and print them out."`,
        code: `# Packing values
x=1
y=2
z=3
packed = (x, y, z)
print("Packed tuple:", packed)

# Unpacking values
a, b, c = packed
print("Unpacked values:", a, b, c)

#This function takes two parameters
def add_two_numbers(a, b):
    print(a+b)

nums = [1,2]
add_two_numbers(*nums)  # Unpacking the list into the function parameters
`
    },

    "Dictionaries":{
        header:`Dictionaries are a way to store data in pairs, like a real-life dictionary.<br>
        Each pair has a <b>key</b> and a <b>value</b>, where the key is like a word and the value is its definition.<br>
        You create a dictionary using curly braces <code>{}</code> with key-value pairs separated by commas, like <code>{"key": "value"}</code>.<br><br>
        Keys are like indexes in strings or lists, but they can be any immutable type (like strings, numbers, or tuples).<br><br>
        You can access values in a dictionary using the key inside square brackets <code>dict[key]</code>.<br><br>
        The <code>in</code> keyword can be used to check if a key exists in the dictionary.<br>
        It can also be used in for loops to iterate over the keys in the dictionary.<br><br>
        Your Task: "Create a dictionary with your name, age, and city, then print out each value using its key."`,

        code: `# Creating a dictionary
my_dict = {
    "name": "Alice",
    "age": 30,
    "city": "Wonderland"
}
print("My dictionary:", my_dict)

# Accessing values by key
print("Name:", my_dict["name"])
print("Age:", my_dict["age"])
print("City:", my_dict["city"])

# Checking if a key exists
if "name" in my_dict:
    print("Name key exists!")

# Iterating over keys in the dictionary
for key in my_dict:
    print("Key:", key, "Value:", my_dict[key])

#updating a value
my_dict["age"] = 31
print("Updated age:", my_dict["age"])
`
    },

    "Equivalence vs Identity":{
        header:`In Python, there are two ways to compare objects: <b>equivalence</b> and <b>identity</b>.<br>
        Equivalence checks if two objects have the same value, while identity checks if they are the exact same object in memory.<br><br>
        You can use <code>==</code> to check equivalence and <code>is</code> to check identity.<br><br>
        Try running the code below to see how equivalence and identity work!<br><br>
        Your Task: "Create two lists with the same content, then check if they are equivalent and if they are identical. Then, create a third list that is identical to the first one and check its identity."`,

        code: `# Equivalence
a = [1, 2, 3]
b = [1, 2, 3]
print("a == b:", a == b)  # True, because they have the same content

# Identity
print("a is b:", a is b)  # False, because they are different objects in memory

# Identity with the same object
c = a
print("c is a:", c is a)  # True, because they are the same object in memory
`
    },

    "Project: Contact Book":{
        img:"imgs/contactbook.png",
        noExample:true,
        header:`Create a simple contact book program that lets the user add, remove, and view contacts.<br>
        Each contact should have a name and a phone number, stored in a dictionary.<br>
        Use the <code>in</code> keyword to check if a contact exists before removing it.<br><br>
        Some starter code to manage a menu and user input has been provided. Fill in the blank functions:<br>`,
        code: `contacts = {}

def add_contact(name, phone):
    pass

def remove_contact(name):
    pass

def view_contacts():
    pass

#menu code
def show_menu():
    print("1. Add contact")
    print("2. Remove contact")
    print("3. View contacts")
    print("4. Exit")

while True:
    show_menu()
    choice = input("Enter your choice: ")
    if choice == "1":
        name = input("Enter name: ")
        phone = input("Enter phone number: ")
        add_contact(name, phone)
    elif choice == "2":
        name = input("Enter name to remove: ")
        remove_contact(name)
    elif choice == "3":
        view_contacts()
    elif choice == "4":
        print("Exiting...")
        break
    else:
        print("Invalid choice. Please try again.")`
    },



    "Hangman":{
        img:"imgs/hangman.png",
        header:`Choose a secret word. A user will guess letters in the word, one at a time. When the user guesses a letter, the program will reveal where that letter appears in the word. If the user guesses all the letters in the word, they win! However, if they make ten incorrect guesses before this happens, they lose.`,
        code:``
    },

    "Fill In The Blank":{
        img:"imgs/fillintheblanks.png",
        header:`Fill In The Blank is a fun game where you fill in the blanks with words to create a silly story!<br>
        You can create your own Fill In The Blank story by defining a template with placeholders for different types of words, like nouns, verbs, and adjectives.<br>
        Then, you can ask the user to fill in those blanks with their own words.<br><br>
        Store the user's responses and use it to fill in the template.<br>
        Create your own Fill In The Blank story!`,

        code: ``
    },

    "Quiz Game":{
        img:"imgs/quiz.png",
        header:`Create a simple quiz game that asks the user multiple-choice questions.<br>
        Store the questions and answers in a dictionary, where the keys are the questions and the values are lists of possible answers.<br>
        The user should be able to select an answer for each question, and at the end, show their score.<br><br>
        There should be at least 3 questions, with 3 answer choices each.<br>
        Hint: Look at previous projects for how to use dictionaries and menu code.`,
        code: ``
    },




    "Project: Fractions":{
        header:`Create a simple program that lets the user input a fraction and simplify it.<br><br>
        HINT: You can represent fractions as tuples, where the first element is the numerator and the second element is the denominator.<br>
        You can also look in previous lessons for how to create menus and user input.`,
        code:``
    },

    "Project: Calculator":{
        header:`Create a simple calculator program that can add, subtract, multiply, and divide two numbers.<br>
        Use functions for each operation and a menu to let the user choose which operation to perform.`,
        code:``
    },

    "Project: Fibonacci":{
        header:`The fibonacci sequence is a series of numbers where each number is the two previous numbers added together, starting with 0 and 1.<br>
        For example, the first few numbers in the sequence are: 0, 1, 1, 2, 3, 5, 8, 13, 21...<br><br>
        Create a program that generates the Fibonacci sequence up to a certain amount of times, that the user inputs.<br>`,
        code:``
    },

    "Project: Number Systems":{
        header:`Create a program that converts numbers between different number systems: binary, octal, decimal, and hexadecimal.<br>
        The user should be able to input a number in one system (chosen with a menu) and get the equivalent value in the other systems.<br><br>
        You can use built-in functions like <code>bin()</code>, <code>hex()</code>, and <code>int()</code> to help with the conversions.<br>
        <a href="https://www.categories.acsl.org/wiki/index.php?title=Computer_Number_Systems" target="_blank">Click here for more information on number systems</a>`,
        code:``
    },

    "Project: Geometry":{
        header:`Create a program that calculates the area and perimeter of different geometric shapes: Square, Parallelogram, and Triangle.<br>
        The user should be able to choose a shape and input the necessary dimensions.<br>
        Formulas:
        <ul>
            <li>Square: Area = side^2, Perimeter = 4 * side</li>
            <li>Parallelogram: Area = base * height, Perimeter = 2 * (base + side)</li>
            <li>Triangle: Area = 0.5 * base * height, Perimeter = a + b + c (where a, b, c are the lengths of the sides)</li>
        </ul>`,
        code:``
    },

    "Project: Lock Combinations":{
        header:`Create a program that outputs all the possible combinations for a lock with 3 digits.<br>`,
        code:``
    },

    "Project: Tic Tac Toe":{
        header:`Create a simple Tic Tac Toe game that lets two players play against each other.<br>
        The game should display the board, take turns for each player, and check for a win or a draw.<br>
        Use a 2D list to represent the board and functions to handle the game logic.<br><br>
        Tic Tac Toe is played on a 3x3 grid, where players take turns placing their marks (X or O) in empty squares.<br>
        The first player to get three of their marks in a row (horizontally, vertically, or diagonally) wins the game.<br>
        If all squares are filled and no player has won, the game is a draw.<br><br>
        You can use the previous lessons on lists and loops to help with this project.`,
        code:``
    },

    "Project: Connect Four":{
        header:`Create a Connect Four game that lets two players play against each other.<br>
        The game should display the board, take turns for each player, and check for a win or a draw.<br>
        Use a 2D list to represent the board and functions to handle the game logic.<br><br>
        Connect Four is played on a 6x7 grid, where players take turns dropping their discs into columns.<br>
        The first player to get four of their discs in a row (horizontally, vertically, or diagonally) wins the game.<br>
        If all columns are filled and no player has won, the game is a draw.<br><br>
        You can use the previous lessons on lists and loops to help with this project.`,
        code:``
    },

    "Project: Rock Paper Scissors":{
        header:`Create a Rock Paper Scissors game that lets the user play against the computer.<br>
        The user should be able to choose rock, paper, or scissors, and the computer will randomly choose one as well.<br>
        The game should determine the winner based on the rules: rock beats scissors, scissors beats paper, and paper beats rock.<br><br>
        You can use the <code>random</code> module to generate the computer's choice. See the starter code to see how it's used.<br>`,
        code: `import random
print(random.randint(1,3))  # Generates a random number between 1 and 3`
    },

    "Project: Battleship":{
        header:`Create a Battleship game that lets two players play against each other.<br>
        The game should display a grid for each player and allow them to place their ships on the grid.<br>
        Players will take turns guessing the locations of each other's ships.<br>
        The game should keep track of hits and misses, and declare a winner when all of one player's ships have been sunk.<br><br>
        You can use a 2D list to represent the game grid and functions to handle the game logic.<br><br>
        Battleship is played on a 10x10 grid, where players place their ships and take turns guessing the locations of each other's ships.<br>
        There are typically 5 ships of different lengths: 2, 3, 3, 4, and 5.<br>
        The first player to sink all of the opponent's ships wins the game.<br><br>`,
        code:``
    },


    "Project: Text-Based Adventure Game":{
        header:`Create a simple text-based adventure game where the player can explore different rooms, collect items, and solve puzzles.<br>
        Include a basic storyline and choices that lead to different outcomes and endings.<br><br>
        HINT: You can use dictionaries and lists to represent rooms and items, and tuples to represent the player's location.<br>
        Use your imagination and creativity!`,
        code:``
    },

    "Project: Fraction, Percent, Decimal, Ratio":{
        header:`Create a program that lets a user input a fraction, and then converts it to a decimal, percent, and ratio.<br>`,
        code:``
    }
}