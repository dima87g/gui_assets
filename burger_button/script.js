let button = document.getElementById('burger_button');

function click() {
    button.classList.toggle('burger_button_clicked');
}

button.onclick = click;
