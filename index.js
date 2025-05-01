const spinner = document.getElementById('spinner');

const isSpinning = localStorage.getItem('spinning') === 'true' ;

if (isSpinning){
    spinner.classList.add('spinner');
}

spinner.addEventListener('click',()=> {
    spinner.classList.toggle('spinner');
    const spinningNow = spinner.classList.contains('spinner');
    localStorage.setItem('spinning',spinningNow)
});

document.getElementById('spinner-button').addEventListener('click', function(event) {
    let popup = document.querySelector('.popup');

    if (!popup) {
        popup = document.createElement('div');
        popup.className = 'popup';
        popup.textContent = 'This is a pop-up message!';
        document.body.appendChild(popup);
    }

    const buttonRect = event.target.getBoundingClientRect();
    popup.style.top = `${buttonRect.bottom + window.scrollY}px`;
    popup.style.left = `${buttonRect.left + window.scrollX}px`;

    popup.classList.toggle('show');
});

const pauseResumeButton = document.getElementById('pause-resume-button');

pauseResumeButton.addEventListener('click', () => {
    if (spinner.style.animationPlayState === 'paused') {
        spinner.style.animationPlayState = 'running';
    } else {
        spinner.style.animationPlayState = 'paused';
    }
});