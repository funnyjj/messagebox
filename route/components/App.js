import React from 'react';
export default class App extends React.Component{
  render(){
     return (
       <div className="container">
         <div className="row">
           <div className="col-md-12">
              <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                      <li><a href="">首页</a></li>
                      <li><a href="">用户管理</a></li>
                      <li><a href="">个人设置</a></li>
                        <li><Link to="/home"/>首页</li>
                    </ul>
                </div>
              </nav>
           </div>
         </div>
       </div>
     )
  }
}
