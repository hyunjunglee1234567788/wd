"use strict"
//ログインまたは会員機能をするモデル。

const UserStorage = require("./UserStorage");


class User {
    constructor(body){ //생성자
        this.body=body;
    }

async login(){
  const client = this.body;
 try{
 const {id,psword} = await UserStorage.getUserInfo(client.id);
 
  if(id){
    if(id===client.id && psword===client.psword){
        return {success : true};
       }
        return {success : false, msg:"パスワードが間違います。"};
      }
        return{ success : false, msg:"存在しないIDです。"}; 
    }
    catch(err){
      return {success : false, msg : err};
    }
}

async register(){
  const client = this.body;
  try{
    const response = await UserStorage.save(client);
    return response;
  }
  catch (err){
    return {success:false,msg:err};
   }
  }
 }




module.exports=User