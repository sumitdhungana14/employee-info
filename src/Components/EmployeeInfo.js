import React from 'react';

import Header from './Header';
import WithBackButton from './HOC';


const EnhancedHeader = WithBackButton(Header);


class EmployeeInfo extends React.Component {   

    render(){
        return (
            <div>
                <EnhancedHeader onBackClick={this.props.onBackClick} requiresBackButton={true} title="Employee Info"/>
                <div className="info-container">
                    <div className="image-holder">
                        <img src={this.props.currentEmployee.profileImage} alt="display-profile"/>
                    </div>
                    <div className="info-holder">
                        <div className="first-name">
                            Name : <span>{this.props.currentEmployee.firstName} {this.props.currentEmployee.lastName}</span>
                        </div>
                        <div className="email">
                            Email : <span>{this.props.currentEmployee.email} </span>
                        </div>
                        <div className="phone">
                            Phone : <span>{this.props.currentEmployee.phone}</span> 
                        </div>
                        <div className="address">
                             Address : <span>{this.props.currentEmployee.address.state} , {this.props.currentEmployee.address.country}</span> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default EmployeeInfo;