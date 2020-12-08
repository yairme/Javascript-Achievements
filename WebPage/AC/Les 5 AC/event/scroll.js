h1 = document.getElementById("title")
h1.addEventListener("dblclick", ()=>{
    h1.innerHTML = "Scroll on me!"
})
h1.addEventListener("wheel", ()=>{
        h1.innerHTML += "!" 
})