const express=require('express')
const cors=require('cors')

const logic=require('./services/logic')

const server=express()
server.use(cors({
    origin:'http://localhost:3000'
}))
server.use(express.json())

server.listen(8000,()=>{
    console.log('EMS started at 8000')
})

//register api call
server.post('/register',(req,res)=>{
    console.log("inside register function")
    console.log(req.body)
    logic.register(req.body.email,req.body.name,req.body.password,req.body.phonenumber,req.body.adress,req.body.image)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//login api call
server.post('/login',(req,res)=>{
    logic.login(req.body.email,req.body.password)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//adminlogin api call
server.post('/adminlogin',(req,res)=>{
    logic.adminlogin(req.body.email,req.body.password)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//get all users for admin api call
server.get('/allusers',(req,res)=>{
    logic.allusers()
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//deleting a user from admin
server.delete('/delusers/:eml',(req,res)=>{
    logic.deluser(req.params.eml)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//get a particular user details to admin api
server.get('/userdetail/:eml',(req,res)=>{
    logic.userdetail(req.params.eml)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//prouserdetail
server.get('/prouserdetail/:eml',(req,res)=>{
    logic.prouserdetail(req.params.eml)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

server.post('/adminprod',(req,res)=>{
    logic.adminprod(req.body.email,req.body.useremail,req.body.id,req.body.prodName,req.body.prodType,req.body.prodAge,req.body.prodPrice,req.body.prodDesc,req.body.prodImage)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//getting all products added by user to reqprodts to display in admin api call
server.get('/allproducts',(req,res)=>{
    logic.allProducts()
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})


//adding a product to reqprod from user
server.post('/useraddprod',(req,res)=>{
    logic.useraddprod(req.body.id,req.body.useremail,req.body.prodName,req.body.prodType,req.body.prodAge,req.body.prodPrice,req.body.prodDesc,req.body.prodImage)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//get a particular product detail of reqprod api
server.get('/proddetals',(req,res)=>{
    logic.proddetals(req.body.id)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })

})
//productdetaill
server.get('/productdetail/:id',(req,res)=>{
    logic.productdetail(req.params.id)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//acpted by admin api
server.post('/accepted',(req,res)=>{
    logic.accepted(req.body.id,req.body.useremail,req.body.prodName,req.body.prodType,req.body.prodAge,req.body.prodPrice,req.body.prodDesc,req.body.prodImage)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})
//adding to sell array
server.post('/sellitem',(req,res)=>{
    logic.sellitem(req.body.id,req.body.useremail,req.body.prodName,req.body.prodType,req.body.prodAge,req.body.prodPrice,req.body.prodDesc,req.body.prodImage)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

server.delete('/deleteitem/:id',(req,res)=>{
    logic.deleteitem(req.params.id)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//getting all products from accpted products
server.get('/acceptedproduct',(req,res)=>{
    logic.acptdprod()
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//product detail view by profile
server.get('/productview/:id',(req,res)=>{
    logic.productview(req.params.id)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})
//product deleting from sell 
server.post('/selldelte',(req,res)=>{
    logic.selldelte(req.body.id,req.body.useremail,req.body.prodName,req.body.prodType,req.body.prodAge,req.body.prodPrice,req.body.prodDesc,req.body.prodImage)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})


//delete item from acptedprod by user
server.delete('/deleteacptditem/:id',(req,res)=>{
    logic.deleteacptditem(req.params.id)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//ading to wishlist
server.post('/wishlist',(req,res)=>{
    logic.wishlist(req.body.eml,req.body.id,req.body.useremail,req.body.prodName,req.body.prodType,req.body.prodAge,req.body.prodPrice,req.body.prodDesc,req.body.prodImage)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//product deleting from wishlsit 
server.post('/wishdelte',(req,res)=>{
    logic.wishdelte(req.body.eml,req.body.id,req.body.useremail,req.body.prodName,req.body.prodType,req.body.prodAge,req.body.prodPrice,req.body.prodDesc,req.body.prodImage)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})


server.post('/editing',(req,res)=>{
    logic.edit(req.body.email,req.body.name,req.body.password,req.body.phonenumber,req.body.adress,req.body.image)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})