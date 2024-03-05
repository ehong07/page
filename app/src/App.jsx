import Picture from './components/Picture';
import Typewriter from './components/Typewriter';
import './App.css';

function App() {
  return (
    <div className="layout">
      <section className="section">
        <Picture />
        <Typewriter text="Hello, world!" delay={100} />
        <div className="container">
          <h5 className="text">My name is&nbsp;
            <span style={{ color: '#FFC72C' }}>Easak</span>
            &nbsp;and I&apos;m a full-stack engineer based in&nbsp;
            <span style={{ color: '#00A9E0' }}>San Francisco</span>.
          </h5>
        </div>
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
            <a target="_blank" href="https://github.com/ehong07">@ehong07</a>
          </p>
          <p className="text">
            LinkedIn:&nbsp;
            <a target="_blank" href="https://linkedin.com/in/easakhong">@easakhong</a>
          </p>
        </div>
      </section>
      <hr className="linebreak" />
    </div>
  )
}

export default App;
