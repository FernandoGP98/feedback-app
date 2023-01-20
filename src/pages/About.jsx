import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'
export default function About() {
    return (
        <Card>
            <div className='about'>
                <h1>About this project</h1>
                <p>This project is about a feedback app</p>
                <p>Version 1.0.0.</p>
                <p><Link to="/">Back to home</Link></p>
            </div>
        </Card>
    )
}
