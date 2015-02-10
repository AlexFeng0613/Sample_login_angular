/**
 * Created by alexfeng on 1/9/15.
 */
var express = require('express');
var router = express.Router();


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var userSchema = new mongoose.Schema({
    name:String,
    email:String
});

var model = mongoose.model('userModel',userSchema);

router.get('/',function(req,res){
    res.send(req.query);
});

router.post('/',function(req,res){
    //res.render('register',{title:JSON.stringify(req.body)});
    //res.send('post method: ' + JSON.stringify(req.route));
    //res.send(req.body.name);

    var obj = new model({
        name:req.body.name,
        email:req.body.email
    });

    obj.save(function (err) {if (err) console.log ('Error on save!')});
    //res.redirect('/register');

    model.find({}).exec(function(err,result){
        if(!err){
            result.push({name:req.body.name,email:req.body.email});

            res.render('register',{results:result,title:'Registered Users'});

        } else{
            res.send(err);
        }
    });
});

module.exports = router;