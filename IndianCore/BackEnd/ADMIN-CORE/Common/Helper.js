
const {nanoid} = require('nanoid');

const helperObj ={
  "emptyChecker":(data)=>{
    try{
      if(!data || data===null || data=== undefined || Object.keys(data).length === 0){
        return true;
      }else{
        return false;
      }
    }catch(error){
      console.log(error);
    }
  },
  
  "internalCallApi":async(url,method,body)=>{
    try{
      let responseData=await fetch(url,method,body);
      return await responseData.json();
    }catch(error){
      console.log(error);
    }
  },
  
  "uniqueId":async()=>{
    try{
      return nanoid(10).toString();
    }catch(error){
      console.log(error)
    }
  },
  
  "sendSuccessMessage":(response,msg,statusCode,data)=>{
    try{
      let result={}
      result["code"]=statusCode;
      result["message"]=msg;
      result["data"]=data;
      return response.send(result);
    }catch(error){
      console.log(error);
    }
  },
  
  "sendFailureMessage":(response,msg,statusCode,data={})=>{
    try{
      let result={}
      result["code"]=statusCode;
      result["message"]=msg;
      result["data"]=data;
      return response.send(result);
    }catch(error){
      console.log(error);
    }
  }
};

module.exports = helperObj;