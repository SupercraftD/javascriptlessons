
let format = "text";
function switchAssignment(u,l){
  document.getElementById("assignmenttitle").innerHTML = `${u+1}.${l+1}: ${units[u][l]}`;
  document.getElementById("header").innerHTML = lessonContents[units[u][l]].header;
  
  if (lessonContents[units[u][l]].img){
    document.getElementById("img").src = lessonContents[units[u][l]].img;
    document.getElementById("img").style.display = "block";
  }else{
    document.getElementById("img").style.display = "none";
  }

  if (lessonContents[units[u][l]].noExample){
    document.getElementById("code").value = lessonContents[units[u][l]].code;
  }else if (lessonContents[units[u][l]].code != ""){
    document.getElementById("code").value = `//###### EXAMPLE CODE #####\n`+lessonContents[units[u][l]].code+`\n\n//###### WRITE YOUR CODE HERE #####\n`;
  }else{
    document.getElementById("code").value = `//###### WRITE YOUR CODE HERE #####\n`;
  }

  if (lessonContents[units[u][l]].format == "text"){
    document.getElementById("console").style.display = "block";
    format = "text";
  }else{
    document.getElementById("console").style.display = "none";
    format = "graphics";
  }

}

for (let unit in units){
  
  let unitE = document.createElement("div")
  unitE.classList.add("unit")

  unitE.appendChild(document.createTextNode(`Unit ${parseInt(unit)+1}: ${unitNames[unit]}`))

  let lessons = document.createElement("ol")
  lessons.classList.add("lessons")
  lessons.classList.add("hiddenlessons")

  for (let lesson in units[unit]){
      let li = document.createElement("li")
      let a = document.createElement("a")
      a.href = "#"+unit+lesson
      a.textContent = units[unit][lesson]
      a.onclick = function(){
          switchAssignment(parseInt(unit),parseInt(lesson))
      }
      li.appendChild(a)
      lessons.appendChild(li)
  }   
  unitE.appendChild(lessons)

  unitE.onclick = function(){

      for (let unitElement of document.getElementById("units").children){
          
          for (let lessonElement of unitElement.children){
              lessonElement.classList.remove("visiblelessons");
              lessonElement.classList.add("hiddenlessons");
          }
      }

      lessons.classList.remove("hiddenlessons");
      lessons.classList.add("visiblelessons");
  }

  document.getElementById("units").appendChild(unitE);
}

switchAssignment(0,0);

document.getElementById("code").oninput = function(){
  document.getElementById("code").value = document.getElementById("code").value.replace("\t","    ");
}

//allows tab to work
document.addEventListener("DOMContentLoaded", function() {
const textarea = document.getElementById("code");
textarea.addEventListener("keydown", function(e) {
  if (e.key === "Tab") {
    e.preventDefault();
    const start = this.selectionStart;
    const end = this.selectionEnd;

    // Set textarea value to: text before caret + tab + text after caret
    this.value = this.value.substring(0, start) + "    " + this.value.substring(end);

    // Move caret
    this.selectionStart = this.selectionEnd = start + 4;
  }
});
});


function reset(){
  document.getElementById("console").textContent = ""
}
let worker
document.getElementById("stopbtn").addEventListener('click', () => {
    worker.terminate();
    document.getElementById("console").textContent += "\nExecution stopped.";
});

// Run button event
for (let element of document.getElementsByClassName("run-btn")){
  element.addEventListener('click', async () => {
    const runBtns = document.getElementsByClassName('run-btn');
    for (let e of runBtns){
      e.disabled=true;
    }
    document.getElementById("stopbtn").disabled = false;
    try {
      reset();
      runCode();
    } catch(e) {
      alert('Error during execution:\n' + e.message);
    }
    for (let e of runBtns){
      e.disabled=false;
    }
  });
}


/*
async function runCode() {
    const prog = document.getElementById("code").value;
    document.getElementById("console").textContent = ""; // clear output

    if (format == "text"){
      eval(`console.log = function(x){
          document.getElementById("console").textContent += x + "\\n";
        }`+prog)
    }

}
*/

async function runCode() {
    reset();
    const userCode = document.getElementById("code").value;

    const blob = new Blob([`
        onmessage = function(e) {
          const console = { log: (msg) => postMessage({ type: 'log', msg }) };
          try {
            eval(e.data);
            postMessage({ type: 'done' });
          } catch (err) {
            postMessage({ type: 'error', msg: err.toString() });
          }
        };
    `], { type: 'application/javascript' });

    worker = new Worker(URL.createObjectURL(blob));

    /*const timeout = setTimeout(() => {
        worker.terminate();
        document.getElementById("console").textContent += "\n⏱ Execution timed out!";
    }, 1000);*/

    worker.onmessage = (e) => {
        if (e.data.type === 'log') {
            document.getElementById("console").textContent += e.data.msg + "\n";
        } else if (e.data.type === 'error') {
            clearTimeout(timeout);
            document.getElementById("console").textContent += "⚠️ Error: " + e.data.msg + "\n";
        } else if (e.data.type === 'done') {
            clearTimeout(timeout);
        }
    };

    worker.postMessage(userCode);
}

// Start fresh
reset();