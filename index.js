//Maintaining an array of items
let items=[clothes, shoes, snacks];
items.forEach(Element => {
    console.log(Element);
});

// Function for adding items to a list
function inputItem () {
    let ul=document.getElementById('My list');
    let candidate=document.getElementById('candidate')
    let li=document.createElement('li');
    li.setAttribute('id', candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    ul.appendChild(li);
}
//Event listener for the add button
document.querySelector('btn-add').addEventListener('click', inputItem);

// Function for removing items from a list
function clearList () {
    let ul=document.getElementById('My list');
    ul.remove();
}
// Event listener for the clear list button
document.querySelector('btn-remove').addEventListener('click', clearList);

// Function for marking items as purchased
function markItem() {
    let ul=document.getElementById('My list');
  ul.toggle('purchased');
}
// Event listener for the mark button
document.querySelector('btn-mark').addEventListener('click', markItem);
