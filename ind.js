 console.log(document.domain);
 console.log(document.URL);
 var items=document.getElementsByClassName('list-group-item');
 console.log(items[1]);
 items[1].textContent='hello';
 items[1].style.fontWeight='bold';
 for(var i=0;i<items.length;i++)
 {
    items[i].style.backgroundColor='#f4f4f4'
 }
