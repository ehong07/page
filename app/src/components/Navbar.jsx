import './Navbar.css';

function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li className="name"><strong>Easak Hong</strong></li>
        </ul>
        <ul>
          <li><a href="#" className="contrast">Test</a></li>
          <li><a href="mailto:easakhong@gmail.com" className="contrast">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;
