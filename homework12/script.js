// alert('please go to console to view the books usere have borrowed ');
console.log('please refresh the page while in console to see the table which contains users and the books they have borrowed')
console.table({you:'you currently dont have any borrowed books', user1:'How to climb a tree and 2 other books.' , user2:'before the internet and 1 other book',user3:'currently dont have any borrowed books', user4:'my first rave , how to climb a tree and 1 more book'});
function handleBtnClick(){
    
    let nameInputValue = document.getElementById("firstname").value;
    let lastNameInputValue = document.getElementById("lastname").value;
    // validate inputs
    if (lastNameInputValue=='' || lastNameInputValue=='' ) {
        alert('Please enter first and last name.');
        return;
    }


    alert('hi '+nameInputValue +' '+ lastNameInputValue +', welcome back to our website');


     console.log("Your name is ", nameInputValue);
     console.log("Your last name is ", lastNameInputValue);    
}
function onClick(){
    console.log('the book (how to climb a tree) can be borrowed');
    alert (' yes this book can be borrowed')
}