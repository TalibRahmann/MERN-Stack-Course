//Selects Paragraph and stores in a variable
var para = document.querySelector('body .paragraph');

// Change the text of the selected paragraph
para.textContent = "Changed the text";

//selects div and stores it in a variable
var div = document.querySelector('body #division');

//Changes the background color of division
div.style.backgroundColor = "red";

//selects button and stores in a variable
var btn = document.querySelector('body .bttn');

//Added event listener which reacts on button click
btn.addEventListener('click', function(e){
    //since event listener is working on button we select div using nextElementSibling
    var div = e.target.nextElementSibling;

    //creates new para and appends it in div
    const par = document.createElement('p');
    par.textContent = 'successfully appended';
    div.appendChild(par);

    console.log(par);
});