// var items = document.getElementsByClassName('list-group-item');
// console.log(items)
// console.log(items[1]);
// items[2].style.backgroundColor='green'
// for(var i=0; i<items.length; i++){
//     items[i].style.fontWeight='bold'
// }
// var items = document.getElementsByTagNameNS('li');
// console.log(li)
// console.log(li[1]);
// li[2].style.backgroundColor='green'
// for(var i=0; i<li.length; i++){
//     li[i].style.fontWeight='bold'
// }
// QUERYSELECTOR
// var secondItem=document.querySelector('.list-group-item:nth-child(2)')
// secondItem.style.backgroundColor='green'
// var thirdItem=document.querySelector('.list-group-item:nth-child(3)')
// thirdItem.style.visibility='hidden'

// querySelectorAll
var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0; i<odd.length; i++){
    odd[i].style.backgroundColor='green'
}
const items = document.querySelectorAll('ul li');
items[1].style.color = 'green';
