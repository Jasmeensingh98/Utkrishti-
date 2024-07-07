import React from 'react';
import './about.css'

const AboutSection = () => {
  return (
    <section className="section" id="about">
      <script>
        {`
          window.embeddedChatbotConfig = {
            chatbotId: "8E4oLoWwTOXc8SAmSQy5z",
            domain: "www.chatbase.co"
          }
        `}
      </script>
      <script
        src="https://www.chatbase.co/embed.min.js"
        chatbotId="8E4oLoWwTOXc8SAmSQy5z"
        domain="www.chatbase.co"
        defer
      ></script>
      <div className="container">
        <div className="title reveal">
          <h1> About Us</h1>
        </div>
        <div className="content">
          <div className="article">
            <h3>
              Drama and Conflicts: One of the biggest sources of entertainment
              in Bigg Boss is the drama that unfolds among the housemates.
              Living in a confined space with people from different backgrounds
              often leads to conflicts, arguments, and heated discussions. These
              dramatic moments create suspense and keep viewers hooked to see
              how situations unfold.
            </h3>
            <br />
            <p>
              Task Performances: Bigg Boss regularly assigns tasks to the
              housemates that range from physical challenges to creative
              performances. Watching contestants compete, strategize, and
              showcase their talents in these tasks provides entertainment
              value.
              <br />
              <br />
              Friendships and Alliances: Viewers enjoy witnessing the
              development of friendships and alliances among the housemates.
              Bonds formed inside the house, moments of camaraderie, and
              support between contestants add a heartwarming aspect to the
              entertainment.
              <br />
              <br />
              Romantic Relationships: Romance and relationships between
              housemates also contribute to the entertainment factor. Viewers
              often become invested in watching budding romances or conflicts
              within couples in the house.
            </p>
            <br />
            <a href="https://en.wikipedia.org/wiki/Bigg_Boss">
              <button className="btn1">READ MORE</button>
            </a>
          </div>
        </div>
        <div className="image-section">
          {/* <img src="abt.jpg" alt="About Image" /> */}
          <img src="eye1.jpg" alt="Eye Image" />
        </div>
        <div className="social">
          <a href="https://www.facebook.com/groups/1650576969081923/">
            <i className="fab fa-facebook-f" style={{ color: 'white' }}></i>
          </a>
          <a href="https://twitter.com/intent/tweet">
            <i className="fab fa-twitter" style={{ color: 'white' }}></i>
          </a>
          <a href="https://www.instagram.com/">
            <i className="fab fa-instagram" style={{ color: 'white' }}></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
