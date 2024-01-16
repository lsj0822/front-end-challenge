const createButton = document.querySelector(".create-btn");

createButton.addEventListener("click",function(event){
    const title = document.querySelector(".post-title");
    const content = document.querySelector(".post-content");
    
    const now = new Date();

    const saveValue = {
        title : title.value,
        content : content.value,
        date : now.toLocaleDateString(),
    };

    const saveData = localStorage.getItem("memo");
    if(saveData){
        const transform = JSON.parse(saveData);
        transform.push(saveValue);
        saveValue.id = transform.length;
        localStorage.setItem("memo",JSON.stringify(transform));
    } else{
        const array = [];
        array.push(saveValue);
        saveValue.id = 1;
        localStorage.setItem("memo",JSON.stringify(array));
    }
    
    
});

