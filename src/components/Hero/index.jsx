import { Link } from 'react-router-dom';

import Food from '../../assets/restaurant-food.jpg';

import './hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container grid">
        <div className="heroInformation">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, 
            focused on traditional recipes served with a modern twist.
          </p>
          <Link className="buttonPrimary" to="/bookings">
            Reserve a table
          </Link>
        </div>
        <img 
          className="heroImage" 
          src={Food} 
          alt="Restaurant food" 
        />
      </div>
    </section>
  );
};

export default Hero;
