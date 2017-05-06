import $ from 'jquery';
module.exports = {
    //返回所有的留言列表
    list(callback){
        $.get('http://localhost:3000/messages').then(function(messages){
            callback(messages);
        })
    },
    //增加一条新的留言
    add(message,callback){
       $.post('http://localhost:3000/messages',message).then(function(messages){
           callback(messages);
       })
    },
    //移除留言
    delete(id,callback){
       $.ajax({
           url:`http://localhost:3000/messages/${id}`,
           method:'DELETE'
       }).then(function(messages){
           callback(messages);
       })
    }
}