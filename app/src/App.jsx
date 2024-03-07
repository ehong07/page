import Picture from './components/Picture';
import Typewriter from './components/Typewriter';
import Introduction from './components/Introduction';
import About from './components/About';
import './App.css';

const TEXTS = [
  'Hello, world!',
  'Welcome to my small slice of the internet pie!',
  'Thanks for stopping by!',
];

function App() {
  return (
    <div className="layout">
      <section className="section">
        <Picture />
        <Typewriter words={TEXTS} />
        <Introduction />
      </section>
      <hr className="linebreak" />
      <section className="section">
        <About />
      </section>
      <hr className="linebreak" />
      <section className="section">
        <div className="container">
          <h3 className="text">Connect</h3>
          <p className="text">
            GitHub:&nbsp;
            <a target="_blank" href="https://github.com/ehong07" className="contrast">@ehong07</a>
          </p>
          <p className="text">
            LinkedIn:&nbsp;
            <a target="_blank" href="https://linkedin.com/in/easakhong" className="contrast">@easakhong</a>
          </p>
        </div>
      </section>
      <hr className="linebreak" />
    </div>
  );
}

export default App;
