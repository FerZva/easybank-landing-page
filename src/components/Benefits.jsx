import React from 'react';
import onlineBankingBenefitIcon from '../assets/icon-online.svg';
import budgetingBenefitIcon from '../assets/icon-budgeting.svg';
import onboardingBenefitIcon from '../assets/icon-onboarding.svg';
import apiBenefitIcon from '../assets/icon-api.svg';

const data = [
  {
    img: onlineBankingBenefitIcon,
    title: "Online Banking",
    description: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },

  {
    img: budgetingBenefitIcon,
    title: "Simple Budgeting",
    description: "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
  },

  {
    img: onboardingBenefitIcon,
    title: "Fast Onboarding",
    description: "We don't branches. Open your account in minutes online and start taking control of your finances right away.",
  },

  {
    img: apiBenefitIcon,
    title: "Open API",
    description: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
]

const Benefits = () => {
  return (
    <section className='container_benefits-section'>
      <div className='container_benefits-section_content-father-container'>
        <div className='container_benefits-section_content-father-container_son-container'>
          <h2 
            className='container_benefits-section_content-father-container_son-container_title'
          >
            Why choose Easybank?
          </h2>
          <p
            className='container_benefits-section_content-father-container_son-container_description'
          >
            We leverage Open Banking to turn account into your financial hub. Control your finances like never before.
          </p>
        </div>
      </div>

      <div className='container_benefits-section_benefit-content-father-container'>
        {data.map((data, index) => {
          const { img, title, description } = data;
          return (

            <div className='container_benefits-section_benefit-content-father-container_benefit-son-container'>
              
              <img
                src={ img }
                className=' container_benefits-section_benefit-content-father-container_benefit-son-container_icon'
                alt=''
              />

              <h3 
                className='container_benefits-section_benefit-content-father-container_benefit-son-container_title'
              > 
                { title } 
              </h3>

              <p 
                className='container_benefits-section_benefit-content-father-container_benefit-son-container_description'
              > 
                { description } 
              </p>

            </div>
          );
        })
        }
      </div>
    </section>
  );
};

export default Benefits