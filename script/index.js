let titleCount = 1;


const cards = document.querySelectorAll('.card');
// console.log(cards);

for (let index = 0; index < cards.length; index++) {
    const card = cards[index];
    // console.log(card);

    card.addEventListener('click', function () {
        // console.log('clicked');

        // Get the title
        const title = card.querySelector("h3").innerText;
        // console.log(title.innerText);
        const price = parseFloat(card.querySelector('span').innerText.split(' ')[1]);
        // console.log(typeof price);
        const titleContainer = document.getElementById('title-container');
        // console.log(titleContainer);

        const p = document.createElement('p');
        p.innerText = titleCount + ". " + title;
        titleCount++;


        titleContainer.appendChild(p);

    })
}