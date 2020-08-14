

{
const clicked = document.getElementById("contactform")
clicked.addEventListener("submit")
}


document.addEventListner('DOMContentLoaded',function() {
    let diplayButton = document.getElementById('displayButton');
    let view = document.getElementById('typeyourname');

    displayButton.addEventListner('click',function() {
        let input = prompt('please enter your name');
        view.innerHTML = input;
    });
});