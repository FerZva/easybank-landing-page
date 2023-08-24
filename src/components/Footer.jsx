import React from 'react';
import RequestInvite from './InviteBtn';

function Footer() {
  return (
    <section className='container_footer-section'>
      <div className='container_footer-section_social-media-column'>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>

      <div className='container_footer-section_links-column-container'>
        {/* Column left */}
        <div 
          className="container_footer-section_links-column_column-container_column-left"
        >
            
          <a 
            href="#"
            className="container_footer-section_links-column_column-container_column-left_link 
                       container_footer-section_links-column_column-container_link"
          >
            About Us
          </a>
          <a 
            href="#"
            className="container_footer-section_links-column_column-container_column-left_link 
                       container_footer-section_links-column_column-container_link"
          >
            Contact
          </a>
          <a
            href="#"
            className="container_footer-section_links-column_column-container_column-left_link 
                       container_footer-section_links-column_column-container_link"
          >
            Blog
          </a>

        </div>

        {/* Column right */}
        <div className="container_footer-section_links-column_column-container_column-right">

        <a 
            href="#"
            className="container_footer-section_links-column_column-container_column-right_link 
                       container_footer-section_links-column_column-container_link"
          >
            Careers
          </a>
          <a 
            href="#"
            className="container_footer-section_links-column_column-container_column-right_link 
                       container_footer-section_links-column_column-container_link"
          >
            Support
          </a>
          <a
            href="#"
            className="container_footer-section_links-column_column-container_column-right_link 
                       container_footer-section_links-column_column-container_link"
          >
            Privacy Policy
          </a>

        </div>
      </div>

      <div className='container_footer-section_invite-signature-container'>
        <RequestInvite/>
        <label>© Easybank. All Rights Reserved</label>
      </div>
    </section>
  )
}

export default Footer