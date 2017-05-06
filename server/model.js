var mongoose = require('mongoose');
//连接数据库，注意连接前要启动数据库
mongoose.connect('mongodb://127.0.0.1/201614message');
//定义消息的schema, 规定此集合的文档有哪些字段，字段的类型是什么
var MessageSchema = new mongoose.Schema({
  name:String,//姓名
  content:String,//内容
  createAt:{type:Date,default:Date.now}//创建时间
});
//定义数据库操作模型类并导出
exports.Message = mongoose.model('Message',MessageSchema);