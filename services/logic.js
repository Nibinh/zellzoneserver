const db=require('./db')

const register=(email,nme,pswd,pnum,adrs,img)=>{
    console.log("inside register function")
    return db.User.findOne({
        email
    })
    .then((result)=>{
        if(result){
            return{
                statusCode:404,
                message:"Account already exist"
            }
        }
        else{
            const newUser=new db.User({
                email,
                name:nme,
                password:pswd,
                phonenumber:pnum,
                adress:adrs,
                image:img,
                sell:[],
                wishlist:[]

            })
            newUser.save()
            return{
                statusCode:200,
                message:'Registration Successfull'
            }
        }

    })
}

const login=(email,pswd)=>{
    console.log("insde login")
    return db.User.findOne({
        email,
        password:pswd
    })
    .then((result)=>{
        if(result){
            return{
                statusCode:200,
                message:"login successfull",
                email:result.email
            }
        }
        else{
            return{
                statusCode:404,
                message:"invalid Password or Email"
            }
        }
    })
}
//adminlogin
const adminlogin=(email,pswd)=>{
    console.log("iside admin login")
    return db.Admin.findOne({
        email,
        password:pswd
    })
    .then((result)=>{
        if(result){
            return{
                statusCode:200,
                message:"admin login succesfull",
                usern:result.username
            }
        }
        else{
            return{
                statusCode:404,
                message:"invalid"
            }
        }
    })
}

//get all users for admin
const allusers=()=>{
    console.log("inside all users")
    return db.User.find()
    .then((result)=>{
        if(result){
            return{
                statusCode:200,
                all:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"something error"
            }
        }
    })
}

//deleting a user from admin
const deluser=(email)=>{
    console.log("inside deluser")
    return db.User.deleteOne({
        email
    })
    .then((result)=>{
        if(result){
            return{
                statusCode:200,
                message:"deleted"
            }
        }
        else{
            return{
                statusCode:404,
                message:"invalid"
            }
        }
    })
}
//get a particular user details to admin
const userdetail=(email)=>{
    console.log("inside userdetail")
    return db.User.findOne({
        email
    }).then((result)=>{
        if(result){
            return{
                statusCode:200,
                details:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"invalid"
            }
        }
    })
}

const prouserdetail=(email)=>{
    console.log("insde login")
    return db.User.findOne({
        email
    })
    .then((result)=>{
        if(result){
            return{
                statusCode:200,
                message:" successfull",
                details:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"invalid "
            }
        }
    })
}
//getting all products added by user to reqprodts to display in admin
const allProducts =()=>{
    return db.Reqprod.find()
    .then((result)=>{
        if(result){
            return{
                statusCode:200,
                employees:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"No data is available"
            }
        }
    })
}

//adding a product to reqprod from user
const useraddprod=(Id,eml,prodname,prodtype,prodage,prodprice,proddesc,prodimage)=>{
    console.log("inside useraddprod")
    return db.Reqprod.findOne({
        Id
    }).then((result)=>{
        if(result){
            return{
                statusCode:404,
                message:"smthng error"
            }
        }
        else{
            const newProd=new db.Reqprod({
                Id,
                useremail:eml,
                name:prodname,
                type:prodtype,
                age:prodage,
                price:prodprice,
                desc:proddesc,
                image:prodimage  

            })
            newProd.save()
            return{
                statusCode:200,
                message:' Successfull'
            }
                
            
        }
    })
}

//get a particular product detail of reqprod
const proddetals=(Id)=>{
    console.log("inside prod details")
    return db.Reqprod.findOne({
        Id
    }).then((result)=>{
        if(result){
            return{
                statusCode:200,
                details:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"somnh"
            }
        }
    })
}
//get particualr product detail
const productdetail=(Id)=>{
    console.log("inside userdetail")
    return db.Reqprod.findOne({
        Id
    }).then((result)=>{
        if(result){
            return{
                statusCode:200,
                details:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"invalid"
            }
        }
    })
}
//adding a product to acptprod by admin
const accepted=(Id,eml,prodname,prodtype,prodage,prodprice,proddesc,prodimage)=>{
    console.log("inside useraddprod")
    return db.Acptdprod.findOne({
        Id
    }).then((result)=>{
        if(result){
            return{
                statusCode:404,
                message:"smthng error"
            }
        }
        else{
            const newProd=new db.Acptdprod({
                Id,
                useremail:eml,
                name:prodname,
                type:prodtype,
                age:prodage,
                price:prodprice,
                desc:proddesc,
                image:prodimage  

            })
            newProd.save()
            return{
                statusCode:200,
                message:' Successfull'
            }
                
            
        }
    })
}

//adding accpted product to sell array of user
const sellitem=(Id,email,prodname,prodtype,prodage,prodprice,proddesc,prodimage)=>{
    console.log("inside useraddprod")
    return db.User.findOne({
        email
    }).then((result)=>{
        if(result){
            result.sell.push(
                {
                    Id,
                    useremail:email,
                    name:prodname,
                    type:prodtype,
                    age:prodage,
                    price:prodprice,
                    desc:proddesc,
                    image:prodimage  
                  
            }
            )
            result.save()
            return{
                statusCode:200,
                message:'product is added to your sell'
            }
        }
        else{
            return{
                statusCode:404,
                message:' Smthng wrong'
            }
                
            
        }
    })
}

const deleteitem=(Id)=>{
    console.log(" inside delete item")
    return db.Reqprod.deleteOne({
        Id
    }).then((result)=>{
        if(result){
            return{
                statusCode:200,
                message:"dleted"
            }
        }
        else{
            return{
                statusCode:404,
                message:"smthng wrong"
            }
        }
    })
}
//getting all acpted products
const acptdprod=()=>{
    console.log("inside accptprod")
    return db.Acptdprod.find()
    .then((result)=>{
        if(result){
            return{
                statusCode:200,
                products:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"smtng wrong"
            }
        }
    })
}
//product detail view by profile
const productview=(Id)=>{
    console.log("inside product view")
    return db.Acptdprod.findOne({
        Id
    })
    .then((result)=>{
        if(result){
            return{
                statusCode:200,
                details:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"something wriong"
            }
        }
    })
}
//product deleting from sell 
const selldelte=(Id,email,prodname,prodtype,prodage,prodprice,proddesc,prodimage)=>{
    console.log("inside selldlete")
    return db.User.findOne({
        email
    })
    .then((result)=>{
        if(result){
            result.sell.pull(
                {
                    Id,
                    useremail: email,
                    name: prodname,
                    type: prodtype,
                    age: prodage,
                    price: prodprice,
                    desc: proddesc,
                    image: prodimage  
                  
            }
            )
            result.save()
            return{
                statusCode:200,
                message:'product is deleted'
            }
        }
        else{
            return{
                statusCode:494,
                message:"smtnhg wrong"
            }
        }
    })
}

//delete item from acptedprod by user
const deleteacptditem=(Id)=>{
    console.log(" inside deleteacptditem item")
    return db.Acptdprod.deleteOne({
        Id
    }).then((result)=>{
        if(result){
            return{
                statusCode:200,
                message:"dleted"
            }
        }
        else{
            return{
                statusCode:404,
                message:"smthng wrong"
            }
        }
    })
}

//adding accpted product to wishlist array of user
const wishlist=(email,Id,eml,prodname,prodtype,prodage,prodprice,proddesc,prodimage)=>{
    console.log("inside useraddprod")
    return db.User.findOne({
        email
    }).then((result)=>{
        if(result){
            result.wishlist.push(
                {
                    Id,
                    useremail:eml,
                    name:prodname,
                    type:prodtype,
                    age:prodage,
                    price:prodprice,
                    desc:proddesc,
                    image:prodimage  
                  
            }
            )
            result.save()
            return{
                statusCode:200,
                message:'product is added to your wishlist'
            }
        }
        else{
            return{
                statusCode:404,
                message:'Login to your Account'
            }
                
            
        }
    })
}
//product deleting from wishlsit 
const wishdelte=(email,Id,uemail,prodname,prodtype,prodage,prodprice,proddesc,prodimage)=>{
    console.log("inside selldlete")
    return db.User.findOne({
        email
    })
    .then((result)=>{
        if(result){
            result.wishlist.pull(
                {
                    Id,
                    useremail: uemail,
                    name: prodname,
                    type: prodtype,
                    age: prodage,
                    price: prodprice,
                    desc: proddesc,
                    image: prodimage  
                  
            }
            )
            result.save()
            return{
                statusCode:200,
                message:'product is deleted'
            }
        }
        else{
            return{
                statusCode:494,
                message:"smtnhg wrong"
            }
        }
    })
}
//Editing details of user by user ,name,password,phonenumber,adress,image result.name=name
            // result.password=password
            // result.phonenumber=phonenumber
            // result.adress=adress
            // result.image=image
            // result.save()

const edit=(email,name,password,phonenumber,adress,image)=>{
    console.log("inside the edit")
    return db.User.findOne({
        email
    })
    .then((result)=>{
        if(result){

            result.name=name
            result.password=password
            result.phonenumber=phonenumber
            result.adress=adress
            result.image=image
            result.save()
            return{
                statusCode:200,
                message:"Data updated Sucessfully"
            }
        }
        else{
            return{
                statusCode:404,
                message:"No data is available"
            }
        }
       
    })
}
module.exports={
    register,
    login,
    adminlogin,
    allusers,
    deluser,
    userdetail,
    prouserdetail,
   allProducts,
   useraddprod,
   proddetals,
   productdetail,
   accepted,
   sellitem,
   deleteitem,
   acptdprod,
   productview,
   selldelte,
   deleteacptditem,
   wishlist,
   wishdelte,
   edit
   
}