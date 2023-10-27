'use strict';

let word = 'github';

let anchor = document.createElement('a');
anchor.className = 'github';
anchor.setAttribute('href', 'https://github.com/stupidplait/tabs');

for (let i = 0; i < word.length; i++) {
    let span = document.createElement('span');
    span.innerHTML = word[i];
    span.style.cssText = `
        animation: jumpingLetter .8s ${i * 0.2}s ease-in-out alternate infinite, shakingLetter .3s ease-in-out alternate infinite;
        transition-delay: ${(word.length - i) * 0.05}s;
    `;
    anchor.append(span);
}

document.body.append(anchor);