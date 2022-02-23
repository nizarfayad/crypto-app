import React from 'react'
import { useNavigate } from 'react-router-dom'
function About() {
    const navigate = useNavigate();

    return (
        <div>
            about <button onClick={()=>{
                navigate('/')
            }}>Back Home</button>
        </div>
    )
}

export default About
