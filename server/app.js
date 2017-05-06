var express = require('express');
var bodyParser = require('body-parser');
//注意:通过require得到的只是导出对象，还是.Message一下才是真正的模型
var Message = require('./model').Message;
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,DELETE,OPTIONS');
    if(req.method == 'OPTIONS'){
        res.end();
    }
    next();
});
app.get('/messages',function(req,res){
    Message.find({},function(err,messages){
        res.send(messages);
    });
});
app.post('/messages',function(req,res){
  var message = req.body;
  Message.create(message,function(err,doc){
      Message.find({},function(err,messages){
          res.send(messages);
      });
  })
});
//OPTIONS
app.delete('/messages/:_id',function(req,res){
    var _id = req.params._id;
    Message.remove({_id:_id},function(err,result){
        Message.find({},function(err,messages){
            res.send(messages);
        });
    })
});
app.listen(3000);