
import navbar from "./Components/navbar.js";
console.log(navbar)
let navbar1 = document.getElementById("nav-bar")
navbar1.innerHTML = navbar()

    var data=JSON.parse(localStorage.getItem("cart_items"))
    function append(){

let container = document.getElementById("cart");
container.innerHTML = "";

data.forEach(function(ele,index){
    let div = document.createElement("div");
    div.setAttribute("class","product_card")
    let img = document.createElement("img");
    img.src =ele.image;
    img.setAttribute("id","pimage")
    let name = document.createElement("p");
    name.innerText = ele.name;
    let price = document.createElement("h2");
    price.innerText = ele.price;
    price.setAttribute("class","Price");
    let btn = document.createElement("button");
    btn.addEventListener("click",function(){
        remove(index)
    })
    btn.setAttribute("id","Add_To_Cart");
    btn.innerText = "Remove";
    // btn.addEventListener("click","Addcart()");
    div.append(img,name,price,btn);
    container.append(div);
})
// window.location.reload();
}
append();



function subTotal(){
    let sum=0;
    data.forEach(function(elem){
        sum+=+elem.price
    })
    
    // Total
    document.getElementById('total_amount').innerText=`Original Price - $${sum}`; 
    console.log(sum)
    let save=(10/100)*sum
    document.getElementById('saving').innerText=`Saving - $${save}`
    
    document.getElementById('total').innerText=`Total - $${sum-save}`
}
subTotal(data)


function remove(index){
    let data=JSON.parse(localStorage.getItem("cart_items"))||[]

    let newdata=data.filter(function(el,i){
        if(i===index)
        {
            let trash=JSON.parse(localStorage.getItem("trash"))||[]
            trash.push(el)
            localStorage.setItem("trash",JSON.stringify(trash))
        }
        else {
            return i!==index
        }
    })
    localStorage.setItem("cart_items",JSON.stringify(newdata))

    append(newdata)
    console.log(newdata)
    window.location.reload();

    // document.getElementById("total-div").innerText=newdata.length

    let sum=0
    newdata.forEach(function(elem){
        sum+=+elem.price
    })
    // document.getElementById("total_amount").innerText=sum
    console.log(sum)
    document.getElementById('total_amount').innerText=`Original Price - $${sum}`; 
    console.log(sum)
    save=(10/100)*sum
    document.getElementById('saving').innerText=`Saving - $${save}`
    
    document.getElementById('total').innerText=`Total - $${sum-save}`
}
import foot from "./Components/footer.js";

let footer=document.getElementById("footer").innerHTML=foot()


let logInls = JSON.parse(localStorage.getItem("login"))
let checkout = document.getElementById("cbtn")
checkout.addEventListener("click", function(){
    if(logInls === true){
        window.location.href = "checkout.html"
    }

    else{
        window.location.href = "login.html"
    }
})