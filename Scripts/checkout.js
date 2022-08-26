let cartData = JSON.parse(localStorage.getItem("cart_items"));
console.log(cartData);
append(cartData);



function append(data){

    data.forEach(({image,name}) => {

        let prodImage = document.createElement("img");
        prodImage.src = image;
        prodImage.setAttribute("class","prodimage");
        let prodName = document.createElement("p");
        prodName.innerText = name;
        prodName.setAttribute("class","prodname");

        let prodDiv = document.createElement("div");
        prodDiv.setAttribute("class","proddiv");
        prodDiv.append(prodImage,prodName);
        let container = document.getElementById("cart-items");
        container.append(prodDiv);
    });
}

function subTotal(){
    let sum=0;
    cartData.forEach(function(elem){
        sum+=+elem.price
    })
    
    // Total
    document.getElementById('total_amount').innerText=`Original Price - $${sum}`; 
    console.log(sum)
    let save=(10/100)*sum
    document.getElementById('saving').innerText=`Saving - $${save}`
    
    document.getElementById('total').innerText=`Total - $${sum-save}`
}

subTotal(cartData);
