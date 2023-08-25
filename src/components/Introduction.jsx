import React from 'react';
import mockup from "../assets/image-mockups.png";
import RequestInvite from './InviteBtn'

function Introduction() {
  return (
    <section className='container_introduction'>
        <div className='container_introduction_content-father'>
          <div className='container_introduction_content-father_son-container'>
            <h2 className='container_introduction_content-father_son-container_title'>
              Next generation <br /> digital banking
            </h2>
            <p className='container_introduction_content-father_son-container_description'>
              Take your financial life online. Your Easybank account will be one-stop-shop for spending, saving, budgeting, investing, and much more.
            </p>
            <RequestInvite className='container_introduction_content-father_son-container_invite'/>
          </div>
        </div>
        <div className='container_introduction_mockup'>
          <img className='container_introduction_mockup_img' src={mockup} alt="" />
        </div>
    </section>
  )
}

export default Introduction