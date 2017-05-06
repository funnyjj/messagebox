import React from 'react';
//import moment from 'moment';
require('moment/locale/zh-cn.js');//语言包
var moment = require('moment');
export default class MessageList extends React.Component{
  render(){
      //this.props.deleteMessage.bind(null,message.id)
    return (

        <ul className="list-group">
            {
              this.props.messages.map((message,index)=>{
                return <li className="list-group-item" key={index}>{message.name}:{message.content} <button className="btn btn-danger btn-xs" onClick={()=>this.props.deleteMessage(message._id)}>删除</button> <span className="pull-right">{moment(message.createAt).fromNow()}</span></li>
              })
            }
        </ul>
    )
  }
}