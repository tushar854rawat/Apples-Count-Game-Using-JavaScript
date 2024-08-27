document.addEventListener('DOMContentLoaded', function() {
    const basketfirst = document.querySelector('.basket1 span');
    const basketsecond = document.querySelector('.basket2 span');
    const leftarrow = document.querySelector('.left-arrow');
    const rightarrow = document.querySelector('.right-arrow');

    let total = 10;
    let second = 0;

    basketfirst.innerText = total;
    basketsecond.innerText = second;

    leftarrow.addEventListener('click', () => {
        if (total > 0) {
            total--;
            second++;
            basketfirst.innerText = total;
            basketsecond.innerText = second;
        }
    });

    rightarrow.addEventListener('click', () => {
        if (second > 0) {
            total++;
            second--;
            basketfirst.innerText = total;
            basketsecond.innerText = second;
        }
    });
});
