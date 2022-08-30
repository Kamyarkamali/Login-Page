let id=(id)=>document.getElementById(id);

let classes=(classes)=>document.getElementsByClassName(classes)

let userName=id("username"),
email=id("email"),
password=id("password"),
form=id("form"),
errorMsg=document.getElementsByClassName("errors"),

failureIcon=classes("failure-icon"),
succsesicon=classes("succsesicon");


form.addEventListener("submit",(e)=>{
    e.preventDefault()

    engine(userName,0,"نام را وارد کنید")
    engine(email,1,"لطفا فیلد ایمیل را به درستی پر کنید")
    engine(password,2,"پسورد رارد کنید")
    
})


let engine=(id,serial,massage)=>{
    if(id.value.trim()===""){
        errorMsg[serial].innerHTML=massage
        failureIcon[serial].style.opacity="1";
        succsesicon[serial].style.opacity="0"
    } else{
        errorMsg[serial].innerHTML="";
        failureIcon[serial].style.opacity="0";
        succsesicon[serial].style.opacity="1"

    }
}



