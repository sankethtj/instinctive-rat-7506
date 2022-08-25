
var electronicData = JSON.parse(localStorage.getItem("electronicData")) || [];
    
var electronicData = [
    {
        img_url : "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6506/6506325_sd.jpg;maxHeight=200;maxWidth=300",
        name :"Samsung - Galaxy Tab S6 Lite (2022) 10.4 64GB - Wi-Fi - Oxford Gray",
        price : "$249.99",
        
    },
    {
        img_url : "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6461/6461470cv11d.jpg;maxHeight=640;maxWidth=550",
        name : "Bella Pro Series - 8-qt. Digital Air Fryer - Ink Blue Stainless Steel",
        price : "$59.99",
    },
    {
        img_url : "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6415/6415325_rd.jpg;maxHeight=640;maxWidth=550",
        name : "Bella - Non-Stick Rotating Belgian Waffle Maker - Stainless Steel",
        price : "$14.99",
    },
    {
        img_url : "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6318/6318225_rd.jpg;maxHeight=640;maxWidth=550",
        name : "Insignia™ - 114 Outdoor Projector Screen - White",
        price : "$129.99",
    },
    {
        img_url : "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6454/6454067cv12d.jpg;maxHeight=640;maxWidth=550",
        name : "Cuisinart - 15-Piece Curve Tool Utensil Set - Black",
        price : "$19.99",
    },
    {
        img_url : "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6423/6423990_sd.jpg;maxHeight=640;maxWidth=550",
        name : "Bowflex - VeloCore Bike (16 Console) - Black",
        price : "$1299.99",
    },
    {
        img_url : "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6481/6481136_sd.jpg;maxHeight=640;maxWidth=550",
        name : "Shark - IQ Robot Self-Empty XL UR1005AE, Robot Vacuum, IQ Navigation, Wi‐Fi - Black",
        price : "$349.99",
    },
    {
        img_url : "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6472/6472509_sd.jpg;maxHeight=640;maxWidth=550",
        name : "Hover-1 - Ranger Plus Electric Self-Balancing Scooter w/9 mi Max Range & 9 mph Max Speed- Premium Bluetooth Speaker - Yellow",
         price : "$99.99",
        
    },
    {
        img_url : "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6406/6406382cv24d.jpg;maxHeight=640;maxWidth=550",
        name : "Rexing - V1P Max Plus Real 4K UHD Dual-Channel Front and Rear Wi-Fi Dash Camera - Black",
        price : "$179.99",
    },
    {
        img_url : "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6389/6389671_sd.jpg;maxHeight=640;maxWidth=550",
        name : "Rocketfish™ - 12-Outlet/2-USB Component Surge Protector - Black",
        price : "$69.99",
    },
    {
        img_url : "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6479/6479543cv11d.jpg;maxHeight=640;maxWidth=550",
        name : "HyperDrive - 7-in-1 USB-C Hub Stand with MicroSD/SD",
        price : "$59.99",
    },
    {
        img_url : "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6463/6463835_sd.jpg;maxHeight=640;maxWidth=550",
        name : "Native Union - Multi-device Magnetic wireless charging pad for iPhone & Qi Compatible devices - Black",
        price : "$69.99",
    },
    {
        img_url : "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6496/6496553_sd.jpg;maxHeight=640;maxWidth=550",
        name : "Filtrete - 80 Sq. Ft. True HEPA Air Purifier - Black",
        price : "$29.99",
    },
    {
        img_url : "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6507/6507002_sd.jpg;maxHeight=640;maxWidth=550",
        name : "Kangaroo - 4-Camera Indoor/Outdoor Wired 1080p Surveillance System - White",
        price : "$129.99",
    },
    {
        img_url : "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6500/6500859_rd.jpg;maxHeight=640;maxWidth=550",
        name : "AquaSonic - Sonic Rechargeable Electric Toothbrush with Activated Charcoal Whitening Bristles - Midnight Black",
        price : "$20.95",
    },
    {
        img_url : "https://rukminim1.flixcart.com/image/312/312/ky3b0y80/television/s/k/h/-original-imagaedxhbam3wmx.jpeg?q=70",
        name : "Vu QLED Premium TV 190 cm (75 inch) Ultra HD (4K) LED Smart Android TV",
        price : "$1315.99",
    },
    {
        img_url : "https://rukminim1.flixcart.com/image/312/312/l3uhvgw0/television/a/d/z/65us900c-lloyd-original-imagevhcwzych57r.jpeg?q=70",
        name : "Lloyd 164 cm (65 inch) Ultra HD (4K) LED Smart Android TV",
        price : "$914.99",
    },
    {
        img_url : "https://rukminim1.flixcart.com/image/312/312/l3xcr680/television/d/h/y/-original-imagexnsrn6af5gu.jpeg?q=70",
        name : "Nokia 109 cm (43 inch) Ultra HD (4K) LED Smart Android TV with Dolby Atmos and Dolby Vision",
        price : "$399.99",
    },
    {
        img_url : "https://rukminim1.flixcart.com/image/312/312/kzu6efk0/smartwatch/d/k/z/42-android-jlk456-stout-yes-original-imagbryz3uwmctkq.jpeg?q=70",
        name : "Spark-X 4G Android Smart Watch With Bluetooth Connectivity Smartwatch Smartwatch",
        price : "$17.99",
    },
    {
        img_url : "https://rukminim1.flixcart.com/image/312/312/kfeamq80/smartwatch/f/9/m/ios-m06p3hn-a-apple-original-imafvvhdndwgsfwu.jpeg?q=70",
        name : "APPLE Watch Series 6 GPS + Cellular M06P3HN/A 40 mm Space Grey Aluminium Case with Black Sport Band",
        price : "$624.99",
    }

];

localStorage.setItem("Electronic Products",JSON.stringify(electronicData));
let count=+(localStorage.getItem("items_count"))||0;



    // if( document.getElementById("container").innerHTML){
    //     document.getElementById("cart_count").innerText=count;
    
    // }
    // console.log(typeof count, count)




//append function
function CFun(i,name,price){
 image:i
    
}
let newArray=JSON.parse(localStorage.getItem("cart_items"))||[];
function append(){

    
    let container = document.getElementById("container");
    container.innerHTML = "";
    
    electronicData.forEach(function(ele,i){
      

        let div = document.createElement("div");
        div.setAttribute("class","product_card")
        let image = document.createElement("img");
        image.src =ele.img_url;
        let name = document.createElement("p");
        name.innerText = ele.name;
        let price = document.createElement("h2");
        price.innerText = ele.price;
        price.setAttribute("class","Price");
        let btn = document.createElement("button");
        btn.setAttribute("id","Add_To_Cart");
        btn.innerText = "Add To Cart";
      
        btn.addEventListener("click",()=>{
            count++;
            let newObj=new CFun(image,name,price)
            newArray.push(newObj);
            document.getElementById("cart_count").innerText=count;
            localStorage.setItem("cart_items",JSON.stringify(newArray))
            localStorage.setItem("items_count",(count))



        });
        div.append(image,name,price,btn);
        container.append(div);
    })

}
append();

// var Deall_of_the_Day = JSON.parse(localStorage.getItem("Deall of the Day")) || [];

// var Deall = [
//     {
//         img : "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4721/4721001_sd.jpg",
//         name : "Dyson - Ball Animal Upright Vacuum - Iron/Purple",
//         price : "$349.99"
    
//     },
// ]
// localStorage.setItem("Deal of the Day",JSON.stringify(Deall_of_the_Day));

// function appendFun(){
//     let Deall_of_the_Day = document.getElementById("Deal_of_the_Day");
//     Deall.forEach(function(ele){
//         let div = document.createElement("div");
//     div.setAttribute("class","Dealday");
//         let div1 = document.createElement("div");
//     div.setAttribute("class","information");
//     let image = document.createElement("img");
//     image.src = ele.img;
//     image.setAttribute("class","Dysonball");
//     let name = document.createElement("p");
//     name.innerText = ele.name;
//     let pickup = document.createElement("p");
//     pickup.innerText = "Pickup: Order now for pickup on Sun, Sep 4 at Aiea";
//     let Shipping = document.createElement("p");
//     Shipping.innerText = "Shipping: Unavailable in your area.This item is only available in certain markets";
//     let price = document.createElement("p");
//     price.innerText =ele.price;
//     let btn = document.createElement("button");
//     btn.setAttribute("id","Deal_Day");
//     btn.innerText = "Add To Cart";
//     div.append(image);
//     div1.append(name,pickup,Shipping,price,btn);
//     Deall_of_the_Day.append(div,div1);

// })

// }
// appendFun();








    
