import React from 'react';
import RequestInvite from './InviteBtn';

import { AiFillFacebook, AiFillYoutube, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";


import bankWhiteLogo from '../assets/easybank-white-logo.png'

function Footer() {
  return (
    <section className='container_footer-section'>
      <div className='container_footer-section_social-media-column'>
        <div className='container_footer-section_social-media-column_logo'>
          <img src={bankWhiteLogo} alt="" />
        </div>
        <div className='container_footer-section_social-media-column_links'>
          <AiFillFacebook className='container_footer-section_social-media-column_links_icon'/>
          <AiFillYoutube className='container_footer-section_social-media-column_links_icon'/>
          <AiOutlineTwitter className='container_footer-section_social-media-column_links_icon'/>
          <BsPinterest className='container_footer-section_social-media-column_links_icon'/>
          <AiFillInstagram className='container_footer-section_social-media-column_links_icon'/>
        </div>
      </div>

      <div className='container_footer-section_links-column-container'>
        {/* Column left */}
        <div 
          className="container_footer-section_links-column-container_column-left"
        >
            
          <a 
            href="#"
            className="container_footer-section_links-column-container_column-left_link 
                       container_footer-section_links-column_column-container_link"
          >
            About Us
          </a>
          <a 
            href="#"
            className="container_footer-section_links-column-container_column-left_link 
                       container_footer-section_links-column_column-container_link"
          >
            Contact
          </a>
          <a
            href="#"
            className="container_footer-section_links-column-container_column-left_link 
                       container_footer-section_links-column_column-container_link"
          >
            Blog
          </a>

        </div>

        {/* Column right */}
        <div className="container_footer-section_links-column-container_column-right">

        <a 
            href="#"
            className="container_footer-section_links-column-container_column-right_link 
                       container_footer-section_links-column_column-container_link"
          >
            Careers
          </a>
          <a 
            href="#"
            className="container_footer-section_links-column-container_column-right_link 
                       container_footer-section_links-column_column-container_link"
          >
            Support
          </a>
          <a
            href="#"
            className="container_footer-section_links-column-container_column-right_link 
                       container_footer-section_links-column_column-container_link"
          >
            Privacy Policy
          </a>

        </div>
      </div>

      <div className='container_footer-section_invite-signature-container'>
        <RequestInvite className='container_footer-section_invite-signature-container_invite'/>
        <label className='container_footer-section_invite-signature-container_signature'>© Easybank. All Rights Reserved</label>
      </div>
    </section>
  )
}

export default Footer