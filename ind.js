// var items=document.querySelectorAll('.list-group-item')
// items[1].style.background='green'
// items[2].style.color='white'
var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++)
{
    odd[i].style.background='green'
}