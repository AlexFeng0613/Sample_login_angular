/**
 * Created by alexfeng on 1/9/15.
 */
var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.render('register',{ title:'Register',results:[]});
});

router.get('/id',function(req,res){
    //res.send(typeof req.params.id);
    //res.send(req.body);
    res.send(req.query);
});

module.exports = router;