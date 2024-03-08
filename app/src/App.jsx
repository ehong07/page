import Picture from './components/Picture';
import Typewriter from './components/Typewriter';
import Introduction from './components/Introduction';
import About from './components/About';
import Connect from './components/Connect';
import { TYPEWRITER_TEXTS } from './constants';
import './App.css';

function App() {
  return (
    <div className="layout">
      <section className="section">
        <Picture />
        <Typewriter words={TYPEWRITER_TEXTS} />
        <Introduction />
      </section>
      <hr className="linebreak" />
      <section className="section">
        <About />
      </section>
      <hr className="linebreak" />
      <section className="section">
        <Connect />
      </section>
      <hr className="linebreak" />
    </div>
  );
}

export default App;
