import React from 'react'
import './header.css'
import HeaderData from '../../data/HeaderData'
const header = () => {
    return (
        <div className='container'>
            <nav>
                <h1>{HeaderData.name}</h1>
                <ul>
                    {HeaderData.links.map((link, index) => (
                        <li key={index}>
                            <a href={link.url}>{link.label}</a>
                        </li>
                    ))}
                </ul>
                <i class="fa fa-bars" aria-hidden="true"></i>
                <i class="fa fa-times" aria-hidden="true"></i>
            </nav>
        </div>
    )
}

export default header