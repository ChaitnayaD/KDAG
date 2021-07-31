var addItem=0;
function addTocart(item){
    addItem=addItem+1;
    var selectedItem =document.createElement('div');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id',addItem);
     var img=document.createElement('img');
     
     img.setAttribute('src',item.children[0].currentSrc);

    var cartItems=document.getElementById('title');
   
    cartItems.append(img);
    cartItems.append(selectedItem);
  
}