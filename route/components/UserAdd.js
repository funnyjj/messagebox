import React from 'react';
export default class UserAdd extends React.Component{
    render(){
        return(
            <form>
                <div className="form-group">
                    <label htmlFor="name">姓名</label>
                    <input type="text" className="form-control" id="name"/>
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary"/>
                </div>
            </form>
        )
    }
}


