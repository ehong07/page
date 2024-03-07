import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="container">
        <p>
          <small>
            Copyright &copy; 2024 Easak Hong. Made in SF with&nbsp;
            <a target="_blank" href="https://bun.sh/" className="contrast">Bun</a>
            ,&nbsp;
            <a target="_blank" href="https://picocss.com/" className="contrast">Pico</a>
            ,&nbsp;
            <a target="_blank" href="https://react.dev/" className="contrast">React</a>
            , and&nbsp;
            <a target="_blank" href="https://vitejs.dev/" className="contrast">Vite</a>
            .
          </small>
        </p>
      </div>
    </footer>
  )
}

export default Footer;
