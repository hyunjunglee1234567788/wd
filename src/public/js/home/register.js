"use strict"

// domを利用してJavaScriptを制御しよう
const id = document.querySelector("#id"),
      name = document.querySelector("#name"),
      psword =document.querySelector("#psword"),
      confirmPsword =document.querySelector("#confirm-psword"),
      registerBtn =document.querySelector("#button");

      registerBtn.addEventListener("click",register);

function register(){
    // ID入力
    if(!id.value)
    return alert("IDを入力してください。");
      //パスポート確認  
    if(psword.value!==confirmPsword.value)
    return alert("パスワードが一致しません。");
    
   const req={
    id: id.value,
    name: name.value,
    psword:psword.value,
   };
   console.log(req);
  
   fetch("/register",{
    method:"POST", 
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(req),
   })
   .then((res)=>res.json())
   .then((res)=>{
      if(res.success){
        location.href="/login";
      }
      else{
        alert(res.msg);
      }
   })
   .catch((err)=>{
    console.error(new Error("会員加入中エラーが発生しました。"))
   });
}
