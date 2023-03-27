const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/zellzone')

const User=mongoose.model('User',{
  
      email: String ,
      name: String,
      password: String,
      phonenumber:Number,
      adress:String,
      image:String,
      sell: [],
      wishlist: []
})

const Admin=mongoose.model('Admin',{
   
      name: String,
      username: String,
      password: String,
      email: String,
      reqprod: []
})

const Reqprod=mongoose.model('Reqprod',{
      Id: String,
      useremail: String,
      name: String,
      type: String,
      age: String,
      price: String,
      desc: String,
      image: String  
})

const Acptdprod=mongoose.model('Acptdprod',{
      Id: String,
      useremail: String,
      name: String,
      type: String,
      age: String,
      price: String,
      desc: String,
      image: String  
})

module.exports={
    User,
    Admin,
    Reqprod,
    Acptdprod
}