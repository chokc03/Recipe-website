import React from 'react'
import {BsGithub} from 'react-icons/bs'
import '../styles/footer.css'


function Footer() {
    return (
        <footer>
            <div className="footer-wrap">
                <div className="contect">
                    <span>Github<BsGithub/></span>
                </div>
                <div className="copyright">
                    created by &#169; kyungchan Cho
                </div>
            </div>
        </footer>
        
    )
}

export default Footer
