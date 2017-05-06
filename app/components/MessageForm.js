import React from 'react';
export default class MessageForm extends React.Component{
    constructor(props){
        super(props);
        //1.不容易忘 2.性能略高
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    //1. 收集姓名和内容 2.调用父组件传过来的方法
    handleSubmit(event){
        event.preventDefault();//阻止表单的默认提交事件
        let name = this.refs.name.value;//取得输入框的值
        let content = this.refs.content.value;
        //调用父组件传过来的一个方法添加留言
        this.props.addMessage({
            name,
            content
        });
        this.refs.content.value = '';
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit} >
                <div className="form-group">
                    <label htmlFor="name">姓名</label>
                    <input ref="name" id="name" type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="content">内容</label>
                    <input ref="content" id="content" type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary"/>
                </div>
            </form>
        )
    }
}