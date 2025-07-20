import React from 'react';
import { Link } from 'react-router-dom';
import Themes from './Themes';

type TextProps = {
  textutils: string;
  setAlert: (alert: { type: string; msg: string }) => void;
};
let styles = {
  color: '#d2cfdeff',
  backgroundColor: '#2388ecff'
};
export default function Navbar({ textutils, setAlert }: TextProps) {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={styles}
    >
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/" >
          {textutils}
        </Link>
        <div className="collapse navbar-collapse" >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-decoration-none text-white mx-2" aria-current="page" to="/" >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-decoration-none text-white mx-2" aria-current="page" to="/about">
                About
              </Link>
            </li>
          </ul>
          <Themes setAlert={setAlert} />
        </div>
      </div>
    </nav>
  );
}
