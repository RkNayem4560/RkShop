
let bagitem=[];
onload();
function onload(){

let bagstr=localStorage.getItem('bagitems');
bagitem=bagstr?JSON.parse(bagstr):[];
addbag();
}
function bag(itemId){
bagitem.push(itemId);

localStorage.setItem('bagitems',JSON.stringify(bagitem));
addbag();
}
function addbag(){
let bag=document.querySelector(".countbag");

if(bagitem.length > 0){
bag.style.visibility="visible";
bag.innerText=bagitem.length;
}
else{
bag.style.visibility="hidden";
}
}
let productcontainer=document.querySelector(".products-container");
const items=[
{
id:"001",
item_image:"item1.jpg",
rating:{
stars:"4.5",
review:"4.6k",
},
company:"the exclusive",
itemname:"rz gold jwellery",
current:25000,
price:32000,
discount:"42",
},
{
id:"002",
item_image:"item2.jpg",
rating:{
stars:"2.1",
review:"1.6k",
},
company:"exclusive",
itemname:" jwellery",
current:27000,
price:30000,
discount:"22",
},
{
id:"003",
item_image:"item3.jpg",
rating:{
stars:"4.5",
review:"4.6k",
},
company:"forgien",
itemname:"Eear ring",
current:17000,
price:25000,
discount:"23",
},
{
id:"004",
item_image:"item4.jpg",
rating:{
stars:"4.5",
review:"4.6k",
},
company:"rk-products",
itemname:"t-shirt",
current:1500,
price:1800,
discount:"25",
},
{
id:"005",
item_image:"item5.jpg",
rating:{
stars:"7.5",
review:"5.2k",
},
company:"New colletion",
itemname:"panjabi",
current:1000,
price:1500,
discount:"৩৮",
},
{
id:"006",
item_image:"item6.jpg",
rating:{
stars:"1.5",
review:"2.6k",
},
company:"sk brothers",
itemname:"white-tshirt",
current:1500,
price:2000,
discount:"42",
},
{
id:"007",
item_image:"item7.jpg",
rating:{
stars:"3.8",
review:"4.6k",
},
company:"all Brands",
itemname:"t-shirt",
current:1400,
price:1700,
discount:"20",
},
{
id:"008",
item_image:"item8.jpg",
rating:{
stars:"5.5",
review:"6.9k",
},
company:"Time table",
itemname:"<span class='wacth'>Exclusive Wacth<span class='quality'>(waterproof)</span></span>",
current:1700,
price:2000,
discount:"30",
},
{
id:"009",
item_image:"item9.jpg",
rating:{
stars:"4.5",
review:"4.6k",
},
company:"casino",
itemname:"wacth",
current:500,
price:600,
discount:"15",
},
{
id:"10",
item_image:"item10.jpg",
rating:{
stars:"3.5",
review:"4.7k",
},
company:"rx shows",
itemname:"showe",
current:1000,
price:1080,
discount:"5",
},
{
id:"11",
item_image:"item11.jpg",
rating:{
stars:"4.5",
review:"4.6k",
},
company:"headphoneX",
itemname:"headphone",
current:1500,
price:2000,
discount:"42",
},
{
id:"12",
item_image:"item12.jpg",
rating:{
stars:"2.1",
review:"1.6k",
},
company:"headphoneX",
itemname:"headphone",
current:2700,
price:3000,
discount:"22",
},
{
id:"13",
item_image:"item13.jpg",
rating:{
stars:"4.5",
review:"4.6k",
},
company:"headphoneX",
itemname:"headphone",
current:1700,
price:4000,
discount:"53",
},
{
id:"14",
item_image:"item14.jpg",
rating:{
stars:"4.0",
review:"1.6k",
},
company:"headphoneX",
itemname:"headphone",
current:1500,
price:1800,
discount:"25",
},
{
id:"15",
item_image:"item15.jpg",
rating:{
stars:"7.5",
review:"5.2k",
},
company:"headphoneX",
itemname:"headphone",
current:1000,
price:1500,
discount:"৩৮",
},
{
id:"16",
item_image:"item16.jpg",
rating:{
stars:"1.5",
review:"2.6k",
},
company:"headphoneX",
itemname:"headphone",
current:1500,
price:2000,
discount:"42",
},
{
id:"17",
item_image:"item17.jpg",
rating:{
stars:"3.8",
review:"4.6k",
},
company:"all Brands",
itemname:"laptop",
current:14000,
price:17000,
discount:"20",
},
{
id:"18",
item_image:"item18.jpg",
rating:{
stars:"5.5",
review:"6.9k",
},
company:"Time table",
itemname:"<span class='wacth'>Exclusive laptop<span class='quality'>(waterproof)</span></span>",
current:40000,
price:32000,
discount:"40",
},
{
id:"19",
item_image:"item19.jpg",
rating:{
stars:"4.5",
review:"4.6k",
},
company:"apple",
itemname:"laptop",
current:50000,
price:60000,
discount:"15",
},
{
id:"20",
item_image:"item20.jpg",
rating:{
stars:"3.5",
review:"4.7k",
},
company:"rx android",
itemname:"Nokia",
current:30000,
price:38000,
discount:"20",
},
{
id:"21",
item_image:"item21.jpg",
rating:{
stars:"4.5",
review:"4.6k",
},
company:"the exclusive",
itemname:"Oppo A15s",
current:25000,
price:32000,
discount:"24",
},
{
id:"22",
item_image:"item22.jpg",
rating:{
stars:"2.1",
review:"1.6k",
},
company:"exclusive",
itemname:"Huawei p30",
current:27000,
price:30000,
discount:"15",
},
{
id:"23",
item_image:"item23.jpg",
rating:{
stars:"4.5",
review:"4.6k",
},
company:"forgien brand",
itemname:"infinix",
current:17000,
price:15000,
discount:"23",
},
{
id:"24",
item_image:"item24.jpg",
rating:{
stars:"4.5",
review:"4.6k",
},
company:"UK Hunt",
itemname:"Nokia",
current:50000,
price:62000,
discount:"17",
},
{
id:"25",
item_image:"item25.jpg",
rating:{
stars:"7.5",
review:"5.2k",
},
company:"New colletion",
itemname:"Symphoney a30",
current:11000,
price:1200,
discount:"১০",
},
{
id:"26",
item_image:"item26.jpg",
rating:{
stars:"1.5",
review:"2.6k",
},
company:"vivo exclusive",
itemname:"Vivo y91",
current:15000,
price:18000,
discount:"32",
},
{
id:"27",
item_image:"item27.jpg",
rating:{
stars:"3.8",
review:"4.6k",
},
company:"all Brands",
itemname:"itel a5",
current:8000,
price:8500,
discount:"5",
},
{
id:"28",
item_image:"item28.jpg",
rating:{
stars:"5.5",
review:"6.9k",
},
company:"Tv brand",
itemname:"<span class='wacth'>LG tv<span class='quality'>(waterproof)</span></span>",
current:40000,
price:35000,
discount:"25",
},
{
id:"29",
item_image:"item29.jpg",
rating:{
stars:"4.5",
review:"4.6k",
},
company:"Smart choice",
itemname:"Smart tv",
current:30000,
price:40000,
discount:"30",
},
{
id:"30",
item_image:"item30.jpg",
rating:{
stars:"3.5",
review:"4.7k",
},
company:"rx shows",
itemname:"TCL TV",
current:60000,
price:75000,
discount:"32",
},
];

let innerHTML="";
items.forEach(item => {
innerHTML+=`
<div class="product" >
<img src="${item.item_image}" class="item-img" >
<div class="rating" >${item.rating.stars}★||${item.rating.review} reviews</div>
<div class="company" >${item.company}</div>
<div class="item-name" >${item.itemname}</div>
<span class="current-prize" >Rs ${item.current}₹</span> <span class="price" >${item.price}₹</span> <span class="discount" >(${item.discount}%)off</span>
<button class="bagbtn" onclick="bag(${item.id});">Add to Bag</button>
<audio src="click.mp3" id="click"></audio>
</div>
`;
})

productcontainer.innerHTML=innerHTML;