const allLi = document.querySelectorAll("li.item");
console.log(`Number of categories: ${allLi.length}`);

allLi.forEach(element => {
    const h2 = element.querySelector("h2");
    const allLiOfLi = element.querySelectorAll("li");
    console.log(`Category: ${h2.textContent}`);
    console.log(`Elements: ${allLiOfLi.length}`);
});

