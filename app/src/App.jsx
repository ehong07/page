import Picture from './components/Picture';
import Typewriter from './components/Typewriter';
import Introduction from './components/Introduction';
import './App.css';

function App() {
  return (
    <div className="layout">
      <section className="section">
        <Picture />
        <Typewriter text="Hello, world!" delay={100} />
        <Introduction />
      </section>
      <hr className="linebreak" />
      <section className="section">
        <div className="container">
          <h3 className="text">About</h3>
          <p className="text">I like JavaScript</p>
        </div>
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
  )
}

export default App;
