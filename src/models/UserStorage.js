"use strict";

class UserStorage{
 static #users={
    id:["hyun","jung","hyunjung"],
    psword:["1234","12","1"],
    name:["hyun","hy","lee"],
  };

  static getUsers(...fields){// 데이터 읽어오는 메소드 
    const users = this.#users;
    const newUsers = fields.reduce((newUsers,field)=>{
      if(users.hasOwnProperty(field)){
         newUsers[field]=users[field];
      }
      return newUsers;
    },{});
    return newUsers; 
  }
}

module.exports=UserStorage;