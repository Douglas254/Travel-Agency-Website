import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <ul>
                <li><button>Home</button></li>
                <li><button>Privacy policy</button></li>
            </ul>
            <div>
                <h4 style={{color: '#fff',textDecoration:'none'}}>Designed and Developed by ~ <span><a href="https://github.com/Douglas254" style={{color: '#fff',textDecoration:'none', fontFamily: 'adorn serif'}}> Douglas254</a></span></h4>
            </div>
            <ul>
                <li><button>Book your Flight</button></li>
                <li><button>Give away</button></li>
            </ul>
        </footer>
    )
}

export default Footer
