import React from 'react';

import currencyImage from '../assets/image-currency.jpg';
import restaurantImage from '../assets/image-restaurant.jpg';
import planeImage from '../assets/image-plane.jpg';
import confetiImage from '../assets/image-confetti.jpg';

const data = 
[

  {
    image: currencyImage,
    author: "By Claire Robinson",
    title: "Receive money in any currency with no fees",
    description: "The world is getting smaller and we're becoming more mobile. So why should you be force to only receive money in a single..."
  },

  {
    image: restaurantImage,
    author: "By Wilson Hutton",
    title: "Treat yourself without worrying about money",
    description: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you..."
  },

  {
    image: planeImage,
    author: "By Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    description: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you..."
  },

  {
    image: confetiImage,
    author: "By Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    description: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site..."
  },

]

const Articles = () => {
  return (
    <section className='container_articles-section'>
      <div className='container_articles-section_title-container'>
        <div className=''>
          <h2 
            className='container_articles-section_title-container_title'
          >
            Latest Articles
          </h2>
        </div>

        <div className='container_articles-section_article-container'>
          {
            data.map((data, index) => {
              const { image, author, title, description } = data;
              return (
                <div className='container_articles-section_article-container_article-card'>
                  
                  <img
                    src={image}
                    className='container_articles-section_article-container_article-card_image' 
                    alt=''
                  />

                  <div className='container_articles-section_article-container_article-card_content'>
                    <span
                      className='container_articles-section_article-container_article-card_content_author'
                    > 
                      { author } 
                    </span>

                    <h3
                      className='container_articles-section_article-container_article-card_content_title'
                    > 
                      { title } 
                    </h3>

                    <p
                      className='container_articles-section_article-container_article-card_content_description'
                    > 
                      { description } 
                    </p>
                  </div>
                  
                </div>
              );
            })
          }
        </div>
      </div>
    </section>
  );
};

export default Articles