const listItems = document.querySelectorAll('.item');
console.log(`Number of categories ${listItems.length}`);

listItems.forEach((listItem) => {
    const title = listItem.querySelector('h2');
    console.log(`Category: ${title.textContent}`);

    const allItems = listItem.querySelectorAll('li');
    console.log(`Elements: ${allItems.length}`);
})

