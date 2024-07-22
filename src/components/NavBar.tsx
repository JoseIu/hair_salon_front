import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <header>
      <NavLink to="/">
        <h1>My App</h1>
      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
