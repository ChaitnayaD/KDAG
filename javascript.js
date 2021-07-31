var addItem=0;
function addTocart(item){
    addItem=addItem+1;
   
    var selectedItem =document.createElement('div');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('class','card');
    selectedItem.setAttribute('id',addItem);
     var img=document.createElement('img');
     
     img.setAttribute('src',item.children[0].currentSrc);

var title =document.createElement('div');
title.innerText=item.children[1].children[0].innerText;
title.setAttribute('class','card-title');
var price =document.createElement('div');
price.innerHTML=item.children[1].children[1].innerText;

var delbtn=document.createElement('button');
delbtn.innerText='Delete';
delbtn.setAttribute('onClick', 'del('+addItem+')');
delbtn.setAttribute('class','btn-danger ');


    var cartItems=document.getElementById('title');
   

    cartItems.setAttribute('class','card-group ');
    selectedItem.append(img);
    selectedItem.append(title);
    selectedItem.append(price);
    selectedItem.append(delbtn);
    cartItems.append(selectedItem);
  
}

function del(item){
    document.getElementById(item).remove();
}