let bagitemobject;
onload();
function onload(){
loadbagitems();
bagitems();
bagsummary();
}
function loadbagitems(){
bagitemobject=bagitem.map(itemsId => {
for(let i=0;i<items.length;i++){
if(itemsId==items[i].id){
return items[i];
}

}


});
}
function itemRemove(itemsId){
bagitem=bagitem.filter(bagitemId=> bagitemId!=itemsId);
localStorage.setItem('bagitems',JSON.stringify(bagitem));
loadbagitems();
bagitems();
addbag();
bagsummary();
}
function bagsummary(){
let cashCounter=document.querySelector('.summary');
let current=0;
let discount=0;
let total=99;
bagitemobject.forEach(bagitem=>{
current+=bagitem.price;
discount+=bagitem.price-bagitem.current;
total=current-discount+99;
});
cashCounter.innerHTML=`
<div class="cash-counter" >
<span style="font-size:8px;" ><b>Place order (vat@+ fees);</b></span>
<span class="current-MRP" >Current MRP :  ${current}</span><br>
<span class="discount-MRP" >Discount in MRP :   ${discount}</span><br>
<span class="fee" >Fees : 99</span>
<hr style="position:relative;top:7px;left:-2px;" >

<span class="total-MRP" >Total-MRP :   ${total}</span>
<button class="place-order-btn" onclick='placeitem()'>place order</button>
</div>
`;
}
function bagitems(){
let bagitemscontainer=document.querySelector('.bag-container');
let innerHTML="";
 bagitemobject.forEach(bagitem=>{
 innerHTML += genarethtml(bagitem);
 });
bagitemscontainer.innerHTML=innerHTML;
}
function genarethtml(item){
return `<div class="bag-items" >

<img src="${item.item_image}" class="item-img" style="height:140px;width:80px;" >
<span class="cross" onclick="itemRemove(${item.id})"> &#x2717</span>
<div class="details" >
<span class="name" >${item.company}</span><br>
<span class="current-priceMRP" >MRP ${item.current}₹ </span><br>
<span class="orginial-price" >MRP ${item.price}₹ </span><br>
<span class="discount" style="text-shadow:1px 0px orange;" >Todays special discount is (${item.discount}%) 😍</span>
<br><span class="extra" >------------------</span>
</div>
<div class="product-bio" >
exclusive design with single statment,buying a product get a cupon for other product.Real brands with new collection.
our sell,if you don't like our getteing product you can retrun it esaily.
</div>
</div>`;

}

/*<div class="bag-items" >

<img src="item1.jpg" class="item-img" style="height:140px;width:80px;" >
<span class="cross" > &#x2717</span>
<div class="details" >
<span class="name" >Rz gold jwelery</span><br>
<span class="current-priceMRP" >MRP 25000₹ </span><br>
<span class="orginial-price" >MRP 32000₹ </span><br>
<span class="discount" style="text-shadow:1px 0px orange;" >Todays special discount is (42%) 😍</span>
<br><span class="extra" >------------------</span>
</div>
<div class="product-bio" >
exclusive design with single statment,buying a product get a cupon for other product.Real sitigold with new collection.
our sell,if you don't like our getteing product you can retrun it esaily.
</div>
</div>*/