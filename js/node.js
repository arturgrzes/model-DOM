'use strict'

var pierwszyDiv = document.getElementById('parFirst');

//console.log(pierwszyDiv.firstChild);
//console.log(pierwszyDiv.lastChild);

var pierwszyChild = pierwszyDiv.childNodes[2];
console.log(pierwszyChild);
console.log(pierwszyChild.nextSibling.nodeType);

