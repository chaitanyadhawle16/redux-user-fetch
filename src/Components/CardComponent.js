import React from 'react'

const CardComponent = (props) => {
    let user = props.item;
    return (
        <div className='card'>
            <img src={user.avatar} alt="avatar" />
            <div className="name">
                <p>{user.last_name} {user.first_name}</p>
            </div>
            <p className='email' >{user.email}</p>
        </div>
    )
}

export default CardComponent