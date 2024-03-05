import './Navbar.css';

function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li className="name"><strong>Easak Hong</strong></li>
        </ul>
        <ul>
          <li>
            <a href="mailto:easakhong@gmail.com" className="contrast">
              <strong>Contact</strong>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;
