import React from 'react';

const WithBackButton = (Component, requiresBackButton = true) => {
    return function(props){
        const { onBackClick, ...otherProps } = props;
        if(requiresBackButton){
            return (
                <Component {...otherProps} requiresBackButton={requiresBackButton} onBackClick={onBackClick} />
            )
        }
    }
}

export default WithBackButton;