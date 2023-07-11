const express=require('express')
const path=require('path')
const port=8007;
const app=express();
// database
const db=require('./config/mongoose');
const Contact=require('./modals/contact');


// views
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

// middleware
app.use(express.urlencoded());
app.use(express.static('assets'));



// // middelware
// app.use(function(req,res,next){
//     req.myName='ashish';
//     next()
// })
// // middelware2
// app.use(function(req,res,next){
//     console.log('middleware22',req.myName)
//     next()
// })

var contactList=[
    {
        name:'arpan',
        phone:'99969484'

    },

    {
        name:'tony',
        phone:'98769484'
    },
    {
        name:'sumit',
        phone:'99569484'
    }
]


// get views

app.get('/',function(req,res){
Contact.find({},function(err,contacts){
    if(err){
        console.log('Error in fetching contact');
        return;
    }

    return res.render('home',{
    title:"My contact list",
    contact_list:contacts
     });

  });
    
});
// app.get('/practice',function(req,res){
//     return res.render('practice',{title:'Playground'})
// })


app.post('/create-contact',function(req,res){
//   contactList.push({
//     name:req.body.name,
//     phone:req.body.phone
//   })
Contact.create({
    name:req.body.name,
    phone:req.body.phone
},function(err,newContact){
    if(err){
        console.log('Error in creating contact')
        return;
    }
    console.log('****',newContact)
    return res.redirect('back')
    })

 })

app.get('/delete-contact',function(req,res){
    let id =req.query.id;
    // console.log(phone);
 Contact .findByIdAndDelete(id,function(err){
    if(err){
        console.log('Error in delteing contacts')
        return;
    }
    return res.redirect('back');
 })


})







app.listen(port,function(err){
if(err){
    console.log("error")
 return;
}
console.log("Your system is running on Port:" ,port)
})