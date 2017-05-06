import React from 'react';
import MessageForm from './MessageForm';
import MessageList from './MessageList';
//通过继承自Component创建一个自定义的React组件，并默认导出
export default class MessageBox extends React.Component{
    //构造函数 初始化私有属性
  constructor(props){
      //super是指父类的constructor
      super(props);//在子类的构造函数里一定要先调用父类的构造函数
      //在es6是通过以下这种方式来初始化私有状态的
      this.state = {messages:[]};
      this.addMessage = this.addMessage.bind(this);
      this.deleteMessage = this.deleteMessage.bind(this);
  }
  //组件加载完成之后
  componentDidMount(){
    //从接口中获取消息数组
    this.props.model.list((messages)=>{
        this.setState({messages});
    });
  }
  //增加一条新的留言
  addMessage(message){
    this.props.model.add(message,(messages)=>{
        //设置修改状态为新的留言数组
        this.setState({
            messages
        });
    });
  }
  deleteMessage(id){
    this.props.model.delete(id,(messages)=>{
        this.setState({messages});
    });

  }
  render(){
      return (
          <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="text-center">珠峰留言版</h3>
              </div>
              <div className="panel-body">
                <MessageList deleteMessage = {this.deleteMessage} messages={this.state.messages}></MessageList>
              </div>
              <div className="panel-footer">
                <MessageForm addMessage={this.addMessage}></MessageForm>
              </div>
          </div>
      )
  }
}
/**
 增加留言
 1. 给表单绑定事件 onClick onSubmit
 2. 当事件发生的时候取得用户填写的信息，姓名和内容，然后封装成一个对象添加到messages数组中
 **/