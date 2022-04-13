const score = document.querySelector('.card__form');
const card = document.querySelector('.card');
const btnInput = document.querySelector('.card__input');
const btnLabel = document.querySelectorAll('.card__form label');

btnInput.addEventListener('click', (e) => {
    bgInput(e);
})

let values = [0];

function bgInput(input) {
    // clear the colors of old inputs pressed
    btnLabel[values[0]].style.backgroundColor = null;
    btnLabel[values[0]].style.color = null;

    const value = parseInt(input.target.value) -1;
    btnLabel[value].style.backgroundColor = "#FB7312";
    btnLabel[value].style.color = "#FFFFFF";

    // Save value of new input pressed
    values[0] = value
}

score.addEventListener('submit', (e) => {
    e.preventDefault();
    backCard(e.target.rating.value);
})

function backCard(score){
    card.replaceChildren(card.children);

    card.innerHTML = `
        <div class="cardBack">
            <div class="card__image">
                <img src="images/illustration-thank-you.svg" alt="thanks_image" />
            </div>
            <p class="card__score">
                You selected <span class="carcBack__score">${score}</span> out of 5
            </p>
            <h2 class="card__title">Thank you!</h2>
            <p class="card__body">
                We appreciate you taking the time to give a rating. If you ever
                need more support, don’t hesitate to get in touch!
            </p>
        </div>
    `
}