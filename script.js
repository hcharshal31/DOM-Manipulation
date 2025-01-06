let count = 1;
const counter = document.getElementById("countVal");
const decValue = document.getElementById("dec");
const incValue = document.getElementById("inc");
const errorDiv = document.getElementById("error");
const clearValue = document.getElementById("clear");
counter.textContent = count;

//Increamenting value by 1 on clicking the "increament" button.
incValue.addEventListener("click", ()=>{
    count += 1;
    
    if(count <= 0){
        decValue.disabled = true;
        decValue.style.cursor = "not-allowed";
        counter.textContent = count;
        errorDiv.style.display = "block";
        clearValue.style.display = "none";
        decValue.style.cursor = "not-allowed";
    } else {
        decValue.disabled = false;
        counter.textContent = count;
        errorDiv.style.display = "none";
        clearValue.style.display = "inline";
        decValue.style.cursor = "pointer";
    }
});

//Decreamenting value by 1 on clicking the "decreament" button.
decValue.addEventListener("click", ()=>{
    count -= 1;
    if(count <= 0){
        decValue.disabled = true;
        decValue.style.cursor = "not-allowed";
        counter.textContent = count;
        errorDiv.style.display = "block";
        clearValue.style.display = "none";
    } else {
        decValue.disabled = false;
        counter.textContent = count;
        errorDiv.style.display = "none";
        clearValue.style.display = "inline";
        decValue.style.cursor = "pointer";
    }
    
});

//Resetting the value to 0 on clicking the "clear" button.
document.getElementById("clear").addEventListener("click", ()=>{
    count = 0;
    if(count <= 0){
        decValue.disabled = true;
        decValue.style.cursor = "not-allowed";
        counter.textContent = count;
        errorDiv.style.display = "block";
        clearValue.style.display = "none";
        decValue.style.cursor = "not-allowed";
    } else {
        decValue.disabled = false;
        errorDiv.style.display = "none";
        clearValue.style.display = "inline";
        decValue.style.cursor = "pointer";
    }
    
});