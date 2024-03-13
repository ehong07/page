import { ABOUT_TEXTS } from '../constants';

function About() {
  return (
    <div className="container">
      <h3 className="text">About</h3>
      { ABOUT_TEXTS.map((text, i) => (
        <div className="text-container" key={i}>
          <p className="text">
            {text}
          </p>
        </div>
      )) }
    </div>
  );
}

export default About;
