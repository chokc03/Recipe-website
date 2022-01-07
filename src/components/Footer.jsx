import React from 'react'
import {BsGithub} from 'react-icons/bs'
import '../styles/footer.css'


function Footer() {
    return (
        <footer>
            <div className="footer-wrap">
                <a href="https://github.com/chokc03/Recipe-website.git" 
                rel="noreferrer"
                className="contect"
                target="_blank">
                    <span>Github<BsGithub/></span>
                </a>
                <div className="copyright">
                    created by &#169; kyungchan Cho
                </div>
            </div>
        </footer>
        
    )
}

export default Footer
