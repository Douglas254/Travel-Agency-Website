import React from 'react'
import { Link }from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <ul>
                <li><button>Home</button></li>
                <li><button>Privacy policy</button></li>
            </ul>
            <div>
                <h4>Designed and Developed by<span><Link> Douglas254</Link></span></h4>
            </div>
            <ul>
                <li><button>Book your Flight</button></li>
                <li><button>Give away</button></li>
            </ul>
        </footer>
    )
}

export default Footer
