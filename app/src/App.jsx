import Picture from './components/Picture';
import './App.css';

function App() {
  return (
    <div className="layout">
      <section className="section">
        <Picture />
        <div className="container">
          <h1 className="greeting">Hello, world!</h1>
        </div>
        <div className="container">
          <p className="text">My name is Easak and I&apos;m a full-stack engineer based in San Francisco.</p>
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
