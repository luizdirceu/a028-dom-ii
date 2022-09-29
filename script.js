adicionaItem = (event) => {
    document.getElementById('container');
    container.innerHTML += `  <article class="item" onclick="removeItem(event)"></article>`
}

removeItem = (event) => {
    if (event.target){
        const article = document.querySelector(".item")
        article.classList.remove("item")
    }
}
