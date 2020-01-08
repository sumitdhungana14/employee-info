import React from 'react';

const ListItem = props => {

   const {firstName, lastName, profileImage, onClick, id} = props;
    return (
        <div className="list-item" onClick={() => onClick(id)}>
            <img src={profileImage} alt="employee"></img>
            <span>{firstName} {lastName}</span>
        </div>
    )
}

export default ListItem;