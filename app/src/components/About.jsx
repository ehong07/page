import { ABOUT_TEXTS } from '../constants';
import './About.css';

function About() {
  return (
    <div className="container">
      <h3 className="text">About</h3>
      { ABOUT_TEXTS.map(text => (
        <div className="text-container">
          <p className="text">
            {text}
          </p>
        </div>
      )) }
    </div>
  );
}

export default About;
