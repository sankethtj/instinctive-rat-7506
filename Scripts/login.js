let signupData=JSON.parse(localStorage.getItem("signupData"))
     let login=localStorage.getItem("login")||false
      
     function singData(e,p){
        this.email=e,
        this.password=p
      }


    function sigin(signupData){
    let email=document.getElementById("email").value;
        let password=document.getElementById("password").value;
// let d=new singData(email,password)
// console.log(d)
// console.log(d.email)
let emai=document.getElementById("email").value=""
let pass=document.getElementById("password").value=""


verifyUser(email,password)
localStorage.setItem("login",true);
window.location.href = "./homepage.html";


    }





    verifyUser = (newemail,newpassword)=>{
    // let userArr = JSON.parse(localStorage.getItem('users')) || []
    let signupData=JSON.parse(localStorage.getItem("signupData"))
    for(let ele of signupData){
      let {email,password} = ele
      if(email == newemail && newpassword == password){
        alert('Login successful!')
        
        return true
      }else if(email == newemail && newpassword !=password){
        alert('Wrong credentials')
        return false
      }
    }

    alert("User doesn't exist, Sign Up")
    return false
 
  }







