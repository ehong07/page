import './App.css';

function App() {
  return (
    <div className="layout">
      <section className="hero">
        <div className="container">
          <h1 className="greeting">Hello world!</h1>
          <p>My name is Easak and I&apos;m a full-stack engineer based in San Francisco.</p>
        </div>
      </section>
      <hr />
      <section className="about">
        <div className="container">
          <h3>About</h3>
          <p>I like JavaScript</p>
        </div>
      </section>
      <hr />
      <section className="social">
        <div className="container">
          <h3>Connect</h3>
          <p>Github:</p>
          <p>LinkedIn:</p>
        </div>
      </section>
      <hr />
    </div>
  )
}

export default App
