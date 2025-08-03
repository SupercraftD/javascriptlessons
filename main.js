
let format = "text";
function switchAssignment(u,l){
  document.getElementById("assignmenttitle").innerHTML = `${u+1}.${l+1}: ${units[u][l]}`;
  document.getElementById("header").innerHTML = lessonContents[units[u][l]].header+`<br><br><b>Your Task:</b> `+lessonContents[units[u][l]].task;
  
  if (lessonContents[units[u][l]].img){
    document.getElementById("img").src = lessonContents[units[u][l]].img;
    document.getElementById("img").style.display = "block";
  }else{
    document.getElementById("img").style.display = "none";
  }

  if (lessonContents[units[u][l]].noExample){
    document.getElementById("code").value = lessonContents[units[u][l]].code;
  }else if (lessonContents[units[u][l]].code != ""){
    document.getElementById("code").value = `//###### EXAMPLE CODE #####\n`+lessonContents[units[u][l]].code+`\n\n//####### YOUR ASSIGNMENT: `+lessonContents[units[u][l]].task+`\n\n//###### WRITE YOUR CODE HERE #####\n`;
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
        let pendingPromptResolves = [];

        onmessage = function(e) {
            if (e.data.type === "code") {
                const console = {
                    log: (msg) => {
                        if (typeof msg === "object" && typeof msg.then === "function") {
                            postMessage({ type: 'log', msg: "[Promise]" });
                        } else if (typeof msg === "object") {
                            try {
                                postMessage({ type: 'log', msg: JSON.stringify(msg) });
                            } catch {
                                postMessage({ type: 'log', msg: "[object]" });
                            }
                        } else {
                            postMessage({ type: 'log', msg: String(msg) });
                        }
                    }
                };

                function prompt(msg) {
                    return new Promise((resolve) => {
                        const id = pendingPromptResolves.length;
                        pendingPromptResolves[id] = resolve;
                        postMessage({ type: 'prompt', msg, id });
                    });
                }

                (async () => {
                    try {
                        await eval("(async () => {" + e.data.code + "})()");
                        postMessage({ type: 'done' });
                    } catch (err) {
                        postMessage({ type: 'error', msg: err.toString() });
                    }
                })();
            } else if (e.data.type === "prompt-response") {
                const resolve = pendingPromptResolves[e.data.id];
                if (resolve) {
                    resolve(e.data.response);
                    delete pendingPromptResolves[e.data.id];
                }
            }
        };
    `], { type: 'application/javascript' });
    worker = new Worker(URL.createObjectURL(blob));

    /*const timeout = setTimeout(() => {
        worker.terminate();
        document.getElementById("console").textContent += "\n⏱ Execution timed out!";
    }, 1000);*/

    worker.onmessage = async (e) => {
        if (e.data.type === 'log') {
            document.getElementById("console").textContent += e.data.msg + "\n";
        } else if (e.data.type === 'error') {
            document.getElementById("console").textContent += "⚠️ Error: " + e.data.msg + "\n";
        } else if (e.data.type === 'prompt') {
            const response = window.prompt(e.data.msg);
            worker.postMessage({ type: 'prompt-response', id: e.data.id, response });
        }
    };

    let transformed = userCode.replace(/(?<![\w$])prompt\s*\(/g, 'await prompt(')
    worker.postMessage({ type:"code", code:transformed});
}

// Start fresh
reset();