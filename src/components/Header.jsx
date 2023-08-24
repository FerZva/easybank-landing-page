import React from 'react';
import openMenuButton from '../assets/icon-hamburger.svg';
import closeMenuButton from '../assets/icon-close.svg';
import { useState } from 'react';
import RequestInvite from './InviteBtn'

function Header() {
  const [renderNavButton, setRenderNavButton] = useState(true);
  const [renderNavigationMenu, setRenderNavigationMenu] = useState(true);

  const ShowHideNavigationMenu = () => {
    setRenderNavigationMenu(!renderNavigationMenu);
  }

  return (
    <header className='container_header'>
        <div className='container_header_container'>
            <div className='container_header_container_logocontainer'>
                <img className='container_header_container_logocontainer_logo' src="" alt="" />
            </div>

            {renderNavigationMenu && 
            <nav className='container_header_container_navigation'>
                <a className='container_header_container_navigation_a' href="#">Home</a>
                <a className='container_header_container_navigation_a' href="#">About</a>
                <a className='container_header_container_navigation_a' href="#">Contact</a>
                <a className='container_header_container_navigation_a' href="#">Blog</a>
                <a className='container_header_container_navigation_a' href="#">Careers</a>
            </nav>}

            {
               <div className='container_header_container_menubutton'>
                    {
                        renderNavButton ? (
                            <button
                              className='container_header_container_menubutton_btn' 
                              onClick={() => {setRenderNavButton(false); ShowHideNavigationMenu(); } }
                            >
                                <img src={openMenuButton} alt="" />
                            </button>
                        ) : (
                            <button
                               className='container_header_container_menubutton_btn'
                               onClick={() => {setRenderNavButton(true); ShowHideNavigationMenu(); } }
                            >
                                <img src={closeMenuButton} alt="" />
                            </button>
                        )
                    }
               </div>
            }
            
            <RequestInvite />
        </div>
    </header>
  )
}

export default Header