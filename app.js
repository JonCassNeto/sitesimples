'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    switchButtonTheme();
});

function switchButtonTheme() {
    const body = document.body;
    const button = document.querySelector('.btn');

    if (body.classList.contains('dark-theme')) {
        button.classList.remove('light-theme');
        button.classList.add('dark-theme');
        button.textContent = "Light";
        button.style.color = "var(--btnTextColorDark)"; // Cor da fonte do botão no tema escuro
        button.style.backgroundColor = "var(--btnBg)";
    } else {
        button.classList.remove('dark-theme');
        button.classList.add('light-theme');
        button.textContent = "Dark";
        button.style.color = "var(--btnFontColor)";
        button.style.backgroundColor = "var(--btnBg)";
    }
}

// Call switchButtonTheme() when the script is first loaded to set initial button theme
switchButtonTheme();
