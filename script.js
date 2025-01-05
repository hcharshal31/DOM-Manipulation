let count = 1;
const counter = document.getElementById("countVal");
counter.textContent = count;

//Increamenting value by 1 on clicking the "increament" button.
document.getElementById("inc").addEventListener("click", ()=>{
    count += 1;
    
    if(count <= 0){
        document.getElementById("dec").disabled = true;
        document.getElementById("dec").style.cursor = "not-allowed";
        counter.textContent = count;
        document.getElementById("error").style.display = "block";
        document.getElementById("clear").style.display = "none";
        document.getElementById("dec").style.cursor = "not-allowed";
    } else {
        document.getElementById("dec").disabled = false;
        counter.textContent = count;
        document.getElementById("error").style.display = "none";
        document.getElementById("clear").style.display = "inline";
        document.getElementById("dec").style.cursor = "pointer";
    }
});

//Decreamenting value by 1 on clicking the "decreament" button.
document.getElementById("dec").addEventListener("click", ()=>{
    count -= 1;
    if(count <= 0){
        document.getElementById("dec").disabled = true;
        document.getElementById("dec").style.cursor = "not-allowed";
        counter.textContent = count;
        document.getElementById("error").style.display = "block";
        document.getElementById("clear").style.display = "none";
    } else {
        document.getElementById("dec").disabled = false;
        counter.textContent = count;
        document.getElementById("error").style.display = "none";
        document.getElementById("clear").style.display = "inline";
        document.getElementById("dec").style.cursor = "pointer";
    }
    
});

//Resetting the value to 0 on clicking the "clear" button.
document.getElementById("clear").addEventListener("click", ()=>{
    count = 0;
    if(count <= 0){
        document.getElementById("dec").disabled = true;
        document.getElementById("dec").style.cursor = "not-allowed";
        counter.textContent = count;
        document.getElementById("error").style.display = "block";
        document.getElementById("clear").style.display = "none";
        document.getElementById("dec").style.cursor = "not-allowed";
    } else {
        document.getElementById("dec").disabled = false;
        document.getElementById("error").style.display = "none";
        document.getElementById("clear").style.display = "inline";
        document.getElementById("dec").style.cursor = "pointer";
    }
    
});