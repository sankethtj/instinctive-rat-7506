function getData(n,l,e,p,m){
    this.name=n,
    this.lastname=l,
    this.email=e,
    this.password=p,
    this.mobile=m
}


let arr=JSON.parse(localStorage.getItem("signupData"))||[]

function Singup(){
    // console.log("yes")
let name=document.getElementById("name").value
let lastname=document.getElementById("lastname").value
let email=document.getElementById("email").value
let password=document.getElementById("password").value
let mobile=document.getElementById("mobile").value

let p=new getData(name,lastname,email,password,mobile)
console.log(p)
alert("signup seccessfully")
arr.push(p)

localStorage.setItem("signupData",JSON.stringify(arr))

let na=document.getElementById("name").value=""
let last=document.getElementById("lastname").value=""
let emai=document.getElementById("email").value=""
let pass=document.getElementById("password").value=""
let mob=document.getElementById("mobile").value=""

}