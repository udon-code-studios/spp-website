let bubbles = document.getElementById('footer-bubbles');

for (let i = 0; i < 128; i++) {
    let newBubble = document.createElement('div');
    newBubble.classList.add('bubble');
    newBubble.style.setProperty('--size', `${2 + Math.random() * 4}rem`);
    newBubble.style.setProperty('--distance', `${10 + Math.random() * 4}rem`);
    newBubble.style.setProperty('--position', `${-5 + Math.random() * 110}%`);
    newBubble.style.setProperty('--time', `${2 + Math.random() * 2}s`);
    newBubble.style.setProperty('--delay', `${-1 * (2 + Math.random() * 2)}s`);
    bubbles.appendChild(newBubble);
}