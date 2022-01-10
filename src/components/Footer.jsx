/*
  Writer : Kyungchan Cho
  This file makes footer for the website
  Fisrt written Date : 2021.12.29
  Updated Date : 2022.01.09
*/

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
