const MESSAGES  = 'MESSAGES';
module.exports = {
    //返回所有的留言列表
    list(){
        //从local中获得此key对应的字符串
        let messageStr = localStorage.getItem(MESSAGES);
        // 如果有值，则转成对象，如果没有值则返回空数组
        return messageStr?JSON.parse(messageStr):[];
    },
    //增加一条新的留言
    add(message){
        message.createAt = new Date();
        //取出老的数组
        let messages = this.list();
        //如果老的消息数组没有东西，那么此元素id=1,如果老数组有值，那么ID为老数组中的最大ID加1
        message.id = messages.length>0?messages[messages.length-1].id+1:1;
        //把消息对象插入到老的数组中去
        messages.push(message);
        //把JSON数组转成JSON字符串并保存在local中
        localStorage.setItem(MESSAGES,JSON.stringify(messages));
        return messages;
    },
    //移除留言
    delete(id){
        //先得到老数组
        let messages = this.list();
        //对老数组进行过滤，得到新数组
        messages = messages.filter(function(item){
            return item.id != id;
        });
        // 把过滤后的新数组保存在缓存中
        localStorage.setItem(MESSAGES,JSON.stringify(messages));
        //切记要返回新数组
        return messages;
    }
}