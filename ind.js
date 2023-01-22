// var itemlist=document.querySelector('#items')

// console.log(itemlist.firstChild);
// itemlist.firstElementChild.textContent='hello';
var newDiv=document.createElement('div');
newDiv.className='hello';
newDiv.id='hello1';
var newDivtext=document.createTextNode('hello div');
newDiv.appendChild(newDivtext);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
container.insertBefore(newDiv,h1);