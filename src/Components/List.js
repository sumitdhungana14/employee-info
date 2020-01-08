import React from 'react';

import ListItem from './ListItem';
import Header from './Header';


const List = props => {

    const {employees, onClick} = props;
    const employeeList = employees.map((employee, index) => {
        return <ListItem 
                firstName={employee.firstName} 
                lastName={employee.lastName} 
                profileImage={employee.profileImage} 
                key={employee.id}
                id={employee.id}
                onClick={onClick}/>
    })
    return (
        <div className="list-container">
             <Header title="Employee List" marginLeft="582px"/>
            {employeeList}
        </div>
    )
}

export default List;