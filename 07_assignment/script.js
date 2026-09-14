document.addEventListener('DOMContentLoaded',function(){

//#Changing text Content in Paragraph
    //Selects Paragraph and stores in a variable
    var para = document.querySelector('body .paragraph');
    
    // Change the text of the selected paragraph
    para.textContent = "Changed the text";
    
//#Changing background color of empty div
    //selects div and stores it in a variable
    var div = document.querySelector('body #division');
    
    //Changes the background color of division
    div.style.backgroundColor = "red";
    
//#Clicking on button creates para and append to empty div
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
    
//#Adding Task
    //Getting input from text field and creating new task with it
    const addForms = document.forms['add-task'];
    
    //Listens to clicking on add button and captures text from textField
    addForms.addEventListener('submit',function(e){
        e.preventDefault();
        const value = addForms.querySelector('input[type="text"]').value;

    //Removes the text in the Text Field
        addForms.querySelector('input[type="text"]').value = "";

    //Created required task items and adding text content
        const ul = document.querySelector("#taskContainer ul");
        const list = document.createElement('li');
        const taskName = document.createElement('span');
        const deleteButton = document.createElement('span');

        taskName.textContent = value;
        deleteButton.textContent = 'Delete';

    //Adding event listener to delete button
        deleteButton.addEventListener('click',function(e){
            const li = e.target.parentElement;
            li.parentElement.removeChild(li);
        });
    
    //Added items to their respective class to get them same styles
        taskName.classList.add('text');
        deleteButton.classList.add('delete');
    
    //appending it to the existing list
        list.appendChild(taskName);
        list.appendChild(deleteButton);
        ul.appendChild(list);
        
    });    
    
//#Deleting Task
    //selecting all the delete buttons
    var deleteButton = document.querySelectorAll('#taskContainer ul li .delete');
    
    //Making a stream to run event listener to each one of them
    Array.from(deleteButton).forEach(function(deleteButton){
        deleteButton.addEventListener('click',function(e){
            const li = e.target.parentElement;
    
    //Removing list
            li.parentNode.removeChild(li);
        });
    });

})
