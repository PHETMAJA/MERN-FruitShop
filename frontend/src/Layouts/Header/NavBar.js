import '../../Assets/Styles/NavBar.css';

import { NavLink } from 'react-router-dom';
export default function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar_container container">
        <div className="navbar_logo">PHETSHOP</div>

        <div className="navbar_menu">
          <ul className="navbar_list">
            <li
              className={({ isActive }) =>
                isActive ? 'navbar_item active' : 'navbar_item'
              }
            >
              <NavLink to="/" className="navbar_link">
                <i className="bx bx-store navbar_icon"></i>
                <span>Home</span>
              </NavLink>
            </li>
            <li
              className={({ isActive }) =>
                isActive ? 'navbar_item active' : 'navbar_item'
              }
            >
              <NavLink to="/search" className="navbar_link">
                <i className="bx bx-search navbar_icon"></i>
                <span>Search</span>
              </NavLink>
            </li>
            <li
              className={({ isActive }) =>
                isActive ? 'navbar_item active' : 'navbar_item'
              }
            >
              <NavLink to="/list" className="navbar_link">
                <i className="bx bx-list-ul navbar_icon"></i>
                <span>List</span>
              </NavLink>
            </li>
            <li
              className={({ isActive }) =>
                isActive ? 'navbar_item active' : 'navbar_item'
              }
            >
              <NavLink to="/profile" className="navbar_link">
                <i className="bx bx-user navbar_icon"></i>
                <span>Profile</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
