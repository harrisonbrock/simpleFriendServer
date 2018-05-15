import React from 'react'

const friend = props => {

    return (
        <div>
            <li>
                {props.friend.name}
            </li>
        </div>
    );
};

export default friend;