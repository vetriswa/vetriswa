console.log(document.domain);
console.log(document.URL);
console.log(document.title);
//document.title=123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
//document.all[10].textContent = 'hello';
console.log(document.form);
console.log(document.links);
console.log(document.images);

//console.log(document.getElementById('header-titlr'));
var headerTitle = document.getElementById('header-title');
console.log(headerTitle);
//headerTitle.textContent = 'hello';
//headerTitle.innerText = 'goodbye';
//console.log(headerTitle.innerText);
//headerTitle.innerHTML = '<h2>hello</h2>';
//header.style.borderBottom = 'solid 3px #000';
//var items = document.getElementsByClassName('list-group-item');
//console.log(items);

//item.style.backgroundColor = 'yellow';
//for (var i = 0; i < items.length; i++) {
//  item[i] = style.fontweight = 'bold';
//}
var li = document.getElementsByTagName('li');
console.log(li);
li[i].textContent = 'hello';