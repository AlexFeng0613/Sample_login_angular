/**
 * Created by alexfeng on 1/10/15.
 */
/**
 * Created by alexfeng on 1/9/15.
 */
var express = require('express');
var router = express.Router();
var assert = require('assert');

var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/test');
var usermodel = mongoose.model('userModel');

router.get('/',function(request,response){
    //res.render('register',{ title:'Register',results:[]});
    usermodel.find({},{name:1}).exec(function(err,result){
        if(!err){
            var users = result.map(function(user){
                return user.name;
            });

            response.status(200).json({test:'test1', result:!(users.indexOf(request.param('username')) === -1)});
            //response.json({test:'test1', result:!(users.indexOf(request.query.username) === -1)});

        } else{
            response.send('ERROR');
        }
    });
    //res.jsonp({test:'test1',usernames:['Jim', 'John', 'Jill', 'Jackie'],query:req.query});
});

router.get('/username/:name',function(request,response){
    //res.render('register',{ title:'Register',results:[]});
    usermodel.find({},{name:1}).exec(function(err,result){


            response.status(200).json({test:'test1',result:request.params.username});
            //response.json({test:'test1', result:!(users.indexOf(request.query.username) === -1)});

    });
    //res.jsonp({test:'test1',usernames:['Jim', 'John', 'Jill', 'Jackie'],query:req.query});
});

router.post('/',function(request,response){
    //res.render('register',{ title:'Register',results:[]});
    usermodel.find({},{name:1}).exec(function(err,result){
        if(!err){
            var users = result.map(function(user){
                return user.name;
            });

            response.status(200).json({test:'test1', result:!(users.indexOf(request.param('username')) === -1)});

        } else{
            response.send('ERROR');
        }
    });
    //res.jsonp({test:'test1',usernames:['Jim', 'John', 'Jill', 'Jackie'],query:req.query});
});
module.exports = router;