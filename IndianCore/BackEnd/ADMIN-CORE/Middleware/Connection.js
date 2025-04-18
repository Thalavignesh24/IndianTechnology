
const mongoose=require("mongoose");

async function dbConnect(){
  try{
    let MongoConnect = await mongoose.connect("mongodb+srv://IndianCore2024:IndianCore2024@cluster0.yjv3kpw.mongodb.net/");

if(MongoConnect){

    console.log("connection established");
}
  }catch(error){
    console.log(error);
  }
}

dbConnect()
