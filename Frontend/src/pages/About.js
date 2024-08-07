import React from 'react';
import missionImage from '../assets/images/importance-of-mission-and-vision-17006585731.png'; 
import journeyImage from '../assets/images/journey-in-life.jpg'; 
import successImage1 from '../assets/images/lingesan.jpeg'; 
import successImage2 from '../assets/images/samantha.jpeg';
import trainerImage from '../assets/images/How-to-Become-a-Personal-Trainer-.jpg'; 
import nutritionistImage from '../assets/images/Nutritionist.jpeg';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1>About Us</h1>
        <div className="about-content">
          <section className="mission-section">
            <h2>Our Mission</h2>
            <img src={missionImage} alt="Mission" />
            <p>
              At GymFit, our mission is to empower individuals to achieve their fitness goals through personalized training programs and cutting-edge technology. Fitness is not just a destination but a journey, and we are here to support you every step of the way.
            </p>
          </section>
          <section className="journey-section">
            <h2>Our Journey</h2>
            <img src={journeyImage} alt="Journey" />
            <p>
              Since our inception, we have been committed to transforming lives through fitness. Our journey began with a small group of passionate trainers and has grown into a community of fitness enthusiasts dedicated to achieving their best selves.
            </p>
          </section>
          <section className="success-stories-section">
            <h2>Success Stories</h2>
            <div className="stories">
              <div className="story">
                <img src={successImage1} alt="Lingesan's Transformation" />
                <div>
                  <h3>Lingesan's Transformation</h3>
                  <p>
                    Lingesan joined GymFit a year ago and has gained 150 pounds. His dedication and hard work are a testament to what can be achieved with the right support and motivation.
                  </p>
                </div>
              </div>
              <div className="story">
                <img src={successImage2} alt="Jane's Journey" />
                <div>
                  <h3>Samantha's Journey</h3>
                  <p>
                    Samantha started her fitness journey with GymFit six months ago and has already seen incredible results in her strength and endurance.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="team-section">
            <h2>Meet the Team</h2>
            <div className="team-members">
              <div className="team-member">
                <img src={trainerImage} alt="Samantha - Head Trainer" />
                <div>
                  <h3>Vijay - Head Trainer</h3>
                  <p>
                    Vijay brings over 10 years of experience in the fitness industry and specializes in personalized training plans.
                  </p>
                </div>
              </div>
              <div className="team-member">
                <img src={nutritionistImage} alt="Michael - Nutritionist" />
                <div>
                  <h3>Shalini - Nutritionist</h3>
                  <p>
                    Shalini is our expert nutritionist, helping members achieve their goals through customized diet plans.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="join-section">
            <h2>Join Us</h2>
            <p>
              Ready to start your fitness journey? Join GymFit today and be a part of our community. Let's achieve your fitness goals together!
            </p>
            <button className="join-button">Join Now</button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
