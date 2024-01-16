function getData(){
    const saveData = JSON.parse(localStorage.getItem("memo"));
    const memoWrapper = document.querySelector(".memo-container");

    for(let i =0;i<saveData.length;i++){
        const data = saveData[i];
        const list = drawMemo(data);
        memoWrapper.appendChild(list);
    }
}

function drawMemo(memo){
    const li = document.createElement("li");
    const span1 = document.createElement("span");
    span1.className = "numbering";
    span1.textContent = memo.id;
    const h1 = document.createElement("h1");
    h1.className = "post-title";
    h1.textContent = memo.title;
    const a = document.createElement("a");
    a.href = "./view/content.html?id=" + memo.id;
    a.appendChild(h1);
    const h6 = document.createElement("h6");
    h6.className = "post-content";
    h6.textContent = memo.content;
    const div = document.createElement("div");
    const span2 = document.createElement("span");
    div.className = "createdate";
    span2.textContent = memo.date;
    div.appendChild(span2);
    li.appendChild(span1);
    li.appendChild(a);
    li.appendChild(h6);
    li.appendChild(div);

    return li;
}
getData();
