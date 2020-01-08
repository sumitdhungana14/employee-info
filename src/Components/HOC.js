import React from 'react';

const WithBackButton = Component => {
    return function(props){
        const { onBackClick, requiresBackButton, ...otherProps } = props;
        if(requiresBackButton){
            return (
                <Component {...otherProps}  requiresBackButton={requiresBackButton} onBackClick={onBackClick} />
            )
        }
        return (
            <Component {...otherProps} requiresBackButton={requiresBackButton} marginLeft="582px"/>
        )
    }
}

export default WithBackButton;