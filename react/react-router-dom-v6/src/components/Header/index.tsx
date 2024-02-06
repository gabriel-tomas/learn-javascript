import { Link } from 'react-router-dom';

import './style.css';

export const Header = () => {
  return (
  <header>
    <div>
      <h1>Logo</h1>
    </div>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about/20" state={'Estado da home'}>About</Link></li>
        <li><Link to="/redirect">Redirect</Link></li>
      </ul>
    </nav>
  </header>)
}
