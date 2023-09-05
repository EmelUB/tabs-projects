const tabs = document.querySelector(".tabs");
const bntEl = document.querySelectorAll(".btn")
const contentEl = document.querySelectorAll(".content");

tabs.addEventListener("click", (event)=>{
    const id = event.target.dataset.id;
    
    if(id){
        bntEl.forEach((btn)=>{
            btn.classList.remove("live");
        });
        event.target.classList.add("live");

        contentEl.forEach((article)=>{
            article.classList.remove("live");
        });

        const element = document.getElementById(id);
        element.classList.add("live");
    };
})