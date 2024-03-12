import { PICO_URL, REACT_URL, VITE_URL } from '../constants';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="text-container">
          <p>
            <small>
              Copyright &copy; 2024 Easak Hong. Made in SF with&nbsp;
              <a target="_blank" href={PICO_URL} className="contrast">Pico</a>
              ,&nbsp;
              <a target="_blank" href={REACT_URL} className="contrast">React</a>
              , and&nbsp;
              <a target="_blank" href={VITE_URL} className="contrast">Vite</a>
              .
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
