import './App.css';

function App() {
  return (
    <div className="layout">
      <section className="hero">
        <div className="container">
          <h1 className="greeting">Hello world!</h1>
          <p className="text">My name is Easak and I&apos;m a full-stack engineer based in San Francisco.</p>
        </div>
      </section>
      <hr />
      <section className="about">
        <div className="container">
          <h3 className="title">About</h3>
          <p className="text">I like JavaScript</p>
        </div>
      </section>
      <hr />
      <section className="social">
        <div className="container">
          <h3 className="title">Connect</h3>
          <p className="text">Github: @ehong07</p>
          <p className="text">LinkedIn: @easakhong</p>
        </div>
      </section>
      <hr />
    </div>
  )
}

export default App
