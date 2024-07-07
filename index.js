let items=[clothes, shoes, snacks];
items.forEach(Element => {
    console.log(Element);
});

function inputItem () {
    let ul=document.getElementById('My list');
    let candidate=document.getElementById('candidate')
    let li=document.createElement('li');
    li.setAttribute('id', candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    ul.appendChild(li);
}
document.querySelector('btn-add').addEventListener('click', inputItem);


function clearList () {
    let ul=document.getElementById('My list');
    ul.remove();
}
document.querySelector('btn-remove').addEventListener('click', clearList);

function markItem() {
    let ul=document.getElementById('My list');
  ul.toggle('purchased');
}
document.querySelector('btn-mark').addEventListener('click', markItem);
