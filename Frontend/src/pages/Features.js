import React from 'react';
import featureImage1 from '../assets/images/buy-now-img.jpg';
import featureImage2 from '../assets/images/images.png';
import featureImage3 from '../assets/images/expert (1).png';
import './Features.css';

const Features = () => {
  return (
    <div className="features-page">
      <div className="features-container">
        <h1>Our Features</h1>
        <div className="features-list">
          <div className="feature-item">
            <img src={featureImage1} alt="Feature 1" />
            <div>
              <h3>Personalized Training Plans</h3>
              <p>
                Our personalized training plans are designed to meet your specific fitness goals and adapt to your progress over time.
              </p>
            </div>
          </div>
          <div className="feature-item">
            <img src={featureImage2} alt="Feature 2" />
            <div>
              <h3>Progress Tracking</h3>
              <p>
                Track your fitness progress with our intuitive dashboard, including metrics like workout history, body measurements, and more.
              </p>
            </div>
          <div className="feature-item">
            <img src={featureImage3} alt="Feature 3" />
            <div>
              <h3>Expert Guidance</h3>
              <p>
                Get advice and tips from our team of certified fitness trainers to optimize your workouts and achieve better results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Features;
