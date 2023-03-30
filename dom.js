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
// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(var i=0; i<odd.length; i++){
//     odd[i].style.backgroundColor='green'
// }
// const items = document.querySelectorAll('ul li');
// items[1].style.color = 'green';

// traversing the dom
// var itemList =document.querySelector('#items');
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Hello item 1'

// // create a div
// var newDiv=document.createElement('div');
// // add a class
// newDiv.className='hello';
// // add id
// newDiv.id='hello1';
// // add Attr
// newDiv.setAttribute('title',"Hello Div");
// // create text node
// var newDivText=document.createTextNode('Hello');
// // add text to div
// newDiv.appendChild(newDivText);
// var container =document.querySelector('header.container');
// var h1=document.querySelector('header h1')
// console.log(newDiv);
// container.insertBefore(newDiv,h1);

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// // Filter Items
// function filterItems(e){
//   // convert text to lowercase
//   var text = e.target.value.toLowerCase();
//   // Get lis
//   var items = itemList.getElementsByTagName('li');
//   // Convert to an array
//   Array.from(items).forEach(function(item){
//     var itemName = item.firstChild.textContent;
//     if(itemName.toLowerCase().indexOf(text) != -1){
//       item.style.display = 'block';
//     } else {
//       item.style.display = 'none';
//     }
//   });
// }

























