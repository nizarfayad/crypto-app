import React from 'react'
import {useParams} from 'react-router-dom'

function UserInfo() {
    const {username} = useParams();
    return (
        <div>
            Welcome, {username}
        </div>
    )
}

export default UserInfo
