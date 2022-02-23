import React from 'react'
import { useParams, Outlet , Link} from 'react-router-dom'

export default function Profile() { 
    return (
        <div>
            {/* profile {username} */}
            <nav>
                <Link to="/profile/nizar">My Info</Link>
            </nav>
            
            <h1>profile page</h1>
            
            
            <Outlet />
        </div>
    )
}
