let titleCount = 1;
let totalPrice = 0;

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
        titleContainer.appendChild(p);
        titleCount++;

        // Calculate Price
        totalPrice += price;
        console.log(totalPrice);
        document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);



    })

    const btn = document.getElementById('apply-btn');
    btn.addEventListener("click", function () {
        const couponElement = document.getElementById("input-field").value;
        // console.log(couponElement.value);

        const couponCode = couponElement.split(" ").join("").toUpperCase();
        if (totalPrice >= 200) {
            if (couponCode === "SELL200"){
                const discountElement = document.getElementById("discountPrice");
                const discountAmount = totalPrice * 0.2;
                discountElement.innerText = discountAmount.toFixed(2)
            }else{
                alert("Invalid Coupon")
            }


        } else {
            alert("You have to cost $200 for getting discount");
        }
    })
}