import React from 'react';
import ToggleSwitch from './Switch';
import { Link } from 'react-router-dom';

type TextProps = {
  textutils: string;
  isChecked: boolean;
  handleToggle: () => void;
};

export default function Navbar({ textutils, isChecked, handleToggle }: TextProps) {
  const style = () => {
    return isChecked
      ? { backgroundColor: '#d6dee7ff', color: '#061c33ff' }
      : { backgroundColor: '#06305aff', color: '#f4ebebff' };
  };
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={style()}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={style()}>
          {textutils}
        </Link>
        <div className="collapse navbar-collapse" >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-decoration-none mx-2" aria-current="page" to="/"  style={style()}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-decoration-none mx-2" aria-current="page" to="/about"  style={style()}>
                About
              </Link>
            </li>
          </ul>
          <ToggleSwitch isChecked={isChecked} handleToggle={handleToggle} />
        </div>
      </div>
    </nav>
  );
}
