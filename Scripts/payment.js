let cartData = JSON.parse(localStorage.getItem("cart_items"));

function subTotal(){
    let sum=0;
    cartData.forEach(function(elem){
        sum+=+elem.price
    })
    
    // Total
    document.getElementById('total_amount').innerText=`Original Price - $${sum}`; 
    console.log(sum)
    let save=(10/100)*sum;
    document.getElementById('saving').innerText=`Saving - $${save}`
    
    document.getElementById('total').innerText=`Total - $${sum-save}`
}

subTotal(cartData);


let orderbutton = document.getElementById("orderbtn");
orderbutton.addEventListener("click",function(){
    alert('Order Successfully placed. You will receive a confirmation email with the Order ID and Tracking Number');
    window.location.href="./homepage.html";
})