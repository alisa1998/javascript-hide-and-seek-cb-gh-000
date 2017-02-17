function getFirstSelector(selector){
return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested');
}

function deepestChild(){
  var i;
return document.querySelector('#grand-node div div div div');

}


function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
 
for (let i = 0, l = lis.length; i < l; i++) {
  lis[i].innerHTML = (parseInt(lis[i].innerHTML)+ n).toString()
}
}