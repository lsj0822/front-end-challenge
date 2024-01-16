function getData(){
    const saveData = JSON.parse(localStorage.getItem("memo"));
    const id = getQueryString();
    for(let i = 0;i<saveData.length;i++){
        if(Number(id)===saveData[i].id){
            renderData(saveData[i]);
        }
    }
}

function getQueryString(){
    const qs = window.location.search;
    const id = new URLSearchParams(qs).get("id");
    return id;
}

function renderData(memo){
    const title = document.querySelector(".post-title");
    const content = document.querySelector(".post-content");
    const date = document.querySelector(".createdate > span");
    const number = document.querySelector(".numbering");
    title.textContent = memo.title;
    content.textContent = memo.content;
    date.textContent = memo.date;
    number.textContent = memo.id;
}

getData();


