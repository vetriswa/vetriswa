//var header = document.querySelector('#main-header');
//header.style.borderBottom = 'solid 4px #ccc';
var input = document.querySelector('input');
input.value = "hello world";
//var submit = document.querySelector('input[type="sunmit"]');
//submit.value = "SEND";
var item = document.querySelector('.list-group-item');
item.style.color = "red";
var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'green';
var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.display = 'none';
var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'hello';
var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
for (var i = 0; i < odd.length; i++) {
    odd[i].style.background = '#f4f4f4';
    even[i].style.background = '#ccc';

}