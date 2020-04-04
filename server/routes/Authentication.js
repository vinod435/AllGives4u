var express=require('express');
var Authentication=require('../models/Authentication')
var router=express.Router();

router.post('/signup',function(req,res){
    Authentication.signUp(req.body,function(row,err){
        if(row){
            res.json(row)
        }
        else{
            res.json(err)
        }
    })
})
router.post('/signin',function(req,res){
    Authentication.signIn(req.body,function(row,err){
        if(row){
            res.json(row)
        }
        else{
            res.json(err)
        }
        
    })
})

module.exports=router